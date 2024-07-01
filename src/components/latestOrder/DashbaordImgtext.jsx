import React from 'react'
import './LatestOrder.css'
import CancelUser from '../../assets/images/cancel.png'
const DashbaordImgtext = ({img,heading,value}) => {
  return (
    <div className='div-main-dashbaord-et'>
        <div className='row-dashbaoard'>
<div className='first-img-col'> <img src={img} className='img-text-dashbaord'/>  </div>
<div className='second-img-col'>
<h4 className='h4-dashbaord-text'>{heading}</h4>
<p className='paragrah-text'>{value}</p>
</div>
        </div>
    </div>
  )
}

export default DashbaordImgtext