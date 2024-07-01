import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './app.css';
import Orders from './LatestOrder';
import TotalOrdersChart from './TotalOrderChart';
import DashbaordImgtext from 'components/latestOrder/DashbaordImgtext';
import Sidebar from 'pages/sideBar/SideBar';
import LatestReviews from './LatestReviews';
import img1 from '../../../assets/images/LatestReView.png'
import img2 from '../../../assets/images/acceptorder.png'
import img3 from '../../../assets/images/cancel.png'
function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mainDiv-all-sideBar'>
    <div className='div-sidebar'>
<Sidebar/>
    </div>
    <div className='div-Dashbaord'>
    <h1 className='h1-all-heading'>Dashboard</h1>
    <div className="dashboard">
     
      <div className='styles-div'>

<TotalOrdersChart/>
      
      {/* <Line data={data} /> */}
      <div className="stats" style={{gap:20}}>
        <DashbaordImgtext heading='Orders this week' value='50' img={img1}/>
        <DashbaordImgtext heading='Accepted orders' value='42' img={img2}/>
        <DashbaordImgtext heading='Cancelled orders' value='08' img={img3}/>
      </div>
      <LatestReviews/>
      </div>
      <div className='styles-div-text' >
        <Orders/>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;
