import PageLayout from "@/app/components/pageLayout";
import ServiceDescription from "@/app/components/servicesDescription";
import React from "react";
import { partnerships } from "@/app/utils/constants";
import SectionLayout from "@/app/components/sectionLayout";
import ContactSection from "@/app/components/pageSections/contactSection";

const PartnerShips = () => {
  return (
    <PageLayout title="Partner With AGC">
      <div className="py-8 lg:px-1 px-3 flex justify-center">
        <ServiceDescription
          data={partnerships}
          activeDescription={"Electrical partnerships"}
        />
      </div>
      <SectionLayout text="Do Business With Us Today">
          <ContactSection />
        </SectionLayout>
    </PageLayout>
  );
};

export default PartnerShips;
