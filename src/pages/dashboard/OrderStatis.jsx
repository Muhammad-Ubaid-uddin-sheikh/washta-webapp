import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
    const data = {
        labels: ['16 Mar', '18 Mar', '20 Mar', '22 Mar', '24 Mar'],
        datasets: [
            {
                label: 'Orders',
                data: [90, 120, 180, 150, 210],
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'blue',
            },
        ],
    };

    return <Line data={data} />;
};

export default ChartComponent;
