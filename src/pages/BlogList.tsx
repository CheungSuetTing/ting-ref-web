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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const BlogList: React.FC = () => {
  const blogList: IBlogData[] = [
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador", "Recreation"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador", "Recreation"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador", "Recreation"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador", "BitCoin"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador", "BitCoin"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador", "BitCoin"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      descriptions: "From Traditional Roots to Modern Variations, Explore the Iconic Salvadoran Dish Revered Worldwide",
      badgeList: ["El Salvador", "BitCoin"],
      avatar: img2Url,
      name: "Sam Martinez",
      imgUrl: img2Url,
    },
  ];
  const badgeList: string[] = ["El Salvador", "Recreation", "Bitcoin"];
  const blogList2: IBlogData[] = [
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
    {
      title: "Exploring the Delightful World of Pupusas: El Salvador’s Beloved Dish",
      avatar: img2Url,
      name: "Sam Martinez",
    },
  ];

useEffect(() => {
  window.scrollTo(0, 0);
}, [])

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
          <div className="flex flex-col gap-6">
            {blogList.map((data) => (
              <Blog cardData={data} mode="BLOG" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6 sticky top-20">
            <div className="flex flex-col pt-6 pb-4 rounded-3xl bg-slate-950">
              <div className="flex justify-between items-center border-b border-slate-700 pb-4 px-8">
                <div className="text-textWhite font-semibold text-xl">🎫 &nbsp; Filter by tag</div>
                <Button variant={"text"}>View All</Button>
              </div>
              <div className="flex pt-4 px-8 gap-2">
                {badgeList.map((badge) => (
                  <Badge variant={"outline"}>{badge}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col pt-6 rounded-3xl bg-slate-950">
              <div className="flex justify-between items-center border-b border-slate-700 pb-4 px-8">
                <div className="text-textWhite font-semibold text-xl">🎯 &nbsp; Popular posts</div>
                <Button variant={"text"}>View All</Button>
              </div>
              <div className="flex flex-col">
                {blogList2.map((data) => (
                  <Blog cardData={data} mode={"POPULAR_POST"}></Blog>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
