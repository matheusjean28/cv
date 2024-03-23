import React from "react";
import "./Styles/StylesHeader.css";
import { MoreVerticalIcon } from "lucide-react";

const Header = ({ showModel, setShowModel }) => {
  return (
    <>
      <ul className="UlStyle">
        <button
          className="BtnPosition"
          onClick={(e) => {
            e.preventDefault();
            setShowModel(!showModel);
          }}
        >
          Menu
          <MoreVerticalIcon size={15} />
        </button>
      </ul>
    </>
  );
};

export default Header;
