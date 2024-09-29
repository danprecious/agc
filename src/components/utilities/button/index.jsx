import Link from "next/link";


const CustomButton = ({ children, text, href }) => {
  return (
    <Link href={href} className="flex py-3 px-8 items-center rounded-3xl max-w-[13em] bg-black text-white cursor-pointer rounded-2x">
      {children}
      <button className="ml-2 text-xs">{text}</button>
    </Link>
  );
};

export default CustomButton;
