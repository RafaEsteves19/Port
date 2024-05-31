import React from 'react';
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";
import Projects from "./components/Projects";
import Galaga from "./img/galaga.png"
import Calc from "./img/JsCalc.jpg"
import IMCCalc from "./img/CalcIMC.jpg"
import Cshrp from "./img/cshrp.png"
import Gato from "./img/gato.png"
import "./styles/components/typingAnimation.sass";

function App() {
  const projectsData = [
    {
      id: 1,
      titleContent: 'Galaga Project',
      imageSrc: Galaga,
      textContent: 'Esse projeto é uma breve reprodução do jogo Galaga, utilizando javascript e css, porem não foram utilizadas imagens por motivos de direitos autorais,portanto o jogo é composto apenas por elementos quadriculados.',
      linkHref: 'https://github.com/RafaEsteves19/Galaga',
    },
    {
      id: 2,
      titleContent: 'JsCalc',
      imageSrc: Calc,
      textContent: 'Essa é uma simples criação de uma calculadora, utilizando javascript e css.',
      linkHref: 'https://github.com/RafaEsteves19/JS-Calc',
    },
    {
      id: 3,
      titleContent: 'CalcIMC',
      imageSrc: IMCCalc,
      textContent: 'Essa é uma simples criação de uma calculadora de indice de massa corpral (IMC), feito nas aulas do curso VSD com o Prof. Rodrigo Bighetti.',
      linkHref: 'https://github.com/RafaEsteves19/CalcIMC',
    },
    {
      id: 4,
      titleContent: 'VSD C#',
      imageSrc: Cshrp,
      textContent: 'Esse é um projeto feito no curso VSD com o Prof. André Crozatti, juntando algumas funções em C#.',
      linkHref: 'https://github.com/RafaEsteves19/VSD-C-',
    },
    {
      id: 5,
      titleContent: 'Adote um Amigo Felino',
      imageSrc: Gato,
      textContent: 'Esse é apenas o inicio de um projeto em React para a adoção de gatos,tive a idéia de fazer esse site pois adotei um gato e amo esses bichinhos.',
      linkHref: 'https://github.com/RafaEsteves19/AdoteGato',
    },
  ];

  return (
    <div id="portfolio">
      <div className="heading-wrapper">
      <h1 className="typing-animation">Rafael Leandro Esteves</h1>
      </div>
      <Sidebar />
      <MainContent/>
      {projectsData.map(project => (
        <Projects
          key={project.id}
          title={project.titleContent}
          imageSrc={project.imageSrc}
          textContent={project.textContent}
          link={project.linkHref}
        />
      ))}
    </div>
  );
}

export default App;

