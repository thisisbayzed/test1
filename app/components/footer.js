import Image from "next/image";
import googleplay from "../assets/googleplay.png";
import apptore from "../assets/appstore.png";
export default function Footer() {
  return (
    <div className="mt-[150px] bg-secondary-black">
      <div className="main-container">
        <div className="pt-[150px] pb-[127px] flex flex-col justify-between gap-4 lg:gap-0 lg:flex-row">
          <div className="w-full lg:w-[40%]">
            <h3 className="text-white  tracking-[1px]  font-poppines text-[18px] font-light">
              PT. Travel Everyday Indonesia
            </h3>
            <p className="w-full lg:w-[50%]  tracking-[0.8px] leading-[24px] mt-[32px] pb-[25px] font-poppines text-[16px] font-light text-white opacity-[50%]">
              Grand Floor Zaidin L-Walk, Jl . Maju Jaya No. 2 , Daerah Istimewa
              Yogyakarta, Indonesia 55281
            </p>
            <div className="w-full  lg:w-[60%] border-b border-tertiary-gray"></div>
            <div className="w-full lg:w-[60%]  ">
              <div className="w-full flex  mt-[25px]">
                <p className="font-poppines text-[16px] font-light text-white opacity-[50%]">
                  About Us
                </p>
                <p className="pl-[25px] font-poppines text-[16px] font-light text-white opacity-[50%]">
                  Privacy Policey
                </p>
              </div>
              <div className="w-full flex  mt-[25px]">
                <p className="font-poppines text-[16px] font-light text-white opacity-[50%]">
                  Terms & Conditions
                </p>
                <p className="pl-[25px] font-poppines text-[16px] font-light text-white opacity-[50%]">
                  Contact
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[20%] text-wrap">
            <h3 className="text-white  tracking-[1px]  font-poppines text-[18px] font-light">
              Informations
            </h3>
            <ul className="mt-[32px]">
              <li className=" tracking-[0.8px] leading-[24px]  font-poppines text-[16px] font-light text-white opacity-[50%]">
                How to register as a user
              </li>
              <li className="mt-[15px] tracking-[0.8px] leading-[24px] font-poppines text-[16px] font-light text-white opacity-[50%]">
                Guide to creating travel review
              </li>
              <li className="mt-[15px]  tracking-[0.8px] leading-[24px]  font-poppines text-[16px] font-light text-white opacity-[50%]">
                Tutorial for making culinary reviews
              </li>
            </ul>
          </div>
          <div className="block lg:flex lg:flex-col  lg:items-center  w-full lg:w-[23%]">
            <h3 className="text-white  tracking-[1px]  font-poppines text-[18px] font-light">
              Follow us
            </h3>
            <ul className="mt-[32px]">
              <li className=" tracking-[0.8px] leading-[24px]  font-poppines text-[16px] font-light text-white opacity-[50%]">
                Instagram
              </li>
              <li className="mt-[15px] tracking-[0.8px] leading-[24px] font-poppines text-[16px] font-light text-white opacity-[50%]">
                Facebook
              </li>
              <li className="mt-[15px]  tracking-[0.8px] leading-[24px]  font-poppines text-[16px] font-light text-white opacity-[50%]">
                Twitter
              </li>
              <li className="mt-[15px]  tracking-[0.8px] leading-[24px]  font-poppines text-[16px] font-light text-white opacity-[50%]">
                Youtube
              </li>
            </ul>
          </div>
          <div className="  w-full lg:w-[30%]">
            <h3 className="text-white  tracking-[1px]  font-poppines text-[18px] font-light">
              Download app
            </h3>
            <Image
              className="mt-[32px]"
              src={apptore}
              width={177}
              hight={55}
              alt="apptore"
            />
            <Image
              className="mt-[32px]"
              src={googleplay}
              width={177}
              hight={55}
              alt="googleplay"
            />
          </div>
        </div>
        <div className="pb-5">
          <p className="text-center tracking-[0.8px] leading-[24px]  font-poppines text-[16px] font-light text-white opacity-[50%]">
            © 2023 PT. Travel Everyday Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}
