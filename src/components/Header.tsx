import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <div className="bg-cyan-900 text-white p-6 flex">
      <Link to="/">
        <div className="flex">
          <div className="w-6">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-6 ml-2">
            <h1 className="text-lg">Ieeene</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
