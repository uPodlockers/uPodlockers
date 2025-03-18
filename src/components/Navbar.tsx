"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo-upod-white.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import HowItWorks from "@/assets/machinery-svgrepo-com.svg";
import WhyUs from "@/assets/list-check-svgrepo-com.svg";
import LockerSVG from "@/assets/cabinet-locker-lockers-school-decoraion-svgrepo-com.svg";
import Calculator from "@/assets/calculator-svgrepo-com.svg";
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
        link: "/product/#how_it_works",
        // iconImage: HowItWorks,
      },
      {
        label: "Why UPOD?",
        link: "/product/#why_us",
        // iconImage: WhyUs,
      },
      {
        label: "Our Models",
        link: "/product/#models",
        // iconImage: LockerSVG,
      },
      {
        label: "Capacity Calculator",
        link: "/product/#calculator",
        // iconImage: Calculator,
      },
    ],
  },

  {
    label: "Solution",
    link: "/solutions",
    children: [
      {
        label: "Residential",
        link: "/solutions/#residents",
      },
      {
        label: "Universities",
        link: "/solutions/#universities",
      },
      {
        label: "Banks",
        link: "/solutions/#banks",
      },

      {
        label: "Offices",
        link: "/solutions/#offices",
      },
      {
        label: "E-Commerce",
        link: "/solutions/#ecommerce",
      },
      {
        label: "Hospitals",
        link: "/solutions/#hospitals",
      },
    ],
  },
  {
    label: "Company",
    link: "/company",
    children: [
      {
        label: "About Us",
        link: "/company/#us",
      },
      // {
      //   label: "Blogs",
      //   link: "/company/#blogs",
      // },
      // {
      //   label: "News",
      //   link: "/company/#news",
      // },

      // {
      //   label: "Case studies",
      //   link: "/company/#case_studies",
      // },
      // {
      //   label: "Our Team",
      //   link: "/company/#team",
      // },
      // {
      //   label: "Careers",
      //   link: "#",
      // },
    ],
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
  // {
  //   label: "Pricing",
  //   link: "/contact",
  // },
];


export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function openSideMenu() {
    setSideMenue(true);
  }

  function closeSideMenu() {
    setSideMenue(false);
  }

  if (!isMounted) return null;

  return (
    <>
      <div className="flex justify-center items-center py-1 bg-[#eaeefe] text-black text-small">
        <div className="inline-flex gap-1 items-center">
          <p>24*7 Accessible Parcel Lockers at your Service</p>
          {/* Render this only when mounted */}
          {isMounted && <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />}
        </div>
      </div>
      <div className="mx-auto flex  w-full max-w-8xl justify-between px-4 py-5 bg-black relative z-30">
        {/* left side */}
        <section ref={animationParent} className="flex items-center gap-10">
          <div className="flex items-center gap-3 opacity-3">
            {isMounted && (
              <Image src={Logo} alt="uPOD Logo" height={120} width={120} />
            )}
          </div>
          {isMounted && isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <Link
                key={i}
                href={d.link ?? "#"}
                className="relative group px-2 py-3 transition-all"
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-white ">
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                  )}
                </p>

                {d.children && (
                  <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex z-50">
                    {d.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className=" flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black "
                      >
                        <span className="whitespace-nowrap pl-3 ">
                          {ch.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-4xl md:hidden text-white"
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
        <div className=" w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex z-50">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black "
            >
              {/* image */}
              {ch.iconImage && <ch.iconImage />}
              {/* item */}
              <span className="whitespace-nowrap pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
