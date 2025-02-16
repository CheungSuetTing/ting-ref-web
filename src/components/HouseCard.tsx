import * as React from "react";
export interface IHouseCardData {
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
  cardData: IHouseCardData;
}

export const HouseCard: React.FC<IHouseCardProps> = ({cardData}: IHouseCardProps) => {
  return (
    <div className="border border-slate-700">
      <img src={cardData.imgUrl} className="object-cover w-full h-40"></img>
      <div className="p-4">
        <div className="font-medium text-lg text-[#60f5fa]">${cardData.price}</div>
        <div className="flex gap-4 text-slate-400">
          <div className="flex gap-1">
            <b>{cardData.m2}</b> <div>m2</div>
          </div>
          <div className="flex gap-1">
            <b>{cardData.v2}</b> <div>v2</div>
          </div>
          <div className="flex gap-1">
            <b>{cardData.br}</b> <div>br</div>
          </div>
          <div className="flex gap-1">
            <b>{cardData.ba}</b> <div>ba</div>
          </div>
        </div>
        <div className="text-[#f8fafc] pb-4">{cardData.descriptions}</div>
        <div className="text-slate-400">ID {cardData.id}</div>
      </div>
    </div>
  );
};
