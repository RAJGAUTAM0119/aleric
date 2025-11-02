"use client";
import Image from "next/image";
import Logo from "../../../../public/images/logo-white-2.webp";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import Megamenu from "../megaMenu/Megamenu";

const Nav = () => {
  const [isClick, setClick] = useState(false);

  function handleClick() {
    if (!isClick) {
      setClick(!false);
    } else {
      setClick(false);
    }
  }
  return (
    <div className="lg:container lg:m-auto lg:fixed lg:z-10 flex items-center justify-between pt-5 px-2">
      <div>
        <Image src={Logo} alt="Logo" width={150}></Image>
      </div>
      <div className="flex items-center gap-2">
        <div className="hover:underline transition-all cursor-pointer max-sm:hidden">
          hello@aleric.com
        </div>
        <div>
          <button
            onClick={handleClick}
            className="flex items-center justify-center px-4 py-1 gap-2 border border-gray-400 rounded-full hover:bg-white transition-all hover:text-black"
          >
            <RiMenu3Line />
            MENU
          </button>
        </div>
        {(isClick && <Dropdown />) || <Megamenu />}
      </div>
    </div>
  );
};

export default Nav;
