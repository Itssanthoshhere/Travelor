import { Link } from "react-router-dom";

const MainBtn = ({ className = "", text, to = "#" }) => {
  return (
    <>
      <Link to={to} className={`main-btn ${className}`}>
        {text}
      </Link>
    </>
  );
};

export default MainBtn;
