import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container1 from "./containers/Container1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <div className="Conteudo">
        <Container1 />
      </div>
    </main>
  );
}

export default App;
