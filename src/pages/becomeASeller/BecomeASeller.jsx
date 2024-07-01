import Footer from 'components/Footer'
import Header from 'pages/Home1/Header'
import React, { useEffect, useState } from 'react'
import './Become.css'
import ImgSingin from '../../assets/images/singup.png'
import Overly from '../../assets/images/overly.png'
import InputFeild from 'components/Input/Input'
import { Button } from 'components'
import OTPComponent from './Otp'; // Import your OTP component here

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    password: '',
  });

  const [showOTPComponent, setShowOTPComponent] = useState(false); // State to manage OTP component rendering

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const HandleFunction = () => {
    // Fade out animation
    const colmFirstAdd = document.querySelector('.colm-first.add');
    colmFirstAdd.classList.add('fade-out');

    // Show OTP component after animation ends
    setTimeout(() => {
      setShowOTPComponent(true);
    }, 500); // Adjust the delay based on your animation duration
  }

  return (
    <>
      <Header />
      <div style={{ position: 'relative' }}>
        <div className='row'>
          <img src={Overly} className='overlyClassName' alt="Logo" />
          <div className='colm-first'> <img src={ImgSingin} alt="Logo" /> </div>
          <div className='colm-first add'>
            {showOTPComponent ? (
              <OTPComponent /> // Render OTP component if showOTPComponent is true
            ) : (
              <div className='innerDiv-form'>
                <h1 className='h1-heaing'> We’re glad to have you! </h1>
                <InputFeild type='text' label="Name" placeholder="Enter your name" onChange={(value) => handleChange('name', value)} />
                <div className='gapmargin'> <InputFeild type='text' label="Email" placeholder="Enter your Email" onChange={(value) => handleChange('email', value)} /></div>
                <div className='gapmargin'> <InputFeild type='text' label="Phone Number" placeholder="Enter your Phone Number" onChange={(value) => handleChange('phoneNo', value)} /></div>
                <div className='gapmargin'> <InputFeild type='password' label="Password" placeholder="Enter your Password" onChange={(value) => handleChange('password', value)} /></div>
                <Button onClick={HandleFunction} shape="round" className="min-w-[100%] sm:px-1" style={{ fontSize: '16px', background: 'white', color: 'black', marginTop: '20px',fontFamily:"'General Sans', sans-serif" }}>
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;
