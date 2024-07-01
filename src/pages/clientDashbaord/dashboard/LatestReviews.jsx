import React from 'react';
import './app.css'
import Appimg from '../../../assets/images/latestreviews.png'
import { Rating } from '@mui/material';
import { MdOutlineReply } from "react-icons/md";

const reviews = [
  {
    id: 1,
    name: 'Kristin Watson',
    date: '16 May 2024 At 10:00 AM',
    review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
    rating: 4,
  },
  {
    id: 2,
    name: 'Kristin Watson',
    date: '16 May 2024 At 10:00 AM',
    review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
    rating: 1.4,
  },
  {
    id: 3,
    name: 'Kristin Watson',
    date: '16 May 2024 At 10:00 AM',
    review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
    rating: 2.3,
  },
  {
    id: 4,
    name: 'Kristin Watson',
    date: '16 May 2024 At 10:00 AM',
    review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
    rating: 2,
  },
];

const LatestReviews = () => {
  return (
    <div className="latest-reviews">
     <div className='chart-colm-div-heading'> 
          <img src={Appimg} style={{width:'4%',objectFit:'contain'}}/>
          <h2 className='main-heading2'>Latest Reviews</h2>
          </div>
      {reviews.map((review) => (
        <div key={review.id} className="review-box">
         <div className='div-rewie-main'>
           <h5 className='heading-h5-later'>{review.name}</h5>
           <Rating name="half-rating-read" defaultValue={review?.rating} precision={0.5} sx={{fontSize:20,color:'#F39D00'}} readOnly />
         </div>
          <p className='paragph-heading'>{review.review}</p>
          
          <div className='div-rewie-main'>
          <p className='paragph-heading addtion-adding'>{review.date}</p>
         <div className='replyicons'>
         <MdOutlineReply />
         <button className='replybtn'>  Reply</button>
         </div>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestReviews;
