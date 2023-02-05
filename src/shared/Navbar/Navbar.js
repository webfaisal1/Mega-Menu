import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Platform from "./Platform";
import logo from "../../assets/images/elastic-logo.svg";
import UseCases from "./UseCases";
import Customers from "./Customers";
import Resources from "./Resources";
import Company from "./Company";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <nav className=" bg-[#fff]  w-full h-[75px] relative top-0 bottom-0 right-0 left-0 z-[10] block border-b border-[#e6ebf2]">
        <div className=" container flex justify-between items-center relative  ">
          <div className="z-50 md:w-auto w-full flex justify-between items-center cursor-pointer">
            <Link className="w-[104px] h-[36px]" to="/">
              <img src={logo} alt="logo" />
            </Link>

            <div
              className="text-3xl md:hidden text-secondary "
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>

          <div className="md:flex hidden  items-center justify-center relative right-[110px] ">
            <Platform />

            <UseCases />
            <ul>
              <li className="text-[#222222] text-[14px] px-2 font-semibold ">
                Pricing
              </li>{" "}
            </ul>
            <Customers />
            <Resources />
            <Company />
          </div>
          <div className="md:block hidden">
            <div className="flex items-center  gap-x-3 ">
              <h1 className="text-[#535966] font-semibold text-[14px]  ">
                Contact
              </h1>

              <h1 className="text-[#535966] font-semibold text-[14px]  ">
                Login
              </h1>
              <button className="bg-[#0077cc] font-semibold  text-[14px]  border-2 px-[24px] py-[8px]  text-white rounded-lg">
                Try Free
              </button>
              <svg
                class="h-8 w-8 fill-current text-[#0077cc]"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </div>
          {/* Mobile nav */}
          <div
            className={`md:hidden fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 
        duration-500 ${open ? "left-0" : "right-[-100%] "} `}
          >
            <Platform className="px-4" setOpen={setOpen} open={open} />

            <UseCases className="px-4" setOpen={setOpen} open={open} />

            <ul className="pr-4" onClick={() => setOpen(false)}>
              <Link to="/">
                <li className="text-[14px] md:text-[16px] my-2 p-3 font-medium text-primary cursor-pointer">
                  Pricing
                </li>
              </Link>
            </ul>
            <Platform className="px-4" setOpen={setOpen} open={open} />
            <Customers className="px-4" setOpen={setOpen} open={open} />
            <Resources className="px-4" setOpen={setOpen} open={open} />
            <Company className="px-4" setOpen={setOpen} open={open} />
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
