import React, { useState } from 'react'
import Switch from 'react-switch';
import './SellershopCom.css'
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import ButtonDahbaord from 'components/ButtonDahbaord/ButtonDahbaord';

const SellerShopCom = ({Heading,type,timing,location,carplate,}) => {
    const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  
  return (
    <div className='div-sellar-shop'>
        <img style={{borderRadius:'12px',width:'100%'}} src='https://img.freepik.com/free-photo/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash_496169-333.jpg'/>
        <div className='text-heading-toggle'>
            <h5 className='seller-shop' style={{ paddingTop: '0em'}}> {Heading} </h5>
            <Switch
        checked={checked}
        onChange={handleChange}
        offColor="#bcbcbc"
        onColor="#747EEF"
        offHandleColor="#ffffff"
        onHandleColor="#ffffff"
        handleDiameter={18}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={22}
        width={48}
        
      />
        </div>
        <p className='paragraph-text-shop'>{type}</p>
        <div className='icon-div-row'>
        <CiClock2 />
            <p className='icon-patagraph'>Timing: {timing}</p>
        </div>
        <div className='icon-div-row'>
        <CiLocationOn />
            <p className='icon-patagraph'>Location: {location}</p>
        </div>
        <h5 className='seller-shop'> {carplate}</h5>
        <div className='btn-both adding-margin'>
  <ButtonDahbaord textButton="Delete" width={'100%'} height={38}   />
  <ButtonDahbaord textButton='Edit' background={'purple'} width={'100%'} height={38}/>
</div>
    </div>
  )
}

export default SellerShopCom