import "./Styles/utils.css";
import { Github, Instagram, Linkedin } from "lucide-react";
import StylesAboutMe from "./Styles/StylesAboutMe";
export default function AboutMe() {
  const findMeItems = [
    {
      link: "https://github.com/matheusjean28",
      icon: <Github size={18}/>,
    },
    {
      link: "https://www.linkedin.com/in/matheus-jean-devmatth-6b909a1b6/",
      icon: <Linkedin size={18} />,
    },
    {
      link: "https://www.instagram.com/_m4tthh___/",
      icon: <Instagram size={18}/>,
    },
  ];
  return (
    <>
      <div className="divStl">
        <div className="leftDiv">
        <img  className='profilePic' src="src/assets/profile-1.jpg" alt="" />
        
        </div>
        <div className="rigthDiv">
          <h2>Sou Matheus!</h2>
          <p className="descriptionMe">
            Tenho 23 anos, meu objetivo é se especializar na área de
            desenvolvimento de software. Tenho me aperfeiçoado na área com
            cursos e livros, ágil para encontrar soluções, sei pesquisar por
            respostas para os problemas e compartilhar as soluções!
          </p>

          <ul className="socialLinks">
            {findMeItems.map(({ icon, link }, index) => (
              <li key={index}>
                <button>
                  <a href={`${link}`}>{icon}</a>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
