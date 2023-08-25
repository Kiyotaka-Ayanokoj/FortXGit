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
      logPAlrWr: false
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
    },
    div1: {
      animation: 'gradient-animation 10s linear infinite'
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
        'logUserIn2': 'El nombre de usuario no puede contener espacios',
        'logPasswordIn': 'La contraseña debe tener 8 carácteres o más',
        'logPasswordIn2': 'La contraseña no puede tener espacios'
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
        'logUserIn2': 'Username cannot contain spaces',
        'logPasswordIn': 'Password must be 8 characters or more',
        'logPasswordIn2': 'Password cannot contain spaces'
      },

      "q10": 'Welcome! Log In to your account',
      "q11": 'Welcome again!',
      'q12': 'Save login details'
      }
  });

  const [usernam, setUsername] = useState('');
  const [passwor, setPassword] = useState('');
  const username = usernam.replace(/[^a-zA-ZáéíóúüÁÉÍÓÚÜñÑ0-9]/g, '');
const password = passwor.replace(/[^a-zA-ZáéíóúüÁÉÍÓÚÜñÑ0-9]/g, '');
  const [showResponse, setShowResponse] = useState();
  
const changeM = function(mode) {
    const up = {
        ...styles,
        div1: {...styles.div1, animation: `gradient-animation 10s linear infinite, ${mode} 0.2s ease forwards`}
    };
    if (states.onLoading === false) {
      setStyles(up);
    };
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

    const url = "https://kiyotakaA.pythonanywhere.com/processLog";
    const body = {
      "username": username,
      "password": password,
      'lang': lang
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
        const sty = {
          ...styles,
          formV: 'formV'
        };
        setStyles(sty);
    
        const upSt = () => {
          const s = {
            ...styles,
            formStyle: {...styles.formStyle, display: 'none'}
          };
          setStyles(s);
        };
        
        setTimeout(upSt, 2000);
        if (data.code === 1) {
          console.log(data.msg);
        } else {
          console.log(data);
        }
      })
      .catch(error => console.error('Error:', error));
    } catch (error) {
      console.error('Try-catch error:', error);
    }
  };
  
  return (
  <div>
    <div className="navbar">
      <div className="navTitle">
        <h1><span className="navL">L</span>uminary</h1>
      </div>
      <div className="cLang"><FontAwesomeIcon icon={faLanguage} id='cLangIcon'/></div>
      <div className="fas fa-bars">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className={`form ${styles.formV}`} style={styles.formStyle}>
      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>
      <div className="fHead">
        <button onClick={() => changeM('slidebgtoleft')}>{langList[lang].q1}</button>
        <button onClick={() => changeM('slidebgtoright')}>{langList[lang].q8}</button>
        <div className="div1" style={styles.div1}></div>
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