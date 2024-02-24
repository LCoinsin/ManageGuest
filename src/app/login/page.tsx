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
import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="min-w-80 max-w-96">
        <CardHeader>
          <CardTitle>Glad to have you back</CardTitle>
          <CardDescription>Welcome back</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button asChild className="w-full">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild variant="link" className="text-sm">
            <Link href="/register">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default login;
