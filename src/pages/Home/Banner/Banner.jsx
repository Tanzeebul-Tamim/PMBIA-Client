import ResponsiveLogin from "./ResponsiveLogin";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="relative">
          <img
            className="w-full"
            src="https://img.redbull.com/images/c_crop,x_185,y_0,h_2419,w_3628/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2023/5/22/okwq7yragrqsuyc9shld/the-sound-of-speed-brage-vestavik"
          />

          <img
            src="https://www.pmbia.org/img/icons/PMBIA-Icon-Rev-192x192.png"
            className="absolute z-10 lg:w-auto w-1/6 lg:top-32 bottom-2 lg:right-10 right-2"
          />

          <div
            style={{ fontFamily: "Oswald" }}
            className="uppercase absolute z-10 font-extrabold top-[30%] left-[7%] lg:text-7xl text-lg"
          >
            <span className="text-yellow-500">Unlock</span>{" "}
            <span className="text-white">Your Potential</span>
            <br />
            <span className="text-yellow-500">with</span>{" "}
            <span className="text-white">comprehensive</span>
            <br />
            <span className="text-yellow-500">mountain</span>{" "}
            <span className="text-white">bike courses</span>
          </div>

          <ResponsiveLogin />

          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-b from-transparent to-base-200"></div>
        </div>
        <div className="absolute bottom-3 right-24 lg:flex lg:justify-between lg:transform -lg:translate-y-full lg:left-3 lg:right-3 lg:top-1/2">
          <a
            href="#slide4"
            className="mr-2 btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <div className="relative">
          <img
            className="w-full"
            src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2023/3/21/joy3qdrtovaznhhjjpro/jess-blewitt-crankworx-rotorua"
          />

          <img
            src="https://www.pmbia.org/img/icons/PMBIA-Icon-Rev-192x192.png"
            className="absolute z-10 lg:w-auto w-1/6 lg:top-32 bottom-2 lg:right-10 right-2"
          />

          <div
            style={{ fontFamily: "Oswald" }}
            className="uppercase text-end absolute z-10 font-extrabold top-[30%] right-[7%] lg:text-7xl text-lg"
          >
            <span className="text-white">Elevate</span>{" "}
            <span className="text-yellow-500">Your Skills</span>
            <br />
            <span className="text-white">With</span>{" "}
            <span className="text-yellow-500">Professional</span>
            <br />
            <span className="text-white">Mountain</span>{" "}
            <span className="text-yellow-500">Bike Training</span>
          </div>

          <ResponsiveLogin />

          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-b from-transparent to-base-200"></div>
        </div>
        <div className="absolute bottom-3 right-24 lg:flex lg:justify-between lg:transform -lg:translate-y-full lg:left-3 lg:right-3 lg:top-1/2">
          <a
            href="#slide1"
            className="mr-2 btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <div className="relative">
          <img
            className="w-full"
            src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2023/4/11/idprfm8kymxl1eilxvpa/loic-bruni-uci-world-cup-val-di-sole-2022"
          />

          <img
            src="https://www.pmbia.org/img/icons/PMBIA-Icon-Rev-192x192.png"
            className="absolute z-10 lg:w-auto w-1/6 lg:top-32 bottom-2 lg:right-10 right-2"
          />

          <div
            style={{ fontFamily: "Oswald" }}
            className="uppercase absolute z-10 font-extrabold top-[30%] left-[7%] lg:text-7xl text-lg"
          >
            <span className="text-yellow-500">Master</span>{" "}
            <span className="text-white">The trails</span>
            <br />
            <span className="text-yellow-500">with</span>{" "}
            <span className="text-white">expert</span>
            <br />
            <span className="text-yellow-500">Mountain</span>{" "}
            <span className="text-white">Bike instructors</span>
          </div>

          <ResponsiveLogin />

          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-b from-transparent to-base-200"></div>
        </div>
        <div className="absolute bottom-3 right-24 lg:flex lg:justify-between lg:transform -lg:translate-y-full lg:left-3 lg:right-3 lg:top-1/2">
          <a
            href="#slide2"
            className="mr-2 btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <div className="relative">
          <img
            className="w-full"
            src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2133,w_3200/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2022/3/28/vurbcvhvyp8ia2zich59/tahnee-seagrave-uci-dh-world-cup-lourdes"
          />

          <img
            src="https://www.pmbia.org/img/icons/PMBIA-Icon-Rev-192x192.png"
            className="absolute z-10 lg:w-auto w-1/6 lg:top-32 bottom-2 lg:right-10 right-2"
          />

          <div
            style={{ fontFamily: "Oswald" }}
            className="uppercase absolute z-10 font-extrabold top-[30%] text-end right-[7%] lg:text-7xl text-lg"
          >
            <span className="text-yellow-500">Improve</span>{" "}
            <span className="text-white">Your Riding</span>
            <br />
            <span className="text-yellow-500">Share</span>{" "}
            <span className="text-white">Your passion</span>
            <br />
            <span className="text-yellow-500">empower</span>{" "}
            <span className="text-white">yourself</span>
          </div>

          <ResponsiveLogin />

          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-b from-transparent to-base-200"></div>
        </div>
        <div className="absolute bottom-3 right-24 lg:flex lg:justify-between lg:transform -lg:translate-y-full lg:left-3 lg:right-3 lg:top-1/2">
          <a
            href="#slide3"
            className="mr-2 btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-xs lg:btn-md btn-circle lg:text-base bg-yellow-500 text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
