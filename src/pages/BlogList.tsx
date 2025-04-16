import { Blog } from "@/components/Blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { IBlogData } from "@/components/Blog";
import img2Url from "../assets/img2.jpg";

const BlogList: React.FC = () => {
  const blogList: IBlogData[] = [
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: "El Salvador",
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
  ];
  return (
    <div className="main container mx-auto flex flex-col gap-8 pt-[40px] pb-[80px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-[7fr,3fr] gap-8">
        <div className="flex flex-col gap-12">
          <div className="font-bold text-4xl text-textWhite">Blog</div>
          {blogList.map((data) => (
            <Blog cardData={data} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col py-6 rounded-3xl bg-slate-950">
            <div className="text-textWhite font-semibold text-xl border-b pb-4 border-slate-700 px-8">🎫 &nbsp; Filter by tag</div>
          </div>
          <div className="flex flex-col gap-14 px-16 py-8 rounded-3xl bg-slate-950 text-textWhite">Popular posts</div>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
