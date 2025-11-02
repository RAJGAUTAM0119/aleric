"use client";
import Image from "next/image";
import style from "./Dropdown.module.css";
import logo from "../../../../public/images/logo-black.webp";
import Link from "next/link";
import { useState } from "react";

const Megamenu = () => {
  const [isClick, setClick] = useState(false);

  function handleClick() {
    if (!isClick) {
      setClick(!false);
    } else {
      setClick(false);
    }
  }
  return (
    <section className="lg:hidden max-sm:flex">
      {!isClick && (
        <div>
          <button
            onClick={handleClick}
            className="text-3xl absolute top-10 right-[50px] text-black z-40"
          >
            X
          </button>
          <div
            className={`${style.megamenu} max-sm:flex lg:flex-col lg:text-black bg-white absolute top-0 left-0`}
          >
            <div>
              <Image
                src={logo}
                alt="Logo Company"
                width={150}
                height={150}
                className="m-[25px]"
              ></Image>
            </div>
            <div
              className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center`}
            >
              <ul>
                <li className={`text-4xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Home</Link>
                </li>
                <li className={`text-4xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Pages</Link>
                </li>
                <li className={`text-4xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Projects</Link>
                </li>
                <li className={`text-4xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Blog</Link>
                </li>
                <li className={`text-4xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Shop</Link>
                </li>
                <li className={`text-4xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Megamenu;
