import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const PagesHome = () => (
  <div className="pages-home">
    Parabéns, você conseguiu
    <br />
    {/*<button type="button">Sair</button>*/}
    <Link type="button" to="Login">Sair</Link>
  </div>
);

export default PagesHome;
