import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function checkSession(req: NextRequest) {
  const session = await getServerSession(req, authOptions);

  if (!session) {
    throw redirect("/auth/login");
  }

  return { session };
}
