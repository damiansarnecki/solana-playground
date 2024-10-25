import { useWallet } from "@solana/wallet-adapter-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useConnection } from "./SolanaConnectionProvider";

interface UserBalanceContextProps {
  balance: number | null;
  refreshBalance: () => void; 
}

const UserBalanceContext = createContext<UserBalanceContextProps | undefined>(undefined);

export const UserBalanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { publicKey, connected } = useWallet();
  const connection = useConnection();
  const [balance, setBalance] = useState<number | null>(null);

  const fetchBalance = async () => {
    if (publicKey) {
      try {
        const balanceLamports = await connection.getBalance(publicKey);
        setBalance(balanceLamports / 1e9);
      } catch (error) {
        console.error("Balance fetching error:", error);
        setBalance(null);
      }
    } else {
      setBalance(null);
    }
  };

  useEffect(() => {
    if (connected) {
      fetchBalance();
    }
  }, [connected, publicKey, connection]);

  return (
    <UserBalanceContext.Provider value={{ balance, refreshBalance: fetchBalance }}>
      {children}
    </UserBalanceContext.Provider>
  );
};

export const useUserBalance = (): UserBalanceContextProps => {
  const context = useContext(UserBalanceContext);
  if (!context) {
    throw new Error("useUserBalance must be used within a UserBalanceProvider");
  }
  return context;
};