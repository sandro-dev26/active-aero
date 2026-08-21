import metaData from "../data/meta.json";

function Header() {
  return (
    <header className="flex items-center justify-between sticky top-0 z-50 p-4 bg-gray-900 border-b-2 border-red-500">
      <h1 className="font-oxanium font-black text-xl md:text-2xl lg:text-4xl">
        {metaData.appName.toUpperCase()}
      </h1>

      <p className="text-sm md:text-md lg:text-lg">{metaData.version}</p>
    </header>
  );
}

export default Header;
