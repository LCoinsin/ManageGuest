"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex h-20 w-full items-center justify-center border-b-2 px-5 align-middle bg-white">
      <div className="flex w-full max-w-7xl flex-row justify-between">
        <div className="flex w-full justify-start">
          <h1 className="text-3xl">
            <Link href="/">Groop</Link>
          </h1>
        </div>
        <div className="flex w-full flex-row items-center justify-end">
          {<AuthButton />}
        </div>
      </div>
    </div>
  );
}

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-row gap-2">
        <Button variant="link" asChild>
          <Link href="/home/hub">Hub</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => signOut({ redirect: true, callbackUrl: "/" })}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return (
    <>
      <Button asChild>
        <Link href="/auth/login"> Sign in </Link>
      </Button>
    </>
  );
}
