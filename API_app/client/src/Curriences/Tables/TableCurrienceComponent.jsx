import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './TableCurriencesComponent.css';

const TableCurrienceComponent = (props) => {
    const currenciesDataA = props.value;
    const navigate = useNavigate();

    const handleCurrencyClick = (currency) => {
        console.log('Przed przekierowaniem:', currency);
        navigate(`/detailsCurrency/${currency}`, { state: { currency } });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Kraj</th>
                    <th>Symbol waluty</th>
                    <th>Średni kurs</th>
                </tr>
            </thead>
            <tbody>
                {currenciesDataA.map((object, index) => (
                    <tr key={index}>
                        <td className='linkToDetails'>
                            <Link to={`/detailsCurrency/${object.currency}`} onClick={() => handleCurrencyClick(object.currency)}>
                                {object.currency}
                            </Link>
                        </td>
                        <td>{object.code}</td>
                        <td>{object.mid}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableCurrienceComponent;
