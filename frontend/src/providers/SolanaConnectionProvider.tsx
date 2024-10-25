import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    ConnectionProvider as WalletConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import React, { createContext, useContext, useMemo } from "react";

import '@solana/wallet-adapter-react-ui/styles.css';

interface SolanaConnectionProviderProps {
  children: React.ReactNode;
  network?: WalletAdapterNetwork;
}

const ConnectionContext = createContext<Connection | undefined>(undefined);

export const SolanaConnectionProvider: React.FC<SolanaConnectionProviderProps> = ({
  children,
  network = WalletAdapterNetwork.Devnet,
}) => {
  const connection = useMemo(() => new Connection(clusterApiUrl(network), 'confirmed'), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <WalletConnectionProvider endpoint={clusterApiUrl(network)}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ConnectionContext.Provider value={connection}>
            {children}
          </ConnectionContext.Provider>
        </WalletModalProvider>
      </WalletProvider>
    </WalletConnectionProvider>
  );
};

export const useConnection = (): Connection => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error("useConnection must be used within a SolanaConnectionProvider");
  }
  return context;
};