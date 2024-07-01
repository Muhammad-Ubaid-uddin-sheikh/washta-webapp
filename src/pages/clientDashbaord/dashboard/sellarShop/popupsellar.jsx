
import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import { MdOutlineAttachment } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import { TimePicker, Space } from 'antd';
import 'antd/dist/reset.css';
import moment from 'moment';
import Switch from 'react-switch';
import Select from 'react-select';
import LoadingSpinner from 'pages/popup/Spinner';
import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';
import './popup.css';

const cities = [
  { value: 'Dubai', label: 'Dubai', lat: 25.276987, lng: 55.296249 },
  { value: 'Abu Dhabi', label: 'Abu Dhabi', lat: 24.453884, lng: 54.377344 },
  { value: 'Sharjah', label: 'Sharjah', lat: 25.346255, lng: 55.420932 },
  { value: 'Ajman', label: 'Ajman', lat: 25.405216, lng: 55.513643 },
  { value: 'Ras Al Khaimah', label: 'Ras Al Khaimah', lat: 25.800692, lng: 55.976200 },
  { value: 'Fujairah', label: 'Fujairah', lat: 25.128809, lng: 56.326485 },
  { value: 'Umm Al Quwain', label: 'Umm Al Quwain', lat: 25.564733, lng: 55.555176 }
];

