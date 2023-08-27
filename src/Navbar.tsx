import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import App from './App';

const Navbar = ({ onLoading }) => {
  const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : userlang;
  
  const [states, setStates] = useState({});
  const [langList, setLangList] = useState({
    es: {
      navLang: 'Idioma'
    },
    en: {
      navLang: 'Language'
    }
  });
  
  const openNavList = () => {
    if (states.navListState === 'navListOpen') {
      const updateStates = {
        ...states, 
        navListState: 'navListClosed'
      }
      setStates(updateStates);
    } else {
      const updateStates = {
        ...states, 
        navListState: 'navListOpen'
      }
      setStates(updateStates);
    }
  };
  
  const openLangMenu = () => {
    if (states.langMenuState === 'langMenuOpen') {
      const updateStates = {
        ...states, 
        langMenuState: 'langMenuClosed'
      }
      setStates(updateStates);
    } else {
      const updateStates = {
        ...states, 
        langMenuState: 'langMenuOpen'
      }
      setStates(updateStates);
    }
  };
  
  const changeLang = (lang) => {
    localStorage.setItem('lang', lang);
  };
  
  return (
    <div className="navbar">
      <div className="navTitle">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/react-native-firebase-1-logo-black-and-white.png" className="reactImg" />
        <span>Luminary</span>
      </div>
      <div className="dropdown">
        {/*<button className="btn dropdown-toggle" type="button" id="cLangDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={faLanguage} id='cLangIcon'/>
        </button>
        {onLoading !== true ? (
        <ul className="dropdown-menu" aria-labelledby="cLangDropdown">
          <span className='dropdown-item' onClick={() => changeLang("es")}>Español</span>
        <span className='dropdown-item' onClick={() => changeLang("en")}>English</span>
        </ul>) : ''}*/}
      </div>
      <div className="navMenu">
        <button className="navIcon" onClick={openNavList}>
          <div></div>
          <div></div>
        </button>
        <div className={`navList ${states.navListState}`}>
          <button type="button" className="language" onClick={openLangMenu}>{langList[lang].navLang}</button>
          <div className={`langMenu ${states.langMenuState}`}>
            <button onClick={() => changeLang("es")}>Español</button>
        <button onClick={() => changeLang("en")}>English</button>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Navbar;