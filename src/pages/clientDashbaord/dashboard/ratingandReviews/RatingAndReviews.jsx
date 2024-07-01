import Sidebar from 'pages/sideBar/SideBar';
import React, { useEffect } from 'react';
import Orders from '../LatestOrder';
import '../app.css'
import './Rating.css'
import imgReviews from '../../../../assets/images/latestreviews.png'
import { Rating } from '@mui/material';
import { MdOutlineReply } from "react-icons/md";
import ReviewSummary from './ReviewSummary';
function RatingAndReviews() { 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const ratings = {
        1: 150,
        2: 70,
        3: 30,
        4: 15,
        5: 8,
      };
      const averageRating = 4.5;
      const totalReviews = 273;
      const recommendationPercentage = 88;
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
    {
        id: 5,
        name: 'Kristin Watson',
        date: '16 May 2024 At 10:00 AM',
        review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
        rating: 2,
      },
      {
        id: 6,
        name: 'Kristin Watson',
        date: '16 May 2024 At 10:00 AM',
        review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
        rating: 2,
      },
      {
        id: 7,
        name: 'Kristin Watson',
        date: '16 May 2024 At 10:00 AM',
        review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
        rating: 2,
      },
  ];

  return (
    <div className='mainDiv-all-sideBar'>
    <div className='div-sidebar'>
<Sidebar/>
    </div>
    <div className='div-Dashbaord'>
    <h1 className='h1-all-heading'>Rating & Reviews</h1>
    <div className="dashboard">
     
      <div className='styles-div'>
<div className='invoice-border'>
<div className='chart-colm-div-heading'> 
          <img src={imgReviews} style={{width:'1.4em',objectFit:'contain'}}/>
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
      </div>
      <div className='styles-div-text' >
       <ReviewSummary  ratings={ratings}
        averageRating={averageRating}
        totalReviews={totalReviews}
        recommendationPercentage={recommendationPercentage} />
      </div>
    </div>
    </div>
    </div>
  );
}

export default RatingAndReviews;
