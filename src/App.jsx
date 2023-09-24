import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container1 from "./containers/Container1";
import Container2 from "./containers/Container2";
import Container3 from "./containers/Container3";
import Container4 from "./containers/Container4";
import Container5 from "./containers/Container5";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <div className="Conteudo">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
    </main>
  );
}

export default App;
