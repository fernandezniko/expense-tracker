import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {

    console.log({dataPoints})
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value); // transforma array de objetos en un array de valores numericos
    const totalMaximum = Math.max(...dataPointValues); // extrae el valor maximo del array de valores numericos, se extrae cada elemento del array con el spred operator y se pasa como argumento a la funcion Math.max
    
    return (
        <div className="chart">
            {
                dataPoints.map((dataPoint) => (
                    <ChartBar 
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                )
            )}
        </div>
    )
}

export default Chart;