import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-stretch gap-8 p-8 bg-zinc-100 text-black font-sans select-none">
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center relative">
        <Outlet />
      </main>
    </div>
  );
}
