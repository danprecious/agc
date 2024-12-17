import PageLayout from "@/app/components/pageLayout";
import Image from "next/image";
import images from "../../components/utilities/data/images.json";
import SectionLayout from "@/app/components/sectionLayout";
import ContactSection from "@/app/components/pageSections/contactSection";

const AboutPage = () => {
  return (
    <div className="  justify-center ">
      <div className="lg:px-[10.5rem] px-4">
        <div>
          <h1 className="font-black lg:text-[5rem] text-[2rem]">
            Excellence in every detail,{" "}
            <span className="text-amber-900">customer's Taste...</span>
          </h1>
        </div>

        {/* <div className="my-2 lg:w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi
        qui voluptatibus et fugit consequatur distinctio at odit nulla vero,
        consequuntur a animi, quidem est eligendi sunt veritatis itaque quaerat
        non!
      </div> */}

        <div className="my-8 ">
          <h2 className="font-bold text-[1.1rem] lg:text-[1.5rem]">
            Our Mission
          </h2>
          <p>
            Our mission is to provide our clients the best of their demands with
            truth and honesty. At AGC, we deliver powerful and best building
            architecture, construction, and quality electrical services on any
            type of building with an affordable price. We aim to satisfy your
            needs on sales of landed properties, vehicles and other properties
            in the quantity and best quality demanded.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:my-32 my-8">
          <div className="lg:w-[50%] w-full lg:mr-8">
            <div className="h-[25em] rounded-lg overflow-hidden">
              <Image
                width={1000}
                height={1000}
                alt="hero-image"
                src={images.aboutPage1}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className=" lg:w-[50%] w-full my-4">
            <h2 className="font-bold text-[1.1rem] lg:text-[1.5rem] my-4">
              Our Story
            </h2>
            <p>
              AGC was founded November 2018 by Prayer Ake, who started with the
              electrical services before expanding it into different services on
              construction and sales. We have made progress so far with the
              feedback of our customers confirming AGC' services positively.
            </p>
          </div>
        </div>

        <div className="my-8">
          <h1 className="font-bold text-[1.1rem] my-4">Core Values</h1>
          <ul className="px-6">
            <li className="list-disc my-2">
              <h3 className="font-bold">Integrity</h3>
              <p>We are transparent and honest in every client relationship.</p>
            </li>
            <li className="list-disc my-2">
              <h3 className="font-bold">Innovation</h3>
              <p>
                We stay ahead of trends to make sure we deliver what is majorly
                different bringing amazement and customer's joy.
              </p>
            </li>
            <li className="list-disc my-2">
              <h3 className="font-bold">Customer-centric</h3>
              <p>
                Your joy, success and positive testimonies is our concern and we
                tailor everything to meet your goals.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:my-32 my-8 ">
          <div className=" lg:w-[50%] w-full my-4">
            <h2 className="font-bold text-[1.1rem] lg:text-[1.5rem] my-4">
              What sets us apart
            </h2>
            <p>
              We offer customers demanded services on the best quality that
              stands the test of time. We also educate our clients on the
              advantage and disadvantage of some demands they might want from
              AGC services
            </p>
          </div>
          <div className="lg:w-[50%] w-full lg:ml-8">
            <div className="h-[25em]  rounded-lg overflow-hidden">
              <Image
                width={1000}
                height={1000}
                alt="hero-image"
                src={images.aboutPage2}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
        <SectionLayout text="Do Business With Us Today">
          <ContactSection />
        </SectionLayout>
    </div>
  );
};

export default AboutPage;
