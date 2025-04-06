import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import img3Url from "../assets/img3.jpg";

export interface IBlogListData {}

interface IBlogListProps {}

export const BlogList: React.FC<IBlogListProps> = ({}: IBlogListProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-medium text-textWhite">
            Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish
          </div>
          <div className="text-sm text-slate-400">
            From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered
            Worldwide
          </div>
        </div>
        <div>
          <Badge variant={"outline"}>El Salvador</Badge>
        </div>
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm text-textWhite">Sam Martinez</div>
          <div className="text-sm text-slate-400">2024年11月30日</div>
        </div>
      </div>
      <img src={img3Url} className="object-cover w-40 h-40"></img>
    </div>
  );
};
