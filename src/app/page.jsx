import HeroSection from "@/app/components/hero";
import ContactSection from "@/app/components/pageSections/contactSection";
import FifthSection from "@/app/components/pageSections/fifthSection";
import FirstSection from "@/app/components/pageSections/firstSection";
import FourthSection from "@/app/components/pageSections/fourthSection";
import SecondSection from "@/app/components/pageSections/secondSection";
import ThirdSection from "@/app/components/pageSections/thirdSection";
import SectionLayout from "@/app/components/sectionLayout";
import CustomButton from "@/app/components/utilities/button";

const Homepage = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <SectionLayout text="Our Specialization">
          <FirstSection />
        </SectionLayout>
        <SectionLayout text="Own Properties Easily With Us">
          <SecondSection />
        </SectionLayout>
        <SectionLayout text="Partner With Us">
          <ThirdSection />
        </SectionLayout>
        <SectionLayout text="What Our Clients Say">
          <FifthSection />
        </SectionLayout>
        <SectionLayout text="Do Business With Us Today">
          <ContactSection />
        </SectionLayout>
      </div>
    </>
  );
};

export default Homepage;
