import BannerTItle from "./BannerTItle";
import ResponsiveLogin from "./ResponsiveLogin";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full"
        src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2023/4/11/idprfm8kymxl1eilxvpa/loic-bruni-uci-world-cup-val-di-sole-2022"
      />

      <img
        src="https://www.pmbia.org/img/icons/PMBIA-Icon-Rev-192x192.png"
        className="absolute z-10 lg:w-auto w-1/6 lg:top-32 bottom-2 lg:right-10 right-2"
      />

      <BannerTItle 
      title1={'Improve'}
      title2={'Share'}
      title3={'Join'}
      subtitle1={'Your Riding'}
      subtitle2={'Your passion'}
      subtitle3={'Us Today'}
      />

      <ResponsiveLogin />

      <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-b from-transparent to-base-200"></div>
    </div>
  );
};

export default Banner;
