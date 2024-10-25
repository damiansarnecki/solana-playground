import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { CenterContainer } from "../layout/CenterContainer";

export const Topbar = () => {
  return <div className="bg-[#202020] py-4 flex justify-center">
    <CenterContainer>
      <div className="justify-between flex items-center">
        <h1 className="text-[white] font-bold text-[24px]">Solana App</h1>
        <WalletMultiButton />
      </div>
    </CenterContainer>
  </div>;
};
