import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeLang } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
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
    <div className="navbar">
      <div className="navTitle">
        <img src="https://cdn-icons-png.flaticon.com/512/1553/1553399.png" className="navImg" />
        <span>{projectName}</span>
      </div>
      <div className="navMenu">
        <button className={`navIcon ${states.navState ? '' : 'navClosed'}`} onClick={openNavList}>
          <div></div>
          <div></div>
        </button>
      </div>
        <div className={`navList ${states.navListState}`}>￼
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  lang: state.lang,
  projectName: state.projectName,
});

export default connect(mapStateToProps, { changeLang })(Navbar);