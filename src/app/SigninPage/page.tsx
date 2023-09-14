"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { FormEvent, useRef } from "react";

function SigninPage() {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] pt-[144px] ">
      <section className="flex flex-col items-center w-full pb-[72px] section__styles ">
        {/* Sign in form container */}
        <div className="flex flex-col items-center text-center gap-8 w-full max-w-[480px]">
          {/* Sign in an don't have an account */}
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-blue-700 font-bold text-4xl">Sign In</h1>
            <div className="text-md text-blue-900">
              Don&apos;t have an account?{" "}
              <Link href="/SignupPage" className="text-blue-700 underline">
                Click Here
              </Link>
            </div>
          </div>
          {/* Inputs and submit */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
            <input
              onChange={(e) => (email.current = e.target.value)}
              type="text"
              name="email"
              placeholder="Email or Username"
              id=""
              className="input-field text-sm w-full"
            />
            <input
              onChange={(e) => (password.current = e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              id=""
              className="input-field text-sm w-full"
            />
            <button className="grid place-items-center bg-blue-500 text-white text-md px-8 h-12 w-full disabled:bg-blue-900">
              Sign in
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SigninPage;
