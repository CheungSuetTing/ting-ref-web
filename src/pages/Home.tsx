import { Button } from "@/components/ui/button";
import SearchIcon from "../assets/search.svg?react";
import "../App.css";
import img1Url from "../assets/img1.jpg";
import img2Url from "../assets/img2.jpg";
import img3Url from "../assets/img3.jpg";
import { HouseCard, IHouseCardData } from "@/components/HouseCard";
import { HomeCard, IHomeCardData } from "@/components/HomeCard";
import { CountryCard, ICountryCardData } from "@/components/CountryCard";

function Home() {
  const houseCardDataList: IHouseCardData[] = [
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
  const homeCardDataList: IHomeCardData[] = [
    {
      imgUrl: img1Url,
      title: "Buy a home",
      descriptions: "Find properties with a rich photo experience from trustworthy sellers verified by Vivo Latam.",
      buttonText: "Browse homes",
    },
    {
      imgUrl: img2Url,
      title: "Rent a home",
      descriptions: "Locate medium and long-term property rentals from our verified rental network.",
      buttonText: "Find rentals",
    },
    {
      imgUrl: img3Url,
      title: "Sell a home",
      descriptions: "We can help you sell your home quickly. We have a large network of local and international buyers.",
      buttonText: "Add listing",
    },
  ];
  const countryCardDataList: ICountryCardData[] = [
    {
      imgUrl: img1Url,
      title: "San Salvador",
      count: 32,
    },
    {
      imgUrl: img1Url,
      title: "Santa Tecla",
      count: 22,
    },
    {
      imgUrl: img1Url,
      title: "Colonia Escalón",
      count: 13,
    },
    {
      imgUrl: img1Url,
      title: "Nuevo Cuscatlán",
      count: 12,
    },
    {
      imgUrl: img1Url,
      title: "Antiguo Cuscatlán",
      count: 12,
    },
    {
      imgUrl: img1Url,
      title: "Costa del Sol Beach",
      count: 8,
    },
    {
      imgUrl: img1Url,
      title: "Santa Elena",
      count: 4,
    },
    {
      imgUrl: img1Url,
      title: "Colonia San Benito",
      count: 3,
    },
    {
      imgUrl: img1Url,
      title: "La Libertad",
      count: 3,
    },
  ];

  // https://www.vivolatam.com/en
  return (
    <div className="main container mx-auto flex flex-col gap-40 py-[80px]">
      <div className="flex">
        <div className="w-1/2 pr-[30px]">
          <div className="font-medium text-7xl/[1.2] text-textWhite pb-[40px]">El Salvador homes, apartments, land & more</div>
          <div className="text-slate-500 pb-[40px]">Vivo Latam makes buying and selling real estate easy.</div>
          <Button size="lg" className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 animate-gradient">
            <SearchIcon className="!fill-textWhite" />
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
        <div className="font-medium text-4xl/[1.2] text-textWhite pb-3">Featured properties in El Salvador</div>
        <div className="text-md text-slate-500 pb-12">Search recently listed properties for sale and rent</div>
        <div className="grid grid-cols-4 gap-8">
          {houseCardDataList.map((data) => (
            <HouseCard cardData={data} />
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <Button size="lg">
            <SearchIcon className="!fill-textWhite" />
            Search Property
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {homeCardDataList.map((data) => (
          <HomeCard cardData={data} />
        ))}
      </div>
      <div className="flex flex-col gap-14 px-16 py-12 bg-slate-950">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-4xl text-textWhite">Browse by region</div>
          <div className="text-md text-slate-500">Search property listings by department in El Salvador</div>
        </div>
        <div className="grid grid-cols-5 gap-8">
          {countryCardDataList.map((data) => (
            <CountryCard cardData={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
