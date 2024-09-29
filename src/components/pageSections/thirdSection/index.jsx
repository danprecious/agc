import CustomButton from "@/components/utilities/button";
import { BiLogoSketch, BiSolidContact } from "react-icons/bi";
import { FaPhone, FaPhoneAlt, FaPhoneSlash } from "react-icons/fa";

const ThirdSection = () => {
  const partnerships = [
    {
      icon: "",
      text: "lorem 2",
    },
    {
      icon: "",
      text: "lorem 2",
    },
    {
      icon: "",
      text: "lorem 2",
    },
  ];

  return (
    <section className="">
      <div className="flex justify-center">
        <p className="text-center md:w-[70%] py-3">
          Join forces with a team dedicated to delivering exceptional results.
          Whether you’re a contractor, investor, or property owner, our
          expertise and resources ensure every collaboration is successful.
          Together, we’ll create lasting value and drive mutual growth through
          innovation and commitment. Let’s build something great together.
        </p>
      </div>
      <div className="custom-grid py-8">
        {partnerships.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[12em] h-[10em] bg-teal-500 rounded-lg"
            ></div>
          );
        })}
      </div>
      <div className="flex justify-center py-6">
        <CustomButton href="/partnerships" text="See patnerships" />
      </div>
    </section>
  );
};

export default ThirdSection;
