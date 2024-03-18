import { useState } from "react";
import "./Styles/utils.css";
import StylesAboutMe from "./Styles/StylesAboutMe";
export default function AboutMe() {
  const { divStl, BntStl, PStl } = StylesAboutMe;

  return (
    <>
      <div style={divStl} className="divStl">
        <h3>Um Pouco Sobre MIM</h3>
        <p className="PStl" style={PStl}>
          Estou determinado a me destacar no mundo do desenvolvimento de
          software. Me motivo com tecnologias que ainda não conheço, também amo
          linguagens de baixo nivel, procurando entender como as coisas
          funcionam por baixo dos panos, sempre explorando recriar sistemas que
          despertam minha curiosidade. <br />
          Meu foco atualmente é o Back-end, minha linguagem de ponto forte é
          Csharp, usando Dotnet 7.0 e relacionados, mas não me limitando a ela,
          também gosto de me desafiar com tecnologias de tempo-real, tais quais
          Sockets, SignalR e mensageria com RabbitMQ e SQS. <br/>Me adpto facil com
          novas sintaxes, enfrento os problemas sempre tentando dividilos em
          partes menores com abordagens que tonam-os mais faceis de visualizar e
          resolver. <br/><br/>"Sou a melhor escolha se precisa de um desenvolvedor aberto
          a aprender e buscar soluções para problemas existentes!"
        </p>
      </div>
    </>
  );
}
