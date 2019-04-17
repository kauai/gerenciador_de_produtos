import React, { Component } from 'react'
import logo from "./../logo.svg";

const Nav = () => (
    <div className="App">
    <header className="App-header">
      <div className="box-brand">
        <span className="brand-tag">Gerenciador de conteudo</span>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <nav className="nav-menu">
        <ul className="menu">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
          <li>
            <a>Number</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
)
 export default Nav
