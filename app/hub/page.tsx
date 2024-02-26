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

// const session = await getServerSession();

// if (!session || !session.user) {
//   redirect("/auth/login");
// }

// return (
//   <div className="mt-6 flex justify-center">
//     <div className="flex w-full max-w-7xl flex-col justify-center gap-4">
//       <h1 className="text-3xl">Hub</h1>
//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
//         <GroopCard />
//       </div>
//     </div>
//   </div>
// );

// const GroopCard = () => {
//   return (
//     <div className="h-32 rounded-lg border-2 bg-gray-100">
//       <div>GroopCard</div>
//     </div>
//   );
// };
