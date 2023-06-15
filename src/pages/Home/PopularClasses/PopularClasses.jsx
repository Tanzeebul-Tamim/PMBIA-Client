import SectionTitle from "../../../reusable/sectionTitle";
import ClassCard from "./ClassCard";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./PopularClasses.css";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useEffect } from "react";
import { getTopClasses } from "../../../api/api";

const popularClassesDes =
  "We offer a curated collection of the most sought-after classes which are highly recommended for mountain bike enthusiasts. Discover a range of exciting and educational courses designed to enhance your MTB skills and knowledge.";

// You need to refresh the page once in order to make the carousel cards responsive
let numberOfSlides = null;

if (window.innerWidth > 576) {
  numberOfSlides = 3;
} else {
  numberOfSlides = 1;
}

const PopularClasses = () => {
  const [topClasses, setTopClasses] = useState([]);

  useEffect(() => {
    getTopClasses()
      .then((data) => {
        setTopClasses(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="lg:mb-32 mb-12 px-5 lg:px-10">
      <Slide direction="right">
        <SectionTitle
          title1={"popular"}
          title2={"classes"}
          textAlign={"text-end"}
          description={popularClassesDes}
        />
      </Slide>
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
        {topClasses.map((topClass) => {
          return <ClassCard topClass={topClass} key={topClass.id}></ClassCard>;
        })}
      </Carousel>
    </div>
  );
};

export default PopularClasses;
