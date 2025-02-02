import "./App.css";
import logoUrl from "./assets/logo.png";
import igUrl from "./assets/ig.svg";
import arrowUrl from "./assets/arrow.svg";
import facebookUrl from "./assets/facebook.svg";
import profileUrl from "./assets/profile.svg";
import xUrl from "./assets/x.svg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Outlet } from "react-router";

function Layout() {
  // https://www.vivolatam.com/en
  return (
    <div className="grid-container">
      <div className="header container mx-auto">
        <div>
          <img className="logo" src={logoUrl} width={76}></img>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex gap-1 hover:cursor-pointer">
            Buy
            <img src={arrowUrl} width={16}></img>
          </div>
          <div className="flex gap-1 hover:cursor-pointer">
            Rent
            <img src={arrowUrl} width={16}></img>
          </div>
          <div className="flex gap-1 hover:cursor-pointer">
            Sell
            <img src={arrowUrl} width={16}></img>
          </div>
          <div className="hover:cursor-pointer">
            <img src={profileUrl} width={36}></img>
          </div>
        </div>
      </div>

<Outlet></Outlet>
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
        <hr className="w-[20%]"></hr>
        <div className="w-full flex justify-between self-start pt-10">
          <div>
            <img className="logo" src={logoUrl} width={120}></img>
          </div>
          <div className="flex flex-col gap-6 items-end">
            <div className="text-sm flex gap-8">
              <div>About</div> <div>Blog</div> <div>Contact</div> <div>Legal</div>
            </div>
            <div className="flex gap-4">
              <img src={facebookUrl} width={20}></img>
              <img src={xUrl} width={20}></img>
              <img src={igUrl} width={20}></img>
            </div>
            <div className="text-sm flex flex-col gap-2 items-end">
              <div>© 2025 Vivo Latam SAS de CV</div>
              <div>© 2025 Vivo Latam LLC</div>
              <div>Vivo Latam Bienes Raices El Salvador</div>
              <div>+503 7653 1000</div>
              <div>hola@vivolatam.com</div>
              <div>Av. Las Magnolias 206</div>
              <div>Colonia San Benito</div>
              <div>San Salvador, El Salvador</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
