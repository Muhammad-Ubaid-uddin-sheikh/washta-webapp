import React from 'react';
import './app.css';
import ClipBord from '../../../assets/images/Clipboard.png'
import LatestOrder from 'components/latestOrder/LatestOrder';
function Orders() {
  const Data =[
    {id:1,
    name:'Jhon Doe',
    OrderId:'CS-1095',
    OrderDate:'02 Feb',
    Cost:'AED 20',
    status:'Ongoing'
  },
  {id:2,
    name:'Harry Doe',
    OrderId:'AS-1905',
    OrderDate:'20 Mar',
    Cost:'AEE 30',
    status:'Completed'
  },
  {id:3,
    name:'Jhon Doe',
    OrderId:'SS-1095',
    OrderDate:'02 Feb',
    Cost:'EED 20',
    status:'Completed'
  },
  {id:4,
    name:'Harry',
    OrderId:'SS-0095',
    OrderDate:'02 Feb',
    Cost:'ADD 40',
    status:'Completed'
  }
]
  return (
    <div className="orders">
      <div className='chart-colm-div-heading'> 
          <img src={ClipBord} style={{width:'10%',objectFit:'contain'}}/>
          <h2 className='main-heading2'>Total Orders</h2>
          </div>
      <div className="order-list">
        {Data.map((data) => {
          console.log(data)
          return(
          <div key={data.id} style={{marginTop:20}}>
            <LatestOrder Cost={data.Cost} OrderDate={data.OrderDate}  OrderId={data.OrderId}status={data.status} MainName={data.name} />
            </div>
            )
           
        })}
      </div>
    </div>
  );
}

export default Orders;
