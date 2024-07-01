// OTPComponent.js

import React, { useState, useRef, useEffect } from 'react';
import './Become.css';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';

const OTPComponent = ({ onSubmit }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const otpBoxes = Array.from({ length: 4 }, (_, index) => index);
  const inputRefs = useRef([]);
  const navigation = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
console.log(otp)
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move focus to the next input box
      if (value.length === 1 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    // onSubmit(otpValue);
    console.log('otpValue',otpValue)
    navigation('/become-a-seller/business-details')
  };

  return (
    <div className="otp-container fade-in">
      <h1 className='h1-heaing'>Enter your verification code</h1>
      <p className='paragraph-otp'> Enter 4 digit verification code sent to your registered Email Verification. </p>
      <div className="otp-input-container">
        {otpBoxes.map(index => (
          <input
            key={index}
            ref={el => inputRefs.current[index] = el}
            className="otp-input"
            type="text"
            value={otp[index]}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
       
      </div>
      <p className='paragraph-otp addtionopara'>Resend Code</p>
      <Button onClick={handleSubmit}   shape="round" className="min-w-[100%] sm:px-1" style={{ fontSize: '16px', background: 'white', color: 'black', marginTop: '20px',fontFamily:"'General Sans', sans-serif" }}>
                  Submit
                </Button>
    </div>
  );
};

export default OTPComponent;
