import Link from "next/link";

const CustomButton = ({ children, text, href }) => {
  return (
    <Link
      href={href}
      className="flex py-5 px-12 transition-all duration-700 items-center rounded-3xl max-w-[13em] bg-amber-900 hover:px-14  hover:bg-black hover:text-blac hover:animate-in  text-white cursor-pointer rounded-2x"
    >
      <button className="text-xs">{text}</button>
    </Link>
  );
};

export default CustomButton;
