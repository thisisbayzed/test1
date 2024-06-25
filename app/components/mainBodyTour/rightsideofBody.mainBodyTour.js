"use client";
import Image from "next/image";
import one from "./../../assets/tourOne.png";
import two from "./../../assets/two.png";
import last from "./../../assets/tourlast.png";
import three from "./../../assets/three.png";
import four from "./../../assets/four.png";
import Button from "../button";
import { FaLocationDot } from "react-icons/fa6";
import Pagination from "../pagination";
import { useState } from "react";

export default function RightMainBodyTour({ title }) {
  // this is for pagination
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h2 className="tour-header-title">{title}</h2>

      <div className="flex flex-col ">
        {tourList.map((item, index) => {
          return (
            <div key={index} className="mt-[60px] flex items-center">
              <div className="relative bg-warning">
                <Image
                  className=" relative z-10"
                  src={item.image}
                  width={360}
                  height={240}
                  alt="nature"
                />
                <Button
                  text={item.discount}
                  className=" absolute top-[13px] left-[13px] z-10 text-secondary-black bg-warning px-[18px] py-[10px]"
                />
              </div>
              <div className=" ml-[20px]">
                <h3 className="text-wrap line-clamp-2 w-[90%] font-poppines  font-light text-[20px] text-secondary-black">
                  {item.tourtitle}
                </h3>
                <div className="mt-[15px] text-tertiary-gray flex items-center">
                  <FaLocationDot className=" inline-block  text-[20px]" />
                  <span className="pr-[7px]  tracking-[0.3px] font-poppines  font-light text-[16px]"></span>
                  {item.location}
                </div>
                <p className="mt-[25px] line-through font-poppines  font-light text-[16px]">
                  {item.old_price}
                </p>
                <p className="mt-[5px] font-poppines  font-medium text-[20px] text-primary-orange">
                  {item.updated_price}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* pagination */}
      <div className="mt-[100px]">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}

const tourList = [
  {
    image: one,
    discount: "Save 30%",
    tourtitle: "Trekking to cimarinjung waterfall and camping",
    location: "Ciletuh, Sukabumi Regency",
    old_price: "IDR 690.000",
    updated_price: "IDR 590.000",
  },
  {
    image: two,
    discount: "Save 10%",
    tourtitle: "One day scuba diving on Gili Trawangan",
    location: "Gili Trawangan, North Lombok Regency",
    old_price: "IDR 1.090.000",
    updated_price: "IDR 999.000",
  },
  {
    image: three,
    discount: "Save 23%",
    tourtitle: "Dive and stay at sabang city island for three days",
    location: "Sabang, Aceh City",
    old_price: "IDR 690.000",
    updated_price: "IDR 590.000",
  },
  {
    image: four,
    discount: "Save 23%",
    tourtitle: "Enjoy the beauty of exploring Komodo Island",
    location: "Komodo, West Manggarai Regency",
    old_price: "IDR 880.000",
    updated_price: "IDR 770.000",
  },
  {
    image: last,
    discount: "Save 5%",
    tourtitle: "Ocean view with roaring waves at Marina beach",
    location: "Kalianda, South Lampung Regency",
    old_price: "IDR 320.000",
    updated_price: "IDR 250.000",
  },
];
