import { Badge } from "./ui/badge";

export interface IBlogPostData {
  imgUrl: string;
  title: string;
  badge: string;
  date: string;
}
interface IBlogPostProps {
  cardData: IBlogPostData;
}
export const BlogCard: React.FC<IBlogPostProps> = ({ cardData }: IBlogPostProps) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={cardData.imgUrl} className="object-cover w-full h-80"></img>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold text-textWhite line-clamp-2">{cardData.title}</div>
        <div>
          <Badge variant={"outline"}>{cardData.badge}</Badge>
        </div>
      </div>
      <div className="text-sm text-slate-400">{cardData.date}</div>
    </div>
  );
};
