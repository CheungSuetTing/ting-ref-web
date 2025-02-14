import { Button } from "@/components/ui/button";
import SearchIcon from "../assets/search.svg?react";
import "../App.css";
import img1Url from "../assets/img1.jpg";
import img2Url from "../assets/img2.jpg";
import img3Url from "../assets/img3.jpg";
import { HouseCard, ICardData } from "@/components/HouseCard";

function Home() {
  const dataList: ICardData[] = [
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
    {
      imgUrl: img3Url,
      price: "1,200,000",
      m2: 120,
      v2: 120,
      br: 2,
      ba: 2,
      descriptions: "Beach house for sale in Costa del Sol Beach",
      id: "08A2K2",
    },
  ];
  // https://www.vivolatam.com/en
  return (
    <div className="main container mx-auto flex flex-col gap-40 py-[80px]">
      <div className="flex">
        <div className="w-1/2 pr-[30px]">
          <div className="font-medium text-7xl/[1.2] text-[#f8fafc] pb-[40px]">El Salvador homes, apartments, land & more</div>
          <div className="text-slate-500 pb-[40px]">Vivo Latam makes buying and selling real estate easy.</div>
          <Button size="lg" className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 animate-gradient">
            <SearchIcon className="!fill-[#f8fafc]" />
            Search Property
          </Button>
        </div>
        <div className="flex w-1/2 gap-6 h-fit items-center">
          <div className="flex flex-col gap-6 w-1/2">
            <img src={img3Url} className="rounded-3xl"></img>
            <img src={img2Url} className="rounded-3xl"></img>
          </div>
          <div className="w-1/2">
            <img src={img1Url} className="rounded-3xl"></img>
          </div>
        </div>
      </div>
      <div>
        <div className="font-medium text-4xl/[1.2] text-[#f8fafc] pb-3">Featured properties in El Salvador</div>
        <div className="font-regular text-md text-slate-500 pb-12">Search recently listed properties for sale and rent</div>
        <div className="grid grid-cols-4 gap-8">
          {dataList.map((data) => (
            <HouseCard cardData={data} />
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <Button size="lg">
            <SearchIcon className="!fill-[#f8fafc]" />
            Search Property
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
