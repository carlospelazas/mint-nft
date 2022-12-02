import "./App.css";
import { useState } from "react";
import MainMint from "./MainMint";
import NavBar from "./NavBar";
import backgrounImage from "./assets/background/parallax-bg.gif";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-background">
        <img src={backgrounImage} className="h-full w-full"></img>
      </div>
    </div>
  );
}

export default App;
