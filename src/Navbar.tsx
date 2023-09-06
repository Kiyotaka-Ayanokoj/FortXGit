import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeLang } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { lang, changeLang } = props;

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
        logout: 'Cerrar sesión'
      }
    },
    en: {
      navList: {
        home: 'Home',
        login: 'Log In',
        signup: 'Create an account',
        navLang: 'Language',
        logout: 'Log out'
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
        <img src="https://seeklogo.com/images/R/risingwave-icon-logo-837E37238C-seeklogo.com.png" className="reactImg" />
        <span>Luminary</span>
      </div>
      <div className="navMenu">
        <button className={`navIcon ${states.navState ? '' : 'navClosed'}`} onClick={openNavList}>
          <div></div>
          <div></div>
        </button>
      </div>
        <div className={`navList ${states.navListState}`}>￼
        <div className="navListContent">
          <Link to="/" className="Link btn">{langList[lang].navList.home}</Link>
          <div className="lastButtons">
            <Link to="/login" className="Link btn navLoginButton">{langList[lang].navList.login}</Link>
            <Link to="/signup" className="Link btn navSignupButton">{langList[lang].navList.signup}</Link>
          </div>
          {/*<div className="changeLang">
            <button type="button" className="language btn" onClick={openLangMenu}>
            {langList[lang].navList.navLang}
            </button>
            <div className={`langMenu ${states.langMenuState}`}>
            <button onClick={() => handleChangeLang("es")}>Español</button>
            <button onClick={() => handleChangeLang("en")}>English</button>￼
          </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps, { changeLang })(Navbar);