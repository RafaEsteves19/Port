import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworkcontainer.sass';

const socialNetworks = [
  { id: 'linkedin', name: 'linkedin', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/rafael-leandro-esteves/' },
  { id: 'github', name: 'github', icon: <FaGithub />, url: 'https://github.com/RafaEsteves19' },
  { id: 'instagram', name: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/rafa.esteves.dev?igsh=emxldXZlOXh1bHVk' },
];

const SocialNetworkContainer = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.id}
          key={network.id}
          onClick={(e) => {
            e.preventDefault();
            handleClick(network.url);
          }}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;

