import "./App.css";
import { CenterContainer } from "./components/layout/CenterContainer";
import { Topbar } from "./components/Topbar";
import { UserMini } from "./components/UserMini";
import { UserBalanceProvider } from "./providers/BalanceProvider";
import { SolanaConnectionProvider } from "./providers/SolanaConnectionProvider";

function App() {
  return (
    <SolanaConnectionProvider>
      <UserBalanceProvider>
        <>
          <Topbar />
          <CenterContainer>
            <div className="my-4">
              <UserMini />
            </div>
          </CenterContainer>
        </>
      </UserBalanceProvider>
    </SolanaConnectionProvider>
  );
}

export default App;
