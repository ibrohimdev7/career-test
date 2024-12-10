"use client";

import { CloseIcon } from "@/assets/icons/close";
import { HamburgerIcon } from "@/assets/icons/hamburger";
import { useLayoutStore } from "@/store/useLayoutStore";
import React, { FC } from "react";

type HamburgerButtonProps = object;

const HamburgerButton: FC<HamburgerButtonProps> = ({}) => {
  const { mobileOpen, handleMobileOpen } = useLayoutStore();
  return (
    <div
      className="cursor-pointer"
      onClick={() => handleMobileOpen(!mobileOpen)}
    >
      {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
    </div>
  );
};

export default HamburgerButton;
