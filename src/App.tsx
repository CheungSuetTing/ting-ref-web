import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  // https://www.vivolatam.com/en
  return (
    <div className="grid-container">
      <div className="header">
        <div>
          <img className="logo" src="/cover.png" width={76}></img>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex gap-1 hover:cursor-pointer">
            buy
            <img src="/Icon/arrow.svg" width={16}></img>
          </div>
          <div className="flex gap-1 hover:cursor-pointer">
            rent
            <img src="/Icon/arrow.svg" width={16}></img>
          </div>
          <div className="flex gap-1 hover:cursor-pointer">
            sell
            <img src="/Icon/arrow.svg" width={16}></img>
          </div>
          <div className="hover:cursor-pointer">
            <img src="/Icon/profile.svg" width={36}></img>
          </div>
        </div>
      </div>


      <div className="main">main</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
