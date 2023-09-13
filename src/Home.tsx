import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

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