import { AiFillCloseSquare } from "react-icons/ai";
const register = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-black h-screen ">
      <AiFillCloseSquare
        color="white"
        size={40}
        className="fixed top-4 right-4"
      />

      <div className="w-2/6">
        <div className="flex justify-center gap-2 pt-27">
          <div className="bg-white px-2 pb-0.5 text-3xl font-bold">
            <p>B</p>
          </div>
          <div className="bg-white px-2 pb-0.5 text-3xl font-bold">
            <p>B</p>
          </div>
          <div className="bg-white px-2 pb-0.5 text-3xl font-bold">
            <p>C</p>
          </div>
        </div>
        <div className="text-white flex justify-center pt-10 font-bold text-3xl pb-10">
          <p className="text-center">
            Enter your email address to sign in or create an account
          </p>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            id="Email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="Email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email
          </label>
        </div>
      </div>
      <div className="text-white font-bold pt-8">
        <p className=" bg-blue-600 px-55.5 pb-3 pt-3 hover:bg-blue-800 hover:cursor-pointer">
          Continue
        </p>
        <p className="text-base font-bold text-blue-500 pt-7 px-5 hover:cursor-pointer underline ">
          Get help signing in
        </p>
      </div>
    </div>
  );
};

export default register;
