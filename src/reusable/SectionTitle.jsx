const SectionTitle = ({title1, title2, description, textAlign}) => {
  return (
    <div className={`${textAlign} mb-9`}>
      <h1 className={`title lg:text-5xl text-xl  uppercase ${textAlign ? 'lg:border-r-[12px] border-r-[5px] lg:pr-4 pr-2' : 'lg:border-l-[12px] border-l-[5px] lg:pl-4 pl-2'} border-yellow-600`}>
        <span className="text-white lg:tracking-widest">
            {title1}
        </span>
        {" "}
        <span className="text-yellow-600">
            {title2}
        </span>
      </h1>
      <p className="mt-5 text-sm lg:text-xl lg:w-1/2 description">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
