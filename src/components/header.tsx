import { Link } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <h1 className="text-4xl font-bold text-fuchsia-600 drop-shadow-sm">
        <Link to="/">CEUB ID</Link>
      </h1>
      <nav>
        <Link to="/settings">
          <AdjustmentsHorizontalIcon className="w-8 h-8 drop-shadow-sm" />
        </Link>
      </nav>
    </header>
  );
}
