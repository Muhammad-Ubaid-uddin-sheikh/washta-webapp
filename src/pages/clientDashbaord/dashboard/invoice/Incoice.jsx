import Sidebar from 'pages/sideBar/SideBar';
import React, { useEffect } from 'react';
import Orders from '../LatestOrder';
import Invoice from 'components/invoice/Invoice';
import '../app.css'
import imgReviews from '../../../../assets/images/invoice.png'
import ReviewSummary from '../ratingandReviews/ReviewSummary';
function Incoice() {
const dataInvoice = [
    {id:1,date:'16 May 2024 At 10:00 AM',Invoice:'Invoice #16445'},
    {id:2,date:'19 June 2024 At 10:00 AM',Invoice:'Invoice #15145'},
    {id:3,date:'12 March 2024 At 10:00 AM',Invoice:'Invoice #13245'},
    {id:4,date:'11 Aprl 2024 At 10:00 AM',Invoice:'Invoice #17245'},
    {id:5,date:'14 Jul 2024 At 10:00 AM',Invoice:'Invoice #131245'},
    {id:6,date:'11 Jun 2024 At 10:00 AM',Invoice:'Invoice #11245'},
    {id:7,date:'13 May 2024 At 10:00 AM',Invoice:'Invoice #13245'}
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
    <h1 className='h1-all-heading'>Invoices</h1>
    <div className="dashboard">
     
      <div className='styles-div'>
<div className='invoice-border'>
<div className='chart-colm-div-heading'> 
          <img src={imgReviews} style={{width:'1.4em',objectFit:'contain'}}/>
          <h2 className='main-heading2'>History</h2>
          </div>
          {dataInvoice.map((item) => (
                <div key={item.id} style={{paddingBottom:15}}>
                  <Invoice date={item.date} textInvoice={item.Invoice} btnPurple='Delete' btnTranspraent='Details' />
                  
                </div>
              ))}
   
</div>
      </div>
      <div className='styles-div-text' >
        
        {/* <ReviewSummary headingName="Latest Invoice"/> */}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Incoice;
