import React from "react";
import "./Styles/StylesHeader.css";
import { MoreVerticalIcon } from "lucide-react";

const Header = () => {
  return (
    <>
      <ul className="UlStyle">
        <button className="BtnPosition">
          Menu
          <MoreVerticalIcon size={15} />
        </button>
      </ul>
    </>
  );
};

export default Header;
