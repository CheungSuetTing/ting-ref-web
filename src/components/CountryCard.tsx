import * as React from "react";
import img1Url from "../assets/img1.jpg";

export interface ICountryCardData {
  imgUrl: string;
  title: string;
  count: number;
}

interface ICountryCardProps {
  cardData: ICountryCardData;
}

export const CountryCard: React.FC<ICountryCardProps> = ({ cardData }: ICountryCardProps) => {
  return (
    <div>
      <img src={cardData.imgUrl} className="object-cover w-full h-80 pb-3"></img>
      <div className="text-lg font-semibold text-textWhite">{cardData.title}</div>
      <div className="text-sm text-slate-400">{cardData.count} properties</div>
    </div>
  );
};
