import { useState } from "react";
import "./Styles/utils.css";
import StylesAboutMe from "./Styles/StylesAboutMe";
export default function AboutMe() {
  const { divStl, BntStl, PStl } = StylesAboutMe;
  const [BtnMore, setBtnMore] = useState(false);

  const handleBtn = () => {
    setBtnMore(!BtnMore);
  };

  return (
    <>
      <div style={divStl} className="divStl">
        <h3>Um Pouco Sobre MIM</h3>
        {BtnMore && (
          <p className="PStl" style={PStl}>
            Sou um jovem determinado a me destacar no mundo do desenvolvimento de software. Minha motivação vem dos desafios que a tecnologia sempre traz. Tenho uma mente criativa afiada, gosto de resolver problemas e tenho uma grande curiosidade em entender como as coisas funcionam, tentando replicá-las à minha maneira. Meu foco é me tornar um desenvolvedor versátil, aproveitando minha habilidade em encontrar soluções para problemas complexos.
          </p>
        )}
        <button
          onClick={handleBtn}
          className={BtnMore ? "btnHeigth" : ""}
          style={BntStl}
        >
          {"Ver Mais > "}
        </button>
          </div>
    </>
  );
}
