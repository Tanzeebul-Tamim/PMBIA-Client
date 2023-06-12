import Banner from "./Banner/Banner";
import BikeHacks from "./BikeHacks/BikeHacks";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructors></PopularInstructors>
            <PopularClasses></PopularClasses>
            <BikeHacks></BikeHacks>
        </div>
    );
};

export default Home;