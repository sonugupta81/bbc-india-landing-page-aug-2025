import Image from "next/image";
import NewsImage from "./assets/images/news.png";
import ArtImage from "./assets/images/art.png";
import PujaraImage from "./assets/images/pujara.png";
import PoliceImage from "./assets/images/police.png";
import CriminalImage from "./assets/images/criminal.png";
import ElcImage from "./assets/images/elc.png";
import ChinaImage from "./assets/images/china.png";
import DogImage from "./assets/images/dog.png";
import PatrolImage from "./assets/images/patrol.png";
import ArticaleImage from "./assets/images/articale.png";
import MangoImage from "./assets/images/mango.png";
import FavImage from "./assets/images/fav.png";
import Pc1Image from "./assets/images/pc1.png";
import Pc2Image from "./assets/images/pc2.png";
import Pc3Image from "./assets/images/pc3.png";
import Pc4Image from "./assets/images/pc4.png";
import Pc5Image from "./assets/images/pc5.png";
import A1Image from "./assets/images/a1.png";
import A2Image from "./assets/images/a2.png";
import A3Image from "./assets/images/a3.png";
import A4Image from "./assets/images/a4.png";
import A5Image from "./assets/images/a5.png";
import A6Image from "./assets/images/a6.png";
import A8Image from "./assets/images/a8.png";
import A9Image from "./assets/images/a9.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* fourth*/}

      <div className="flex gap-3 flex justify-center mt-3">
        <div className="text-red-700 text-2xl font-bold ">
          <p>NEWS</p>
        </div>
        <div className="text-2xl font-semibold">
          <p>Asia</p>
        </div>
      </div>

      <div className="w-full mt-3.5 px-4 md:px-40 hover:cursor-pointer flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 text-justify border-b-1 border-gray-300">
          <p className="text-2xl font-bold hover:underline">
            Heavy rain paralyses India&apos;s financial capital Mumbai
          </p>
          <p className="pt-2 text-sm">
            Nearly 600 people were rescued from a stalled monorail system and
            350 others have been shifted to shelters.
          </p>
          <p className="pt-14 text-xs font-thin">5 hrs ago | Asia</p>
        </div>
        <div className="md:w-2/4">
          <Image
            className="h-auto object-cover w-full"
            src={NewsImage}
            alt="News"
          />
        </div>
        <div className="md:w-1/4 border-b-1 border-gray-300">
          <Image
            className="h-auto w-full"
            src={ArtImage}
            alt="Art"
            height={200}
            width={200}
          />

          <p className="text-xl font-bold hover:underline">
            Why India tops the list of abandoned sailors
          </p>
          <p className="pt-2 text-sm">
            The skulls and other goods were found in massive burial urns near
            keeladi in tamil nadu state.
          </p>
          <p className="pt-2 text-xs font-thin">2 days ago | Asia</p>
        </div>
      </div>

      {/* 5Div to show latest news */}

      <div className="flex px-4 md:px-40 mt-8 flex flex-col md:flex-row gap-4 pb-4 border-b-1 border-gray-500 ">
        <div className="md:w-3/4 flex flex-col md:flex-row gap-4">
          <div className="border-b-1 border-gray-300">
            <Image
              className="h-auto w-full"
              src={PujaraImage}
              alt="Pujara"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              India better pujara ends international career
            </p>
            <p className="pt-2 text-sm">
              India batsman Chrteshwar Pujara announces his retirement form
              international cricket at the age of 37.
            </p>
            <p className="pt-2 pb-2 text-xs font-thin">1 days ago | India</p>
          </div>
          <div className="border-b-1 border-gray-300">
            <Image
              className="h-auto w-full"
              src={PoliceImage}
              alt="Police"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Boy and man held over Indian restaurant &apos;arson attack&apos;
              in London
            </p>
            <p className="pt-2 text-sm">
              Two people remain in a life- threatening condition in hospital
              following the blaze on fridayn night.
            </p>
            <p className="pt-2 pb-2 text-xs font-thin">21 hrs | London</p>
          </div>
          <div className="border-b-1 border-gray-300">
            <Image
              className="h-auto w-full"
              src={ElcImage}
              alt="Elc"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Why India&apos;s Election Commission is Facing a test of
              credibility
            </p>
            <p className="pt-2 text-sm">
              The polling monitor is facing heat over voter roll revision and
              allegations of vote theft, that it has denied.
            </p>
            <p className="pt-2 pb-2 text-xs font-thin">3 days ago | Asia</p>
          </div>
          <div className="border-b-1 border-gray-300">
            <Image
              className="h-auto w-full"
              src={CriminalImage}
              alt="Criminal"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Man who alleged hundreds were raped and buried in Indian tample
              town arresred
            </p>
            <p className="pt-2 text-sm">
              The former temple cleaner&apos;s startling claims threw the town
              of Dharmasthala in Karnataka into turmoil.
            </p>
            <p className="pt-2 pb-2 text-xs font-thin">2 days ago | Asia</p>
          </div>
        </div>
        <div className="md:w-1/4 ">
          <p className="text-xl font-bold hover:underline">
            Beijing Opposes &rdquo;bully&rdquo; US for 50% tariffs on India
          </p>
          <p className="pt-2 text-sm">
            China&apos;s ambassador to India Xu feihong says Beijing
            &rdquo;firmly opposes&rdquo; Washinggton&apos;s steep tariffs on
            Delhi.
          </p>
          <p className="pt-2 text-xs font-thin">3 days ago | world</p>
          <p className="text-xl font-bold hover:underline">
            India top court shelves plan to lock up Delhi one millon street dogs
          </p>
          <p className="pt-2 text-sm">
            The Supreme Court says only dogs with rabies or aggressive behaviour
            should be kept in shelters.
          </p>
          <p className="pt-2 text-xs font-thin">3 days ago | Asia</p>
        </div>
      </div>

      {/* 6 Div to show feature */}

      <div className="flex px-4 md:px-40 mt-8 flex-col md:flex-row gap-4 pb-20 border-b-3 border-black-250 pt-15">
        <div className="w-full md:w-1/5">
          <Image
            className="h-auto w-full"
            src={ChinaImage}
            alt="China"
            height={200}
            width={200}
          />
          <p className="text-xl font-bold hover:underline">
            Beijing opposes bully&apos; US for 50% tariffs on India
          </p>
          <p className="pt-2 text-sm">
            China&apos;s ambassador to India Xu Feihong says Beijing
            &rdquo;firmly opposes&rdquo; Washington&apos;s steep tariffs on
            Delhi.
          </p>
        </div>
        <div className="w-full md:w-1/5">
          <Image
            className="h-auto w-full"
            src={DogImage}
            alt="Dog"
            height={200}
            width={200}
          />
          <p className="text-xl font-bold hover:underline">
            India top court shelves plan to lock up Delhi&apos;s one million
            street dogs
          </p>
          <p className="pt-2 text-sm">
            The Supreme Court says only dogs with rabies or aggressive behaviour
            should be kept in shelters.
          </p>
        </div>
        <div className="w-full md:w-1/5">
          <Image
            className="h-auto w-full"
            src={PatrolImage}
            alt="Patrol"
            height={200}
            width={200}
          />
          <p className="text-xl font-bold hover:underline">
            India&apos;s biofuel drive is saving billions but also sparking
            worries
          </p>
          <p className="pt-2 text-sm">
            Critics say many vehicles in India are not biofuel-compliant, and
            its use could put engines at risk. The government denies this.
          </p>
        </div>
        <div className="w-full md:w-1/5">
          <Image
            className="h-auto w-full"
            src={ArticaleImage}
            alt="Articale"
            height={200}
            width={200}
          />
          <p className="text-xl font-bold hover:underline">
            Why India tops the list of abandoned sailors
          </p>
          <p className="pt-2 text-sm">
            Around 900 Indian sailors were abandoned on ships across the world
            in 2024.
          </p>
        </div>
        <div className="w-full md:w-1/5">
          <Image
            className="h-auto w-full"
            src={MangoImage}
            alt="Mango "
            height={200}
            width={200}
          />
          <p className="text-xl font-bold hover:underline">
            Are mangoes good for diabetes?
          </p>
          <p className="pt-2 text-sm">
            Two Indian trials suggest that controlled mango consumption, instead
            of carbs, may improve blood sugar in diabetes.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-40 py-8 md:py-20 font-bold text-lg hover:underline hover:cursor-pointer">
        <p>Beijing opposes &apos;bully&apos; US for 50% tariffs on India</p>
      </div>
      <div className="px-4 md:px-40 font-bold text-lg">
        <p className="border-t-3">FEATURES</p>
        <div className="flex flex-col md:flex-row gap-4 pt-8 pb-8">
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={ChinaImage}
              alt="China"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Beijing opposes &apos;bully&apos; US for 50% tariffs on India
            </p>
            <p className="pt-2 text-sm">
              China&apos;s ambassdor to india Xu Feihong says Beijing
              &rdquo;firmly opposes&rdquo; Washinggton&apos;s steep tariffs on
              Delhi.
            </p>
          </div>
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={DogImage}
              alt="Dog"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              India top court shelves plan to lock up Delhi&apos;s one million
              street dogs
            </p>
            <p className="pt-2 text-sm">
              The Supreme Court says only dogs with rabies or aggressive
              behaviour should be kept in shelters.
            </p>
          </div>
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={PatrolImage}
              alt="Patrol"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              India&apos;s biofuel drive is saving billions but also sparking
              worries
            </p>
            <p className="pt-2 text-sm">
              Critics say many vehicles in India are not biofuel-compliant, and
              its use could put engines at risk. The government denies this.
            </p>
          </div>
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={ArticaleImage}
              alt="Articale"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Why India tops the list of abandoned sailors
            </p>
            <p className="pt-2 text-sm">
              Around 900 Indian sailors were abandoned on ships across the world
              in 2024.
            </p>
          </div>
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={MangoImage}
              alt="Mango"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Are mangoes good for diabetes?
            </p>
            <p className="pt-2 text-sm">
              Two Indian trials suggest that controlled mango consumption,
              instead of carbs, may improve blood sugar in diabetes.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-40 font-bold text-lg">
        <p className="border-t-3">WATCH</p>
        <div className="flex flex-col md:flex-row gap-4 pt-8 pb-8">
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={Pc1Image}
              alt="Pc1"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Heartbreaking search for missing children after India flash floods
            </p>
            <p className="pt-2 text-sm">
              Veer Singh and Kali Devi were away buying groceries when flash
              floods hit their village on Tuesday.
            </p>
          </div>
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={Pc2Image}
              alt="Pc2"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Terrifying video shows flash flood engulfing riverside village in
              India
            </p>
            <p className="pt-2 text-sm">
              Dozens are feared trapped after a cloudburst triggered floods in
              northern India&apos;s Uttarakhand state.
            </p>
          </div>
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={Pc3Image}
              alt="Pc3"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Tesla: Milestone as first showroom opens in India
            </p>
            <p className="pt-2 text-sm">
              The opening of Tesla&apos;s first showroom in India is a milestone
              but not a breakthrough for the country&apos;s EV sector.
            </p>
          </div>
          <div className="md:w-1/5">
            <Image
              className="h-auto w-full"
              src={Pc4Image}
              alt="Pc4"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Air India report may lead to answers, but not closure for families
            </p>
            <p className="pt-2 text-sm">
              As experts analyse the findings of the report, it provides little
              comfort to the families who lost their loved ones.
            </p>
          </div>
          <div className=" md:w-1/5">
            <Image
              className="h-auto w-full"
              src={Pc5Image}
              alt="Mango"
              height={200}
              width={200}
            />
            <p className="text-xl font-bold hover:underline">
              Abhishek Bachchan: Cricket, India and Me
            </p>
            <p className="pt-2 text-sm">
              Award-winning Bollywood actor and film producer Abhishek Bachchan
              on his love of cricket and his involvement in the new European T20
              Premier League.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-40 font-bold text-lg pb-8">
        <p className="border-t-3">LATEST UPDATE</p>
        <div className="md:mx-30 pt-4 flex flex-col md:flex-row gap-5 pb-8 border-b-1 border-gray-300 ">
          <div className=" font-thin text-sm md:w-1/8 text-right">
            4 hrs ago
          </div>
          <div className="md:w-5/8  ">
            <p className="text-2xl font-bold hover:underline hover:cursor-pointer">
              Gameling find rareJurassic-era fossil in Indian village
            </p>
            <p className="pt-2 text-sm">
              Site fossil known as a phytosaur, is likely to be more then 200
              million years old.
            </p>
          </div>
          <div className="md:w-2/8">
            <Image
              className="md:h-30 w-full"
              src={A2Image}
              alt="A1"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="md:mx-30 pt-4 flex flex-col md:flex-row gap-5 pb-8 border-b-1 border-gray-300 ">
          <div className="font-thin text-sm md:w-1/8 text-right">4 hrs ago</div>
          <div className="md:w-5/8  ">
            <p className="text-2xl font-bold hover:underline hover:cursor-pointer">
              Trump adviser call Ukraine conflict &apos;modi&apos;s war&apos; as
              US tariffs on india riverside
            </p>
            <p className="pt-2 text-sm">
              Trade Adviser Peter Navarro&apos;s comments came hours after US
              tariffs of 50% on indian goods kicked in.
            </p>
          </div>
          <div className="md:w-2/8">
            <Image
              className="md:h-30 w-full"
              src={A1Image}
              alt="A2"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="md:mx-30 pt-4 flex flex-col md:flex-row gap-5 pb-8 border-b-1 border-gray-300 ">
          <div className="font-thin text-sm md:w-1/8 text-right">4 hrs ago</div>
          <div className="md:w-5/8  ">
            <p className="text-2xl font-bold hover:underline hover:cursor-pointer">
              Gameling find rareJurassic-era fossil in Indian village
            </p>
            <p className="pt-2 text-sm">
              Site fossil known as a phytosaur, is likely to be more then 200
              million years old.
            </p>
          </div>
          <div className="md:w-2/8">
            <Image
              className="md:h-30 w-full"
              src={A2Image}
              alt="A1"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="md:mx-30 pt-4 flex flex-col md:flex-row gap-5 pb-8 border-b-1 border-gray-300 ">
          <div className="font-thin text-sm md:w-1/8 text-right">4 hrs ago</div>
          <div className="md:w-5/8  ">
            <p className="text-2xl font-bold hover:underline hover:cursor-pointer">
              Trump adviser call Ukraine conflict &apos;modi&apos;s war&apos; as
              US tariffs on india riverside
            </p>
            <p className="pt-2 text-sm">
              Trade Adviser Peter Navarro&apos;s comments came hours after US
              tariffs of 50% on indian goods kicked in.
            </p>
          </div>
          <div className="md:w-2/8">
            <Image
              className="md:h-30 w-full"
              src={A1Image}
              alt="A2"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
