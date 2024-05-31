import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const getTechnologyDescription = (techName) => {
  switch (techName) {
    case "HTML5":
      return "HTML5 fornece a estrutura básica para o conteúdo das páginas da web.";
    case "CSS3":
      return "CSS3 controla a aparência e o layout dessas páginas.";
    case "JavaScript":
      return "JavaScript adiciona interatividade às páginas da web, tornando-as dinâmicas.";
    case "Node.js":
      return "Node.js usa JavaScript para criar servidores poderosos para aplicativos web complexos.";
    case "React":
      return "React simplifica a criação de partes reutilizáveis de sites, facilitando a construção de aplicativos web interativos e eficientes.";
      return "";
  }
};

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{getTechnologyDescription(tech.name)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;

