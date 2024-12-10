"use client";

import React, { FC } from "react";
import { useLayoutStore } from "@/store/useLayoutStore";
import Link from "next/link";
import HamburgerButton from "../../../buttons/hamburger-button";
import HeaderNav from "../header-nav";
import Button from "../../../buttons/common-button";
import { NAV_ITEMS } from "../constants";

type MobileMenuProps = object;

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const { mobileOpen, handleMobileOpen } = useLayoutStore();

  return (
    <div
      className={`fixed top-0 z-20 flex h-full w-screen flex-col overflow-scroll bg-white px-4 py-8 lg:hidden ${
        mobileOpen ? "" : "!hidden"
      }`}
    >
      <div className="h-full">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-4xl font-semibold">
            Career Job
          </Link>
          <HamburgerButton />
        </div>
        <div className="flex h-full flex-col px-2 py-12">
          <ul className="flex h-full flex-col items-center justify-between">
            {NAV_ITEMS.map((el, _i) => (
              <HeaderNav
                key={_i}
                href={el.href}
                label={el.label}
                onClick={() => handleMobileOpen(false)}
              />
            ))}
            <Link href={"#"} className="block w-4/5">
              <Button label="Start the Test" size="large" fullWidth />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
