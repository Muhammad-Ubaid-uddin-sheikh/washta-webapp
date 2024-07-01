import Sidebar from 'pages/sideBar/SideBar'
import React, { useEffect, useState } from 'react'
import '../app.css'
import SellerShopCom from 'components/sellershopCom/SellerShopCom'
import Switch from 'react-switch';
import { GoPlus } from "react-icons/go";
import PopupSellar from './popupsellar';

const SellarShop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [checked, setChecked] = useState(false);

    const handleChange = (nextChecked) => {
      setChecked(nextChecked);
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };

    const data = [
        {id: 1, text: 'Quick Car Wash', type: 'Car Wash', timing: '08:00 AM - 07:00 PM', loctation: 'Dubai, Sharjah', CarPlate: 'AED 2500'},
        {id: 2, text: 'Not Car Wash', type: 'Car Washing', timing: '08:00 AM - 07:00 PM', loctation: 'Dubai, Sharjah', CarPlate: 'AEE 2200'},
        {id:3, text:'Quick Car Wash', type:'Car Wash', timing:'08:00 AM - 07:00 PM', loctation:'Dubai, Sharjah', CarPlate:'AQD 2100'},
        
        
    ];

    return (
        <div className='mainDiv-all-sideBar'>
            <div className='div-sidebar'>
                <Sidebar />
            </div>
            <div className='div-Dashbaord'>
                <div className='div-rewie-main'>
                    <h1 className='h1-all-heading'>Shop</h1>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        offColor="#bcbcbc"
                        onColor="#747EEF"
                        offHandleColor="#ffffff"
                        onHandleColor="#ffffff"
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={25}
                        width={48}
                    />
                </div>
                <div className="dashboard">
                    <div className='styles-div-order-sellar'>
                        {data.map((item) => (
                            <div key={item.id} className='seller-shop-item'> 
                                <SellerShopCom carplate={item.CarPlate} timing={item.timing} location={item.loctation} Heading={item.text} type={item.type}/>
                            </div>
                        ))}
                        <div className='seller-shop-item' onClick={togglePopup} >
                            <div className='lightopcity-div'>
                                <GoPlus className='icons-seller' />
                                <p className='add-seller-shop'>Add Shop</p>
                            </div>
                        </div>
                    </div>
                </div>
                {isPopupOpen && (
              <div>
                 <PopupSellar  Cross={togglePopup}/>
                </div>
       
      )}
               
            </div>
        </div>
    )
}

export default SellarShop
