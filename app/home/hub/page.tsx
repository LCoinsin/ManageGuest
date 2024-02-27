"use client";

import { signIn, useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return <div></div>;
  }

  return (
    <div className="flex justify-center bg-red-200 max-w-7xl">
      <h1>Page protégée</h1>
      <p>Bienvenue, {session?.user?.email}</p>
      <GridGroop />
    </div>
  );
}

function GridGroop() {
  return <div>Grid groop</div>;
}
