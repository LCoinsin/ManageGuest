"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-center border-b-2 px-5 align-middle">
      <div className="flex w-full max-w-7xl flex-row justify-between">
        <div className="flex w-full justify-start">
          <h1 className="text-3xl">
            <Link href="/">Groop</Link>
          </h1>
        </div>
        <div className="flex w-full flex-row items-center justify-end">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* Hello {session?.user?.name} */}
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      <Button asChild>
        <Link href="/auth/login"> Sign in </Link>
      </Button>
    </>
  );
};
