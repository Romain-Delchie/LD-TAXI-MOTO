import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Securite from "./components/Securite/Securite";
import Tarifs from "./components/Tarifs/Tarifs";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Services />
      <Securite />
      <Tarifs />
      <Reservation />
    </div>
  );
}

export default App;
