import logo from "../img/con-web-logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute z-30 w-full flex justify-start top-2 ml-2">
      <img
        src={logo}
        alt="logo"
        className="h-20 w-30"
        onClick={() => {
          navigate("/");
        }}
      />
    </header>
  );
};
