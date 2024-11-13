"use client";

import { signInSchema } from "@/app/lib/zodSchema";
import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignInForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const signInAdmin = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        "/api/adminSignIn",
        data,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      router.push("/admin");
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
      setError("Invalid credentials"),
        setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="w-full max-w-[20em] flex justify-center items-center flex-col ">
      <div className="py-5 my-3 text-red-500">{error ? error : ""}</div>

      <form
        onSubmit={handleSubmit(signInAdmin)}
        className="w-full py-5 px-3 rounded-md border-[1px] border-solid border-stone-700 border-opacity-10"
      >
        <div className="my-5 w-full text-center">AGC ADMIN</div>
        <div className="my-3">
          <input type="text" {...register("email")} className="input" />
          <p className="my-2 text-xs text-red-500">
            {errors.email && errors.email.message}
          </p>
        </div>
        <div className="my-3">
          <input type="password" {...register("password")} className="input " />
          <p className="my-2 text-xs text-red-500">
            {errors.password && errors.password.message}
          </p>
        </div>

        <div className="my-8">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded-md bg-stone-950"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
