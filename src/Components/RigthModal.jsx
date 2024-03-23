import { useState } from "react";
import "../Components/Styles/RigthModalStyles.css";
import { InfoIcon, LucideArrowRightCircle } from "lucide-react";
const RigthModal = ({ showModel, setShowModel }) => {
  return showModel ? (
    <div className="RigthModalConteiner">
      <button
        className="closeModalBtn"
        onClick={(e) => {
          e.preventDefault();
          setShowModel(!showModel);
        }}
      >
        <LucideArrowRightCircle size={15} />
      </button>
      <ul className="ulModelConteiner">
        {Array.from({ length: 5 }).map((_, index) => (
          <li>
            <button className="ModalLiButton">
              <h5>Teste</h5>
              <InfoIcon size={12} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    ""
  );
};
export default RigthModal;
