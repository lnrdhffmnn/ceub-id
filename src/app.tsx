import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-8 p-8 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-sans select-none">
      <Header />
      <main className="w-full h-full flex-1 flex flex-col items-center justify-center relative">
        <Outlet />
      </main>
    </div>
  );
}
