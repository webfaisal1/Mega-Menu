import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Links } from "./Links";
import cloud from '../../assets/images/logo-cloud-32-color (2).svg'

const NavLinks = (open, setOpen) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  console.log(Links[0].sublinks[0].sublink);

  return (
    <Fragment>
      {Links.map((link, i) => (
        <div key={i}>
          <div className="pr-4 md:pr-1 lg:pr-0 text-left md:cursor-pointer group">
            <h1
              className={` flex justify-start  space-x-2 items-center  group ${
                open ? "text-[#222222] text-[14px] my-3 p-3" : "text-[#222222]"
              }`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <ul>
                <li className="font-medium cursor-pointer">{link.name}</li>
              </ul>
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {/* Hover Content */}
            {link.submenu && (
              <div>
                <div className="absolute w-[900px] left-1 top-14 hidden duration-500 transition-opacity group-hover:md:block hover:md:block bg-white shadow-2xl rounded-lg p-5 ">
                  <div className="  grid grid-cols-3 gap-3">
                    {/* Elastic Cloud */}
                    <div>
                      <div className="flex items-center ">
                        <img
                          className="mr-[16px] w-[30px] h-[30px] "
                          src={cloud}
                          alt=""
                        />
                        <h1 className="text-[#6B6F7F] pb-[8px] text-[14px] font-bold">
                          ELASTIC CLOUD
                        </h1>
                      </div>
                      {Links[0].sublinks[0].sublink.map((slink, i) => (
                        <ul>
                          <li key={i} className="my-2.5">
                            <h1 className="text-[24px] font-bold pb-[16px] leading-[28px]">
                              {slink.heading}
                            </h1>

                            <h3 className="leading-[28px] text-[14px] text-[#343741]">
                              {slink.des}
                            </h3>

                            <h5 className="text-[#07c] text-[14px] pt-[16px] pb-[8px] font-semibold hover:underline  ">
                              {slink.learn}{" "}
                            
                            </h5>
                            
                            <h2 className="text-[#6B6F7F] text-[14px] font-bold pb-[8px] ">
                              {slink.additional}
                            </h2>
                            <h4 className="text-[14px]  font-semibold text-[#07c] hover:underline pb-[8px] ">
                              {slink.pricing}
                            </h4>
                            <h4 className="text-[14px] font-semibold pb-[8px] text-[#07c] hover:underline">
                              {slink.downloads}
                            </h4>
                            <h4 className="text-[14px] font-semibold pb-[8px] text-[#07c] hover:underline">
                              {slink.integrations}
                            </h4>
                          </li>
                        </ul>
                      ))}
                    </div>
                    {/* USE ELASTIC FOR */}
                    <div>
                      <h1 className="text-[#6B6F7F] pb-[8px] text-[14px] font-bold">
                        USE ELASTIC FOR
                      </h1>
                      {Links[0].sublinks[1].sublink.map((slink, i) => (
                        <ul>
                          <li key={i} className="  my-2.5">
                            <Link to={slink.link}>
                              <div className="flex hover:bg-[#e8f6fe] hover:text-[#0077CC] ">
                                <div className="flex items-center mr-[16px]">
                                  <img
                                    className="w-[30px] h-[30px]"
                                    src={slink.img}
                                    alt=""
                                  />
                                </div>

                                <div>
                                  <h2 className="text-[16px] font-semibold mb-[4px] leading- [24px]">
                                    {" "}
                                    {slink.heading}{" "}
                                  </h2>

                                  <h3 className="font-normal text-[14px] text-[#343741] ">
                                    {" "}
                                    {slink.des}{" "}
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      ))}
                    </div>
                    {/*  WHAT'S NEW */}
                    <div>
                      <h1 className="text-[#6B6F7F] pb-[8px] text-[14px] font-bold">
                        WHAT'S NEW
                      </h1>
                      {Links[0].sublinks[2].sublink.map((slink, i) => (
                        <ul>
                          <li key={i} className="  my-2.5">
                            <Link to={slink.link}>
                              <div className="hover:bg-[#e8f6fe] hover:text-[#0077CC] ">
                                <h2 className="text-[16px] font-semibold mb-[4px] leading- [24px]">
                                  {" "}
                                  {slink.heading}{" "}
                                </h2>

                                <h3 className="font-normal text-[14px] text-[#343741] ">
                                  {" "}
                                  {slink.des}{" "}
                                </h3>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      ))}
                    </div>

                    {/* {link.sublinks.map((mysublinks, i) => (
                      <div key={i}>
                        <h1 className="text-[#6B6F7F] pb-[8px] text-[14px] font-bold">
                          {mysublinks.Head}
                        </h1>

                        {mysublinks.sublink.map((slink, i) => (
                          <ul>
                            <li key={i} className="  my-2.5">
                              <Link to={slink.link}>
                                <div className="flex hover:bg-[#e8f6fe] hover:text-[#0077CC] ">
                                  <div className="flex items-center mr-[16px]">
                                    <img
                                      className="w-[40px] h-[40px]"
                                      src={slink.img}
                                      alt=""
                                    />
                                  </div>

                                  <div>
                                    <h2 className="text-[16px] font-semibold mb-[4px] leading- [24px]">
                                      {" "}
                                      {slink.heading}{" "}
                                    </h2>

                                    <h3 className="font-normal text-[14px] text-[#343741] ">
                                      {" "}
                                      {slink.des}{" "}
                                    </h3>
                                  </div>
                                </div>
                              </Link>

                              <h5 className="text-[#07c] text-[14px] font-semibold hover:underline  ">
                                {slink.learn}{" "}
                              </h5>
                              <h2 className="text-[#6B6F7F] text-[14px] font-bold  ">
                                {slink.additional}
                              </h2>
                              <h4 className="text-[14px]  font-semibold text-[#07c] hover:underline ">
                                {slink.pricing}
                              </h4>
                              <h4 className="text-[14px] font-semibold text-[#07c] hover:underline">
                                {slink.downloads}
                              </h4>
                              <h4 className="text-[14px] font-semibold text-[#07c] hover:underline">
                                {slink.integrations}
                              </h4>
                              
                            </li>
                          </ul>

                          
                          
                        ))}
                      </div>
                    ))} */}
                  </div>
                  <h1 className="text-center text-[#343741] text-[14px] font-semibold ">
                    View Platform overview
                  </h1>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, i) => (
              <div key={i}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-1 pl-7  font-semibold md:pr-0 text-primary pr-5 flex justify-start space-x-2 items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline text-primary">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, i) => (
                      <li
                        onClick={() => setOpen(false)}
                        key={i}
                        className="py-3 pl-14"
                      >
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default NavLinks;
