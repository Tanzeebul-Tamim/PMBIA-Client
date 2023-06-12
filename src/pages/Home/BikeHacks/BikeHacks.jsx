import SectionTitle from "../../../reusable/sectionTitle";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../PopularClasses/PopularClasses.css";
import HackCard from "./HackCard";

const bikeHacksDes =
  "Discover innovative ways to maintain and optimize your bike, improve your riding skills, and overcome common challenges on the road or trail. Here we're to provide you with helpful knowledge and shortcuts that can make your biking adventures more enjoyable and rewarding.";

let numberOfSlides = null;

if (window.innerWidth > 576) {
  numberOfSlides = 4;
} else {
  numberOfSlides = 1;
}

const BikeHacks = () => {
  return (
    <div
    className="lg:pb-20 pb-8 relative pt-24 lg:pt-56 px-5 lg:px-10"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.300), rgba(0, 0, 0, 0.300)), url('https://img.redbull.com/images/c_crop,x_0,y_178,h_1728,w_3840/c_fill,w_1680,h_780/q_auto,f_auto/redbullcom/2023/6/5/asp64xcyx7bpnkloetet/loic-bruni-leogang')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    >
      <SectionTitle
        title1={"bike hacks"}
        title2={"and tips"}
        description={bikeHacksDes}
      />
      <Carousel
        className="popularClassSection cursor-pointer z-[10]"
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
        <HackCard></HackCard>
        <HackCard></HackCard>
        <HackCard></HackCard>
        <HackCard></HackCard>
        <HackCard></HackCard>
        <HackCard></HackCard>
      </Carousel>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-base-300"></div>
    </div>
  );
};

export default BikeHacks;
