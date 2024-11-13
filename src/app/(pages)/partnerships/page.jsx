import PageLayout from "@/app/components/pageLayout";
import ServiceDescription from "@/app/components/servicesDescription";
import React from "react";
import { partnerships } from "@/app/utils/constants";

const PartnerShips = () => {
  return (
    <PageLayout title="Partner With AGC">
      <div className="py-8 lg:px-1 px-3 flex justify-center">
        <ServiceDescription
          data={partnerships}
          activeDescription={"Electrical partnerships"}
        />
      </div>
    </PageLayout>
  );
};

export default PartnerShips;