const PopupSellar = ({ Cross }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shopName: '',
    shopDetails: '',
    cost: '',
    uploadCover: '',
    city: '',
    radius: '',
    locationtype: '',
    markerPosition: { lat: 25.276987, lng: 55.296249 }, // Default to Dubai
    timings: {
      monday: { start: '', end: '', active: false },
      tuesday: { start: '', end: '', active: false },
      wednesday: { start: '', end: '', active: false },
      thursday: { start: '', end: '', active: false },
      friday: { start: '', end: '', active: false },
      saturday: { start: '', end: '', active: false },
      sunday: { start: '', end: '', active: false },
    }
  });

  const handleTimeChange = (day, key, time) => {
    setFormData({
      ...formData,
      timings: {
        ...formData.timings,
        [day]: {
          ...formData.timings[day],
          [key]: time ? time.format('h:mm a') : '',
        },
      },
    });
  };

  const handleToggleChange = (day) => {
    setFormData({
      ...formData,
      timings: {
        ...formData.timings,
        [day]: {
          ...formData.timings[day],
          active: !formData.timings[day].active,
        },
      },
    });
  };

  const handleCityChange = (selectedOption) => {
    setFormData({
      ...formData,
      city: selectedOption.value,
      markerPosition: { lat: selectedOption.lat, lng: selectedOption.lng },
    });
  };

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setFormData({
      ...formData,
      markerPosition: { lat, lng },
    });
  };

  const geocodeAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    console.log("Geocoding address:", address);  // Log the address
    geocoder.geocode({ address: address }, (results, status) => {
      console.log("Geocode results:", results);  // Log the results
      console.log("Geocode status:", status);    // Log the status
      if (status === 'OK') {
        const position = results[0].geometry.location;
        setFormData({
          ...formData,
          markerPosition: { lat: position.lat(), lng: position.lng() },
        });
      } else {
        toast.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'locationtype' && value.trim() !== '') {
      geocodeAddress(value.trim());
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    toast.success('Form data logged to console!');
    Cross();
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="app">
      <div className="popup-background">
        <div className="popup">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Shop {step === 1 ? "Details" : step === 2 ? "Timings" : "Location"}</h2>
            <ImCross style={{ color: '#8891F1', cursor: 'pointer' }} onClick={Cross} className="close-icon" />
          </div>
          {step === 1 && (
            <>
              <label className='label-popup-seller'>Shop Name <sup>*</sup></label>
              <input
                type="text"
                name="shopName"
                placeholder="Shop name*"
                value={formData.shopName}
                onChange={handleChange}
              />
              <label className='label-popup-seller'>Shop Details <sup>*</sup></label>
              <input
                type="text"
                name="shopDetails"
                placeholder="Shop details"
                value={formData.shopDetails}
                onChange={handleChange}
              />
              <label className='label-popup-seller'>Cost <sup>*</sup></label>
              <input
                type="text"
                name="cost"
                placeholder="AED"
                value={formData.cost}
                onChange={handleChange}
              />
              
              <div className='gapmargin' style={{display:'flex',position:'relative',}}> 
                  <input
                    type="file"
                    id="fileUpload"
                    accept=".jpeg,.jpg,.png"
                    className='inputfeild-sellar'
                    onChange={(e) => setFormData({ ...formData, uploadCover: e.target.files[0] })}
                    style={{
                      display: 'none', 
                    }}
                  />
                  <label htmlFor="fileUpload" style={{ borderBottom: '1px solid #c3c3c3', cursor: 'pointer', width:'100%', color:'#c3c3c3', paddingBottom:10, fontSize:'14px',paddingBottom:'1em' }}>
                    Upload Documents
                  </label>
                  <p style={{position:'absolute',right:'2em',color:'#c3c3c3',fontSize:'14px',fontFamily:'"Manrope", sans-serif'}}>(jpeg, jpg, png)</p>
                  <MdOutlineAttachment style={{position:'absolute',right:'10px',color:'#c3c3c3',fontSize:'18px',transform:'rotate(130deg)'}} />
              </div>
              <div className='row-poup'>
                <button className='btn-left' onClick={Cross}>Cancel</button>
                <button className='btn-right' onClick={nextStep}>Continue</button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              {Object.keys(formData.timings).map(day => (
                <div className="timing-row" key={day}>
                  <div className="timing-switch">
                    <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                    
                  </div>
                  <div className="timing-row">
                  <Space className="timing-inputs">
                    <TimePicker style={{marginBottom:'0'}} use12Hours format="h:mm a" value={formData.timings[day].start ? moment(formData.timings[day].start, 'h:mm a') : null} onChange={(time) => handleTimeChange(day, 'start', time)} disabled={!formData.timings[day].active} />
                    <TimePicker use12Hours format="h:mm a" value={formData.timings[day].end ? moment(formData.timings[day].end, 'h:mm a') : null} onChange={(time) => handleTimeChange(day, 'end', time)} disabled={!formData.timings[day].active} />
                  </Space>
                  <Switch
                      onChange={() => handleToggleChange(day)}
                      checked={formData.timings[day].active}
                      onColor="#747EEF"
                      offColor="#bcbcbc"
                      handleDiameter={17}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={20}
                      width={36}
                    />
                    </div>
                </div>
              ))}
              <div className='row-poup'>
                <button className='btn-left' onClick={prevStep}>Back</button>
                <button className='btn-right' onClick={nextStep}>Continue</button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
            <label className='label-popup-seller'>City, Country* <sup>*</sup></label>
              <Select
                options={cities}
                onChange={handleCityChange}
                placeholder="Select City"
              />
              <label className='label-popup-seller'>Location <sup>*</sup></label>
              <input
                type="text"
                name="locationtype"
                placeholder="Location*"
                value={formData.locationtype}
                onChange={handleChange}
              />
              <label className='label-popup-seller'>Covered Area Radius (in meters)<sup>*</sup></label>
              <input
                type="number"
                name="radius"
                placeholder="Radius"
                value={formData.radius}
                onChange={handleChange}
              />
              
              <div className="map-container">
                <LoadScript googleMapsApiKey="AIzaSyB_nNvYWSCB2haI7DCgR6chQmsg-T4oj8s">
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '300px', borderRadius: '20px', marginBottom: '20px' }}
                    center={formData.markerPosition}
                    zoom={15}
                    onClick={handleMapClick}
                  >
                    <Marker position={formData.markerPosition} />
                    {formData.radius && (
                      <Circle
                        center={formData.markerPosition}
                        radius={parseFloat(formData.radius)}
                        options={{
                          fillColor: "rgba(116, 126, 239, 0.5)",
                          strokeColor: "#747EEF",
                          strokeOpacity: 0.8,
                          strokeWeight: 2,
                          fillOpacity: 0.35,
                        }}
                      />
                    )}
                  </GoogleMap>
                </LoadScript>
              </div>
              <div className='row-poup'>
                <button className='btn-left' onClick={prevStep}>Back</button>
                <button className='btn-right' onClick={handleSubmit}>Finish</button>
              </div>
            </>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default PopupSellar;
// import React, { useState, useRef } from 'react';
// import { ImCross } from 'react-icons/im';
// import { ToastContainer, toast } from 'react-toastify';
// import { MdOutlineAttachment } from 'react-icons/md';
// import 'react-toastify/dist/ReactToastify.css';
// import { TimePicker, Space } from 'antd';
// import 'antd/dist/reset.css';
// import moment from 'moment';
// import Switch from 'react-switch';
// import Select from 'react-select';
// import { Autocomplete, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import './popup.css';

// const cities = [
//   { value: 'Dubai', label: 'Dubai', lat: 25.276987, lng: 55.296249 },
//   { value: 'Abu Dhabi', label: 'Abu Dhabi', lat: 24.453884, lng: 54.377344 },
//   { value: 'Sharjah', label: 'Sharjah', lat: 25.346255, lng: 55.420932 },
//   { value: 'Ajman', label: 'Ajman', lat: 25.405216, lng: 55.513643 },
//   { value: 'Ras Al Khaimah', label: 'Ras Al Khaimah', lat: 25.800692, lng: 55.9762 },
//   { value: 'Fujairah', label: 'Fujairah', lat: 25.128809, lng: 56.326485 },
//   { value: 'Umm Al Quwain', label: 'Umm Al Quwain', lat: 25.564733, lng: 55.555176 },
// ];

// const PopupSellar = ({ Cross }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     shopName: '',
//     shopDetails: '',
//     cost: '',
//     uploadCover: '',
//     city: '',
//     radius: '',
//     locationtype: '',
//     markerPosition: { lat: 25.276987, lng: 55.296249 }, // Default to Dubai
//     timings: {
//       monday: { start: '', end: '', active: false },
//       tuesday: { start: '', end: '', active: false },
//       wednesday: { start: '', end: '', active: false },
//       thursday: { start: '', end: '', active: false },
//       friday: { start: '', end: '', active: false },
//       saturday: { start: '', end: '', active: false },
//       sunday: { start: '', end: '', active: false },
//     },
//   });

//   const autocompleteRef = useRef(null);

//   const handleTimeChange = (day, key, time) => {
//     setFormData({
//       ...formData,
//       timings: {
//         ...formData.timings,
//         [day]: {
//           ...formData.timings[day],
//           [key]: time ? time.format('h:mm a') : '',
//         },
//       },
//     });
//   };

//   const handleToggleChange = (day) => {
//     setFormData({
//       ...formData,
//       timings: {
//         ...formData.timings,
//         [day]: {
//           ...formData.timings[day],
//           active: !formData.timings[day].active,
//         },
//       },
//     });
//   };

//   const handleCityChange = (selectedOption) => {
//     setFormData({
//       ...formData,
//       city: selectedOption.value,
//       markerPosition: { lat: selectedOption.lat, lng: selectedOption.lng },
//     });
//   };

//   const handleMapClick = (e) => {
//     const lat = e.latLng.lat();
//     const lng = e.latLng.lng();
//     setFormData({
//       ...formData,
//       markerPosition: { lat, lng },
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === 'locationtype' && value.trim() !== '') {
//       // Optionally you can add geocoding logic here as per your requirement
//     }
//   };

//   const handlePlaceChanged = () => {
//     const place = autocompleteRef.current.getPlace();
//     if (place.geometry) {
//       const lat = place.geometry.location.lat();
//       const lng = place.geometry.location.lng();
//       setFormData({
//         ...formData,
//         markerPosition: { lat, lng },
//         locationtype: place.formatted_address,
//       });
//     } else {
//       toast.error('Please select an address from the suggestions.');
//     }
//   };

//   const handleSubmit = () => {
//     console.log('Form Data:', formData);
//     toast.success('Form data logged to console!');
//     Cross();
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   return (
//     <div className="app">
//       <div className="popup-background">
//         <div className="popup">
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <h2>Shop {step === 1 ? 'Details' : step === 2 ? 'Timings' : 'Location'}</h2>
//             <ImCross
//               style={{ color: '#8891F1', cursor: 'pointer' }}
//               onClick={Cross}
//               className="close-icon"
//             />
//           </div>
//           {step === 1 && (
//             <>
//               <label className="label-popup-seller">
//                 Shop Name <sup>*</sup>
//               </label>
//               <input
//                 type="text"
//                 name="shopName"
//                 placeholder="Shop name*"
//                 value={formData.shopName}
//                 onChange={handleChange}
//               />
//               <label className="label-popup-seller">Shop Details <sup>*</sup></label>
//               <input
//                 type="text"
//                 name="shopDetails"
//                 placeholder="Shop details"
//                 value={formData.shopDetails}
//                 onChange={handleChange}
//               />
//               <label className="label-popup-seller">Cost <sup>*</sup></label>
//               <input
//                 type="text"
//                 name="cost"
//                 placeholder="AED"
//                 value={formData.cost}
//                 onChange={handleChange}
//               />

//               <div
//                 className="gapmargin"
//                 style={{ display: 'flex', position: 'relative' }}
//               >
//                 <input
//                   type="file"
//                   id="fileUpload"
//                   accept=".jpeg,.jpg,.png"
//                   className="inputfeild-sellar"
//                   onChange={(e) =>
//                     setFormData({ ...formData, uploadCover: e.target.files[0] })
//                   }
//                   style={{
//                     display: 'none',
//                   }}
//                 />
//                 <label
//                   htmlFor="fileUpload"
//                   style={{
//                     borderBottom: '1px solid #c3c3c3',
//                     cursor: 'pointer',
//                     width: '100%',
//                     color: '#c3c3c3',
//                     paddingBottom: 10,
//                     fontSize: '14px',
//                     paddingBottom: '1em',
//                   }}
//                 >
//                   Upload Documents
//                 </label>
//                 <p
//                   style={{
//                     position: 'absolute',
//                     right: '2em',
//                     color: '#c3c3c3',
//                     fontSize: '14px',
//                     fontFamily: '"Manrope", sans-serif',
//                   }}
//                 >
//                   (jpeg, jpg, png)
//                 </p>
//                 <MdOutlineAttachment
//                   style={{
//                     position: 'absolute',
//                     right: '10px',
//                     color: '#c3c3c3',
//                     fontSize: '18px',
//                     transform: 'rotate(130deg)',
//                   }}
//                 />
//               </div>
//               <div className="row-poup">
//                 <button className="btn-left" onClick={Cross}>
//                   Cancel
//                 </button>
//                 <button className="btn-right" onClick={nextStep}>
//                   Continue
//                 </button>
//               </div>
//             </>
//           )}
//           {step === 2 && (
//             <>
//               {Object.keys(formData.timings).map((day) => (
//                 <div className="timing-row" key={day}>
//                   <div className="timing-switch">
//                     <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
//                   </div>
//                   <div className="timing-row">
//                     <Space className="timing-inputs">
//                       <TimePicker
//                         style={{ marginBottom: '0' }}
//                         use12Hours
//                         format="h:mm a"
//                         value={
//                           formData.timings[day].start
//                             ? moment(formData.timings[day].start, 'h:mm a')
//                             : null
//                         }
//                         onChange={(time) =>
//                           handleTimeChange(day, 'start', time)
//                         }
//                         disabled={!formData.timings[day].active}
//                       />
//                       <TimePicker
//                         use12Hours
//                         format="h:mm a"
//                         value={
//                           formData.timings[day].end
//                             ? moment(formData.timings[day].end, 'h:mm a')
//                             : null
//                         }
//                         onChange={(time) => handleTimeChange(day, 'end', time)}
//                         disabled={!formData.timings[day].active}
//                       />
//                     </Space>
//                     <Switch
//                       onChange={() => handleToggleChange(day)}
//                       checked={formData.timings[day].active}
//                       onColor="#747EEF"
//                       offColor="#bcbcbc"
//                       handleDiameter={17}
//                       uncheckedIcon={false}
//                       checkedIcon={false}
//                       boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//                       activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
//                       height={16}
//                       width={34}
//                       className="react-switch"
//                       id="material-switch"
//                     />
//                   </div>
//                 </div>
//               ))}
//               <div className="row-poup">
//                 <button className="btn-left" onClick={prevStep}>
//                   Back
//                 </button>
//                 <button className="btn-right" onClick={nextStep}>
//                   Continue
//                 </button>
//               </div>
//             </>
//           )}
//           {step === 3 && (
//             <>
//               <LoadScript
//                 googleMapsApiKey="AIzaSyB_nNvYWSCB2haI7DCgR6chQmsg-T4oj8s "
//                 libraries={['places']}
//               >
//                 <div className="map-container">
//                   <GoogleMap
//                     id="popup-map"
//                     mapContainerStyle={{
//                       width: '100%',
//                       height: '400px',
//                       borderRadius: '10px',
//                       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//                     }}
//                     zoom={12}
//                     center={formData.markerPosition}
//                     onClick={handleMapClick}
//                   >
//                     <Marker position={formData.markerPosition} />
//                   </GoogleMap>
//                   <Autocomplete
//                     onLoad={(autoComp) => (autocompleteRef.current = autoComp)}
//                     onPlaceChanged={handlePlaceChanged}
//                     types={['geocode']}
//                     style={{
//                       width: '100%',
//                       marginTop: '10px',
//                       borderRadius: '10px',
//                       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//                       padding: '10px',
//                       boxSizing: 'border-box',
//                       border: '1px solid #c3c3c3',
//                     }}
//                   >
//                     <input
//                       type="text"
//                       placeholder="Enter your location"
//                       name="locationtype"
//                       value={formData.locationtype}
//                       onChange={handleChange}
//                       style={{
//                         width: '100%',
//                         border: 'none',
//                         outline: 'none',
//                         fontSize: '14px',
//                       }}
//                     />
//                   </Autocomplete>
//                 </div>
//               </LoadScript>
//               <div className="row-poup">
//                 <button className="btn-left" onClick={prevStep}>
//                   Back
//                 </button>
//                 <button className="btn-right" onClick={handleSubmit}>
//                   Submit
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <ToastContainer position="bottom-right" />
//     </div>
//   );
// };

// export default PopupSellar;

