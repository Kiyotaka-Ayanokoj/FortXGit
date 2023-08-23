import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faUser, faLock } from '@fortawesome/free-solid-svg-icons';


function App() {
  const userlan = navigator.language || navigator.userLanguage;
  const userlang = userlan.slice(0, 2);
  let [lang, setLang] = useState(function() {
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", userlang);
      return userlang
    } else {
      return localStorage.getItem("lang");
  };
  });
  
    const [states, setStates] = useState({
      onLoading: false,
      logBDisabled: true,
      logUAlrWr: false,
      logPAlrWr: false,
      isclangListVisible: false
    });
    
    useEffect(() => {
      if (localStorage.getItem('alrLog') === null) {
        const u = {
          ...states,
          alrLog: false
        };
        setStates(u);
      } else {
        const u = {
          ...states,
          alrLog: true
        };
        setStates(u);
      }
      }, []);


    const [styles, setStyles] = useState({
      xFCentral: {
        position: "absolute",
        width: "10px",
        height: "260px",
        background: "rgb(136, 136, 136)",
        boxShadow: "0 0 20px rgb(136, 136, 136)",
        borderRadius: "20px"
      },
      xLCentral: {
        position: "absolute",
        width: "5px",
        height: "260px",
        background: "rgb(2, 225, 255)",
        boxShadow: "0 0 20px rgb(2, 225, 255)",
        borderRadius: "20px"
      },
      onLogButton: {
        color: 'black'
      },
      onRegButton: {
        color: 'white'
      },
      loadingIcon: 'none',
      loadingStyle: {
        display: 'none'
      },
      formV: '',
      formStyle: {
        display: 'flex'
      },
      bSpanStyle: {
        display: 'flex'
      },
      alertt: {
        'type': '',
        msg: 'El nombre de usuario debe'
      },
      alStyle: {},
      aleStyle: {
        display: "none"
      },
      navMenu: {},
    styleFormT: 'onLog',
    logUserInputSt: {
      border: '1px solid gray'
    },
    logPassInputSt: {
      border: '1px solid gray'
    }
    });
  const [langList, setLangList] = useState({
    "es": {
      "q1": 'Iniciar sesión',
      "q2": "Nombre de usuario",
      "q3": "Ingrese su nombre de usuario",
      "q4": "Contraseña",
      "q5": "Ingrese su contraseña",
      "q6": "Recuperar contraseña",
      "q7": "Iniciar sesión",
      "q8": "Registrarse",
      "errorsMsg": {},
      "errorsMsgT": {
        'logUserIn': "El nombre de usuario debe tener 4 caracteres o más",
        'logPasswordIn': 'La contraseña debe tener 8 carácteres o más'
      },
      "q10": 'Bienvenido! Inicia sesión en tu cuenta',
      "q11": 'Bienvenido de nuevo!',
      'q12': 'Guardar datos de inicio de sesión'
    },
    "en": {
      "q1": "Log in",
      "q2": "Username",
      "q3": "Enter your username",
      "q4": "Password",
      "q5": "Enter your password",
      "q6": "Recover password",
      "q7": "Log in",
      "q8": "Sign up",
      'errorsMsg': {},
      "errorsMsgT": { 
        'logUserIn': 'Username must be 4 characters or more',
        'logPasswordIn': 'Password must be 8 characters or more'
      },
      "q10": 'Welcome! Log In to your account',
      "q11": 'Welcome again!',
      'q12': 'Save login details'
      }
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const clangListRef = useRef(null);
  const [isCLLVisible, setCLLV] = useState(false);

  const handleClickOutside = (event) => {
    if (clangListRef.current && !clangListRef.current.contains(event.target)) {
    setCLLV(!isCLLVisible);
    }
  };

  useEffect(() => {
    if (isCLLVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
}, [isCLLVisible]);

  const handlecLang = function() {
    setCLLV(!isCLLVisible);
  };
  
const changeM = function(mode, modeB) {
    const updatedButtonStyles = modeB === 'onLogB' ?
    { onLogButton: { ...styles.onLogButton, color: 'black' }, onRegButton: { ...styles.onRegButton, color: 'white' } } :
    { onLogButton: { ...styles.onLogButton, color: 'white' }, onRegButton: { ...styles.onRegButton, color: 'black' } };

    const up = {
      ...styles,
      styleFormT: mode,
      ...updatedButtonStyles
    };
    
    if (states.onLoading === false) {
      setStyles(up);
    }
  };
  
  const handleUsernameChange = (event) => {
  const userVal = event.target.value;
  const updStates = {
    ...states,
    logUAlrWr: true
  };
  setStates(updStates);

  setUsername(event.target.value);

  if (userVal.length < 4) {
    const updStates = {
      ...states,
      logBDisabled: true
    };
    setStates(updStates);

    const updSt = {
      ...styles,
      logUserInputSt: { ...styles.logUserInputSt, border: '1px solid red' },
      aleStyle: { ...styles.aleStyle, display: 'flex' }
    };

    const updLL = {
      ...langList,
      [lang]: {
        ...langList[lang],
        errorsMsg: {
          ...langList[lang].errorsMsg,
          m1: langList[lang].errorsMsgT.logUserIn
        }
      }
    };

    setLangList(updLL);
    setStyles(updSt);
  } else if (userVal.length > 3 && password.length > 7) {
    const updSt = {
      ...styles,
      logUserInputSt: { ...styles.logUserInputSt, border: '1px solid gray' },
      logPassInputSt: { ...styles.logPassInputSt, border: '1px solid gray' },
      aleStyle: { ...styles.aleStyle, display: 'none' }
    };

    const updLL = {
      ...langList,
      [lang]: {
        ...langList[lang],
        errorsMsg: {
          m1: undefined,
          m2: ''
        }
      }
    };

    const updStates = {
      ...states,
      logBDisabled: false
    };

    setLangList(updLL);
    setStyles(updSt);
    setStates(updStates);
  } else {
    const updSt = {
      ...styles,
      logUserInputSt: { ...styles.logUserInputSt, border: '1px solid gray' }
    };

    const updLL = {
        ...langList,
        [lang]: { ...langList[lang], errorsMsg: {
          ...langList[lang].errorsMsg,
          m1: undefined}}
      };

    setLangList(updLL);
    setStyles(updSt);
  }
};


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const passVal = event.target.value;
    const updStates = {
      ...states, 
      logPAlrWr: true
    };
    setStates(updStates);
    
    if (passVal.length < 8) {
      const updStates = {
        ...states, 
        logBDisabled: false
      };
      setStates(updStates);
      
      const updSt = {
        ...styles,
        logPassInputSt: {...styles.logPassInputSt, border: '1px solid red'},
        aleStyle: {...styles.aleStyle, display: 'flex'}
      };
      
      const updLL = {
        ...langList,
        [lang]: { ...langList[lang], errorsMsg: {
          ...langList[lang].errorsMsg,
          m2: langList[lang].errorsMsgT.logPasswordIn}}
      };

    setLangList(updLL);
      setStyles(updSt);
    } else if (passVal.length > 7 && username.length > 3) {
      const updSt = {
        ...styles,
        logUserInputSt: {...styles.logUserInputSt, border: '1px solid gray'},
        logPassInputSt: {...styles.logPassInputSt, border: '1px solid gray'},
        aleStyle: {...styles.aleStyle, display: 'none'}
      };
      
      const updLL = {
        ...langList,
        [lang]: { ...langList[lang], errorsMsg: {
          m1: undefined,
          m2: ''}}
      };
      
      const updStates = {
        ...states, 
        logBDisabled: false
      };

      setLangList(updLL);
      setStyles(updSt);
      setStates(updStates);
    } else {
      const updSt = {
        ...styles,
        logPassInputSt: {...styles.logPassInputSt, border: '1px solid gray'}
      };
      
      const updLL = {
        ...langList,
        [lang]: { ...langList[lang], errorsMsg: {
          ...langList[lang].errorsMsg,
          m2: ''}}
      };

      setLangList(updLL);
      setStyles(updSt);
    }
  };

  const changeLang = function(lang) {
    localStorage.setItem("lang", lang);
    setLang(lang);
    setCLLV(!isCLLVisible);
  };
  
  const checkAlertMsg = () => {
    if (langList[lang].errorsMsg.m1 !== undefined) {
      return langList[lang].errorsMsg.m1;
    } else {
      return langList[lang].errorsMsg.m2;
    }
  };

  const sendForm = () => {
    
    const upS = {
      ...styles,
      loadingIcon: 'logLoading',
    loadingStyle: {...styles.loadingStyle, display: 'flex'},
    bSpanStyle: {...styles.bSpanStyle, display: 'none'}
    };
    setStyles(upS);
    
    const st = {
      ...states,
      onLoading: true,
      logBDisabled: true
    };
    setStates(st);
    
    /*const upSt = () => {
      const s = {
        ...styles,
        formStyle: {...styles.formStyle, display: 'none'}
      };
      setStyles(s);
    };
    
    setTimeout(upSt, 2000);

    /*const url = "https://kiyotakaA.pythonanywhere.com/login";
    const body = {
      "username": username,
      "password": password
    }
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        if (data.code === 1) {
          alertt.msg = "Inicio de sesion exitoso";
          alertt.type = "success";
        }
      })
      .catch(error => console.error('Error:', error));
    } catch (error) {
      console.error('Try-catch error:', error);
    }*/
  };
  
  return (
  <div>
    <div className="navbar">
      <div className="navTitle">
        <h1>Proyect</h1> <span className="x x1"></span><span className="x x2"></span>
      </div>
      <div className="cLang" onClick={handlecLang}><FontAwesomeIcon icon={faLanguage} id='cLangIcon'/></div>
      {isCLLVisible && (
        <div ref={clangListRef} className="cLangList">
        <span className='langES' onClick={() => changeLang("es")}>Español</span>
        <span className='langEN' onClick={() => changeLang("en")}>English</span>
      </div>)}
      <div className="fas fa-bars">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className="content">
      <div></div>
      <div></div>
    </div>
    <div className={`form ${styles.formV}`} style={styles.formStyle}>
      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>
      <div className={`fHead ${styles.styleFormT}`}>
        <button onClick={() => changeM('onLog', 'onLogB')}><span className="text">{langList[lang].q1}</span></button>
        <button onClick={() => changeM('onReg', 'onRegB')}>{langList[lang].q8}</button>
      </div>
      <div className="logForm">
        <h1>{states.alrLog ?
          (langList[lang].q11)
          : (langList[lang].q10)}
        </h1>
        <div className="logUsername">
          <label>{langList[lang].q2}</label>
          <input type="text" id="tr_uinput" onChange={handleUsernameChange} placeholder={langList[lang].q3} value={username} style={styles.logUserInputSt}/>
          <FontAwesomeIcon icon={faUser} className="faUser"/>
        </div>
        <div className="logPassword">
          <label>{langList[lang].q4}</label>
          <input type="password" id="tr_pinput" onChange={handlePasswordChange} placeholder={langList[lang].q5} value={password} style={styles.logPassInputSt}/>
          <FontAwesomeIcon icon={faLock} className="faLock"/>
        </div>
        <div className="remData">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span>{langList[lang].q12}</span>
        </div>
        <span className="alertt" style={styles.aleStyle}>
          <div className={`alicon ${styles.alertt.type}`} style={styles.alStyle}></div> {checkAlertMsg()}
        </span>
        <button disabled={states.logBDisabled ? true : false} id='log_send_form' onClick={sendForm}>
          <span style={styles.bSpanStyle}>{langList[lang].q7}</span> 
          <div className={styles.loadingIcon} style={styles.loadingStyle}></div>
        </button>
        <button id='forgot_pass'>{langList[lang].q6}</button>
      </div>
    </div>
  </div>
);
}

export default App;