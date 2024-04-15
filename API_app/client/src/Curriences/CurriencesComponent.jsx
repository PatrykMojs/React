import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CurriencesComponent.css';
import NavbarComponent from '../NavBar/NavbarComponent';
import TableCurrienceComponent from'./Tables/TableCurrienceComponent';
// import BoxCurriencesComponent from './BoxCurriences/BoxCurriencesComponent';

const CurriencesComponent = () => {
  const [TableA, setTableA] = useState([]);
  // const [TableC, setTableC] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTableA = await axios.get('http://localhost:5000/currenciesA');
        const dataTableA = Object.values(responseTableA.data[0].rates);
        setTableA(dataTableA);

        // const responseTableC = await axios.get('http://localhost:5000/currencies');
        // const dataTableC = responseTableC.data[0].rates;
        // setTableC(dataTableC);
      } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavbarComponent/>
      
      <div className="backgroundCurriences">
        {/* <BoxCurriencesComponent value={TableC}/> */}
        <TableCurrienceComponent value={TableA}/>
      </div>
    </>
  );
};

export default CurriencesComponent;


