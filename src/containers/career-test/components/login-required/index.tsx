"use client";

import Button from "@/components/buttons/common-button";
import LoginModal from "@/components/modals/login";
import SignupModal from "@/components/modals/sign-up";
import React from "react";
import { useModalState } from "../..";

const LoginRequired = () => {
  const {
    isLoginOpen,
    isSignupOpen,
    openLogin,
    openSignup,
    closeLogin,
    closeSignup,
  } = useModalState();

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50/90 to-purple-50/90">
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Verify your account to continue!
          </h2>
          <p className="mb-6 text-gray-600">
            You must login or register before continuing.
          </p>
          <div className="flex items-center gap-3">
            <Button fullWidth variant="default" onClick={openLogin}>
              Login
            </Button>
            <Button fullWidth onClick={openSignup}>
              Sign Up
            </Button>
          </div>
        </div>
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
    </>
  );
};

export default LoginRequired;
