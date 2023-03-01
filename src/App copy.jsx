import { useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css';
import Home from "./pages/Home";
import Haendler from "./pages/Haendler";
import Kunden from "./pages/Kunden";
import Header from "./Header";

function App() {
  let Component;
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
    case "/haendler":
      Component = Haendler
      break

    case "/kunden":
      Component = Kunden
      break
  }

  return (
    <div className="App">
      <>
      <Header />
      <Component />
      </>
    </div>
  )
}

export default App
