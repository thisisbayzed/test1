import { IoIosArrowDown } from "react-icons/io";
import Button from "../button";

import LeftMainBodyTour from "./leftsideofBody.mainBodyTour";
import RightMainBodyTour from "./rightsideofBody.mainBodyTour";
export default function MainBodyTour() {
  return (
    <div className="mt-[180px] main-container  ">
      <div className="w-full flex ">
        <div className="w-1/3 ">
          <LeftMainBodyTour title="Search" />
        </div>
        <div className="flex flex-col grow ">
          <RightMainBodyTour title="Tour Packages" />
        </div>
      </div>
    </div>
  );
}
