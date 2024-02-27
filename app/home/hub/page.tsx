"use client";

import { Progress } from "@/components/ui/progress";
import { Flame, Gem } from "lucide-react";
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
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold pt-5">Hub Groop</h1>
      {/* <p>Bienvenue, {session?.user?.email}</p> */}
      <GridGroop />
    </div>
  );
}

function GridGroop() {
  return (
    <div className="flex justify-between flex-row flex-wrap gap-y-5">
      <CardGroop />
    </div>
  );
}

function CardGroop() {
  return (
    <div className="w-[28rem] h-48 bg-white rounded-2xl p-4 flex flex-col justify-between hover:drop-shadow-md">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-14 h-14 border-2 rounded-xl flex justify-center items-center">
          <Gem color="red" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">Weeding</h2>
          <h2 className="text-gray-500">
            Due date:{" "}
            <span className="text-black font-medium">23 aug 2025</span>
          </h2>
        </div>
      </div>
      {/* <div>Notification</div> */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h2>Progress</h2>
          <h2 className="font-medium text-red-500">30%</h2>
        </div>
        <Progress className="w-full h-2 " value={20} />
      </div>
    </div>
  );
}
