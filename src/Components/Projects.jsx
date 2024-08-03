import React from "react";
import { ProgressBar } from "react-loader-spinner";
import { Github } from 'lucide-react';
import "./Styles/StylesProjects.css";

export default function Projects() {
  const projectsList = [
    {
      title: "PayDash",
      Description:
        "Plataforma de gestao financeira, agende, calcule e melhore suagestão financeira de forma rapida e segura.",
      Links: "https://github.com/matheusjean28",
      Stacks: ["ReactJs", "HTML", "CSS"],
      Imgs: ["src/assets/profile.jpg"], //add links to img at github project
    },
    {
      title: "MACSAVE",
      Description:
        "Projeto para organização interna da empresa que presto serviços, controle de macs por origem de clientes, relatorios de produtos danificado, novos e já ultilizados.\nListas de fornecedores, modelos outros[...]",
      Links: "https://github.com/matheusjean28/mac_register",
      Stacks: [
        "Dotnet 7.0",
        "Sqlite",
        "Swagger/UI",
        "Entity Framework",
        "LINQ",
        "+FrontEnd",
      ],
      Imgs: ["src/assets/profile.jpg"], //add links to img at github project
    },
    {
      title: "REALTIMECHAT",
      Description:
        "Uma aplicação de chat em tempo real usando web sockets(SIGNALR) do dotnet.\nPermite criar chats, adicionar membros como moderadores, remover usuários, criar salas e chats privados, estou emplementando novas funcionalidades como envio de arquivos, planejo adicionar comandos parecidos com do discord (e.g: /bot: do that) ",
      Links: "https://github.com/matheusjean28/singalrchathub",
      Stacks: [
        "SIGNALR",
        "Entity Framework",
        "Dotnet 7.0",
        "Swagger/UI",
        "LINQ",
        "+FrontEnd",
      ],
      Imgs: ["src/assets/profile.jpg"], //add links to img at github project
    },
  ];

  return (
    <>
      <div className="Projects">
        <ul className="UlProjects">
          {projectsList.map(({ title, Description, Links, Stacks }, index) => (
            <li className="ProjectCard" key={index}>
              <h4>{title}</h4>
              <p className="descriptionSize">
                {Description.length > 100 ? (
                  <>
                    {Description.substring(0, 100)}...
                    <span className="tooltip">{Description}</span>
                  </>
                ) : (
                  Description
                )}
              </p>
              <div className="stackContainer">
                {Stacks.map((e, i) => (
                  <p className="stackNameSize" key={i}>{e}</p>
                ))}
              </div>
              <button className="githubButton">
                <a href={Links}><Github size={20} color="whitesmoke"/></a>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="animation">
        <ProgressBar
        height={50}
        width={100}
          ariaLabel="progress-bar-loading"
          wrapperClass="progress-bar-wrapper"
          borderColor="black"
          barColor="#51E5FF"
        />
      </div>
    </>
  );
}
