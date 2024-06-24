import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './app.css';
import Sidebar from 'pages/sideBar/SideBar';
import LatestReviews from './LatestReviews';
import Orders from './LatestOrder';
import TotalOrdersChart from './TotalOrderChart';

function Dashboard() {
  const data = {
    labels: ['16 Mar', '18 Mar', '20 Mar', '22 Mar', '24 Mar'],
    datasets: [
      {
        label: 'Total Orders',
        data: [100, 150, 200, 170, 250],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div className='mainDiv-all-sideBar'>
    <div className='div-sidebar'>
<Sidebar/>
    </div>
    <div className='div-Dashbaord'>
    <h1 className='h1-all-heading'>Dashboard</h1>
    <div className="dashboard">
     
      <div className='' style={{width:'50%'}}>

<TotalOrdersChart/>
      
      {/* <Line data={data} /> */}
      <div className="stats">
        <div className="stat-box">Orders this week: 50</div>
        <div className="stat-box">Accepted orders: 42</div>
        <div className="stat-box">Cancelled orders: 8</div>
      </div>
      <LatestReviews/>
      </div>
      <div style={{width:'50%'}}>
        <Orders/>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;
