import useTitle from "../../Helmet/useTitle";
import SectionTitle from "../../reusable/sectionTitle";
import ClassesBanner from "./ClassesBanner/ClassesBanner";
import ClassesTable from "./ClassesTable/ClassesTable";

const titleDescription =
  "Get to know our team of experienced and passionate mountain bike instructors. Our instructors are dedicated to sharing their expertise and guiding riders of all levels on exhilarating mountain biking adventures. Join us and learn from the best in the field as we navigate the thrilling world of mountain biking together.";

const Classes = () => {
  useTitle('| Classes')

  return (
    <div>
      <ClassesBanner />
      <div className="lg:px-10 pt-16">
        <SectionTitle
          title1="Meet Our Skilled"
          title2="Mtb Instructors"
          textAlign={'text-end'}
          description={titleDescription}
        />
        <ClassesTable />
      </div>
    </div>
  );
};

export default Classes;
