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
            className="uppercase lg:flex flex-col gap-4 absolute z-10 font-extrabold top-[30%] left-[7%] lg:text-7xl text-lg"
          >
            <div>
              <span className="text-yellow-500">Unlock</span>{" "}
              <span className="text-white">Your Potential</span>
            </div>
            <div>
              <span className="text-yellow-500">with</span>{" "}
              <span className="text-white">comprehensive</span>
            </div>
            <div>
              <span className="text-yellow-500">mountain</span>{" "}
              <span className="text-white">bike courses</span>
            </div>
          </div>

          <ResponsiveLogin />

          <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-b from-transparent to-base-100"></div>
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
            className="uppercase lg:flex flex-col gap-4 text-end absolute z-10 font-extrabold top-[30%] right-[7%] lg:text-7xl text-lg"
          >
            <div>
              <span className="text-white">Elevate</span>{" "}
              <span className="text-yellow-500">Your Skills</span>
            </div>
            <div>
              <span className="text-white">With</span>{" "}
              <span className="text-yellow-500">Professional</span>
            </div>
            <div>
              <span className="text-white">Mountain</span>{" "}
              <span className="text-yellow-500">Bike Training</span>
            </div>
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
            className="uppercase lg:flex flex-col gap-4 absolute z-10 font-extrabold top-[30%] left-[7%] lg:text-7xl text-lg"
          >
            <div>
              <span className="text-yellow-500">Master</span>{" "}
              <span className="text-white">The trails</span>
            </div>
            <div>
              <span className="text-yellow-500">with</span>{" "}
              <span className="text-white">expert</span>
            </div>
            <div>
              <span className="text-yellow-500">Mountain</span>{" "}
              <span className="text-white">Bike instructors</span>
            </div>
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
            src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2133,w_3200/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2020/10/16/cuvpicpjjdzfgveuwjwn/remy-morton-queenstown"
          />

          <img
            src="https://www.pmbia.org/img/icons/PMBIA-Icon-Rev-192x192.png"
            className="absolute z-10 lg:w-auto w-1/6 lg:top-32 bottom-2 lg:right-10 right-2"
          />

          <div
            style={{ fontFamily: "Oswald" }}
            className="uppercase lg:flex flex-col gap-4 absolute z-10 font-extrabold top-[30%] text-end right-[7%] lg:text-7xl text-lg"
          >
            <div>
              <span className="text-yellow-500">Improve</span>{" "}
              <span className="text-white">Your Riding</span>
            </div>
            <div>
              <span className="text-yellow-500">Share</span>{" "}
              <span className="text-white">Your passion</span>
            </div>
            <div>
              <span className="text-yellow-500">empower</span>{" "}
              <span className="text-white">yourself</span>
            </div>
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
