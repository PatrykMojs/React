import React from 'react';
import {Link} from 'react-router-dom';
import './MainPageComponent.css'
import NavbarComponent from '../NavBar/NavbarComponent';

const MainPageComponent = () => {
  
  return (
    <>
      <NavbarComponent/>
      <div className="backgorundMainPage">
        <div className="containerBoxesMainPage">
          <div className="BoxOneMainPage">
            <h1>Aplikacja Api</h1>
            <p>
              Mozliwość wyszukania pogody jaka aktualnie panuje w danym miescie lub sprawdzenie kursów walut.
            </p>
          </div>
        
          <Link to='/weather'>
            <div className="BoxTwoMainPage">
              <h1>Pogodowe API</h1>
              <p>Już dostępne sprawdzenie pogody dla dowolego miasta w wybranym kraju.</p>
              <p>Sprawdź pogodę</p>
            </div>
          </Link>

          <Link to='/curriences'>
            <div className="BoxThreeMainPage">
              <h1>Waluty Api</h1>
              <p>Aktualne kursy walut</p>
              <p>Sprawdź już teraz</p>
            </div>
          </Link>
          
          <div className="BoxFourMainPage">
            <h1>Autorem aplikacji: Patryk Meus</h1>
            <p>Aplikacja została stworzona w celu pobierania danych z róznych Api</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MainPageComponent;