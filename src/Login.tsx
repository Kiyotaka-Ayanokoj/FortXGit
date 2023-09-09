import React, { useState, useEffect, useRef } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from './actions';


const Login = (props) => {
  /*const userlan = navigator.language || navigator.userLanguage;
  const userlang = userlan.slice(0, 2);*/
  const { lang, changeLang, projectName } = props;
  
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
      document.title = 'Login';
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
      animation: ''
    },
    alertDis: ''
    });
  const [langList, setLangList] = useState({
    "es": {
      "q1": 'Iniciar sesión',
      "q2": "Nombre de usuario",
      "q3": "Ingrese su nombre de usuario",
      "q4": "Contraseña",
      "q5": "Ingrese su contraseña",
      "q6": "Olvidaste la contraseña?",
      "q7": "Iniciar sesión",
      "q8": "Crear una cuenta",
      "errorsMsg": {},
      "errorsMsgT": {
        'm1': "El nombre de usuario debe tener 4 caracteres o más",
        'm2': 'La contraseña debe tener 8 carácteres o más'
      },
      "q10": `Inicia sesión en ${projectName}`,
      'q11': 'Guardar datos de inicio de sesión',
      'q12': 'Cargando...',
      'q13': 'o'
    },
    "en": {
      "q1": "Log in",
      "q2": "Username",
      "q3": "Enter your username",
      "q4": "Password",
      "q5": "Enter your password",
      "q6": "Forgot your password?",
      "q7": "Log in",
      "q8": "Create an account",
      'errorsMsg': {},
      "errorsMsgT": {
        'm1': 'Username must be 4 characters or more',
        'm2': 'Password must be 8 characters or more'
      },

      "q10": `Log In to ${projectName}`,
      'q11': 'Save login details',
      'q12': 'Loading...',
      'q13': 'or'
      }
  });

  const [usernam, setUsername] = useState('');
  const [passwor, setPassword] = useState('');
  const username = usernam.replace(/[^a-zA-ZáéíóúüÁÉÍÓÚÜñÑ0-9]/g, '');
