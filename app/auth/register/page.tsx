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
    // router.push("/auth/login");

    // const result = await registerUser(data);
    // if (result.success) {
    //   // Rediriger vers la page de connexion ou de succès après l'inscription
    //   router.push("/auth/signin");
    // } else {
    //   // Gérer l'erreur d'inscription
    //   console.error("Échec de l'inscription");
    // }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="min-w-80 max-w-96">
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {/* <Input placeholder="Email" type="email" /> */}
            <Input
              {...register("email", { required: "Email must be required" })}
              type="email"
              placeholder="Email"
            />
            {/* <Input placeholder="Repeat email" type="email" /> */}
            {/* <Input placeholder="Password" type="password" /> */}
            <Input
              {...register("password", {
                required: "The password must be required",
              })}
              type="password"
              placeholder="Password"
            />
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full">
              Register
            </Button>
            <Button variant="link" className="text-sm">
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default register;
