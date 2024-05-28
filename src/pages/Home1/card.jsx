import React from 'react'
import Imgage from '../../assets/images/img.png'
import HomeColumnBetter from "../../components/HomeColumnBetter";
import './style.css'
import { Img } from "../../components";
import CardImg from '../../assets/images/Card.png'
import Squareimg from '../../assets/images/Square.png'
const card = () => {
  return (
    <div className='btn-card'>
    <div className="flex gap-[35px] self-stretch md:flex-col w-[91%] m-auto">
    <div className="relative h-[350px] w-full rounded-[26px] border border-solid border-black-900_26 bg-indigo-300 bg-[url(/public/images/img_frame_1171276568.png)] bg-cover bg-no-repeat px-[41px] md:px-5 md:pt-5">
        <div className="absolute  left-0 right-0 m-auto h-[709px]  md:h-auto" style={{top:0}}>
          <img src={Imgage} alt="main"  style={{borderRadius:'27px'}} />
         
        </div>
      </div>
      <div className="flex w-full flex-col gap-[35px]">
        {[...Array(1)].map((d, index) => (
          <HomeColumnBetter
            image="images/img_megaphone.svg"
            text=" More Customer                      "
            text1=" No more chasing customers and missing opportunities. Our platform shows your available service and let customers to reach out to your team. Select the areas in our app covered by your team (such as public, mall, residential parking) and grow your business."
            key={"listbetter" + index}
            className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
          />
        ))}
         <HomeColumnBetter
            image={CardImg}
            text=" Online Payment"
            text1="Our platform is ready to accept online card payment and make the transaction easier for your customers. "
            key={"listbetter"}
            className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
          />
      </div>
     
      <div className="flex w-full flex-col gap-[35px]">
        {[...Array(1)].map((d, index) => (
          <HomeColumnBetter
            image="images/img_settings_indigo_300.svg"
            text="Automated Requests"
            text1=" Receive carwash requests from customers through Washta and manage them seamlessly. Accept payments, scheduled services and improve your efficiency"
            key={"listautomated" + index}
            className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
          />
        ))}
         <HomeColumnBetter
            image={Squareimg}
            text=" Sales Tracking"
            text1="Track your daily sales and performance of your team.  Get customer feedback, highlight your service or use promo codes to increase visibility and sales."
            key={"listbetter"}
            className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
          />
      </div>
    </div>
    </div>
  )
}

export default card