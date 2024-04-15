import React from "react";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import "./ChartCurriencesComponent.css";

const ChartCurriencesComponent = ({dataCurience}) => {

    if(dataCurience && dataCurience.length > 0){
        const chartData = {
            labels: dataCurience.map((object) => object.effectiveDate),
            datasets: [
                {
                    label: 'Sprzedaż',
                    data: dataCurience.map((object) => object.bid),
                    fill: false,
                    borderColor: 'red',
                    borderWidth: 2,
                    pointRadius: 1,
                },
                {
                    label: 'Kupno',
                    data: dataCurience.map((object) => object.ask),
                    fill: false,
                    borderColor: 'blue',
                    borderWidth: 2,
                    pointRadius: 1,
                },
            ],
        };
    
        const chartOptions = {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Dzień',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Kurs',
                    },
                },
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
        };

        return(
            <>
                <div className="chart-container">
                    <Line data={chartData} options={chartOptions}/>
                </div>
            </>
        );
    }else{
        return <h1 className="detailsCurriencesh1">Brak danych do wyświetlenia!</h1>
    }

};

export default ChartCurriencesComponent;