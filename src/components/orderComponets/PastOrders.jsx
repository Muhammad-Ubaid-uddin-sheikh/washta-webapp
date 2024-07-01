import React from 'react'
import './Order.css'
import Locationicon from '../../assets/images/location.png'
import ButtonDahbaord from 'components/ButtonDahbaord/ButtonDahbaord'
const PastOrders = ({orderlocation,timer,Numberplate,Cartype,Distance}) => {
  
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
  <p className='paragph-heading'>Number plate:</p>
  <p className='paragph-heading-text'>{Numberplate}</p>
  </div>
  <div className='div-colm-order'>
  <p className='paragph-heading'>Car type:</p>
  <p className='paragph-heading-text'>{Cartype}</p>
  </div>
  <div className='div-colm-order'>
  <p className='paragph-heading'>Distance:</p>
  <p className='paragph-heading-text'>{Distance}</p>
  </div>
</div>

        </div>
  )
}

export default PastOrders