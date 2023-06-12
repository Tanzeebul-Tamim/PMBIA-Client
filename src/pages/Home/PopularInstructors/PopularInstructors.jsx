import SectionTitle from "../../../reusable/sectionTitle";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../PopularClasses/PopularClasses.css";
import InstructorCard from "./InstructorCard";

const popularInstructorsDes =
  "Each of our instructor brings a unique teaching style and a wealth of practical experience, ensuring that our students receive the best instruction possible.";

let numberOfSlides = null;

if (window.innerWidth > 576) {
  numberOfSlides = 4;
} else {
  numberOfSlides = 1;
}

const PopularInstructors = () => {
  return (
    <div className="px-10 mt-24 pb-20 pt-11 relative">
      <SectionTitle
        title1={"popular"}
        title2={"instructors"}
        description={popularInstructorsDes}
      />
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
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
          <InstructorCard></InstructorCard>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularInstructors;
