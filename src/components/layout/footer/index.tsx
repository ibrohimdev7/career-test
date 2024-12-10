"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { socialLinks } from "./constants";
import { NAV_ITEMS } from "../header/constants";
import HeaderNav from "../header/header-nav";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center justify-between gap-12 sm:flex-row">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href={"/"} className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                <GraduationCap size={24} />
              </div>
              <h1 className="text-xl font-bold">Learning Hub</h1>
            </Link>
          </div>

          {/* Quick Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item, index) => (
              <HeaderNav key={index} href={item.href} label={item.label} />
            ))}
          </ul>

          {/* Newsletter Section */}
          <Link
            href={"tel:+998958704080"}
            className="hover:text-main-violet text-lg text-white transition-colors duration-200 hover:underline"
          >
            +998 95 870 40 80
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Company. All rights reserved.
            </p>
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Terms of Service
              </Link>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="group transition-colors duration-200 hover:text-blue-400"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="h-5 w-5 transform transition-transform duration-200 group-hover:scale-110" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
