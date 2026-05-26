import sectionBanner from "../../assets/section-banner.jpg";
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png";

import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

import tours from "../../Data/PopularTour.json";

import destination1 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image01.png";
import destination2 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image02.png";
import destination3 from "../../assets/Destination/DestinationDetailsPage/destinationdetails-image03.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MainBtn from "../../components/Buttons/MainBtn";

import icon1 from "../../assets/PopularToursPage/hotels.png";
import icon2 from "../../assets/PopularToursPage/Sightseeing.png";
import icon3 from "../../assets/PopularToursPage/car.png";
import icon4 from "../../assets/PopularToursPage/meal.png";

export default function ToursDetails() {
  const { id } = useParams();
  const tour = tours.find((item) => item.id === parseInt(id));

  if (!tour) {
    return <h2 className="text-center mt-20">Tours Not Found</h2>;
  }

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner})` }}
      >
        <div className="section-content z-0 text-center">
          <h4 className="text-2xl lg:text-4xl xl:text-6xl font-extrabold text-secondary">
            {tour.title}
          </h4>

          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link
                to="/"
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Home
              </Link>
            </li>

            <span className="text-secondary">/</span>

            <li>
              <Link
                to={tour.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                Tours Details
              </Link>
            </li>

            <span className="text-secondary">/</span>

            <li>
              <Link
                to={tour.id}
                className="cursor-pointer text-sm lg:text-lg font-medium text-secondary"
              >
                {tour.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#EFFFFF] flex justify-between items-start gap-10 flex-wrap lg:flex-nowrap">
        <div class="tour-left bg-white rounded-3xl w-full lg:w-[70%]">
          <div class="p-5 md:p-10">
            <div class="flex items-center gap-2 text-secondary text-sm pb-5">
              ({tour.review})
              <div className="flex items-center">
                <Icon
                  icon="material-symbols:star-rounded"
                  width={20}
                  height={20}
                  className="text-yellow"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  width={20}
                  height={20}
                  className="text-yellow"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  width={20}
                  height={20}
                  className="text-yellow"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  width={20}
                  height={20}
                  className="text-yellow"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  width={20}
                  height={20}
                  className="text-yellow"
                />
              </div>
            </div>

            <h3 className="text-4xl font-medium text-secondary pb-3">
              {tour.title}
            </h3>

            <p className="text-sm text-secondary">{tour.places}</p>

            <div className="relative pt-8">
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation={{ prevEl: ".des-prev", nextEl: ".des-next" }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="rounded-3xl"
                >
                  <button className="des-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
                    <Icon icon="ep:arrow-left-bold" width={24} height={24} />
                  </button>

                  <button className="des-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow text-white cursor-pointer flex items-center justify-center shadow">
                    <Icon icon="ep:arrow-right-bold" width={24} height={24} />
                  </button>

                  <SwiperSlide>
                    <img
                      src={destination1}
                      alt="destination-1"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={destination2}
                      alt="destination-2"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={destination3}
                      alt="destination-3"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <h3 class="text-4xl font-medium text-secondary pb-5 pt-8">
              Package Overview
            </h3>

            <p class="text-secondary text-md">
              Experience Phuket, Krabi, and Phi Phi Islands with turquoise
              waters and scenic beaches. A perfect blend of island tours,
              snorkeling, and leisure time.
            </p>

            <ul class="space-y-5 pt-5">
              <li class="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width={25}
                  height={25}
                  className="text-prim"
                />

                <span>Phuket, Krabi &amp; Phi Phi Island stays</span>
              </li>

              <li class="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width={25}
                  height={25}
                  className="text-prim"
                />

                <span>Snorkeling and island-hopping tours</span>
              </li>

              <li class="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width={25}
                  height={25}
                  className="text-prim"
                />

                <span>Sunset viewpoints &amp; beach activities</span>
              </li>

              <li class="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width={25}
                  height={25}
                  className="text-prim"
                />

                <span>Great for couples &amp; friends</span>
              </li>
            </ul>

            <h3 class="text-4xl font-medium text-secondary pt-5">
              Additional Easemytrip Delights
            </h3>

            <ul class="space-y-5 pt-5">
              <li class="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width={25}
                  height={25}
                  className="text-prim"
                />

                <span>Local Thailand travel assistance.</span>
              </li>

              <li class="flex items-center gap-2 text-secondary font-normal">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  width={25}
                  height={25}
                  className="text-prim"
                />

                <span>Island tour upgrades available.</span>
              </li>
            </ul>

            <h3 class="text-4xl font-medium text-secondary py-5">
              Day Wise Itinerary
            </h3>

            <div class="bg-yellow-light p-5 md:p-10 rounded-3xl">
              {Object.entries(tour.daysDescription).map(
                ([dayKey, dayData], index) => (
                  <div
                    key={dayKey}
                    className="list-count flex items-start flex-col md:flex-row mb-8 gap-3"
                  >
                    <div className="duration text-center min-w-12">
                      <div className="media w-11.5 h-11.5 bg-yellow rounded-full flex justify-center items-center mt-1.25">
                        <div className="green-bg w-9.5 h-9.5 bg-secondary rounded-full flex justify-center items-center font-afacad text-2xl font-bold text-white">
                          {index + 1}
                        </div>
                      </div>

                      <span className="text-lg inline-block text-secondary uppercase font-medium">
                        Day
                      </span>
                    </div>

                    <div className="info md:ps-10 flex-1">
                      <h4 className="text-2xl font-medium text-secondary font-figtree pb-5">
                        Day {index + 1} : {dayData.title}
                      </h4>

                      <ul className="space-y-3">
                        {dayData.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start flex-wrap gap-2"
                          >
                            <Icon
                              icon="material-symbols:check-circle-rounded"
                              width={18}
                              height={18}
                              className="text-yellow-500 mt-1 min-w-5 min-h-5"
                            />

                            <span className="text-sm text-secondary">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div class="tour-right w-full lg:w-[30%] lg:sticky top-0 h-full right-0">
          <div class="content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl">
            <span class="block text-secondary text-sm font-medium pb-2">
              Starting from
            </span>

            <span class="text-secondary text-5xl font-semibold font-figtree">
              {tour.price}
            </span>

            <span class="text-secondary text-sm">/ Person</span>

            <MainBtn
              text={"Enquire Now"}
              className="block! w-fit! mt-6"
              to="/contact"
            />
          </div>

          <div class="content bg-white p-5 md:p-10 border border-gray-200 rounded-3xl mt-8">
            <ul class="tour-time-duration">
              <li>
                <span class="font-bold">Duration :</span>

                <span class="ng-binding">{tour.duration}</span>
              </li>

              <li>
                <span class="font-bold">Places to Visit : </span>

                <span class="trv-tmi-hlo-info">{tour.places}</span>
              </li>
            </ul>

            <div class="relative my-10 btn-package text-center w-full z-1">
              <span>Package Includes</span>
            </div>

            <div class="icon-man-holids">
              <ul class="flex justify-between flex-wrap">
                <li>
                  <div class="holids-icon">
                    <img src={icon1} alt="icon" />
                  </div>

                  <div class="my-4">Hotel</div>
                </li>

                <li>
                  <div class="holids-icon">
                    <img src={icon2} alt="icon" />
                  </div>

                  <div class="my-4">Sightseeing</div>
                </li>

                <li>
                  <div class="holids-icon">
                    <img src={icon3} alt="icon" />
                  </div>

                  <div class="my-4">Transfer</div>
                </li>

                <li>
                  <div class="holids-icon">
                    <img src={icon4} alt="icon" />
                  </div>

                  <div class="my-4">Meal</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
