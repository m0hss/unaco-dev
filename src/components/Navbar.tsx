"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";


export const Navbar = () => {
  const navigation = [
  { name: "Product", href: "#product" },
  { name: "Pricing", href: "#pricing" },
  { name: "Company", href: "#company" },
  { name: "Blog", href: "#blog" }
];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-1 lg:p-8 mx-auto my-4 lg:my-auto sm:p-6">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl mx-2 font-medium text-bold dark:text-gray-100">
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
        <div className="flex items-center space-x-reverse space-x-4">
          {/* Theme Changer */}
          <ThemeChanger />

          {/* Search Bar */}
          <div className="relative pl-1 lg:order-2" style={{ width: "130px" }}>
            <input
              type="text"
              className="pl-8 pr-1 py-0.5 hidden text-sm md:flex lg:flex border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              placeholder="Search..."
              style={{
                width: "100%",
                lineHeight: "1",
              }}
            />

            {/* Custom SVG Search Icon */}
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
            {/* <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300">/</span> */}
          </div>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center lg:order-first">
            {/* <ThemeChanger /> */}
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
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </DisclosureButton>

              <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-full px-6 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-sky-600 rounded-md lg:ml-5"
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
    </div>
  );
};
