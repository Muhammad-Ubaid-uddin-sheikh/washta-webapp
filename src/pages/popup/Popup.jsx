// import React, { useState } from 'react';
// import './styles.css';
// import { ImCross } from "react-icons/im";
// import { Text } from '../../components/Text'
// import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const APiURl = 'https://washta-email-api-8fd16b60ef1a.herokuapp.com/api/subscribe';

// const App = ({ Cross, }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     CompanyName: '',
//     AddionText: '',
//     selectedOption: '',
//     Payment: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Check if any required field is empty
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.phoneNumber ||
//       !formData.CompanyName ||
//       !formData.selectedOption ||
//       !formData.Payment
//     ) {
//       toast.error("Please fill in all details");
//     } else {
//       // If all fields are filled, proceed with submission
//       fetch(APiURl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           userEmail: formData.email,
//           phNumber: formData.phoneNumber,
//           companyName: formData.CompanyName,
//           companyReg: formData.selectedOption,
//           paymentMethod: formData.Payment,
//           text: formData.AddionText
//         }),
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Handle the data received from the API
//           console.log(data);
//           toast.success("Subscription successful")
//           setFormData({
//             name: '',
//             email: '',
//             phoneNumber: '',
//             CompanyName: '',
//             AddionText: '',
//             selectedOption: '',
//             Payment: ''
//           });
//           // toast.success("Subscription successful");
         
//         })
//         .catch(error => {
//           console.error('There was a problem with the fetch operation:', error);
//         });
//     }
//   };

//   const nextStep = () => {
//     // Check if any required field is empty before proceeding to the next step
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.phoneNumber 
//     ) {
//       // If any field is empty, show red toast notification and don't proceed to the next step
//       toast.error("Please fill in all details");
//     } else {
//       // If all fields are filled, proceed to the next step
//       setStep(step + 1);
//     }
//   };
// const continerNextStep=()=>{
//   if (
//     !formData.CompanyName ||
//     !formData.selectedOption 
    
//   ) {
//     // If any field is empty, show red toast notification and don't proceed to the next step
//     toast.error("Please fill in all details");
//   } else {
//     // If all fields are filled, proceed to the next step
//     setStep(step + 1);
//   }
// }
//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   return (
//     <div className="app">
//       <button onClick={() => setStep(1)}>Open Form</button>
//       <ToastContainer position="top-center" />
//       {step === 1 && (
//         <div className="popup-background">
//           <div className="popup">
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <h2>Subscribe to Washta</h2>
//               <ImCross onClick={Cross} style={{ color: '#8891F1', cursor: 'pointer' }} />
//             </div>
//             <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Name <sup>*</sup></Text>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Email <sup>*</sup></Text>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Phone Number <sup>*</sup></Text>
//             <input
//               type="text"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//             />
//             <div className='row-poup'>
//               <button className='btn-left' onClick={Cross}>Cencel</button>
//               <button className='btn-right' onClick={nextStep}>Continue</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {step === 2 && (
//         <div className="popup-background">
//           <div className="popup">
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <h2>Subscribe to Washta</h2>
//               <ImCross onClick={Cross} style={{ color: '#8891F1', cursor: 'pointer' }} />
//             </div>
//             <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Company Name <sup>*</sup></Text>
//             <input
//               type="text"
//               name="CompanyName"
//               placeholder="Company Name"
//               value={formData.CompanyName}
//               onChange={handleChange}
//             />
//             <Text style={{ color: 'black', marginTop: 20 }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Are you a registered carwash company?</Text>
//             <FormGroup value={formData.selectedOption} onChange={handleChange}>
//               <FormControlLabel name='selectedOption' value='Yes' control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />} label="Yes" />
//               <FormControlLabel name='selectedOption' value='No' control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />} label="No" />
//             </FormGroup>
//             <div style={{ paddingTop: 25 }} className='row-poup'>
//               <button className='btn-left' onClick={prevStep}>Back</button>
//               <button className='btn-right' onClick={continerNextStep}>Continue</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {step === 3 && (
//         <div className="popup-background">
//           <div className="popup">
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <h2>Subscribe to Washta</h2>
//               <ImCross onClick={Cross} style={{ color: '#8891F1', cursor: 'pointer' }} />
//             </div>
//             <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Do you accept online payment?</Text>
//             <FormGroup value={formData.Payment} onChange={handleChange}>
//               <FormControlLabel name='Payment' value='Yes' control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />} label="Yes" />
//               <FormControlLabel name='Payment' value='No' control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />} label="No" />
//             </FormGroup>
//             <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Additional details or notes</Text>
//             <input
//               type="text"
//               name="AddionText"
//               placeholder="Additional details or notes"
//               value={formData.AddionText}
//               onChange={handleChange}
//             />
//             <div className='row-poup'>
//               <button className='btn-left' onClick={prevStep}>Back</button>
//               <button className='btn-right' onClick={handleSubmit}>Subscribe</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import './styles.css';
import { ImCross } from "react-icons/im";
import { Text } from '../../components/Text'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from './Spinner';

