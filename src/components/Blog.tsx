import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export interface IBlogData {
  title: string;
  descriptions?: string;
  badgeList?: string[];
  avatar: string;
  name: string;
  imgUrl?: string;
}

interface IBlogProps {
  cardData: IBlogData;
  mode: "POPULAR_POST" | "BLOG";
}

export const Blog: React.FC<IBlogProps> = ({ cardData, mode }: IBlogProps) => {
  return (
    <div className={`flex gap-6 ${mode === "POPULAR_POST" ? "bg-slate-850 border-b last:border-b-0 border-slate-700 p-8" : ""}`}>
      <div className={`flex flex-col ${mode === "POPULAR_POST" ? "gap-2" : "gap-6"}`}>
        <div className="flex flex-col gap-2">
          <div className="text-lg font-medium text-textWhite">{cardData.title}</div>
          {cardData.descriptions && <div className="text-sm text-slate-400">{cardData.descriptions}</div>}
        </div>
        {cardData.badgeList && cardData.badgeList.length > 0 && (
          <div className="flex gap-2">
            {cardData.badgeList.map((badge: string) => (
              <Badge variant={"outline"}>{badge}</Badge>
            ))}
          </div>
        )}

        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src={cardData.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm text-textWhite">{cardData.name}</div>
          <div className="text-sm text-slate-400">2024年11月30日</div>
        </div>
      </div>
      {cardData.imgUrl && <img src={cardData.imgUrl} className="object-cover w-80 h-40 rounded-3xl"></img>}
    </div>
  );
};
