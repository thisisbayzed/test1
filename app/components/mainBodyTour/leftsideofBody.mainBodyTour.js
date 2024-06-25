"use client";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../button";
import { useState } from "react";

export default function LeftMainBodyTour({ title }) {
  const [click, setClick] = useState([]);

  const handler = (getName) => {
    // if click has getname then it will remove it otherwise it add it
    setClick((prev) => {
      if (prev.includes(getName)) {
        return prev.filter((item) => item !== getName);
      } else {
        return [...prev, getName];
      }
    });
  };

  return (
    <>
      <h2 className="tour-header-title">{title}</h2>

      <div className="mt-10  w-3/5">
        <ul>
          {searchFilterList.map((item, index) => {
            const lastItem =
              searchFilterList.length - 1 === index
                ? ``
                : `border-b border-secondary-black  border-opacity-[20%]`;
            return (
              <li key={item._id} className="pt-[25px]">
                <div
                  onClick={() => handler(item.name)}
                  className={`flex justify-between items-center ${lastItem} pb-[25px]`}>
                  <span className="font-poppines text-[18px] tracking-[1px]  font-light text-secondary-black block">
                    {item.name}
                  </span>
                  <IoIosArrowDown className=" text-tertiary-gray   text-xl block" />
                </div>
                {/* if the item name and click match the it will show its category */}
                {click.includes(item.name) && (
                  <ul>
                    {item.category.map((itemCategory) => {
                      return (
                        <li key={itemCategory._id}>
                          <span className="mt-4 capitalize tracking-[1px] font-poppines text-[15px]  font-light text-secondary-black  block  hover:bg-primary-orange hover:text-white  hover:px-4 hover:py-2">
                            {itemCategory.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-[40px]">
          <Button
            text="Search packages"
            className="text-white   bg-primary-orange px-[14px] py-[16px] opacity-[80%]"
          />
        </div>
      </div>
    </>
  );
}

// here is the search filter list  you can add as many you want
const searchFilterList = [
  {
    _id: 1,
    name: "Regency",
    category: [
      { _id: 12, name: "child" },
      { _id: 13, name: "adults" },
    ],
  },
  { _id: 2, name: "Duration", category: [{ _id: 22, name: "summar" }] },
  { _id: 3, name: "Departure Month", category: [{ _id: 32, name: "octobar" }] },
  {
    _id: 4,
    name: "Price Range",
    category: [
      { _id: 42, name: "3000-4000" },
      { _id: 43, name: "5000-6000" },
      { _id: 43, name: "7000-8000" },
    ],
  },
];
