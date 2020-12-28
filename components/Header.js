import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";



const Header = () => {
  const names = ["services", "edi", "team", "faq", "blog"];
  const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "256px";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0px";
  };
  return (
    <div>
      <header className="flex ml-10">
        <Link href="#" className="">
          <a className="px-2 uppercase font-display font-bold fixed left-2 top-4 md:hidden">
          <img src='/images/svg/IDC-Nav-Logo.svg' /> 
          </a>
        </Link>
        <ul className="xs:hidden md:flex">
          <Link href="#" className="">
            <a className="px-2 uppercase font-proxima-nova-altblack font-bold">
             <img src='/images/svg/IDC-Nav-Logo.svg' /> 
            </a>
          </Link>
          {names.map((index) => (
            <li>
              <Link href="#" className="">
                <a className="px-4 uppercase font-body font-bold font-display">
                  {index}
                </a>
              </Link>
            </li>
          ))}
          <Link href="#" className="">
            <a className="px-4 py-1 text-1xl uppercase font-body font-bold">
              <FaEnvelope />
            </a>
          </Link>
        </ul>
      </header>

      <div className="bg-sidebar fixed top-4 right-4 px-4 cursor-pointer py-2 border-none text-2xl text-white md:hidden">
        <button className="text-2xl" onClick={openSidebar}>
          {" "}
          ={" "}
        </button>
      </div>

      <div
        className="h-full duration-500 w-0 bg-sidebar fixed top-0 right-0 py-20 overflow-x-hidden z-10  lg:hidden"
        id="mySidebar"
      >
        <a
          className="absolute top-4 right-6 text-4xl font-bold text-sidebar-text cursor-pointer duration-300"
          onClick={closeSidebar}
        >
          {" "}
          X{" "}
        </a>
        {names.map((index) => (
          <Link href="#">
            <a className="block uppercase pr-2 pl-8 py-2 text-2xl  font-display text-sidebar-text">
              {index}{" "}
            </a>
          </Link>
        ))}
      </div>

      <div
        className="h-full duration-500 w-0 bg-sidebar fixed top-0 right-0 py-20 overflow-x-hidden z-10  lg:hidden"
        id="mySidebar"
      >
        <a
          className="absolute top-4 right-6 text-4xl font-bold text-sidebar-text font-display cursor-pointer duration-300"
          onClick={closeSidebar}
        >
          {" "}
          X{" "}
        </a>
        {names.map((index) => (
          <Link href="#">
            <a className="block uppercase font-Proxima-nova pr-2 pl-8 py-2 text-2xl text-sidebar-text">
              {index}{" "}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
