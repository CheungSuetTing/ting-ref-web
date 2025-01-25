import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function App() {
  // https://www.vivolatam.com/en
  return (
    <div className="grid-container">
      <div className="header">
        <div>
          <img className="logo" src="/logo.png" width={76}></img>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex gap-1 hover:cursor-pointer">
            Buy
            <img src="/Icon/arrow.svg" width={16}></img>
          </div>
          <div className="flex gap-1 hover:cursor-pointer">
            Rent
            <img src="/Icon/arrow.svg" width={16}></img>
          </div>
          <div className="flex gap-1 hover:cursor-pointer">
            Sell
            <img src="/Icon/arrow.svg" width={16}></img>
          </div>
          <div className="hover:cursor-pointer">
            <img src="/Icon/profile.svg" width={36}></img>
          </div>
        </div>
      </div>

      <div className="main">main</div>
      <div className="footer">
        <div className="font-bold pb-4">About Vivo Latam recommendations</div>
        <div className="max-w-[768px] pb-6">
          Recommendations are based on your location and search activity, such as the real estate properties you've viewed and saved and the
          filters you've used. We use this information to bring similar real estate properties to your attention.
        </div>
        <div className="flex gap-8 pb-6">
          <Select>
            <SelectTrigger className="min-w-[180px]">
              <SelectValue placeholder="Real Estate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">San Salvador real estate</SelectItem>
              <SelectItem value="dark">Colonia San Benito real estate</SelectItem>
              <SelectItem value="system">Antiguo Cuscatlán real estate</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="min-w-[180px]">
              <SelectValue placeholder="Rentals" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">San Salvador apartments for rent</SelectItem>
              <SelectItem value="dark">Colonia San Benito apartments for rent</SelectItem>
              <SelectItem value="system">Antiguo Cuscatlán apartments for rent</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="min-w-[180px]">
              <SelectValue placeholder="Homes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">San Salvador homes</SelectItem>
              <SelectItem value="dark">Colonia San Benito homes</SelectItem>
              <SelectItem value="system">Antiguo Cuscatlán homes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <hr className="w-[30%]"></hr>
        <div className="w-full flex justify-between self-start pt-10">
          <img className="logo" src="/logo.png" width={76}></img>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex gap-8">
              <div>About</div> <div>Blog</div> <div>Contact</div> <div>Legal</div>
            </div>
            <div className="flex gap-4">
              <img src="/Icon/facebook.svg" width={24}></img>
              <img src="/Icon/x.svg" width={24}></img>
              <img src="/Icon/ig.svg" width={24}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
