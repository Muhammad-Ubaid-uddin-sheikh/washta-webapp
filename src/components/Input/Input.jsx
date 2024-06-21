import React, { useState } from 'react';
import './input.css';

const InputField = ({ label, placeholder,type,onChange}) => {
  const [focused, setFocused] = useState(false);
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label className={focused ? 'label-input focused' : 'label-input'}>{label}</label>
      <input
      type={type}
      onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className='input-feild-custom'
        style={{borderBottom:'1px solid white',paddingBottom:'10px'}}
      />
      
    </div>
  );
};

export default InputField;
