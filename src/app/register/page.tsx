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

const register = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="min-w-80 max-w-96">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Repeat email" type="email" />
          <Input placeholder="Password" type="password" />
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button asChild className="w-full">
            <Link href="/">Register</Link>
          </Button>
          <Button variant="link" className="text-sm">
            <Link href="/login">Sign In</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default register;
