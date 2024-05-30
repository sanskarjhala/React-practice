import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SingupForm = ({ setIsLoggedIn }) => {
  const [accountData, setAccountData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    email: "",
  });

  const changehandler = (event) => {
    setAccountData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    if (accountData.password !== accountData.confirmPassword) {
      toast.error("Password not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Sign Up Succesfully");

    const formData = {
      ...accountData,
    };

    const finaldata = {
      ...formData,
      accountType,
    };
    console.log("Printing Form Data", finaldata);

    navigate("/dashboard");
  };

  return (
    <div >
      <div
      className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
           className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}
        >
          Student
        </button>

        <button
         className={`${accountType === "Instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("Instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex justify-between my-4">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              value={accountData.firstName}
              name="firstName"
              placeholder="Enter First Name"
              onChange={changehandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={accountData.lastName}
              placeholder="Enter Last Name"
              onChange={changehandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        <label className="mt-4">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={accountData.email}
            onChange={changehandler}
            placeholder="Enter Email"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>

        <label >
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Contact Number
            <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="tel"
            name="contactNumber"
            value={accountData.contactNumber}
            onChange={changehandler}
            placeholder="Enter Phone Number"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>

        <div className="flex  w-full justify-between">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={accountData.password}
              name="password"
              onChange={changehandler}
              placeholder="Enter Password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              className="absolute right-3 top-[38px] cursor-pointer "
            >
              {showPassword ? <AiOutlineEye fontSize={24} fill="#AFB2BF " /> :
               <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF " />}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={accountData.confirmPassword}
              placeholder="Confirm Password"
              onChange={changehandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span
              onClick={() => {
                setShowConfirmPassword((prev) => !prev);
              }}
              className="absolute right-3 top-[38px] cursor-pointer "
            >
              {showConfirmPassword ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF " />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF " />
              )}
            </span>
          </label>
        </div>

        <button
          className="bg-yellow-50  rounded-[8px] w-full
        font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SingupForm;
