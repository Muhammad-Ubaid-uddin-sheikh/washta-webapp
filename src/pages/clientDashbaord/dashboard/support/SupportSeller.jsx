import Sidebar from 'pages/sideBar/SideBar'
import React from 'react'
import '../app.css'
import RoundChat from '../../../../assets/images/roundchat.png'
const SupportSeller = () => {
  return (
    <div className='mainDiv-all-sideBar'>
    <div className='div-sidebar'>
<Sidebar/>
    </div>
    <div className='div-Dashbaord'>
    <h1 className='h1-all-heading'>Help & Support</h1>
    <div className="dashboard">
    <div className='styles-div'>
<div className='invoice-border'>
<div className='chart-colm-div-heading'> 
          <img src={RoundChat} style={{width:'1.4em',objectFit:'contain'}}/>
          <h2 className='main-heading2'>Categories we support</h2>
          </div>
          {/* {dataInvoice.map((item) => (
                <div key={item.id} style={{paddingBottom:15}}>
                  <Invoice date={item.date} textInvoice={item.Invoice} btnPurple='Delete' btnTranspraent='Details' />
                  
                </div>
              ))} */}
   
</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default SupportSeller