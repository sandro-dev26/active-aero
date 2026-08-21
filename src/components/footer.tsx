import metaData from "../data/meta.json";

function Footer() {
  return (
    <footer className="flex justify-center my-8 text-gray-400 text-xs md:text-sm lg:text-md">
      <p>Last updated: {metaData.lastUpdated}</p>
    </footer>
  );
}

export default Footer;
