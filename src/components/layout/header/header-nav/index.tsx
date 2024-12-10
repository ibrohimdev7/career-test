import CommonSmoothLink from "@/components/common/common-smooth-link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface HeaderNavProps {
  label: string;
  href: string;

  onClick?: () => void;
}

const HeaderNav = ({ href, label, onClick }: HeaderNavProps) => {
  return (
    <li onClick={onClick}>
      <CommonSmoothLink
        className="group flex items-center text-nowrap text-[28px] font-bold transition-all duration-300 hover:text-mainColors-blue lg:text-lg lg:font-normal"
        to={href}
        href={href}
        smooth={true}
        duration={500}
      >
        {label}
        <ArrowUpRight className="ml-1 h-4 w-4 -translate-y-1 translate-x-1 text-mainColors-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </CommonSmoothLink>
    </li>
  );
};

export default HeaderNav;
