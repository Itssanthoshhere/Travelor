import pattern from "../../../assets/Index/Blogs/patern.png";
import MainBtn from "../../Buttons/MainBtn";

import blogdata from "../../../Data/Blogs.json";
import BlogCard from "../../BlogCard/BlogCard.jsx";

const Blogs = () => {
  return (
    <>
      <div
        className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-secondary bg-repeat w-full"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <div className="blog-title flex justify-between items-end flex-wrap pb-10 gap-5">
          <div className="title lg:max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Explore <span className="text-yellow"> Latest News </span>
            </h1>

            <p className="text-gray-200/80 my-2 text-lg">
              Discover the latest travel stories, tips, and destination updates.
              Stay inspired with fresh articles designed to help you plan your next adventure.
            </p>
          </div>

          <MainBtn to="/blogs" text={"See More Articles"} />
        </div>

        <div className="blog-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...blogdata]
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, 3)
            .map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
