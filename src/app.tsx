import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <h1>CEUB ID</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
