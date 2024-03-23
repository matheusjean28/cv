import React from "react";
import "./Styles/StylesFindMe.css";

export default function FindMe() {
  const findMeItems = [
    {
      link: "https://github.com/matheusjean28",
      icon: "https://img.icons8.com/ios-glyphs/30/github.png",
      text: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/matheus-jean-devmatth-6b909a1b6/",
      icon: "https://img.icons8.com/ios-glyphs/30/linkedin.png",
      text: "Linkedin",
    },
    {
      link: "https://www.instagram.com/_m4tthh___/",
      icon: "https://img.icons8.com/material-rounded/24/instagram-new.png",
      text: "Instagram",
    },
  ];

  return (
    <>
      <div className="findMe">
        <h1>ME ENCONTRE</h1>
        <p className="PVindMeDescription">
          Você pode me encontrar por aqui! Sinta se a vontade para me mandar uma
          mensagem...
        </p>
        <ul className="UlFindMe">
          {findMeItems.map(({ icon, link, text }, index) => (
            <li key={index} className="LiFindMe">
              <button>
                <a className="AProjects" href={`${link}`}>
                  <img width="30" height="30" src={`${icon}`} alt="github" />
                </a>
              </button>
              <p className="PFindMe">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
