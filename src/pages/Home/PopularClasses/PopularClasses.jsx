import SectionTitle from "../../../reusable/sectionTitle";
import ClassCard from "./ClassCard";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./PopularClasses.css";

const popularClassesDes =
  "We offer a curated collection of the most sought-after classes which are highly recommended for mountain bike enthusiasts. Discover a range of exciting and educational courses designed to enhance your MTB skills and knowledge.";

let numberOfSlides = null;

if (window.innerWidth > 576) {
  numberOfSlides = 4;
} else {
  numberOfSlides = 1;
}

const PopularClasses = () => {
  return (
    <div className="lg:mb-32 mb-12 px-5 lg:px-10">
      <SectionTitle
        title1={"popular"}
        title2={"classes"}
        textAlign={"text-end"}
        description={popularClassesDes}
      />
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
              arrowRight: <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>,
              arrowRightDisabled: (
                <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
      >
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
      </Carousel>
    </div>
  );
};

export default PopularClasses;
