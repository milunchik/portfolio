import { React } from "react";
import "./Navbar.css";
// import { SiWebmoney } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="log__container ">{/* <SiWebmoney /> */}</div>
      <div className="tab__group"></div>
    </nav>
  );
};

export default Navbar;
