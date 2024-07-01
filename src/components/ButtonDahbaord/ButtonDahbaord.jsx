import React from 'react'
import './ButtonDashb.css'
const ButtonDahbaord = ({background,height,width,textButton}) => {
    const buttonClass = background === 'purple' ? 'btn-purple' : 'btn-transparent';
    const style = {
        height: height,
        width: width
      };
  return (
    <div  className={`btn-button-dashboard ${buttonClass}`} style={style}>
        <p className='btn-paragrph'>{textButton}</p>
    </div>
  )
}

export default ButtonDahbaord