"use client";
import Image from "next/image";
import style from "./Megamenu.module.css";
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
    <section className="">
      {!isClick && (
        <div>
          <button
            onClick={handleClick}
            className="text-3xl absolute top-0 right-[500px] text-black z-40"
          >
            X
          </button>
          <div
            className={`${style.megamenu} hidden lg:flex lg:flex-col lg:text-black bg-white absolute top-0 left-0`}
          >
            <div>
              <Image
                src={logo}
                alt="Logo Company"
                width={150}
                height={150}
                className="m-[40px]"
              ></Image>
            </div>
            <div
              className={`absolute top-20 left-48 flex flex-col items-center justify-center`}
            >
              <ul>
                <li className={`text-6xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Home</Link>
                </li>
                <li className={`text-6xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Pages</Link>
                </li>
                <li className={`text-6xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Projects</Link>
                </li>
                <li className={`text-6xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Blog</Link>
                </li>
                <li className={`text-6xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Shop</Link>
                </li>
                <li className={`text-6xl font-[600] ${style.navlinks}`}>
                  <Link href="/">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${style.megamenuContact} z-40 hidden lg:flex lg:flex-col lg:text-black absolute top-20 -right-[73px]`}
          >
            <ul>
              <li className={`text-6xl font-[600] ${style.navlinks}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`text-6xl font-[600] ${style.navlinks}`}>
                <Link href="/">Pages</Link>
              </li>
              <li className={`text-6xl font-[600] ${style.navlinks}`}>
                <Link href="/">Projects</Link>
              </li>
              <li className={`text-6xl font-[600] ${style.navlinks}`}>
                <Link href="/">Blog</Link>
              </li>
              <li className={`text-6xl font-[600] ${style.navlinks}`}>
                <Link href="/">Shop</Link>
              </li>
              <li className={`text-6xl font-[600] ${style.navlinks}`}>
                <Link href="/">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Megamenu;
