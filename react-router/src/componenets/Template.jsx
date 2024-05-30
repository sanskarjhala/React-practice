import React from "react";
import SingupForm from "./SingupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import FrameImage from "../assets/frame.png";

const Template = ({
  title,
  description1,
  description2,
  setIsLoggedIn,
  image,
  formType,
}) => {
  return (
    <div className="flex flex-row justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>

        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{description1}</span>
          <br />
          <span className="text-blue-100 italic">{description2}</span>
        </p>

        {formType === "signup" ? (
          <SingupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex flex-row  w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button
          className="flex w-full justify-center items-center rounded-md font-medium text-richblack-100
        border  border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 "
        >
          <FcGoogle />
          Sign in With Google
          {/* Google logo */}
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={FrameImage}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
          className=""
        />

        <img
          src={image}
          alt="pattern"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
