import { useWallet } from "@solana/wallet-adapter-react";

export const ConnectedAs = () => {

    const {connected, publicKey, connecting} = useWallet();


    if(connected && publicKey) {
        return <>Connected as: {publicKey.toString()}</>
    } else if(connecting) {
        return <>Connecting...</>
    } else {
        return <>Not connected.</>
    }
}