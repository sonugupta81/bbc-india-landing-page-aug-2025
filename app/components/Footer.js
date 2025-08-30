import Image from "next/image";
import TwitterImage from "../assets/images/twitter.png";
import FacebookImage from "../assets/images/facebook.png";
import InstagramImage from "../assets/images/instagram.png";
import TiktokImage from "../assets/images/tiktok.png";
import InImage from "../assets/images/in.png";
import YoutubeImage from "../assets/images/youtube.png";
const Footer = () => {
  return (
    <>
      <div className="px-4 md:px-40 border-t-2 ">
        <div className="pt-5 flex gap-1 gap-3 ">
          <div className="bg-black text-white text-4xl font-bold pb-1.5 px-3">
            <p>B</p>
          </div>
          <div className="bg-black text-white text-4xl font-bold pb-1.5 px-3">
            <p>B</p>
          </div>
          <div className="bg-black text-white text-4xl font-bold pb-1.5 px-3">
            <p>C</p>
          </div>
        </div>
        <div className="pt-6 pb-10 flex gap-4 flex-wrap ">
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Home
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            News
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Sport
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Business
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Innovation
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Culture
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Arts
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Travel
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Earth
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Audio
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Video
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Live
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            Weather
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            BBC Shop
          </p>
          <p className="font-semibold hover:underline hover:cursor-pointer text-sm">
            BritBox
          </p>
        </div>
        <div className="flex gap-1 md:gap-4 border-t-1 border-gray-200 pt-4">
          <p className="font-bold">Follow BBC on :</p>
          <div className="flex hover:scale-110">
            <Image
              className="h-auto w-full"
              src={TwitterImage}
              alt="Twitter"
              height={200}
              width={200}
            />
          </div>
          <div className="flex hover:scale-110">
            <Image
              className="h-auto w-full"
              src={FacebookImage}
              alt="Facebook"
              height={200}
              width={200}
            />
          </div>
          <div className="flex hover:scale-110">
            <Image
              className="h-auto w-full"
              src={InstagramImage}
              alt="Instagram"
              height={200}
              width={200}
            />
          </div>
          <div className="flex hover:scale-110">
            <Image
              className="h-auto w-full"
              src={TiktokImage}
              alt="Tiktok"
              height={200}
              width={200}
            />
          </div>
          <div className="flex hover:scale-110">
            <Image
              className="h-auto w-full"
              src={InImage}
              alt="In"
              height={200}
              width={200}
            />
          </div>
          <div className="flex hover:scale-110">
            <Image
              className="h-auto w-full"
              src={YoutubeImage}
              alt="Youtube"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="pt-4 flex flex-wrap gap-4">
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Terms of use
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            About the BBc
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Cookies
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Accessibility Help
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Contact the BBC
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Advertise with us
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Do not share or sell my info
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            BBC.com Help & FAQs
          </p>
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Archive
          </p>
        </div>
        <div className="pt-4 pb-15 flex gap-2">
          <p className="text-xs font-smibold hover:underline hover:cursor-pointer">
            Copyright 2025 BBC.All right reserved.The BBC is not reponsible for
            the contant of external sites.
          </p>
          <p className="text-xs font-semibold hover:underline hover:cursor-pointer">
            Read about our approach to external linking.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
