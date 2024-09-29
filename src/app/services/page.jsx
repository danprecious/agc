import PageLayout from "@/components/pageLayout";
import ServiceDescription from "@/components/servicesDescription";
import CustomButton from "@/components/utilities/button";
import { services } from "@/utils/constants";

const SecondSection = () => {
  return (
    <PageLayout title="Our Services">
      <div className="py-8 lg:px-1 px-3 flex justify-center">
        <ServiceDescription
          data={services}
          activeDescription={"Electrical Works"}
        />
      </div>
    </PageLayout>
  );
};

export default SecondSection;
