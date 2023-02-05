import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Document from "./Pages/Document";
import { HashRouter,Routes , Route } from 'react-router-dom';
import OptionalDesign from "./Pages/OptionalDesign";
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    /*
    <div className="container">
      <div className="row">
        <div>
          
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>
      <p>{greetMsg}</p>
    </div>
  */
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Document />} />
          <Route path="/design" element={<OptionalDesign />} />
        </Routes>
    </HashRouter>
    </>
  );
}

export default App;
