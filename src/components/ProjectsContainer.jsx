import React from 'react';
import '../styles/components/projects.sass';

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        <div className = "text-space">- Tecnologias Utilizadas: HTML5, CSS3, JavaScript, React, Node.js, C#</div>
        <div className = "text-space"> - Meu portfólio apresenta uma variedade de projetos que demonstram minha experiência em desenvolvimento web, desde aplicações simples de calculadoras até sites de portfólio pessoal e aplicações dinâmicas usando React. Cada projeto reflete meu compromisso com a qualidade, inovação e aprendizado contínuo como desenvolvedor full stack.</div>
        <div className = "text-space">- Alguns dos meus projetos são: Reprodução de Galaga em Js, Calculadora Imc, Calculadora Js e esse próprio Portifólio</div>
      </p>

      <a href="https://github.com/RafaEsteves19?tab=repositories" className="btn">
        Ver Projetos
      </a>

      <a href="https://heyzine.com/flip-book/c41f8898ae.html" className="btn">
        Ver Certificados
      </a>
    </section>
  );
};

export default ProjectsContainer;

