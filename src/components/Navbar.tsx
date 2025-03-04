"use client";

import Image from "next/image";
import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo-upod-white.png";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import IconTodo from "@/assets/icon-todo.svg";
import calendarImage from "@/assets/icon-calendar.svg";
import remindersImage from "@/assets/icon-reminders.svg";
import planningImage from "@/assets/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Product",
    link: "/product",
    children: [
      {
        label: "How it Works?",
        link: "#",
        iconImage: IconTodo,
      },
      {
        label: "Why us?",
        link: "#",
        iconImage: calendarImage,
      },
      {
        label: "Our Models",
        link: "#",
        iconImage: remindersImage,
      },
      {
        label: "Capacity Calculator",
        link: "#",
        iconImage: planningImage,
      },
    ],
  },

  {
    label: "Solution",
    link: "/solutions",
  },
  {
    label: "Company",
    link: "/company",
    children: [
      {
        label: "About Us",
        link: "#",
      },
      {
        label: "News",
        link: "#",
      },
      {
        label: "Blogs",
        link: "#",
      },
      {
        label: "Case studies",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Careers",
        link: "#",
      },
    ],
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <>
      <div className="flex justify-center items-center py-1 bg-[#eaeefe] text-black text-small">
        <div className="inline-flex gap-1 items-center">
          <p>24*7 Accessible Parcel Lockers at your Service</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="mx-auto flex  w-full max-w-8xl justify-between px-4 py-5 bg-black">
        {/* left side  */}
        <section ref={animationParent} className="flex items-center gap-10">
          {/* logo */}
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="uPOD Logo" height={120} width={120} />
          </div>
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <Link
                key={i}
                href={d.link ?? "#"}
                className="relative group  px-2 py-3 transition-all "
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-white ">
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                  )}
                </p>

                {/* dropdown */}
                {d.children && (
                  <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                    {d.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                      >
                        {/* image */}
                        {ch.iconImage && (
                          <Image
                            src={ch.iconImage}
                            alt="item-icon"
                            width={20}
                            height={20}
                            className="mr-3"
                          />
                        )}
                        {/* item */}
                        <span className="whitespace-nowrap   pl-3 ">
                          {ch.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
          {/* navitems */}
        </section>

        {/* right side data */}
        {/* <section className=" hidden md:flex   items-center gap-8 ">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section> */}

        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-4xl md:hidden"
        />
      </div>
    </>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        {/* <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section> */}
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
