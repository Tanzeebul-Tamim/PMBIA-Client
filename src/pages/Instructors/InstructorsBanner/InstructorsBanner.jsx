const InstructorsBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/PY0xrB1/51389217-2197714463641092-5003903857827250176-n-1.jpg"
        alt=""
      />
      <div className="z-[10] left-10 text-center absolute bottom-[4%]">
        <h1 className="text-yellow-500 text-7xl uppercase tracking-widest font-bold">
          Training
        </h1>
        <h1 className="text-white text-5xl uppercase tracking-[5px]">
          Instructions
        </h1>
        <h1 className="text-yellow-500 text-7xl uppercase tracking-widest font-bold">
          & Guides
        </h1>
        <h1 className="text-white text-5xl uppercase tracking-[5px]">
          Worldwide
        </h1>
        <h1 className="text-white description mt-3 text-xl uppercase tracking-[5px]">
          Since 2006
        </h1>
      </div>
      <div className="absolute lg:bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-base-300"></div>
    </div>
  );
};

export default InstructorsBanner;
