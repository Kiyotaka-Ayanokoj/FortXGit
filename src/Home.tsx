import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('username') === null ? 'A' : localStorage.getItem('username');
    const token = localStorage.getItem('userToken') === null ? 'A' : localStorage.getItem('userToken');
    const url = `https://kiyotakaA.pythonanywhere.com/api/checkToken?username=${user}&token=${token}`;
  
    /*fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.code === 0) {
          navigate('/login');
        }
      })
      .catch(err => {
        console.log(err);
      });*/
      
  }, []);
  
  const changeLang = function(lang) {
    localStorage.setItem("lang", lang);
    setLang(lang);
    const notLang = lang === 'es' ? 'en': 'es';
    let updatedLangList = { ...langList };

    /*for (let i = 1; i <= 10; i++) {
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
  };*/

      setLangList(updatedLangList);
  };

  return (
    <>
      <Navbar lang="es" changeLang={changeLang}/>
      <h1>Hello</h1>
      <div className="form-floating mb-3 mt-3">
  <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
  <label htmlFor="email">Email</label>
</div>

    </>
  )
}

export default Home;