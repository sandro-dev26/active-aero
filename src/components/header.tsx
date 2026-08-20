import { Flame } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 border-b-2 border-red-500">
      <h1 className="font-oxanium font-black">Active Aero</h1>

      <div className="flex items-center gap-1 text-gray-500">
        <Flame size={20} fill="currentColor" stroke="currentColor" />
        <h2>3</h2>
      </div>
    </header>
  );
}

export default Header;
