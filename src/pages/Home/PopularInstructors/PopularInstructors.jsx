import SectionTitle from "../../../reusable/sectionTitle";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../PopularClasses/PopularClasses.css";
import InstructorCard from "./InstructorCard";
import { Slide } from "react-awesome-reveal";
import { useEffect } from "react";
import { getTopInstructors } from "../../../api/api";
import { useState } from "react";

const popularInstructorsDes =
  "Get to know some of our highly skilled and experienced instructors who'll lead your way throughout this journey. Each of our instructor brings a unique teaching style and a wealth of practical experience, ensuring that our students receive the best instruction possible.";

// You need to refresh the page once in order to make the carousel cards responsive
let numberOfSlides = null;

if (window.innerWidth > 576) {
  numberOfSlides = 3;
} else {
  numberOfSlides = 1;
}

const PopularInstructors = () => {
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    getTopInstructors()
      .then((data) => {
        setTopInstructors(data.topInstructors);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="px-5 lg:px-10 lg:mb-32 mb-12 pt-11 relative">
      <Slide>
        <SectionTitle
          title1={"popular"}
          title2={"instructors"}
          description={popularInstructorsDes}
        />
      </Slide>
      <div>
        <Carousel
          className="popularClassSection cursor-pointer"
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: numberOfSlides,
                arrowLeft: <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>,
                arrowLeftDisabled: (
                  <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>
                ),
                arrowRight: (
                  <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
                ),
                arrowRightDisabled: (
                  <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}
        >
          {topInstructors.map((topInstructor) => {
            return (
              <InstructorCard
                topInstructor={topInstructor}
                key={topInstructor.id}
              ></InstructorCard>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularInstructors;
