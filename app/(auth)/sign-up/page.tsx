"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const router = useRouter();

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState, reset, watch } = form;
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitSuccessful,
  } = formState;
  console.log(isSubmitting);
  const pass = watch("password");

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        console.log("User created successfully!");
        // Handle success or redirect to another page if needed
      } else {
        console.error("Failed to create user.");
        // Handle errors, show error messages, etc.
      }
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle network errors or other exceptions
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      router.push("/log-in");
    }
  }, [isSubmitSuccessful, router, reset]);

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
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center"
            noValidate
          >
            <div className="flex flex-col justify-center items-start gap-10">
              <h1 className="text-[32px] font-light text-white">Sign Up</h1>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="relative w-[279px] sm:w-[336px]">
                  <input
                    type="text"
                    className={`block w-[100%] font-light pb-[18px] pl-[16px] text-[15px] text-[#10141E] placeholder-[#10141E]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/100 ${
                      errors.name || (touchedFields.name && !dirtyFields.name)
                        ? "dark:border-[#FC4747] focus:dark:border-[#FC4747]"
                        : "dark:border-[#5A698F] focus:dark:border-white hover:dark:border-white"
                    }  focus:border-[#5A698F]/100 caret-[#FC4747]`}
                    placeholder="First name"
                    {...register("name", {
                      required: "Can't be empty",
                    })}
                  />
                  <p className="text-[#FC4747] absolute right-0 top-[2px] text-[13px] font-light">
                    {touchedFields.name && !dirtyFields.name
                      ? "Can't be empty"
                      : errors.name?.message}
                  </p>
                </div>

                <div className="relative w-[279px] sm:w-[336px]">
                  <input
                    type="email"
                    className={`block w-[100%] font-light pb-[18px] pl-[16px] text-[15px] text-[#10141E] placeholder-[#10141E]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/100 ${
                      errors.email ||
                      (touchedFields.email && !dirtyFields.email)
                        ? "dark:border-[#FC4747] focus:dark:border-[#FC4747]"
                        : "dark:border-[#5A698F] focus:dark:border-white hover:dark:border-white"
                    }  focus:border-[#5A698F]/100 caret-[#FC4747]`}
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
                  <p className="text-[#FC4747] absolute right-0 top-[2px] text-[13px] font-light">
                    {touchedFields.email && !dirtyFields.email
                      ? "Can't be empty"
                      : errors.email?.message}
                  </p>
                </div>

                <div className="relative w-[279px] sm:w-[336px]">
                  <input
                    type="password"
                    className={`block w-[100%] font-light pb-[18px] pl-[16px] text-[15px] text-[#10141E] placeholder-[#10141E]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/100 ${
                      errors.password ||
                      (touchedFields.password && !dirtyFields.password)
                        ? "dark:border-[#FC4747] focus:dark:border-[#FC4747]"
                        : "dark:border-[#5A698F] focus:dark:border-white hover:dark:border-white"
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
                  <p className="text-[#FC4747] absolute right-0 top-[2px] text-[13px] font-light">
                    {touchedFields.password && !dirtyFields.password
                      ? "Can't be empty"
                      : errors.password?.message}
                  </p>
                </div>

                <div className="relative w-[279px] sm:w-[336px]">
                  <input
                    type="password"
                    className={`block w-[100%] font-light pb-[18px] pl-[16px] text-[15px] text-[#10141E] placeholder-[#10141E]/70 dark:placeholder-[#9CA3AF] dark:text-white bg-transparent focus:outline-0 border-b-[1.5px] sm:border-b-2 border-[#161D2F]/100 ${
                      errors.rePassword ||
                      (touchedFields.rePassword && !dirtyFields.rePassword)
                        ? "dark:border-[#FC4747] focus:dark:border-[#FC4747]"
                        : "dark:border-[#5A698F] focus:dark:border-white hover:dark:border-white"
                    }  focus:border-[#5A698F]/100 caret-[#FC4747]`}
                    placeholder="Repeat password"
                    {...register("rePassword", {
                      required: "Can't be empty",
                      pattern: {
                        value: /(?=.{3,})/,
                        message: "Must be at least 3 characters",
                      },
                      validate: (fieldValue) => {
                        return fieldValue === pass || "Passwords do not match";
                      },
                    })}
                  />
                  <p className="text-[#FC4747] absolute right-0 top-[2px] text-[13px] font-light">
                    {touchedFields.rePassword && !dirtyFields.rePassword
                      ? "Can't be empty"
                      : errors.rePassword?.message}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!(isDirty && isValid && !isSubmitting)}
              className={`${
                isDirty && isValid && !isSubmitting
                  ? "dark:bg-[#FC4747] text-white hover:dark:bg-white hover:dark:text-black"
                  : "dark:bg-gray-500 text-gray-800 cursor-not-allowed"
              } mt-[40px] focus:outline-none rounded-[6px] w-[279px] sm:w-[336px] h-[48px] font-light text-center`}
            >
              {isSubmitting ? "Submitting" : "Create an account"}
            </button>

            <p className="text-[15px] font-light mt-[24px] text-white">
              Already have an account?{" "}
              <Link href="/log-in">
                {" "}
                <span className="dark:text-[#FC4747] hover:dark:text-[#fff]">
                  Login
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
