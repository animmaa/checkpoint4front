import React from 'react';
import './home.scss';

const Home = () => (
  <div className="home">
    <div className="general-home">
      <div className="encadre">
        <a href="/listdishes">
          <h2>Ma liste des plats réalisés</h2>
        </a>
      </div>
      <div className="encadre">
        <a href="/searchDishe">
          <h2>Liste des ingrédients utiles</h2>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
