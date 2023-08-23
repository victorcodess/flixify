"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

const LogIn = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const { register, handleSubmit, formState } = form;
  const { errors, touchedFields, dirtyFields, isDirty, isValid } = formState;
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (data: FormValues) => {
    const username = data.email;
    const password = data.password;

    signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    const getErrorValue = (url: string) => {
      const params = new URLSearchParams(url);
      return params.get("error");
    };

    const errorValue = getErrorValue(url);
    if (errorValue === "CredentialsSignin") setError(true);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="flex w-full h-[100vh] justify-center items-center bg-[#E0E3EB] dark:bg-[#10141E]">
      <div
        className={`${
          error ? "opacity-100" : "opacity-0"
        } dark:bg-[#FC4747] text-white focus:outline-none rounded-[6px] w-[279px] sm:w-[336px] h-[48px] font-medium uppercase text-center absolute top-4 flex items-center justify-center text-[14px] sm:text-[16px]`}
      >
        <h1>Incorrect password or email</h1>
      </div>

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
        <div className="p-6 sm:p-8 bg-[#5A698F] dark:bg-[#161D2F] rounded-[10px] flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center"
            noValidate
          >
            <div className="flex flex-col justify-center items-start gap-10">
              <h1 className="text-[32px] font-light text-white">Log In</h1>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="relative w-[279px] sm:w-[336px]">
                  <input
                    type="email"
                    className={`block w-[100%] font-light pb-[18px] pl-[16px] text-[15px] text-[white] placeholder-[#96abd6]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#96abd6]/100 ${
                      errors.email ||
                      (touchedFields.email && !dirtyFields.email)
                        ? "dark:border-[#FC4747] focus:dark:border-[#FC4747] border-[#650101] focus:border-[#650101]"
                        : "dark:border-[#5A698F]  border-[#fff] focus:dark:border-white hover:dark:border-white focus:border-[#96abd6] hover:border-[#96abd6]"
                    }  caret-[#FC4747]`}
                    placeholder="Email address"
                    {...register("email", {
                      required: "Can't be empty",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  <p className="dark:text-[#FC4747] text-[#650101] absolute right-0 top-[2px] text-[13px] font-light">
                    {touchedFields.email && !dirtyFields.email
                      ? "Can't be empty"
                      : errors.email?.message}
                  </p>
                </div>

                <div className="relative w-[279px] sm:w-[336px]">
                  <input
                    type="password"
                    className={`block w-[100%] font-light pb-[18px] pl-[16px] text-[15px] text-[#fff] placeholder-[#96abd6]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#96abd6]/100 ${
                      errors.password ||
                      (touchedFields.password && !dirtyFields.password)
                        ? "dark:border-[#FC4747] focus:dark:border-[#FC4747] border-[#650101] focus:border-[#650101]"
                        : "dark:border-[#5A698F]  border-[#fff] focus:dark:border-white hover:dark:border-white focus:border-[#96abd6] hover:border-[#96abd6]"
                    }  focus:border-[#5A698F]/100 caret-[#FC4747]`}
                    placeholder="Password"
                    {...register("password", {
                      required: "Can't be empty",
                      pattern: {
                        value: /(?=.{3,})/,
                        message: "Must be at least 3 characters",
                      },
                    })}
                  />
                  <p className="dark:text-[#FC4747] text-[#650101] absolute right-0 top-[2px] text-[13px] font-light">
                    {touchedFields.password && !dirtyFields.password
                      ? "Can't be empty"
                      : errors.password?.message}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!(isDirty && isValid)}
              className={`${
                isDirty && isValid && !submitting
                  ? "dark:bg-[#FC4747] text-white hover:dark:bg-white hover:dark:text-black"
                  : "dark:bg-gray-500 bg-gray-300 text-gray-800 cursor-not-allowed"
              } mt-[40px] focus:outline-none rounded-[6px] w-[279px] sm:w-[336px] h-[48px] font-light text-center`}
              onClick={() => setSubmitting(true)}
            >
              {submitting ? "Authenticating..." : "Login to your account"}
            </button>

            <p className="text-[15px] font-light mt-[24px] text-white">
              Don&apos;t have an account?
              <Link href="/sign-up" aria-label="Sign Up">
                <span className="dark:text-[#FC4747] hover:dark:text-[#fff]">
                  Sign Up
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
