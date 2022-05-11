import React from 'react';
import iconeGithub from '../../assets/icons8-github-50.png';
import iconeLinkedin from '../../assets/icons8-linkedin-50.png';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="cadre-footer">
      <a href="https://www.youtube.com/channel/UCt8iNzhAJONk3leOg0hoNYA">
        une multitude de recette
      </a>
      <a href="https://www.satsuki.fr/">trouver vos ingredients</a>
    </div>

    <div className="cadre-footer lien-perso">
      <a href="https://github.com/animmaa/plat-japonais-front">
        Lien Github Front-end
      </a>
      <a href="https://github.com/animmaa/plat-japonais-back">
        Lien Github Back-end
      </a>
    </div>
    <div className="cadre-footer lien-perso">
      <div>
        <a href="https://github.com/animmaa" target="_blank" rel="noreferrer">
          <img src={iconeGithub} alt="icone github" />
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/davy-lebris-2b422a224/" target="_blank" rel="noreferrer">
          <img src={iconeLinkedin} alt="icone github" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
