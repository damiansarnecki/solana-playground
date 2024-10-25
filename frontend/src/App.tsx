import "./App.css";
import { ConnectedAs } from "./components/ConnectedAs/connectedAs";
import { CenterContainer } from "./components/layout/CenterContainer";
import { Topbar } from "./components/Topbar";
import { SolanaConnectionProvider } from "./providers/SolanaConnectionProvider";

function App() {
  return (
    <SolanaConnectionProvider>
      <>
        <Topbar />
        <CenterContainer>
          <div className="my-4">
            <ConnectedAs />
          </div>
        </CenterContainer>
      </>
    </SolanaConnectionProvider>
  );
}

export default App;
