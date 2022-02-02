import React from 'react';
//import {Link} from 'react-router-dom'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <div>
        <div>
          <a href="/listdishes">acceder a la liste des plats</a>
        </div>
        <div>
          <a href="/searchDishe">acceder a la recherche d'un plat par ingredient</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