const APiURl = 'https://washta-email-api-8fd16b60ef1a.herokuapp.com/api/subscribe';

const App = ({ Cross }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    CompanyName: '',
    AddionText: '',
    selectedOption: '',
    Payment: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Check if any required field is empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.CompanyName ||
      !formData.selectedOption ||
      !formData.Payment
    ) {
      toast.error("Please fill in all details");
    } else {
      // If all fields are filled, proceed with submission
      setLoading(true);
      fetch(APiURl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          userEmail: formData.email,
          phNumber: formData.phoneNumber,
          companyName: formData.CompanyName,
          companyReg: formData.selectedOption,
          paymentMethod: formData.Payment,
          text: formData.AddionText
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Handle the data received from the API
          console.log(data);
          alert("Subscription successful")
          toast.success("Subscription successful");
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            CompanyName: '',
            AddionText: '',
            selectedOption: '',
            Payment: ''
          });
          
          setStep(1); // Close the popup after successful subscription
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          toast.error("Subscription failed");
        })
        .finally(() => {
          setLoading(false);
          toast.success("Subscription successful");
          Cross();
        });
    }
  };

  const nextStep = () => {
    // Check if any required field is empty before proceeding to the next step
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber 
    ) {
      // If any field is empty, show red toast notification and don't proceed to the next step
      toast.error("Please fill in all details");
    } else {
      // If all fields are filled, proceed to the next step
      setStep(step + 1);
    }
  };

  const continerNextStep = () => {
    if (
      !formData.CompanyName ||
      !formData.selectedOption 
    ) {
      // If any field is empty, show red toast notification and don't proceed to the next step
      toast.error("Please fill in all details");
    } else {
      // If all fields are filled, proceed to the next step
      setStep(step + 1);
    }
  }

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="app">
      {/* <button onClick={() => setStep(1)}>Open Form</button> */}
     
     
      {step === 1 && (
        <div className="popup-background">
          <div className="popup">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>Subscribe to Washta</h2>
              <ImCross onClick={Cross} style={{ color: '#8891F1', cursor: 'pointer' }} />
            </div>
            <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Name <sup>*</sup></Text>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Email <sup>*</sup></Text>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Phone Number <sup>*</sup></Text>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <div className='row-poup'>
              <button className='btn-left' onClick={Cross}>Cancel</button>
              <button className='btn-right' onClick={nextStep}>Continue</button>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="popup-background">
          <div className="popup">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>Subscribe to Washta</h2>
              <ImCross onClick={Cross} style={{ color: '#8891F1', cursor: 'pointer' }} />
            </div>
            <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Company Name <sup>*</sup></Text>
            <input
              type="text"
              name="CompanyName"
              placeholder="Company Name"
              value={formData.CompanyName}
              onChange={handleChange}
            />
            <Text style={{ color: 'black', marginTop: 20 }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Are you a registered carwash company?</Text>
            <FormGroup>
              <FormControlLabel
                name='selectedOption'
                value='Yes'
                control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />}
                label="Yes"
                checked={formData.selectedOption === 'Yes'}
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                name='selectedOption'
                value='No'
                control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />}
                label="No"
                checked={formData.selectedOption === 'No'}
                onChange={handleCheckboxChange}
              />
            </FormGroup>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button className='btn-left' onClick={prevStep}>Back</button>
              <button className='btn-right' onClick={continerNextStep}>Continue</button>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="popup-background">
          <div className="popup">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>Subscribe to Washta</h2>
              <ImCross onClick={Cross} style={{ color: '#8891F1', cursor: 'pointer' }} />
            </div>
            <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Do you accept online payment?</Text>
            <FormGroup>
              <FormControlLabel
                name='Payment'
                value='Yes'
                control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />}
                label="Yes"
                checked={formData.Payment === 'Yes'}
                onChange={() => setFormData({ ...formData, Payment: 'Yes' })}
              />
              <FormControlLabel
                name='Payment'
                value='No'
                control={<Checkbox style={{ color: 'black', borderRadius: '50%' }} />}
                label="No"
                checked={formData.Payment === 'No'}
                onChange={() => setFormData({ ...formData, Payment: 'No' })}
              />
            </FormGroup>
            <Text style={{ color: 'black' }} size="sm" as="p" className="w-[88%] text-black-900_bf md:w-full color:'black">Additional details or notes</Text>
            <input
              type="text"
              name="AddionText"
              placeholder="Additional details or notes"
              value={formData.AddionText}
              onChange={handleChange}
            />
             <ToastContainer position="top-center" />
             {loading && <LoadingSpinner />}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button className='btn-left' onClick={prevStep}>Back</button>
              <button className='btn-right' onClick={handleSubmit}>Subscribe</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
