import { BlogList } from "@/components/BlogList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";



const Blog: React.FC = () => {
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
        <div className="flex flex-col gap-4">
          <div className="font-bold text-4xl text-textWhite">Blog</div>
          <BlogList/>
        </div>
        <div>b</div>
      </div>
    </div>
  );
};
export default Blog;
