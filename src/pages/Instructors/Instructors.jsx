import SectionTitle from "../../reusable/sectionTitle";
import InstructorsBanner from "./InstructorsBanner/InstructorsBanner";
import InstructorsTable from "./InstructorsTable/InstructorsTable";

const titleDescription =
  "Get to know our team of experienced and passionate mountain bike instructors. Our instructors are dedicated to sharing their expertise and guiding riders of all levels on exhilarating mountain biking adventures. Join us and learn from the best in the field as we navigate the thrilling world of mountain biking together.";

const Instructors = () => {
  return (
    <div>
      <InstructorsBanner />
      <div className="lg:px-10 pt-16">
        <SectionTitle
          title1="Meet Our"
          title2="Expert Instructors"
          description={titleDescription}
        />
        <InstructorsTable />
      </div>
    </div>
  );
};

export default Instructors;
