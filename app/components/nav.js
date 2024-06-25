"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./button";

export default function NavBar() {
  return (
    <nav className="h-[90px]  flex grow border-b  border-border-gray bg-white fixed w-full top-0 z-40">
      <div className="main-container flex items-center  ">
        <div className="w-1/4">
          <h1 className="tracking-[1px] text-primary-orange  font-poppines font-bold text-[20px] cursor-pointer">
            DAYDAYTRAVEL
          </h1>
        </div>

        <ul className="flex grow  justify-center">
          {navLinks.map((item, index) => {
            const lastItem =
              navLinks.length - 1 === index ? `pr-0` : `pr-[35px]`;
            return (
              <li key={item._id}>
                <Link href={item.path} className="main-link">
                  <span className={`nav-links text-light  ${lastItem}`}>
                    {item.name}{" "}
                    {item["category"] && (
                      <IoIosArrowDown className=" ml-1  text-sm inline-block" />
                    )}
                  </span>
                  {item["category"] && (
                    <ul className=" absolute bg-white shadow px-4 py-4 mt-3  rounded-md   hidden ">
                      {item["category"].map((item) => {
                        return (
                          <li key={item._id} className="nav-links pt-3  pb-1">
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </Link>
              </li>
            );
          })}
          {/* <li>
              <Link href="/review">
                <span className="nav-links text-light  pr-[35px] relative ">
                  Review
                  <IoIosArrowDown className=" ml-1  text-sm inline-block" />
                </span>

                <ul className=" absolute bg-white shadow px-4 py-4 mt-3  rounded-md   hidden ">
                  <li className="nav-links pt-3  pb-1 border-b">
                    Tour Guidence
                  </li>
                  <li className="nav-links pt-3 pb-1 last:pb-0">
                    Review Guidence
                  </li>
                </ul>
              </Link>
            </li>
          */}
        </ul>

        <div className="w-1/4 flex justify-end">
          <button className="nav-links text-light   pr-[14px]">Login</button>

          <Button
            text="Get started"
            className="text-white   bg-primary-orange px-[14px] py-[16px] opacity-[80%]"
            onClick={() => {}}
          />
        </div>
      </div>
    </nav>
  );
}

// here is the navigation link you can add as many you want
const navLinks = [
  {
    _id: 1,
    path: "/",
    name: "Review",
    category: [{ _id: 12, name: "Tour Guidence", path: `/` }],
  },
  { _id: 2, path: "/", name: "Tour Packages" },
  { _id: 3, path: "/", name: "Guide" },
];
