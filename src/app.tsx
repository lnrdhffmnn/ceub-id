import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-8 bg-zinc-100 font-sans">
      <Header />
      <main className="w-full h-full flex items-center justify-center flex-grow relative">
        <Outlet />
      </main>
    </div>
  );
}
