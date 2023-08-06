"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

const LogIn = () => {
  const { data: session } = useSession();
  if (session && session.user) console.log(session.user);

  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const username = userName;
  const password = pass;

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/log-in",
    });
  };

  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <div className="flex flex-col gap-[58.4px] sm:gap-[72.4px] lg:gap-[82.99px] justify-center items-center">
        <div className="w-[32px] h-[32px] cursor-pointer ">
          <svg
            className="fill-current text-[#650101] dark:text-[#FC4747]"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" />
          </svg>
        </div>
        <div className="p-6 sm:p-8 dark:bg-[#161D2F] rounded-[10px] flex flex-col justify-center items-center">
          <form
            onSubmit={onSubmitForm}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex flex-col justify-center items-start gap-10">
              <h1 className="text-[32px] font-light text-white">
                Log In - {session && session?.user?.name}
              </h1>
              <div className="flex flex-col justify-center items-center gap-6 w-[279px] sm:w-[336px]">
                {" "}
                <input
                  type="email"
                  className="block w-[100%] font-light pb-[18px] pl-[16px] text-[15px] text-[#10141E] placeholder-[#10141E]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/100 dark:border-[#5A698F] hover:border-[#5A698F]/100 focus:border-[#5A698F]/100 caret-[#FC4747]"
                  placeholder="Email address"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="password"
                  className="block w-[100%] font-light pb-[18px] pl-[16px] sm:pr-[100px] text-[15px] text-[#10141E] placeholder-[#10141E]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/100 dark:border-[#5A698F] hover:border-[#5A698F]/100 focus:border-[#5A698F]/100 caret-[#FC4747]"
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-white dark:bg-[#FC4747] mt-[40px] focus:outline-none rounded-[6px] w-[279px] sm:w-[336px] h-[48px] font-light text-center"
            >
              Login to your account
            </button>

            <p className="text-[15px] font-light mt-[24px] text-white">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up">
                {" "}
                <span className="dark:text-[#FC4747]">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
