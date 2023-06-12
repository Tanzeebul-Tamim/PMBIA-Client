import SectionTitle from "../../../reusable/sectionTitle";
import ClassCard from "./ClassCard";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import './PopularClasses.css';

const popularClassesDes =
  "We offer a curated collection of the most sought-after classes which are highly recommended for mountain bike enthusiasts. Discover a range of exciting and educational courses designed to enhance your MTB skills and knowledge.";

const PopularClasses = () => {
  return (
    <div className="mt-24 mb-11 px-10">
      <SectionTitle
        title1={"popular"}
        title2={"classes"}
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
              numberOfSlides: 4,
              arrowLeft: <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>,
              arrowLeftDisabled: <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>,
              arrowRight: <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>,
              arrowRightDisabled: <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>,
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
