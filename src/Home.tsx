import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import { setCookie, getCookie, delCookie} from './cookieUtils';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const username = getCookie('username');
    const userToken = getCookie('userToken');
    
    const url = `https://kiyotakaA.pythonanywhere.com/api/checkToken?username=${username}&token=${userToken}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(url);
        if (data.code === 0) {
          navigate('/login');
          /*delCookie('username');
          delCookie('userToken');*/
        }
      })
      .catch(err => {
        console.log(err);
      });
      
    document.title = 'Home';
      
  }, []);

  return (
    <>
      <Navbar lang="es"/>
      <h1>Hello</h1>
    </>
  )
}

export default Home;