import HeroSection from "@/components/hero";
import ContactSection from "@/components/pageSections/contactSection";
import FifthSection from "@/components/pageSections/fifthSection";
import FirstSection from "@/components/pageSections/firstSection";
import FourthSection from "@/components/pageSections/fourthSection";
import SecondSection from "@/components/pageSections/secondSection";
import ThirdSection from "@/components/pageSections/thirdSection";
import SectionLayout from "@/components/sectionLayout";
import CustomButton from "@/components/utilities/button";

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
