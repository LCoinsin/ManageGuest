import Navbar from "./components/NavBar";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center bg-slate-100 h-screen">
      <Navbar />
      <div className="w-full max-w-7xl">{children}</div>
    </main>
  );
}
