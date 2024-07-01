import React from 'react'
import './LatestOrder.css'
const LatestOrder = ({MainName,status,OrderId,OrderDate,Cost}) => {
  return (
    <div className='latestOrder'>
       <div className='main-div-latest-order'>
       <div><h5 className='heading-h5-later'>{MainName}</h5></div>
       <div className='div-btn-button'><button className='btn-main-later'>{status}</button></div>
       </div>
       <div className='main-div-latest-order' style={{marginTop:15,marginBottom:2}}>
       <div className='div-order-inner'>
       <p className='paragph-heading'>Order ID:</p>
        <h5 className='heading-h5-later'>{OrderId}</h5>
        </div>
        <div className='div-order-inner'>
       <p className='paragph-heading'>Order Date:</p>
        <h5 className='heading-h5-later'>{OrderDate}</h5>
        </div>
        <div className='div-order-inner'>
       <p className='paragph-heading'>Cost:</p>
        <h5 className='heading-h5-later'>{Cost}</h5>
        </div>
       
       </div>
        </div>
  )
}

export default LatestOrder