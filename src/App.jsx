// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./compents/Header.jsx";
import MainBanner from "./compents/MainBanner.jsx";
import MiniGames from "./compents/MiniGames.jsx";
import PhoneList from "./compents/PhoneList.jsx";

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
