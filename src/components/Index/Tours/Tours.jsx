import titleShape from "../../../assets/Index/BookingSteps/Title-Shape.png";

import tourData from "../../../Data/PopularTour.json";
import PopularTourCard from "../../PopularTourCard/PopularTourCard";

const resolveTourImage = (imagePath) =>
  new URL(
    `../../../assets/Index/PopularToursPage/${imagePath.split("/").pop()}`,
    import.meta.url,
  ).href;

const Tours = () => {
  const tourItems = tourData.map((tour) => ({
    ...tour,
    image: resolveTourImage(tour.image),
  }));

  return (
    <>
      <div className="bg-[#effefe] px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
        <div className="title flex flex-col justify-center items-center text-center relative mb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            Explore Popular
            <span className="text-yellow"> Tours! </span>
          </h1>

          <p className="text-secondary my-2 text-lg">
            Destinations worth exploring! Here are a few popular spots
          </p>

          <img
            src={titleShape}
            alt="titleShape"
            className="w-[45%] object-contain absolute -bottom-12"
          />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {tourItems.slice(0, 4).map((tour) => (
            <PopularTourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;
