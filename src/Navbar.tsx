import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeLang } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { lang, changeLang, projectName } = props;

  const [states, setStates] = useState({
    navListState: '',
    langMenuState: 'langMenuClosed',
    navState: true
  });

  const langList = {
    es: {
      navList: {
        home: 'Inicio',
        login: 'Iniciar sesión',
        signup: 'Crear una cuenta',
        navLang: 'Idioma',
        logout: 'Cerrar sesión',
        about: `Acerca de ${projectName}`,
        contact: 'Contáctanos'
      }
    },
    en: {
      navList: {
        home: 'Home',
        login: 'Log In',
        signup: 'Create an account',
        navLang: 'Language',
        logout: 'Log out',
        about: `About ${projectName}`,
        contact: 'Contact me'
      }
    },
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      changeLang(storedLang);
    }
  }, [changeLang]);

  const openNavList = () => {
    if (states.navListState === 'navListOpen') {
      setStates({ ...states, navListState: 'navListClosed' });
    } else {
      setStates({ ...states, navListState: 'navListOpen' });
    }
    
    setStates((prevStates) => ({
      ...prevStates,
      navState: !prevStates.navState
    }));
  };

  const openLangMenu = () => {
    if (states.langMenuState === 'langMenuOpen') {
      setStates({ ...states, langMenuState: 'langMenuClosed' });
    } else {
      setStates({ ...states, langMenuState: 'langMenuOpen' });
    }
  };

  const handleChangeLang = (newLang) => {
    changeLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  
  return (
    <>
    <div className="navbar">
      <div className="navTitle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 512" className="navImg" fill="red"><path d="M382.7 292.5l2.7 2.7-170-167.3c-3.5-3.5-9.7-3.7-13.8-.5L144.3 171c-4.2 3.2-4.6 8.7-1.1 12.2l68.1 64.3c3.6 3.5 9.9 3.7 14 .5l.1-.1c4.1-3.2 10.4-3 14 .5l84 81.3c3.6 3.5 3.2 9-.9 12.2l-93.2 74c-4.2 3.3-10.5 3.1-14.2-.4L63.2 268c-3.5-3.5-9.7-3.7-13.9-.5L3.5 302.4c-4.2 3.2-4.7 8.7-1.2 12.2L211 510.7s7.4 6.8 17.3-.8l198-163.9c4-3.2 4.4-8.7.7-12.2zm54.5-83.4L226.7 2.5c-1.5-1.2-8-5.5-16.3 1.1L3.6 165.7c-4.2 3.2-4.8 8.7-1.2 12.2l42.3 41.7 171.7 165.1c3.7 3.5 10.1 3.7 14.3.4l50.2-38.8-.3-.3 7.7-6c4.2-3.2 4.6-8.7.9-12.2l-57.1-54.4c-3.6-3.5-10-3.7-14.2-.5l-.1.1c-4.2 3.2-10.5 3.1-14.2-.4L109 180.8c-3.6-3.5-3.1-8.9 1.1-12.2l92.2-71.5c4.1-3.2 10.3-3 13.9.5l160.4 159c3.7 3.5 10 3.7 14.1.5l45.8-35.8c4.1-3.2 4.4-8.7.7-12.2z"/></svg>
        <span>{projectName}</span>
      </div>
      <div className="navMenu">
        <button className={`navIcon ${states.navState ? '' : 'navClosed'}`} onClick={openNavList}>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
        <div className={`navList ${states.navListState}`}>
          <Link to="/" className="Link btn">{langList[lang].navList.home}</Link>
          <Link to="/aboutme" className="Link btn">{langList[lang].navList.about}</Link>
          <Link to="/contact" className="Link btn">{langList[lang].navList.contact}</Link>
          <Link to="/login" className="Link btn lb lb1">{langList[lang].navList.login}</Link>
          <Link to="/signup" className="Link btn lb lb2">{langList[lang].navList.signup}</Link>
          {/*<div className="changeLang">
            <button type="button" className="language btn" onClick={openLangMenu}>
            {langList[lang].navList.navLang}
            </button>
            <div className={`langMenu ${states.langMenuState}`}>
            <button onClick={() => handleChangeLang("es")}>Español</button>
            <button onClick={() => handleChangeLang("en")}>English</button>
          </div>
          </div>*/}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  lang: state.lang,
  projectName: state.projectName,
});

export default connect(mapStateToProps, { changeLang })(Navbar);