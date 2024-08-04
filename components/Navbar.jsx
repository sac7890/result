import Image from "next/image";

const Navabar = ({ isLoggedIn }) => {
  return (
    <>
      <div className="border-solid bg-yellow-600 fill-yellow-600 w-full h-2" />
      <div className="bg-[#003A6A] w-full h-auto my-0 px-80 py-6 rounded-lg hidden md:flex">
        <Image
          src="/logo.png"
          width={688}
          height={10}
          alt="logo"
          className=" "
        />
      </div>
      <div className="bg-[#003A6A] w-full h-auto m-0 p-2 mb-2 rounded-lg md:hidden">
        <Image
          src="/logo2.png"
          width={112}
          height={10}
          alt="logo"
          className=" "
        />
        <p className="w-full font-serif tracking-tight font-[22px] text-white">
          डॉ बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान, जालंधर
          <br />
          Dr B R Ambedkar National Institute of Technology, Jalandhar
        </p>
      </div>
      <div className=" bg-[#222] rounded-lg w-full h-auto border-black flex justify-center items-center">
        <p className="tracking-tight whitespace-nowrap text-[#F7DC6F] text-[22px]  md:text-3xl font-['Trebuchet_MS'] pr-4 md:px-36">
          | ERP - Academics |
        </p>
        {isLoggedIn && (
          <p className="text-white text-lg">
            <span className="text-[#F7DC6F] font-semibold">Welcome</span>{" "}
            21124090, Sachin Chaudhary
          </p>
        )}
      </div>
    </>
  );
};

export default Navabar;
