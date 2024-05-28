import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import HomeColumnBetter from "../../components/HomeColumnBetter";
import Banner from './Banner'
import Ellise from '../../assets/images/Ellipse 1.png'
import Imgage from '../../assets/images/img.png'
import Header from "./Header";
import CardImg from '../../assets/images/Card.png'
import Squareimg from '../../assets/images/Square.png'
import Popup from '../popup/Popup'
import './style.css'
import CardBtn from './card'
export default function Home1Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <Helmet>
        <title>Washta APP</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* home main section */}
      <div className="w-full bg-white-A700" style={{position:'relative'}}>
        <Header/>
        <div className="flex flex-col items-end">
          {/* hero image section */}
          <Img src={Ellise} alt="image" object className=" h-[200px]w-[100%] object-contain" style={{position:'absolute',width:'70%'}} />
          <div className="relative  flex flex-col items-center gap-[124px] self-stretch md:gap-[93px] sm:gap-[62px]">
            
            <Banner togglePopup={togglePopup} />
            
            <div className="container-xs flex flex-col items-center gap-[86px] md:gap-16 md:p-5 sm:gap-[43px]">
              {/* features section */}
              <div className="flex w-[94%] flex-col items-center gap-[10px] px-[7px] pt-[7px] md:w-full md:gap-[75px] sm:gap-[50px]">
                <Text size="xl" as="p" className="text-center !font-generalsans !text-black-900">
                  Why Washta for Your Carwash Service?
                </Text>
                <Text size="large" as="p" className="w-[55%] text-center !text-black-900_bf md:w-full" style={{paddingTop:'20px'}}>
                  Show your interest today, and get notified when our application is launched to register your company
                  the earliest and enjoy the below benefits to grow your business.
                </Text>
              </div>
              <CardBtn/>
              <div className="card-name-btn">


            
              <div className="flex gap-[35px] self-stretch md:flex-col w-[91%] m-auto">
                <div className="flex w-full flex-col gap-[35px]">
                  {[...Array(1)].map((d, index) => (
                    <HomeColumnBetter
                      image="images/img_megaphone.svg"
                      text=" More Customer                      "
                      text1=" No more chasing customers and missing opportunities. Our platform shows your available service and let customers to reach out to your team. Select the areas in our app covered by your team (such as public, mall, residential parking) and grow your business.                      "
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
                <div className="relative h-[629px] w-full rounded-[26px] border border-solid border-black-900_26 bg-indigo-300 bg-[url(/public/images/img_frame_1171276568.png)] bg-cover bg-no-repeat px-[41px] md:px-5 md:pt-5">
                  <div className="absolute  left-0 right-0 m-auto h-[709px]  md:h-auto">
                    <Img src={Imgage} alt="main" className="h-[709px] w-full object-cover" style={{borderRadius:'27px'}} />
                   
                  </div>
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
              <Button onClick={togglePopup} shape="round" className="min-w-[150px] sm:px-1" style={{fontSize:'15px'}}>
                I’m Interested
              </Button>
            </div>

            {/* faq section */}
            <div className="container-xs px-36 md:p-5 md:px-5">
              <div className="flex items-center justify-center gap-2.5 rounded-[26px] bg-black-900_07 p-[50px] md:flex-col md:p-5">
                <div className="flex flex-1 flex-col items-start gap-1 pt-[5px] md:self-stretch">
                  <Text size="xl" as="p" className="!font-generalsans tracking-[-1.00px] !text-black-900" style={{fontSize:'35px'}}>
                    Still got questions?
                  </Text>
                  <Text as="p" className="w-[69%] !text-black-900_bf md:w-full" style={{fontSize:'18px'}}>
                    If you don&#39;t find an answer to your question, contact us, and our team will get in touch with
                    you.
                  </Text>
                </div>
                <Button onClick={togglePopup} shape="round" className="min-w-[150px] md:p-5 sm:px-5" style={{fontSize:'15px'}}>
                  Get in touch
                </Button>
              </div>
            </div>
            {isPopupOpen && (
              <div>
                 <Popup  Cross={togglePopup}/>
                </div>
       
      )}
            {/* footer section */}
            <Footer className="flex items-center justify-center self-stretch bg-indigo-300 py-[46px] md:py-5" />
          </div>
        </div>
      </div>
    </>
  );
}