const password = passwor.replace(/[^a-zA-ZáéíóúüÁÉÍÓÚÜñÑ0-9]/g, '');
  const [showResponse, setShowResponse] = useState();
  
  const handleUsernameChange = (event) => {
  const userVal = event.target.value;
  setStates(prevStates => ({
    ...prevStates,
    logUAlrWr: true
  }));

  setUsername(event.target.value);

  if (userVal.length < 4) {
    setStates(prevStates => ({
      ...prevStates,
      logBDisabled: true
    }));

    setStyles(prevStyles => ({
      ...prevStyles,
      logUserInputSt: { ...prevStyles.logUserInputSt, border: '1px solid red' },
      alertDis: 'alertDis',
      aleStyle: {...prevStyles.aleStyle, display: 'flex'}
    }));

    setLangList(prevData => ({
      ...prevData,
      [lang]: {
        ...prevData[lang],
        errorsMsg: {
          ...prevData[lang].errorsMsg,
          m1: prevData[lang].errorsMsgT.m1
        }
      }
    }));

  } else if (userVal.length > 3 && password.length > 7) {
      setStyles(prevStyles => ({
        ...prevStyles,
        logUserInputSt: { ...prevStyles.logUserInputSt, border: '1px solid gray' },
        logPassInputSt: { ...prevStyles.logPassInputSt, border: '1px solid gray' },
        alertDis: 'alertNoDis'
      }));

      setLangList(prevData => ({
        ...prevData,
        [lang]: {
          ...prevData[lang],
          errorsMsg: {
            ...prevData[lang].errorsMsg,
            m1: undefined,
            m2: undefined
          }
        }
      }));

      setStates(prevStates => ({
        ...prevStates,
        logBDisabled: false
      }));
    
      setTimeout(() => {
        setStyles(prevStyles => ({
          ...prevStyles,
          aleStyle: { ...prevStyles.aleStyle, display: 'none' }
        }));
      }, 300);
  } else {
    setStyles(prevStyles => ({
      ...prevStyles,
      logUserInputSt: { ...prevStyles.logUserInputSt, border: '1px solid gray' }
    }));

    setLangList(prevData => ({
      ...prevData,
      [lang]: { ...prevData[lang], errorsMsg: {
        ...prevData[lang].errorsMsg,
        m1: undefined}}
    }));￼
    
    if (langList[lang].errorsMsg.m2 === undefined) {
      const updStyles = {
        ...updSt,
        alertDis: 'alertNoDis'
      };
    
      setStyles(updStyles);
      
      setTimeout(() => {
        setStyles(prevStyles => ({
          ...prevStyles,
          aleStyle: { ...prevStyles.aleStyle, display: 'none' }
        }));
      }, 300);
    }
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
      setStates(...prevStates => ({
        ...prevStates,
        logBDisabled: true
      }));
      
      const updSt = {
        ...styles,
        logPassInputSt: {...styles.logPassInputSt, border: '1px solid red'},
        alertDis: 'alertDis',
        aleStyle: {...styles.aleStyle, display: 'flex'}
      };
      
      const updLL = {
        ...langList,
        [lang]: { ...langList[lang], errorsMsg: {
          ...langList[lang].errorsMsg,
          m2: langList[lang].errorsMsgT.m2}}
      };

      setLangList(updLL);
      setStyles(updSt);
    } else if (passVal.length > 7 && username.length > 3) {
      const updSt = {
        ...styles,
        logUserInputSt: { ...styles.logUserInputSt, border: '1px solid gray' },
        logPassInputSt: { ...styles.logPassInputSt, border: '1px solid gray' },
        alertDis: 'alertNoDis'
      };

      const updLL = {
        ...langList,
        [lang]: {
          ...langList[lang],
          errorsMsg: {
            ...langList[lang].errorsMsg,
            m1: undefined,
            m2: undefined
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
    
      setTimeout(() => {
        const updStyles = {
          ...styles,
          aleStyle: { ...styles.aleStyle, display: 'none' }
        };
        setStyles(updStyles);
      }, 300);
    } else {
      const updSt = {
        ...styles,
        logPassInputSt: {...styles.logPassInputSt, border: '1px solid gray'},
        alertDis: 'alertNoDis'
      };
      
      const updLL = {
        ...langList,
        [lang]: { ...langList[lang], errorsMsg: {
          ...langList[lang].errorsMsg,
          m2: undefined}}
      };

      setLangList(updLL);
      setStyles(updSt);
      
      if (langList[lang].errorsMsg.m1 === undefined) {
      const updStyles = {
        ...updSt,
        alertDis: 'alertNoDis'
      };
    
      setStyles(updStyles);
      
      setTimeout(() => {
        const updStyles = {
          ...updSt,
          aleStyle: { ...updSt.aleStyle, display: 'none' }
        };
        setStyles(updStyles);
      }, 300);
    }
    }
  };
  
  const checkAlertMsg = () => {
    for (let i = 1; i <= 10; i++) {
      if (langList[lang].errorsMsg[`m${i}`] !== undefined) {
        return langList[lang].errorsMsg[`m${i}`];
      }
    }
    return '';
  };
  
  useEffect(() => {
    /*localStorage.setItem("lang", lang);*/
    const notLang = lang === 'es' ? 'en': 'es';
    let updatedLangList = { ...langList };

    for (let i = 1; i <= 10; i++) {
    const errorMsg = langList[notLang].errorsMsg[`m${i}`];
    const updErrorMsg = langList[lang].errorsMsgT[`m${i}`];
    if (errorMsg !== undefined && errorMsg !== '') {
      updatedLangList = {
        ...updatedLangList,
        [lang]: {
          ...updatedLangList[lang],
          errorsMsg: {
            ...updatedLangList[lang].errorsMsg,
            [`m${i}`]: updErrorMsg
          }
        },
        [notLang]: {
          ...updatedLangList[notLang],
          errorsMsg: {
            ...updatedLangList[notLang].errorsMsg,
            [`m${i}`]: ''
          }
        }
      };
    }
  }

  setLangList(updatedLangList);
  }, [lang]);

  const navigate = useNavigate();

  const sendForm = () => {
    const genUserToken = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';

      for (let i = 0; i < 64; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      return result;
    }
    
    const userToken = genUserToken();
    
    const st = {
      ...states,
      onLoading: true,
      logBDisabled: true
    };
    setStates(st);
    
    const handleResponse = (data) => {
      setStates(prevStates => ({
        ...prevStates,
        onLoading: false,
        logBDisabled: false
      }));
      
      /*if (data.code === 1) {
        localStorage.setItem('userToken', userToken);
        navigate('/');
      } else {
        setLangList(prevStates => ({
          ...prevStates, 
          [lang]: {...prevStates[lang], errorsMsg: {
            ...prevStates[lang].errorsMsg,
            m3: data.msg
          }}
        }));
      }*/
    }

    const url = "https://kiyotakaA.pythonanywhere.com/api/processLog";
    const body = {
      "username": username,
      "password": password,
      'lang': lang,
      'userToken': userToken
    }
    try {
      let updStates;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        handleResponse(data);
      })
      .catch(error => console.error('Error:', error));
    } catch (error) {
      console.error('Try-catch error:', error);
    }
  };
  
  return (
  <>
    <Navbar onLoading={states.onLoading}/>
    <div className={`form ${styles.formV}`} style={styles.formStyle}>
      <div className="logForm">
        <h1>{langList[lang].q10}</h1>
        <div className="logUsername">
          <input type="text" id="tr_uinput" onChange={handleUsernameChange} value={username} style={styles.logUserInputSt} placeholder={langList[lang].q3}/>
          <FontAwesomeIcon icon={faUser} className="faUser"/>
        </div>
        <div className="logPassword">
          <input type="password" id="tr_pinput" onChange={handlePasswordChange} placeholder={langList[lang].q5} value={password} style={styles.logPassInputSt}/>
          <FontAwesomeIcon icon={faLock} className="faLock"/>
        </div>
        <div className="remData">
  <input type="checkbox" id="cbx2" style={{ display: 'none' }} />
  <label htmlFor="cbx2" className="check"> 
    <svg width="18px" height="18px" viewBox="0 0 18 18">
      <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
      <polyline points="1 9 7 14 15 4"></polyline>
    </svg>
  </label>
  <span>{langList[lang].q11}</span>
</div>
        <div className={`alert p3 ${styles.alertDis}`} role="alert" style={styles.aleStyle}>
        <FontAwesomeIcon icon={faCircleExclamation} id="alertFa"></FontAwesomeIcon>
        <span>{checkAlertMsg()}</span>
        </div>

        <button disabled={states.logBDisabled ? true : false} id='log_send_form' onClick={sendForm}>
          {states.onLoading ? (<span><span className="spinner-grow spinner-grow-sm mx-2"></span>{langList[lang].q12}</span>) : (<span style={styles.bSpanStyle}>{langList[lang].q7}</span>)}
        </button>
        <div className="fpcontainer">
          <Link to="/forgot" id='forgot_pass'>{langList[lang].q6}</Link>
        </div>
        <div class="d-flex align-items-center mb-4">
          <hr class="flex-grow-1 border-top border-black" />
          <span class="px-2 text-gray">{langList[lang].q13}</span>
          <hr class="flex-grow-1 border-top border-black" />
        </div>
        <Link to="/signup" className="sign-up">{langList[lang].q8}</Link>
      </div>
    </div>
  </>
);
};

const mapStateToProps = (state) => ({
  lang: state.lang,
  projectName: state.projectName,
});

export default connect(mapStateToProps, { changeLang })(Login);