"use client";
import { useState } from "react";
import Button from "./button";

export default function Pagination({ currentPage, setCurrentPage = () => {} }) {
  const [number, setNumber] = useState([1, 2, "Next"]);

  return (
    <>
      {number.map((item, index) => {
        const activeCurrentlySelected =
          currentPage === item
            ? `text-white border border-primary-orange  bg-primary-orange`
            : `text-tertiary-gray  border border-tertiary-gray border-opacity-[80%]`;
        return (
          <Button
            key={index}
            text={item}
            className={` px-[18px] py-[12px] opacity-[80%] ${activeCurrentlySelected}`}
            onClick={() => {
              if (item === "Next") {
                const totalNUmberWithoutNext = number.length - 2;
                const myCurrentPageIndexNumber = number.indexOf(currentPage);

                if (totalNUmberWithoutNext !== myCurrentPageIndexNumber) {
                  setCurrentPage(number[myCurrentPageIndexNumber + 1]);
                }
              } else {
                setCurrentPage(item);
              }
            }}
          />
        );
      })}
    </>
  );
}
