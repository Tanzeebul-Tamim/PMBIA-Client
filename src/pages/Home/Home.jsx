import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructors></PopularInstructors>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;