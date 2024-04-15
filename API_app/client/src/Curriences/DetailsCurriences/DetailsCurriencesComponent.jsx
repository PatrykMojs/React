import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarComponent from "../../NavBar/NavbarComponent";
import ChartCurriencesComponent from "./ChartCuriences/ChartCurriencesComponent";
import './DetailsCurriencesComponent.css';

const fetchData = async (code, startDate, endDate, setDataCurience) => {
    try {
        const response = await axios.get(`http://localhost:5000/exchangerateofcurrency/${code}/${startDate}/${endDate}`);
        const data = response.data.rates;
        setDataCurience(data);
    } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error.message);
    }
};

const DetailsCurriencesComponent = () => {
    const { currency } = useParams();
    const [dataCurience, setDataCurience] = useState([]);
    const [startDate, setStartDate] = useState('2023-03-03');
    const [endDate, setEndDate] = useState('2024-01-20');
    const [code, setCode] = useState('');

    useEffect(() => {
        findCode(currency);
        fetchData(code, startDate, endDate, setDataCurience);
    }, [code, startDate, endDate]);

    // const handleSearch = () => {
    //     findCode(currency);
    //     fetchData(code, startDate, endDate, setDataCurience);
    // };

    const findCode = async (currency) =>{
        try {
            const response = await axios.get('http://localhost:5000/currencies');
            const data = response.data[0].rates;

            const foundCurrency = data.find((object) => currency === object.currency);
            if(foundCurrency){
                setCode(foundCurrency.code);
            } else {
                alert(`Nie znaleziono kodu waluty: ${foundCurrency.code}`);
            }
        } catch(error) {
            console.error('Błąd pobierania danych:', error.message);
        }
    };
    
    return (
        <>
           <div className="backgroundDetailsCurrency">
                <NavbarComponent/>
                <div className="containerFormChart">
                    <form id="formCurriences">
                        <label>
                            Ustaw datę początkową:<br />
                            <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                        </label>
                        <label>
                            Ustaw datę końcową:<br />
                            <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
                        </label>
                        {/* <button type="button" onClick={handleSearch}>Szukaj</button> */}
                    </form>

                    <ChartCurriencesComponent dataCurience={dataCurience} id="chartCurriences"/>
                </div>
           </div>
        </>
    );
};

export default DetailsCurriencesComponent;
