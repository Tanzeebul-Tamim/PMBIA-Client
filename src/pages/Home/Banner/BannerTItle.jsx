

const BannerTItle = ({title1, title2, title3, subtitle1, subtitle2, subtitle3}) => {
    return (
        <div style={{fontFamily: "Oswald"}} className="uppercase absolute z-10 font-extrabold top-[30%] left-[2%] lg:text-8xl text-lg">
            <span className="text-yellow-500">{title1}</span>{" "}
            <span className="text-white">{subtitle1}</span>
            <br />
            <span className="text-yellow-500">{title2}</span>{" "}
            <span className="text-white">{subtitle2}</span>
            <br />
            <span className="text-yellow-500">{title3}</span>{" "}
            <span className="text-white">{subtitle3}</span>
        </div>
    );
};

export default BannerTItle;