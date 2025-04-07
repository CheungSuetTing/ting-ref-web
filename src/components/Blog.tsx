import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";


export interface IBlogData {
  title: string;
  descriptions: string;
  badgeList: string;
  avatar: string;
  name: string;
  imgUrl: string;
}

interface IBlogProps {
  cardData: IBlogData;
}

export const Blog: React.FC<IBlogProps> = ({cardData}: IBlogProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-medium text-textWhite">{cardData.title}</div>
          <div className="text-sm text-slate-400">
            {cardData.descriptions}
          </div>
        </div>
        <div>
          <Badge variant={"outline"}>{cardData.badgeList}</Badge>
        </div>
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src={cardData.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm text-textWhite">{cardData.name}</div>
          <div className="text-sm text-slate-400">2024年11月30日</div>
        </div>
      </div>
      <img src={cardData.imgUrl} className="object-cover w-80 h-40 rounded-3xl"></img>
    </div>
  );
};
