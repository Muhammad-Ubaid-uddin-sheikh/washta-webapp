import React from 'react';
import '../app.css';
import { IoStar } from "react-icons/io5";
import ClipBord from '../../../../assets/images/reviewsummary.png'
function ReviewSummary({ ratings, averageRating, totalReviews, recommendationPercentage}) {
  
  return (
    <div className="orders">
      <div className='chart-colm-div-heading'> 
          <img src={ClipBord} style={{width:'1.4em',objectFit:'contain'}}/>
          <h2 className='main-heading2'>Review Summary</h2>
          </div>
        


    <div className="container">
      <div className="barsContainer">
        {Object.keys(ratings).map((rating) => (
          <div key={rating} className="ratingRow">
            <span className="ratingText">{rating}</span>
            <div className="barBackground">
              <div className="barFill" style={{ width: `${(ratings[rating] / totalReviews) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="summaryContainer">
       
        <div> <p  className="recommendationText">{totalReviews} </p> <p className="reviewsText">Reviews</p> </div>
        <div> <p className="recommendationText" style={{display:'flex',alignItems:'center'}}>4.5 <IoStar className='icon-star-review' /></p>  <p className="reviewsText">Rating</p> </div>
        <div> <p className="recommendationText">{recommendationPercentage}% </p> <p className="reviewsText">Recommended</p> </div>
       
       
      </div>
    </div>

    </div>
  );
}

export default ReviewSummary;
