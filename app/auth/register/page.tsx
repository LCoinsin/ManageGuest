"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Label } from "@radix-ui/react-dropdown-menu";

const register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const userInfo = await result.json();
    console.log(userInfo);
    router.push("/auth/login");
  };

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex w-full max-w-7xl ">
        <div className=" flex-1 flex justify-center ">
          <div className="bg-red-100 flex-1 m-5 rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="max-w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-start pl-4 pt-4">
              <div className="flex flex-row items-center">
                {/* <p className="text-white text-4xl font-bold">Groop</p> */}
                <div className="w-2" />
                <div className="h-0.5 bg-white w-40 rounded-lg" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-end justify-start pl-4 pb-4">
              <p className="text-white text-4xl font-bold">
                Predict <br />
                Organize <br /> Make your groop better
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-between py-5">
          <div className="text-4xl">
            <Link href="/">Groop</Link>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 w-2/3"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl">Welcome on board !</h1>
              <h1 className="text-sm">
                Enter your email and your password to create your account
              </h1>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="grid w-full items-center gap-1.5 ">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  {...register("email", { required: "Email must be required" })}
                  type="email"
                  placeholder="Enter yuour email"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password" className="text-sm">
                  Password
                </Label>
                <Input
                  id="password"
                  {...register("password", {
                    required: "The password must be required",
                  })}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
          <div>
            Already have an account ?{" "}
            <Link href="/auth/login" className="font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
