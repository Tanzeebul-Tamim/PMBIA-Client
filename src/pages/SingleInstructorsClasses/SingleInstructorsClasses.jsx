import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../reusable/sectionTitle";
import SingleInstructorClassCard from "./SingleInstructorClassCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "../Home/PopularInstructors/style.css";
import { FaChalkboardTeacher } from "react-icons/fa";

const SingleInstructorsClasses = () => {
  const instructor = useLoaderData();
  const classes = instructor.classes;
  const nameWords = instructor.name.split(" ");
  const title1 = nameWords[0];
  const title2 = nameWords.slice(1).join(" ");

  return (
    <div
      className="lg:pb-20 pb-8 relative pt-24 lg:pt-36 px-5 lg:px-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.400), rgba(0, 0, 0, 0.400)), url('https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2023/5/15/sbajrt66mlbxrjm9tcfi/tom-pidcock-xco-world-cup-nove-mesto-2023')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-10">
        <img
          className="mask mask-squircle h-[180px] w-[180px] "
          src={instructor.image}
          alt=""
        />
      </div>
      <SectionTitle
        title1={title1}
        title2={title2}
        description={instructor?.quote}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="popularClassSection cursor-pointer"
      >
        {classes.map((classItem, index) => {
          return (
            <SwiperSlide key={index}>
              <SingleInstructorClassCard classItem={classItem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center">
        <Link to="/instructors" className="z-[10] mt-10 btn btn-md text-lg rounded-full hover:bg-stone-700 bg-stone-800">
          <FaChalkboardTeacher />
          Back To Instructors Page
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-base-300"></div>
    </div>
  );
};

export default SingleInstructorsClasses;
