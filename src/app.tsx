import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-stretch justify-center p-8 font-sans bg-zinc-100 text-black">
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center relative">
        <Outlet />
      </main>
    </div>
  );
}
