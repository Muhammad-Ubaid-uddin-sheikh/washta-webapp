import React from 'react'
import '../invoice/invoice.css'
const NotificationCom = ({Name,notificationMessages,Date,ImageNot}) => {
  return (
    <div className='main-invoice-div' style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'12px 12px',borderRadius:'10px'}}>
        <div className='first-colm-notification-com'>
            <img style={{width:'40px',objectFit:'cover',borderRadius:'8px',height:'40px'}} src={ImageNot}/>
            <div className='text-notification-div'>
                <h5 className='h5-heaidng-invouice'>{Name}</h5>
                <p className='paragraph-notifcation'>{notificationMessages}</p>
            </div>
        </div>
        <div className='second-colm-notification-com'>
        <p className='paragph-heading'>{Date}</p>
        </div>
    </div>
  )
}

export default NotificationCom