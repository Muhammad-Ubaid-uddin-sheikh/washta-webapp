import React, { useEffect, useState } from 'react';
import './Become.css';
import ImgSingin from '../../assets/images/singup.png';
import Overly from '../../assets/images/overly.png';
import InputFeild from 'components/Input/Input';
import { Button } from 'components';
import Header from 'pages/Home1/Header';
import Footer from 'components/Footer';
import { MdOutlineAttachment } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const AddBusniessDetails = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    location: '',
    vatNumber: '',
    uploadDoc: null,
    fullName: '',
    position: '',
    email: '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      uploadDoc: e.target.files[0], // Update uploadDoc with selected file
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prepare FormData to send to backend (including file upload)
    const formDataToSend = new FormData();
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('vatNumber', formData.vatNumber);
    formDataToSend.append('uploadDoc', formData.uploadDoc);
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('email', formData.email);
    
    // Log the form data to the console
    console.log('Form data submitted successfully:', {
      companyName: formData.companyName,
      location: formData.location,
      vatNumber: formData.vatNumber,
      uploadDoc: formData.uploadDoc,
      fullName: formData.fullName,
      position: formData.position,
      email: formData.email,
    });

    navigation('/become-a-seller/dashboard');

    setFormData({
      companyName: '',
      location: '',
      vatNumber: '',
      uploadDoc: null,
      fullName: '',
      position: '',
      email: '',
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div style={{ position: 'relative' }}>
        <div className='row'>
          <img src={Overly} className='overlyClassName' alt="Logo" />
          <div className='addbussiness-detsilsx'>
              <div className='innerDiv-form'>
                <h1 className='h1-heaing'> Add your business details </h1>
                <InputFeild type='text' label="Company Name" placeholder="Company Name" value={formData.companyName} onChange={(value) => handleChange('companyName', value)} />
                <div className='gapmargin'> <InputFeild type='text' label="Location" placeholder="Location" value={formData.location} onChange={(value) => handleChange('location', value)} /></div>
                <div className='gapmargin'> <InputFeild type='text' label="VAT Number" placeholder="VAT Number" value={formData.vatNumber} onChange={(value) => handleChange('vatNumber', value)} /></div>
                <div className='gapmargin' style={{display:'flex',position:'relative'}}> 
                  <input
                    type="file"
                    id="fileUpload"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{
                      display: 'none', // Hide the default file input
                    }}
                  />
                  <label htmlFor="fileUpload" style={{ borderBottom: '1px solid white', cursor: 'pointer', width:'100%', color:'#d9dbed', paddingBottom:10, fontSize:'16px' }}>
                    Upload Documents
                  </label>
                  <MdOutlineAttachment style={{position:'absolute',right:'10px',color:'white',fontSize:'20px',transform:'rotate(45deg)'}} />
                </div>
                <div className='gapmargin'> <InputFeild type='text' label="Full Name" placeholder="Full Name" value={formData.fullName} onChange={(value) => handleChange('fullName', value)} /></div>
                <div className='gapmargin'> <InputFeild type='text' label="Position" placeholder="Position" value={formData.position} onChange={(value) => handleChange('position', value)} /></div>
                <div className='gapmargin'> <InputFeild type='email' label="Email" placeholder="Email" value={formData.email} onChange={(value) => handleChange('email', value)} /></div>
                <Button onClick={handleFormSubmit} shape="round" className="min-w-[100%] sm:px-1" style={{ fontSize: '16px', background: 'white', color: 'black', marginTop: '20px', fontFamily: "'General Sans', sans-serif" }}>
                  Finish
                </Button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddBusniessDetails;
