import Image from "next/image";
import MenuImage from "../assets/images/hamburger.png";

const Navbar = () => {
  return (
    <>
      {/* Main Navbar */}

      <div className=" border-b border-gray-200 p-4 flex justify-between">
        <Image src={MenuImage} alt="Menu" height={30} width={30} />

        <div className=" flex gap-1 md:gap-4">
          <div className="bg-black text-white md:text-4xl font-bold pt-0.5 px-2 md:pb-1.5 md:px-3">
            <p>B</p>
          </div>
          <div className="bg-black text-white md:text-4xl font-bold pt-0.5 px-2 md:pb-1.5 md:px-3">
            <p>B</p>
          </div>
          <div className="bg-black text-white md:text-4xl font-bold pt-0.5 px-2 md:pb-1.5 md:px-3">
            <p>C</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-black text-white pt-0.5 pb-1.5 px-3 font-semibold hover:bg-gray-600 hover:cursor-pointer">
            Register
          </button>
          <button className=" pt-0.5 pb-1.5 px-3 font-semibold hover:bg-gray-600 hover:text-white hover:cursor-pointer">
            Sign-in
          </button>
        </div>
      </div>

      {/* Secondary Navbar */}

      <div className="px-4 border-b border-gray-200 flex justify-center flex-wrap">
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Home
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          News
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Sport
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Business
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Innovation
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Culture
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Arts
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Travel
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Earth
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Audio
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Video
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer">
          Live
        </button>
      </div>

      {/* third navbar*/}

      <div className="px-4 border-b border-gray-200 flex justify-center flex-wrap">
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          Israel-Gaza War
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          War in Ukraine
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          US & Canada
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          UK
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          Africa
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          Asia
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          Australia
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          Europe
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          Latin America
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          Middle East
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          In Pictures
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          BBC InDepth
        </button>
        <button className=" pt-1 pb-2 px-1.5 font-semibold hover:bg-gray-300 hover:cursor-pointer text-xs">
          BBC Verify
        </button>
      </div>
    </>
  );
};

export default Navbar;
