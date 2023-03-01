import { useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css';

function Header() {
  return (
    <div className="header">
      <div className="nav-container">
        <nav className="Navbar">
          <ul>
            <li className="Navbar__Listitem">
              <a href="/kunden" target="_self">Kunden</a>
            </li>
            <li className="Navbar__Listitem">
              <a href="/haendler" target="_self">Händler</a>
            </li>
            <li className="Navbar__Listitem Navbar__Listitem--active">
              <a href="/" target="_self">Investoren</a>
            </li>
          </ul>
        </nav>
        <nav className="Subnav">
          <ul>
            <li className="Subnav__Listitem"><a href="/" target="_self">1</a></li>
            <li className="Subnav__Listitem"><a href="/" target="_self">1</a></li>
            <li className="Subnav__Listitem"><a href="/" target="_self">1</a></li>
            <li className="Subnav__Listitem"><a href="/" target="_self">1</a></li>
            <li className="Subnav__Listitem"><a href="/" target="_self">1</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
