"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  useClose,
} from "@headlessui/react";

export const Navbar = () => {
  const t = useTranslations("HeaderFooter");
  // let close = useClose();
  const navigation = [
    { name: t("Product"), href: "#product" },
    { name: t("Pricing"), href: "#pricing" },
    { name: t("Company"), href: "#company" },
    { name: t("Blog"), href: "#blog" },
  ];

  const [showLanguages, setShowLanguages] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [scrollDirectionUp, setScrollDirectionUp] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Update scroll direction
    setScrollDirectionUp(currentScrollY < lastScrollY || currentScrollY === 0);
    // Toggle sticky menu and hamburger visibility
    setStickyMenu(currentScrollY >= 80);
    setShowButton(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const toggleLanguageMenu = () => {
    setShowLanguages((prev) => !prev);
  };
  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguages(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`w-full  ${
        stickyMenu && scrollDirectionUp
          ? "sticky lg:pb-0 shadow transition duration-100 dark:text-gray-100"
          : ""
      }`}
    >
      <nav className="container relative flex flex-wrap items-center justify-between px-8 py-0 mx-auto my-4 lg:py-0 sm:px-8">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-bold dark:text-gray-100">
            <span>
              <Image
                src="/img/logo.svg"
                alt=""
                width={32}
                height={32}
                className="logo-image"
              />
            </span>
            <span>UNACO</span>
          </span>
        </Link>

        {/* ThemeChanger and Search Bar */}
        <div className="flex items-center gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-1">
          <ThemeChanger />

          {/* Language Toggle */}
          <div className="relative order-1" ref={dropdownRef}>
            <button
              className="flex items-center justify-center rounded-full focus:outline-none"
              aria-label="Toggle Language"
              onClick={toggleLanguageMenu}
            >
              {/* Globe Icon SVG */}
              <GlobeSVG className="w-6 h-6 text-gray-500 dark:text-gray-200 hover:text-sky-500 dark:hover:text-gray-400  transition-colors duration-300" />
            </button>
            {/* Language Dropdown */}
            {showLanguages && (
              <div className="absolute left-0 mt-1 w-14 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50">
                <ul className="py-0.5">
                  <li className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500 cursor-pointer">
                    <Link href="/en" className="block w-full h-full">
                      EN
                    </Link>
                  </li>
                  <li className="px-4 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500 cursor-pointer">
                    <Link href="/fr" className="block w-full h-full">
                      FR
                    </Link>
                  </li>

                  <li className="px-4 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500 cursor-pointer">
                    <Link href="/nl" className="block w-full h-full">
                      NL
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Search Bar */}
          <div
            className=" hidden mr-3 lg:flex nav__itemr relative pl-1 "
            style={{ width: "130px" }}
          >
            <input
              type="text"
              className="pl-8 pr-1 py-0.5 hidden text-sm md:flex lg:flex border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              placeholder="Search..."
              style={{
                width: "100%",
                lineHeight: "1",
              }}
            />
            <SearchBar />
          </div>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center lg:order-first">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={menu.href}
                    scroll={true}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Responsive menu  */}
        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton
                aria-label="Toggle Menu"
                className="text-gray-500 flex rounded-md lg:hidden hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                {/* Custom Hamburger Button */}
                <div className="relative w-5 h-6 p-0.5 mt-1.5 ml-1 mr-2 dark:focus:bg-trueGray-700 dark:text-gray-200 ">
                  <span
                    className={`block absolute h-0.5 w-full bg-current rounded-sm transition-transform duration-300 ease-in-out ${
                      open ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-full bg-current rounded-sm mt-1.5 transition-all duration-300 ease-in-out ${
                      open ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-full bg-current rounded-sm mt-3 transition-transform duration-300 ease-in-out ${
                      open ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </DisclosureButton>
              <DisclosurePanel
                className={`${
                  stickyMenu && scrollDirectionUp
                    ? "left-0 w-full z-50 lg:hidden my-5"
                    : " w-full lg:hidden z-50 my-5"
                } flex flex-col transition duration-300 ease-in-out`}
                // style={{
                //   background:
                //     stickyMenu && scrollDirectionUp
                //       ? "linear-gradient(90deg, #a8363686, #38bff8, #a8363686)"
                //       : "",
                // }}
              >
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className=" px-2 py-2 w-full dark:focus:text-sky-500 dark:hover:text-sky-500 text-gray-500 rounded-md dark:text-gray-300 hover:text-sky-500 focus:text-sky-500  focus:outline-none"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className=" w-full text-center text-white bg-sky-600 rounded-md lg:ml-5 px-6 py-2 mt-3 "
                  >
                    LOGIN
                  </Link>
                </>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        {/* get started  */}
        {/* <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
         
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/"
              className="px-6 py-2 text-white bg-sky-600 rounded-md md:ml-5"
            >
              Get Started
            </Link>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

const SearchBar = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="size-4 hidden md:flex lg:flex absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
  >
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const GlobeSVG = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    className={`${className}`}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);
