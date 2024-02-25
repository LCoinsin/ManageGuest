"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const result = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/hub",
      email,
      password,
    });
  };

  return (
    <div className="flex h-full items-center justify-center py-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="min-w-[24rem] px-8">
          <CardHeader>
            <CardTitle>Glad to have you back</CardTitle>
            <CardDescription>Welcome back</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {/* <Input placeholder="Email" type="email" /> */}
            <Input
              {...register("email", { required: "Email must be required" })}
              type="email"
              placeholder="Email"
            />
            {/* {errors.email && <p>{errors.email.message}</p>} */}

            {/* <Input placeholder="Password" type="password" /> */}
            <Input
              {...register("password", {
                required: "The password must be required",
              })}
              type="password"
              placeholder="Password"
            />
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <Button asChild variant="link" className="text-sm">
              <Link href="/auth/register">Sign Up</Link>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default signin;
