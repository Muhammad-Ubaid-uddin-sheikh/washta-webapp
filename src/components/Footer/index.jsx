import React, { useState } from "react";
import { Text, Input, Img } from "./..";
import axios from 'axios';
import { Link } from "react-router-dom";
import './footer.css'
export default function Footer({ ...props }) {
  const [userEmail, setuserEmail] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
console.log('userEmail',userEmail)
  const handleInputChange = (event) => {
    setuserEmail(event.target.value);
  };
  // const handleSubmit = (event) => {
  //   // Make a POST request to the API
  //   const payload = {
  //     userEmail: userEmail
  //   }
  //   event.preventDefault();
  //   axios.post('https://washta-email-931279e22f38.herokuapp.com/email', { ...payload })
  //     .then(response => {
  //       // Handle success response
  //       console.log('apiresone',response)
  //       setResponse(response.data);
  //       setError(null);
  //     })
  //     .catch(error => {
  //       // Handle error
  //       setError(error.response.data.error);
  //       setResponse(null);
  //     });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://washta-email-931279e22f38.herokuapp.com/email', { userEmail:userEmail });
      console.log('Response:', response.data);
      // Agar response me koi specific data hai jo aap handle karna chahte hain, toh yaha par handle karein.
    } catch (error) {
      console.error('Error posting email:', error);
      // Agar koi error aata hai toh use handle karein.
    }
  };
  return (
    <footer {...props}>
      <div className="container-xs flex flex-col gap-[84px] md:gap-[63px] md:p-5 sm:gap-[42px]" style={{width:'90%'}}>
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <div className="flex w-[28%] flex-col gap-5 md:w-full">
            <Img src="images/img_footer_logo.svg" alt="footerlogo" className="h-[50px] w-[210px]" />
            <Text size="20px" as="p" >
              If you don&#39;t find an answer to your question, contact us, and our team will get in touch with you.
            </Text>
          </div>
          <div className="flex flex-col gap-3.5">
            <Text size="md" as="p" className="!font-generalsans tracking-[-1.00px] !text-white-A700">
              Links
            </Text>
            <Link to='/'>
            <a  rel="noreferrer">
              <Text size="20px" as="p">Home</Text>
            </a>
            </Link>
          </div>
          <div className="footerclassName">
            {/* <Text size="20px" as="p" className="text-center" > */}
              <p className="paragraphp">
              Join our newsletter to stay up to date on features and releases.
              </p>
             
            {/* </Text> */}
            <div className='suscribe-btn-din'>
            <form style={{display:'contents'}} >
      <input
      color="white"
        type="text"
        value={userEmail}
        onChange={handleInputChange}
        required
        placeholerColor={'white'}
        placeholder="Enter Text"
        style={{ marginRight: '10px', textAlign: 'left',border:'none',color:'white',padding:'14px 10px',paddingLeft:'20px',placeholder:'white',}}
      />
      <button onClick={handleSubmit} type="submit" style={{ textAlign: 'left',
    border: '1px solid white',
    padding: '7px 20px',
    borderRadius: '35px',
    background: 'white',marginRight:'10px' }}>Subscribe</button>
    </form>
      {/* <p style={{ marginLeft: '10px' }}>{displayText}</p> */}
    </div>
    
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 md:flex-col">
        <p className="paragraphp">
        © 2024 Washta. All rights reserved.
              </p>
          {/* <Text size="20px" as="p" className="self-end">
            © 2024 Washta. All rights reserved.
          </Text> */}
          <ul className="flex flex-wrap items-center gap-[25px]">
            <li>
            <p className="paragraphp lipara">
            Privacy Policy
              </p>
              {/* <a href="#" className="self-end">
                <Text size="20px" as="p">Privacy Policy</Text>
              </a> */}
            </li>
            <li>
            <p className="paragraphp lipara">
            Terms of Service
              </p>
              {/* <a href="#" className="self-start">
                <Text size="20px" as="p">Terms of Service</Text>
              </a> */}
            </li>
            <li>
            <p className="paragraphp lipara">
            Cookies Settings
              </p>
              {/* <a href="#" className="self-end">
                <Text size="20px" as="p">Cookies Settings</Text>
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
