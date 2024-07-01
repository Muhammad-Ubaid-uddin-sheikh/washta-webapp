import React from 'react'
import './Order.css'
import Locationicon from '../../assets/images/location.png'
import ButtonDahbaord from 'components/ButtonDahbaord/ButtonDahbaord'
const ActiveOrders = ({orderlocation,timer,status,billingStatus,Price}) => {
  
  return (
    <div className='order-componet'>
        <div className='row-invoice' style={{justifyContent:'flex-start',alignItems:"flex-start"}}>
            <div className='div-order-active'>
<img src={Locationicon} style={{width:'1.3em',objectFit:'contain'}}/>
    <h5 className='h5-heaidng-order'> {orderlocation}</h5>
</div>
<div className='timer'>
<p className='paragph-heading'>{timer}</p>
</div>

        </div>
        <div className='row-invoice adding-left-padding' >
  <div className='div-colm-order'>
  <p className='paragph-heading'>Status</p>
  <p className='paragph-heading-text'>{status}</p>
  </div>
  <div className='div-colm-order'>
  <p className='paragph-heading'>Billing Status</p>
  <p className='paragph-heading-text'>{billingStatus}</p>
  </div>
  <div className='div-colm-order'>
  <p className='paragph-heading'>Price</p>
  <p className='paragph-heading-text'>{Price}</p>
  </div>
</div>
<div className='btn-both adding-margin'>
  <ButtonDahbaord textButton="Refuse" width={'100%'} height={35}   />
  <ButtonDahbaord textButton='Accept' background={'purple'} width={'100%'} height={35}/>
</div>
        </div>
  )
}

export default ActiveOrders