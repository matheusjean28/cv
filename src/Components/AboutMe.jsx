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
            Apenas um jovem dedicado a se destacar na esfera de
            desenvolvimento de software. Inerentemente motivado pelos desafios
            dinâmicos da tecnologia, meu entusiasmo pelo design gráfico
            complementa minha abordagem multidisciplinar. Possuo uma
            criatividade afiada, uma mentalidade de solucionador ágil e uma
            profunda paixão por compartilhar soluções inovadoras.
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
