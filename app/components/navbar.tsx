"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Navbar() {
  const navigation = [
    { name: "TOP", href: "/" },
    { name: "事業内容", href: "/contents" },
    { name: "新着情報", href: "/news" },
    { name: "お問い合わせ", href: "/contact" },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();

  return (
    <div
      className={`w-full fixed ${pathname === "/" ? "" : "bg-white"}  ${
        isScrolled ? "bg-white " : "bg-transparent"
      }`}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <div className="flex items-center" id="logo">
                <Link href="/">
                  <img
                    className="nav-bar-img"
                    src="/nav-logo-first.png"
                    alt="Image"
                  />
                </Link>
                <Link href="/">
                  <p
                    className={`ml-2 ${
                      pathname === "/"
                        ? `${isScrolled ? "text-black" : "text-white"}`
                        : "text-black"
                    }                       
                    `}
                  >
                    株式会社GoodSmile
                  </p>
                </Link>
              </div>
              <div className="hidden sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? `border-slate-500 ${
                            pathname === "/"
                              ? `${isScrolled ? "text-black" : "text-white"}`
                              : "text-black"
                          }`
                        : `{border-transparent ${
                            pathname === "/"
                              ? `${isScrolled ? "text-black" : "text-white"}`
                              : "text-black"
                          } hover:text-gray-700 hover:border-gray-300}`,
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "bg-slate-50 border-slate-500 text-slate-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
