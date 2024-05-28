import React from 'react';
import './style.css'; 
import LeftImage from '../../assets/images/LeftPhone.png'
import RightImage from '../../assets/images/RightPhone.png'
import { Button, Text} from "../../components";
const Section = ({togglePopup}) => {
  return (
    <div className="section">
      <div className="left">
      <div className="flex flex-col gap-1 self-stretch" style={{width:'100%'}}>
                    <Text size="3xl" as="p" className="!font-generalsans !text-black-900">
                    Grow your carwash business with Washta
                    </Text>
                    <Text size="xs" as="p" className="w-[88%] !text-black-900_bf md:w-full" style={{paddingTop:'10px',fontSize:'18px'}}>
                    Sign up today and be one of the first to register your carwash service on Washta. We provide you online payment, more customers and many more benefits.
                    </Text>
                  </div>
                  <div className='buttondiv' style={{paddingTop:'30px'}}>

                
                  <Button onClick={togglePopup} shape="round" className="min-w-[150px] sm:px-1" style={{fontSize:'15px'}}>
                    I’m Interested
                  </Button>
                  </div>
      </div>
      <div className="right">
        {/* Phone image on the right */}
        <img src={LeftImage} alt="user" className='imageEdit classadd'   />
        <img src={RightImage} alt="user"  className='imageEdit'  />
      </div>
    </div>
  );
}

export default Section;
