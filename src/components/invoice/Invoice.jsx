import React from 'react'
import invoice from '../../assets/images/invoiceborder.png'
import './invoice.css'
import ButtonDahbaord from 'components/ButtonDahbaord/ButtonDahbaord'
import { purple } from '@mui/material/colors'
const Invoice = ({textInvoice,date,btnPurple,btnTranspraent}) => {
  return (
    <div className='main-invoice-div'>
        <div className='row-invoice'>
            <div className='row-invoice' style={{justifyContent:'flex-start'}}>
<img src={invoice} style={{width:'18%'}}/>
<div className='div-text-image-immer-text'>
    <h5 className='h5-heaidng-invouice'> {textInvoice}</h5>
    <p className='paragph-heading'>{date}</p>
</div>
            </div>
            <div className='btn-both'>
            <ButtonDahbaord textButton={btnTranspraent} height={29} width={80} background={purple}/>
            <ButtonDahbaord textButton={btnPurple} height={29} width={80} background='purple' />
                
                </div>
        </div>
    </div>
  )
}

export default Invoice