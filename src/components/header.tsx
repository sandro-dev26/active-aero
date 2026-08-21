import { useState, useEffect } from "react";
import metaData from "../data/meta.json";

function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString("en-US", {
    hour12: false,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const weekDay = now.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <header className="flex items-center justify-between sticky top-0 z-50 p-4 bg-gray-900 border-b-2 border-red-500">
      <h1 className="font-oxanium font-black text-xl md:text-2xl lg:text-4xl">
        {metaData.appName.toUpperCase()}
      </h1>

      <div className="flex gap-2 md:gap-6 lg:gap-12 items-center">
        <span className="md:hidden">{weekDay}</span>
        <span className="hidden md:block">{timeString}</span>

        <span className=" text-sm md:text-md lg:text-lg">
          {metaData.version}
        </span>
      </div>
    </header>
  );
}

export default Header;
