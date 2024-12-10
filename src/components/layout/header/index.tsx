"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./constants";
import Container from "../container";
import HeaderNav from "./header-nav";
import Button from "@/components/buttons/common-button";
import HamburgerButton from "@/components/buttons/hamburger-button";
import { GraduationCap, LogInIcon, UserIcon } from "lucide-react";
import LoginModal from "@/components/modals/login";
import SignupModal from "@/components/modals/sign-up";
import { useModalState } from "@/containers/career-test";

const Header = () => {
  const {
    isLoginOpen,
    isSignupOpen,
    openLogin,
    openSignup,
    closeLogin,
    closeSignup,
  } = useModalState();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header>
      <Container className="flex items-center justify-between py-8">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
            <GraduationCap size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Learning Hub</h1>
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <HeaderNav key={index} href={item.href} label={item.label} />
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            label="Log in"
            variant="light"
            endIcon={<LogInIcon />}
            onClick={openLogin}
          />
          <Button label="Sign up" endIcon={<UserIcon />} onClick={openSignup} />
        </div>

        <div className="flex lg:hidden">
          <HamburgerButton />
        </div>

        <LoginModal
          isOpen={isLoginOpen}
          onClose={closeLogin}
          onSwitchToSignup={openSignup}
          onSubmit={handleLogin}
        />

        <SignupModal
          isOpen={isSignupOpen}
          onClose={closeSignup}
          onSwitchToLogin={openLogin}
          onSubmit={handleLogin}
        />
      </Container>
    </header>
  );
};

export default Header;
