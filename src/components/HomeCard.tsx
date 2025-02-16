import img1Url from "../assets/img1.jpg";
import { Button } from "./ui/button";

export interface IHomeCardData {
  imgUrl: string;
  title: string;
  descriptions: string;
  buttonText: string;
}

interface IHomeCardProps {
  cardData: IHomeCardData;
}

export const HomeCard: React.FC<IHomeCardProps> = ({cardData}: IHomeCardProps) => {
  return (
    <div className="bg-slate-800 p-12 flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <div className="font-bold text-2xl text-textWhite">{cardData.title}</div>
        <img src={cardData.imgUrl} className="object-cover w-full h-40"></img>
        <div className=" text-slate-400">{cardData.descriptions}</div>
      </div>
      <Button variant={"outlineDark"}>{cardData.buttonText}</Button>
    </div>
  );
};
