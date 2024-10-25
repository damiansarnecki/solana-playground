import { useWallet } from "@solana/wallet-adapter-react";
import { useUserBalance } from "../../providers/BalanceProvider";

export const UserMini = () => {
  const { connected, publicKey, connecting } = useWallet();
  const { balance } = useUserBalance();

  if (connected && publicKey) {
    return (
      <div className="flex flex-col">
        <b>Connected as: {publicKey.toString()}</b>
        <>{balance} SOL</>
      </div>
    );
  } else if (connecting) {
    return <>Connecting...</>;
  } else {
    return <>Not connected.</>;
  }
};
