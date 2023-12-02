import './App.css';
import { useState, useEffect } from 'react';

function App() {

  let [raion_gorod, setRaion_gorod] = useState('Район/Город:');
  let [shcola, setShcola] = useState('Я посещаю:');
  let [prodoljit_back, setProdoljit_back] = useState('#15ff0080');
  let [prodoljit_color, setProdoljit_color] = useState('#ffffff80');
  let [prodoljit_cursor, setProdoljit_cursor] = useState('default');
  let [prodoljit_input, setProdoljit_input] = useState('none');
  let [prodoljit_btn, setProdoljit_btn] = useState('');
  let [prodoljit_select, setProdoljit_select] = useState('');
  let [vhod_btn, setVhod_btn] = useState('none');

  useEffect(() => {
    if (shcola !== 'Я посещаю:' && raion_gorod !== 'Район/Город:') {
      setProdoljit_back('#15ff00');
      setProdoljit_color('#ffffff');
      setProdoljit_cursor('pointer');
    } else {
      setProdoljit_back('#15ff0080');
      setProdoljit_color('#ffffff80');
      setProdoljit_cursor('default');
    }
  }, [shcola, raion_gorod]);

  return (
    <>
      <div className="ellipse-9"></div>
      <div className="ellipse-6"></div>
      <div className="ellipse-8"></div>
      <div className="ellipse-7"></div>
      <div className="ellipse-10"></div>

      <div className="avtorizacia">
        <div className="avtorizacia-okno">
          <p className="voiti">Войти в личный кабинет</p>
          <select className="raion-gorod" style={{
            display: prodoljit_select
          }} onChange={(e) => {
              setRaion_gorod(e.target.value);
            }}>
            <option className="option-category">Район/Город:</option>
            <option className="option">г Ярославль</option>
          </select>
          <select className="shcola" style={{
            display: prodoljit_select
          }} onChange={(e) => {
              setShcola(e.target.value);
            }}>
            <option className="option-category">Я посещаю:</option>
            <option className="option">Гимназия №2</option>
          </select>
          <input className='login' type='number' placeholder='Логин' style={{
            display: prodoljit_input
          }}/>
          <input className='parol' type='number' placeholder='Пароль' style={{
            display: prodoljit_input
          }}/>
          <button className="prodoljit" style={{
            color: prodoljit_color,
            backgroundColor: prodoljit_back,
            cursor: prodoljit_cursor,
            display: prodoljit_btn
          }} onClick={()=>{
            if (shcola !== 'Я посещаю:' && raion_gorod !== 'Район/Город:') {
              setProdoljit_input('flex');
              setProdoljit_select('none');
              setProdoljit_btn('none');
              setVhod_btn('');
            }
          }}>Продолжить</button>
          <button className='vhod' to='main' style={{
            display: vhod_btn
          }} onClick={() => {
            window.location.assign('main');
          }}>ВХОД</button>
        </div>
      </div>
      
    </>
  );
}

export default App;
