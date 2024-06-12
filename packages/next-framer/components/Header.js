import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { HiMenu } from "react-icons/hi";
const Header = ({ headerData, navData }) => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(true);

  const { logoImgV1, logoImgV2, btnText } = headerData;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white p-3 rounded-md drop-shadow-primary" : "py-[40px]"
      } fixed w-full left-0 right-0 mx-auto mx-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
    >
      <Link href={"/"}>
        <Image
          alt=""
          src={`${header ? logoImgV2 : logoImgV1}`}
          width={header ? 180 : 212}
          height={50}
        ></Image>
      </Link>
      <div className="hidden lg:flex gap-x-[96px]">
        <Nav navData={navData} header={header}></Nav>
        <button className="btn">{btnText}</button>
      </div>
      <div className="lg:hidden cursor-pointer">
        <HiMenu className="text-4xl text-accent-hover"></HiMenu>
      </div>
      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData}></NavMobile>
      </div>
    </header>
  );
};

export default Header;
