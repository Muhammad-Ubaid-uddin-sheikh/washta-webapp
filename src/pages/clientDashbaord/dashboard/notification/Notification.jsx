import Sidebar from 'pages/sideBar/SideBar'
import React from 'react'
import '../app.css'
import NotificationCom from 'components/notification/NotificationCom'

const Notification = () => {
    const NotifcationData = [
        {
          id: 1,
          name: 'Kristin Watson',
          date: '16 May 2024 At 10:00 AM',
          message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
          img: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1563183740/autoexpress/2017/05/car_photo_438622.jpg',
        },
        {
          id: 2,
          name: 'Kristin Watson',
          date: '16 May 2024 At 10:00 AM',
          message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
          img: 'https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/06/08130128/car-wash.jpg',
        },
        {
          id: 3,
          name: 'Kristin Watson',
          date: '16 May 2024 At 10:00 AM',
          message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
          img: 'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212221.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719532800&semt=ais_user',
        },
       
      ];
      const latesorder = [
        {
            id: 4,
            name: 'Kristin Watson',
            date: '16 May 2024 At 10:00 AM',
            message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
            img: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1563183740/autoexpress/2017/05/car_photo_438622.jpg',
          },
          {
              id: 5,
              name: 'Kristin Watson',
              date: '16 May 2024 At 10:00 AM',
              message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
              img:'https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg'
            },
            {
              id: 6,
              name: 'Kristin Watson',
              date: '16 May 2024 At 10:00 AM',
              message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
              img:'https://media.istockphoto.com/id/1310978724/photo/the-washing-process-on-a-self-service-car-wash.webp?b=1&s=170667a&w=0&k=20&c=jl2Jo8QcMPcMN_iNqgBg0iK__ee483nOW-5fuGEQEmk='
            },
            {
              id: 7,
              name: 'Kristin Watson',
              date: '16 May 2024 At 10:00 AM',
              message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
              img: 'https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/06/08130128/car-wash.jpg',
            },
            {
                id: 2,
                name: 'Kristin Watson',
                date: '16 May 2024 At 10:00 AM',
                message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
                img: 'https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/06/08130128/car-wash.jpg',
              },
              {
                id: 3,
                name: 'Kristin Watson',
                date: '16 May 2024 At 10:00 AM',
                message: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
                img: 'https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212221.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719532800&semt=ais_user',
              },
      ]
  return (
    <div className='mainDiv-all-sideBar'>
    <div className='div-sidebar'>
<Sidebar/>
    </div>
    <div className='div-Dashbaord'>
    <h1 className='h1-all-heading'>Notifications</h1>
    <div className="dashboard">
    <div className='styles-div-order'>
<div className='invoice-border'>
<div className='chart-colm-div-heading'> 
          <h2 className='main-heading2' style={{paddingLeft:0}}>Today</h2>
          </div>
          <div className='row-details-order'>
            {NotifcationData.map((item)=>(
                <NotificationCom Name={item.name} notificationMessages={item.message} Date={item.date} ImageNot={item.img}/>
            ))}
            
            </div>
          </div>
          <div className='invoice-border'>
<div className='chart-colm-div-heading'> 
          <h2 className='main-heading2' style={{paddingLeft:0}}>Yesterday</h2>
          </div>
          <div className='row-details-order'>
            {latesorder.map((item)=>(
                <NotificationCom Name={item.name} notificationMessages={item.message} Date={item.date} ImageNot={item.img}/>
            ))}
            
            </div>
          </div>
          </div>
          
    </div>
    </div>
    </div>
  )
}

export default Notification