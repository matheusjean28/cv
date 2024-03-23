import { useState } from "react";
import "../Components/Styles/RigthModalStyles.css";
import { InfoIcon, LucideArrowRightCircle } from "lucide-react";

const RigthModal = ({ showModel, setShowModel }) => {
    
    const componentNames = [
        'AboutMe',
        'Projects',
        'Frameworks',
        'FindMe',
      ];
      
  return (
    <div className={`RigthModalConteiner ${showModel ? 'show' : ''}`}>
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
        {componentNames.map((_, index) => (
          <li key={index}>
            <button className="ModalLiButton">
              <h5>{_}</h5>
              <InfoIcon size={12} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RigthModal;
