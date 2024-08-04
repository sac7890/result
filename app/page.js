"use client";

import { useRouter } from "next/navigation";
import Navabar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const username = 21124090;
  const password = 12345678;

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (data.username == username && data.password == password) {
      router.push("/result");
    } else {
      console.log(data.username + username + data.password + password);
      alert("wrong password");
      router.push("/");
    }
  };

  return (
    <>
      <Navabar isLoggedIn={false} />
      <div className="flex justify-center items-center py-20 ">
        <div className=" border-[#337ab7] border-2 w-5/6 md:w-2/6 rounded-lg">
          <div className="bg-[#337ab7] py-2">
            {" "}
            <p className=" text-white font-semibold text-2xl px-7">Login</p>
          </div>
          <Image
            src="/login_logo.png"
            width="72"
            height="72"
            alt="login"
            className=" m-5"
          />
          <form action="" method="post">
            <div className=" px-3 font-semibold">
              <label for="username">Username:</label>
              <br></br>
              <input
                type="text"
                className=" border-2 rounded-lg border-[#D4E2D4] w-full my-2 mx-1 py-1 px-5"
                id="username"
                name="username"
                placeholder="Enter Username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className=" px-3 font-semibold">
              <label for="pwd">Password:</label>
              <input
                type="password"
                className=" border-2 rounded-lg border-[#D4E2D4] w-full my-2 mx-1 py-1 px-5"
                id="pwd"
                name="password"
                value={data.password}
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>
            <div className=" text-center">
              <button
                type="submit"
                name="login"
                className=" bg-[#337ab7] px-3 py-2 my-3 rounded-lg border-2 border-[#2e6da4] text-white hover:bg-[#337ae9]"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
            <br />
            <label className=" text-[14px] mb-4">
              <a
                className=" text-[#990000] text-lg font-semibold mx-3"
                href="https://v1.nitj.ac.in/erp/forgot_password"
              >
                Forgot Password?
              </a>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
