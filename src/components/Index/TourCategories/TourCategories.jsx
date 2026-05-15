import { useState } from "react";
import tourbg from "../../../assets/Index/TourCategories/tour-bg.jpg";
import ctg1 from "../../../assets/Index/TourCategories/Tour-Categories-01.jpg";
import ctg2 from "../../../assets/Index/TourCategories/Tour-Categories-02.jpg";
import ctg3 from "../../../assets/Index/TourCategories/Tour-Categories-03.jpg";
import ctg4 from "../../../assets/Index/TourCategories/Tour-Categories-04.jpg";
import ctg5 from "../../../assets/Index/TourCategories/Tour-Categories-05.jpg";
import ctg6 from "../../../assets/Index/TourCategories/Tour-Categories-06.jpg";

import MainBtn from "../../Buttons/MainBtn";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    title: "Wildlife",
    pera: "Observing animals in their natural habitats like tiger safaris in Ranthambore or birdwatching in Keoladeo Ghana Bird Sanctuary has become a popular and educational form of travel.",
    image: ctg1,
  },
  {
    id: 2,
    title: "Hiking",
    pera: "Explore scenic trails from gentle forest walks to steeper ridge hikes, with beautiful viewpoints, varied terrain, and local guides helping you pace the route. Perfect for outdoor lovers who want fresh air, wildlife spotting, and memorable natural scenery.",
    image: ctg2,
  },
  {
    id: 3,
    title: "Adventure Tours",
    pera: "Enjoy adrenaline-packed activities like white-water rafting, zip-lining, and canyon treks with expert guides and safety equipment provided. Designed for thrill seekers who want active, high-energy journeys balanced by careful planning and support.",
    image: ctg3,
  },
  {
    id: 4,
    title: "Cultural Tours",
    pera: "Discover heritage landmarks, local markets, museums, and traditional performances with immersive storytelling and authentic experiences. Ideal for curious travelers seeking history, cuisine, arts, and meaningful connections with local communities.",
    image: ctg4,
  },
  {
    id: 5,
    title: "Cruise Tours",
    pera: "TIME solicited nominations of places including hotels, cruises, restaurants, attractions, museums, parks, and more from around the world.",
    image: ctg5,
  },
  {
    id: 6,
    title: "Dark Tourism",
    pera: "Visit carefully curated historical sites, memorials, and museums that honor difficult pasts with context and respect. Best for thoughtful travelers who want educational, reflective journeys that emphasize remembrance and ethical engagement.",
    image: ctg6,
  },
  {
    id: 7,
    title: "View All",
    isButton: true,
  },
];

const TourCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        className="tour-ctg-container bg-no-repeat bg-center bg-cover px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex flex-col xl:flex-row gap-12 relative"
        style={{ backgroundImage: `url(${tourbg})` }}
      >
        <div className="ctg-content w-full xl:w-[40%] flex flex-col justify-center">
          <h3 className="text-secondary font-afacad text-4xl font-medium pb-2">
            {categories[activeIndex].title}
          </h3>

          <p className="text-lg lg:max-w-sm text-secondary/70 mb-5">
            {categories[activeIndex].pera}
          </p>

          <MainBtn text={"View More"} className="w-fit" />
        </div>

        <div className="ctg-wrap w-full xl:w-[60%] relative mb-14">
          <button className="ctg-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
            <Icon icon="ep:arrow-left-bold" width="24" height="24" />
          </button>
          <button className="ctg-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
            <Icon icon="ep:arrow-right-bold" width="24" height="24" />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{ prevEl: ".ctg-prev", nextEl: ".ctg-next" }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={cat.id}>
                {cat.isButton ? (
                  <div className="flex justify-center items-center h-full">
                    <MainBtn text="View All" className="text-sm!" />
                  </div>
                ) : (
                  <div
                    className={`ctg-item bg-white p-5 rounded-2xl w-full transition-transform duration-500 ${activeIndex === categories.indexOf(cat) ? "scale-100 rotate-0" : "scale-75 rotate-6"}`}
                  >
                    <div className="ctg-image rounded-2xl overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="text-center pt-2 block text-2xl lg:text-3xl font-medium text-secondary font-afacad">
                      {cat.title}
                    </span>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative lg:absolute xl:right-40 bottom-8 flex flex-col text-white font-kaushan! text-xl sm:text-2xl xl:text-start text-end xl:text-5xl z-1">
          Wornderful Place For You
          <h2 className="uppercase font-afacad! font-extrabold text-4xl lg:text-6xl xl:text-8xl text-yellow">
            Tour Categories
          </h2>
        </div>
      </div>
    </>
  );
};

export default TourCategories;
