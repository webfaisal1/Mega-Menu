import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useCaseData } from "./Links";
import feature from '../../assets/images/customer-experience-gic-608x369.png'

const UseCases = (open, setOpen) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <Fragment>
      {useCaseData.map((link, i) => (
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
                <div className="absolute w-[870px] left-18 top-16 hidden duration-500 transition-opacity group-hover:md:block hover:md:block bg-white shadow-2xl rounded-lg p-5 ">
                  <div className="  grid grid-cols-3 gap-2">
                    {/* Elastic Cloud */}
                    <div>
                      <h1 className="text-[#6B6F7F] pb-[8px] text-[14px] font-bold">
                        By Topic
                      </h1>

                      {useCaseData[0]?.sublinks[0]?.sublink?.map((slink, i) => (
                        <ul>
                          <li key={i} className="my-1">
                            <Link to={slink.link}>
                              <div className=" hover:bg-[#e8f6fe] py-[8px] px-[16px] hover:text-[#0077CC] ">
                                <h1 className="text-[16px] font-bold mb-[4px] leading-[22px]">
                                  {slink.heading}
                                </h1>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      ))}
                      <h1 className=" hover:underline pl-[16px] text-[#343741] text-[14px] font-semibold ">
                        View All Topic
                      </h1>
                    </div>
                    {/* USE ELASTIC FOR */}
                    <div>
                      <h1 className="text-[#6B6F7F] pb-[8px] text-[14px] font-bold">
                        By Industry
                      </h1>
                      {useCaseData[0]?.sublinks[1]?.sublink?.map((slink, i) => (
                        <ul>
                          <li key={i} className="  my-1">
                            <Link to={slink.link}>
                              <div className=" hover:bg-[#e8f6fe] py-[8px] px-[16px] hover:text-[#0077CC] ">
                                <h2 className="text-[16px] font-bold mb-[4px] leading-[22px] ">
                                  {" "}
                                  {slink.heading}{" "}
                                </h2>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      ))}
                      <h1 className=" hover:underline text-[#343741] pl-[16px] text-[14px] font-semibold">
                        View All Industries
                      </h1>
                    </div>
                    {/*  Feature */}
                    <div>
                      <h1 className="text-[#6B6F7F] pb-[8px] text-[14px] font-bold">
                        Feature
                      </h1>

                      <ul>
                        <li className="  my-1">
                          <div className=" ">
                            <img src={feature} alt="" />
                            <h1 className="text-[18px] pb-[16px] font-bold ">
                              Leveraging Oberbavality
                            </h1>
                            <p className="text-[16px] text-[#343741] ">
                              Why observability matters and how to evaluate
                              observability solutions
                            </p>
                            <h5 className="text-[#07c] text-[14px] pt-[16px] pb-[8px] font-semibold hover:underline  ">
                              Download ebook
                            </h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
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

export default UseCases;
