import { Link } from "react-router-dom";

const Logo = ({ className = "" }) => {
  return (
    <>
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`logo cursor-pointer text-2xl md:text-4xl text-white font-medium font-kaushan! ${className}`}
      >
        Travelo<span className="text-prim">r.</span>
      </Link>
    </>
  );
};

export default Logo;
