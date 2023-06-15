import { useEffect, useRef } from "react";
import useTitle from "../../Helmet/useTitle";
import SectionTitle from "../../reusable/sectionTitle";
import ClassesBanner from "./ClassesBanner/ClassesBanner";
import { ScaleLoader } from "react-spinners";
import ClassesTable from "./ClassesTable/ClassesTable";
import { useState } from "react";
import { getAllClasses } from "../../api/auth";
import ClassesTableHead from "./ClassesTable/ClassesTableHead";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const titleDescription =
  "Discover a wide range of mountain biking classes designed to help you level up your riding game. From mastering aerial skills to conquering challenging terrains, our classes offer expert instruction tailored to riders of all levels. Join us for an unforgettable learning experience!";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  useTitle("| Classes");

  useEffect(() => {
    setLoading(true);
    getAllClasses(visibleCount, search)
      .then((data) => {
        setClasses(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [visibleCount, search]);
  
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  if (loading) {
    return (
      <div>
        <ClassesBanner />
        <div className="lg:px-10 pb-24 pt-16">
          <SectionTitle
            title1="Meet Our"
            title2="Expert Instructors"
            description={titleDescription}
          />
          <div className="relative flex justify-center mb-2">
            <input
              onChange={handleSearch}
              ref={searchRef}
              type="text"
              placeholder="Search by Topic Name"
              className="py-3 px-5 outline-none bg-base-200 description placeholder-white rounded-full w-1/3"
            />
            <button>
              <BsSearch
                style={{
                  color: "white",
                  position: "absolute",
                  top: "30%",
                  right: "35%",
                  fontSize: "20px",
                }}
              ></BsSearch>
            </button>
          </div>
          <div className="overflow-x-auto pt-10">
            <table className="table text-center description text-white">
              {/* head */}
              <ClassesTableHead />
            </table>
          </div>
          <div className="pt-10 flex justify-center pb-24">
            <ScaleLoader
              height={85}
              width={10}
              radius={8}
              margin={8}
              color="rgb(202 138 4)"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <ClassesBanner />
      <div className="lg:px-10 pt-16">
        <SectionTitle
          title1="Discover The Perfect"
          title2="Class For You"
          textAlign={"text-end"}
          description={titleDescription}
        />
        <div className="relative flex justify-center mb-2">
          <input
            onChange={handleSearch}
            ref={searchRef}
            type="text"
            placeholder="Search by Topic Name"
            className="py-3 px-5 outline-none bg-base-200 description placeholder-white rounded-full w-1/3"
          />
          <button>
            <BsSearch
              style={{
                color: "white",
                position: "absolute",
                top: "30%",
                right: "35%",
                fontSize: "20px",
              }}
            ></BsSearch>
          </button>
        </div>
        <ClassesTable classes={classes} />
        {classes.length >= visibleCount && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="mt-10 btn btn-md text-lg rounded-full hover:bg-stone-700 bg-stone-800"
            >
              <BiDotsVerticalRounded />
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classes;
