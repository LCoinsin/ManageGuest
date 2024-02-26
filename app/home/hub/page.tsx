"use client";

import { getServerSession } from "next-auth";
import {
  GetSessionParams,
  getSession,
  signIn,
  useSession,
} from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProtectedPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Page protégée</h1>
      <p>Bienvenue, {session?.user?.email}</p>
    </div>
  );
}
