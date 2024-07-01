import Sidebar from 'pages/sideBar/SideBar';
import React, { useEffect } from 'react';
import '../app.css'
import imgReviews from '../../../../assets/images/order.png'
import ActiveOrders from 'components/orderComponets/ActiveOrders';
import PastOrdersIMg from '../../../../assets/images/pastorder.png'
import PastOrderCom from 'components/orderComponets/PastOrders'
function OrderDashbaord() {
  const data = [
    {id:1,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.03',status:'pending',billingStatus:'Paid',price:'2500 AED'},
    {id:2,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.20',status:'pending',billingStatus:'Not-Paid',price:'2500 AED'},
    {id:3,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.13',status:'Hold',billingStatus:'Paid',price:'2500 AED'},
    {id:4,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.43',status:'pending',billingStatus:'Not-Paid',price:'2500 AED'},
    {id:5,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.03',status:'pending',billingStatus:'Not-Paid',price:'2500 AED'},
  ]
  const PastOrder = [
    {id:1,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.03',Numberplate:'A-1234',Cartype:'Sedan',Distance:'8 min'},
    {id:2,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.20',Numberplate:'A-1434',Cartype:'Sedan',Distance:'9 min'},
    {id:3,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.13',Numberplate:'A-1134',Cartype:'Sedan',Distance:'10 min'},
    {id:4,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.43',Numberplate:'A-1134',Cartype:'Sedan',Distance:'11 min'},
    {id:5,orderlocation:'3394, Sheikh Ave, JBR',timer:'0.03',Numberplate:'A-1134',Cartype:'Sedan',Distance:'12 min'},
  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mainDiv-all-sideBar'>
    <div className='div-sidebar'>
<Sidebar/>
    </div>
    <div className='div-Dashbaord'>
    <h1 className='h1-all-heading'>Orders</h1>
    <div className="dashboard">
     
      <div className='styles-div-order'>
<div className='invoice-border'>
<div className='chart-colm-div-heading'> 
          <img src={imgReviews} style={{width:'1.5em',objectFit:'contain'}}/>
          <h2 className='main-heading2'>Active Orders</h2>
          </div>
          <div className='row-details-order'>
          {data.map((item)=>(
 <div key={item.id} style={{width:'32.5%'}} >
 <ActiveOrders Price={item.price} billingStatus={item.billingStatus} status={item.status} orderlocation={item.orderlocation} timer={item.timer}/>
 </div>
          ))}
          </div>
         
   
</div>

<div className='invoice-border'>
<div className='chart-colm-div-heading'> 
          <img src={PastOrdersIMg} style={{width:'1.5em',objectFit:'contain'}}/>
          <h2 className='main-heading2'>Past Orders</h2>
          </div>
          <div className='row-details-order'>
          {PastOrder.map((item)=>(
 <div key={item.id} style={{width:'32.5%'}} >
 <PastOrderCom Numberplate={item.Numberplate} Cartype={item.Cartype} Distance={item.Distance} orderlocation={item.orderlocation} timer={item.timer}/>
 </div>
          ))}
          </div>
         
   
</div>

      </div>
      

      
    </div>
    </div>



    
    </div>
  );
}

export default OrderDashbaord;
