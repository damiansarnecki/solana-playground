import { useWallet } from "@solana/wallet-adapter-react"

export const UserAddress = () => {

    const {publicKey} = useWallet()

    return <div>{publicKey?.toString()}</div>
}