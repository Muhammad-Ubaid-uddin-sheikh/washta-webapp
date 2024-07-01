import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Totalchart.css';
import Graph from '../../../assets/images/Graph.png'
const dataAllTime = {
    labels: ['16 Mar', '18 Mar', '20 Mar', '22 Mar', '24 Mar'],
    datasets: [
        {
            label: 'Total Orders',
            data: [120, 80, 150, 100, 250],
            fill: true,
            backgroundColor: 'rgba(116, 126, 239, 0.2)',
            borderColor: '#747EEF',
            borderWidth: 0.5,
        },
    ],
};

const dataLastMonth = {
    labels: ['1 Mar', '8 Mar', '15 Mar', '22 Mar', '29 Mar'],
    datasets: [
        {
            label: 'Total Orders',
            data: [100, 200, 150, 220, 180],
            fill: true,
            backgroundColor: 'rgba(116, 126, 239, 0.2)',
            borderColor: '#747EEF',
            borderWidth: 1,
        },
    ],
};

const dataThisWeek = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            label: 'Total Orders',
            data: [60, 80, 70, 90, 100],
            fill: true,
            backgroundColor: 'rgba(116, 126, 239, 0.2)',
            borderColor: '#747EEF',
            borderWidth: 0.3,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false,
            labels: {
              font: {
                  family: 'Manrope',
                  color:'black'
                   // Apply Manrope font to the legend
              },
          },
        },
    },
};

const TotalOrdersChart = () => {
    const [timeframe, setTimeframe] = useState('All time');

    const getData = () => {
        switch (timeframe) {
            case 'Last Month':
                return dataLastMonth;
            case 'This Week':
                return dataThisWeek;
            default:
                return dataAllTime;
        }
    };

    return (
        <div className="chart-container">
          <div className='row-main-chart-div'>
          <div className='chart-colm-div-heading'> 
          <img src={Graph} style={{width:'7%',objectFit:'contain'}}/>
          <h2 className='main-heading2'>Total Orders</h2>
          </div>
          <div className='chart-colm-div'>
          <div className="buttons">
                <button 
                    className={timeframe === 'All time' ? 'active' : 'mainbutton'} 
                    onClick={() => setTimeframe('All time')}
                >
                    All time
                </button>
                <button 
                    className={timeframe === 'Last Month' ? 'active' : 'mainbutton'} 
                    onClick={() => setTimeframe('Last Month')}
                >
                    Last Month
                </button>
                <button 
                    className={timeframe === 'This Week' ? 'active' : 'mainbutton'} 
                    onClick={() => setTimeframe('This Week')}
                >
                    This Week
                </button>
            </div>
          </div>
          </div>
          
           
            <div className='div-chart-div'>
            <Line data={getData()} options={options} />
            </div>
            
        </div>
    );
};

export default TotalOrdersChart;
