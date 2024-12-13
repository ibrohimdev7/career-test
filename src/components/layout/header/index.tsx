"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./constants";
import Container from "../container";
import HeaderNav from "./header-nav";
import Button from "@/components/buttons/common-button";
import {
  GraduationCap,
  LayoutDashboard,
  LogInIcon,
  UserIcon,
} from "lucide-react";
import LoginModal from "@/components/modals/login";
import SignupModal from "@/components/modals/sign-up";
import { useModalState } from "@/containers/career-test";
import CommonLoading from "@/components/common/common-loading";
import { useAuthStore } from "@/store/useAuthStore";
import NavMobile from "./mobile-menu";

const Header = () => {
  const {
    isLoginOpen,
    isSignupOpen,
    openLogin,
    openSignup,
    closeLogin,
    closeSignup,
  } = useModalState();
  const { session } = useAuthStore();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("auth");
    setIsLoggedIn(!!user || session?.signedIn);
  }, [session?.signedIn]);

  return (
    <header>
      <Container className="flex items-center justify-between py-8">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
            <GraduationCap size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Find Yourself</h1>
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <HeaderNav key={index} href={item.href} label={item.label} />
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {isLoggedIn === null ? (
            <Button variant="light">
              <CommonLoading />
            </Button>
          ) : isLoggedIn ? (
            <Link href={"/dashboard"}>
              <Button
                label="Go to dashboard"
                variant="light"
                startIcon={<LayoutDashboard />}
              />
            </Link>
          ) : (
            <>
              <Button
                label="Log in"
                variant="light"
                endIcon={<LogInIcon />}
                onClick={openLogin}
              />
              <Button
                label="Sign up"
                endIcon={<UserIcon />}
                onClick={openSignup}
              />
            </>
          )}
        </div>

        <div className="flex lg:hidden">
          <NavMobile />
        </div>

        <LoginModal
          isOpen={isLoginOpen}
          onClose={closeLogin}
          onSwitchToSignup={openSignup}
        />

        <SignupModal
          isOpen={isSignupOpen}
          onClose={closeSignup}
          onSwitchToLogin={openLogin}
        />
      </Container>
    </header>
  );
};

export default Header;
