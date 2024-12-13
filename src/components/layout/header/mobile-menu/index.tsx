"use client";

import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import { XIcon } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const NavMobile = () => {

  const ref = useRef(null);

  const [isOpen, setOpen] = useState(false);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} label="Menu btn" />

      {isOpen ? (
        <div
          className={`fixed left-0 right-0 top-0 z-[999] flex ${isOpen ? "h-screen overflow-y-scroll" : ""} flex-col gap-10 bg-white p-5`}
          style={{
            background: "linear-gradient(180deg, #c2d5f6 26.38%, #c3d5f6 100%)",
          }}
        >
          <div
            className="animate-fadeInScale ml-auto"
            onClick={() => setOpen(false)}
          >
            <XIcon size={32} />
          </div>
          <ul className="grid gap-2">
            {NAV_ITEMS.map((route, idx) => {
              const { Icon } = route;

              return (
                <li
                  key={idx}
                  className={`animate-fadeInScale w-full rounded-xl p-[0.08rem] delay-${idx * 100}`}
                >
                  <Link
                    className="flex w-full items-center justify-between rounded-xl bg-white p-5"
                    to={route.href}
                    href={route.href}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex gap-1 text-lg">
                      {route?.label}
                    </span>
                    <Icon className="text-xl" size={24} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavMobile;
