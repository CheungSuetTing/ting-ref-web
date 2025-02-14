import * as React from "react";
import img3Url from "../assets/img3.jpg";
export interface ICardData {
  imgUrl: string;
  price: string;
  m2: number;
  v2: number;
  br: number;
  ba: number;
  descriptions: string;
  id: string;
}
interface IHouseCardProps {
  cardData: ICardData;
}

export const HouseCard: React.FC<IHouseCardProps> = ({cardData: data}: IHouseCardProps) => {
  return (
    <div className="border border-slate-700">
      <img src={img3Url} className="w-full"></img>
      <div className="p-4">
        <div className="font-medium text-lg text-[#60f5fa]">${data.price}</div>
        <div className="flex gap-4 text-slate-400">
          <div className="flex gap-1">
            <b>{data.m2}</b> <div>m2</div>
          </div>
          <div className="flex gap-1">
            <b>{data.v2}</b> <div>v2</div>
          </div>
          <div className="flex gap-1">
            <b>{data.br}</b> <div>br</div>
          </div>
          <div className="flex gap-1">
            <b>{data.ba}</b> <div>ba</div>
          </div>
        </div>
        <div className="text-[#f8fafc] pb-4">{data.descriptions}</div>
        <div className="text-slate-400">ID {data.id}</div>
      </div>
    </div>
  );
};
