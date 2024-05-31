import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rafael Leandro Esteves" />
      <p className="title">Desenvolvedor / FullStack</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://heyzine.com/flip-book/cdc7bbfb15.html" className="btn">
        Ver Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
