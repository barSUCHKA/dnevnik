import './App.css';

function App() {
  return (
    <>
      {/* <div className="ellipse-9"></div>
      <div className="ellipse-6"></div>
      <div className="ellipse-8"></div>
      <div className="ellipse-7"></div>
      <div className="ellipse-10"></div> */}

      <div className="avtorizacia">
        <div className="avtorizacia-okno">
          <p className="voiti">Войти в личный кабинет</p>
          <select className="raion-gorod">
            <option className="option-category">Район/Город:</option>
            <option className="option">г Ярославль</option>
          </select>
          <select className="shcola">
            <option className="option-category">Я посещаю:</option>
            <option className="option">Гимназия №2</option>
          </select>
          <button className="prodoljit">Продолжить</button>
        </div>
      </div>
    </>
  );
}

export default App;
