// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./compents/Header";
import MainBanner from "./compents/MainBanner";
import MiniGames from "./compents/MiniGames";
import PhoneList from "./compents/PhoneList";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <MainBanner />
      <MiniGames />
      <PhoneList />
    </div>
  );
}

export default App;
