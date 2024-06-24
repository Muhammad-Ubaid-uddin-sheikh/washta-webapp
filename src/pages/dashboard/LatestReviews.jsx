import React from 'react';
import './app.css'
const reviews = [
  {
    id: 1,
    name: 'Kristin Watson',
    date: '16 May 2024 At 10:00 AM',
    review: 'If you\'re looking to give your vehicle the royal treatment, look no further than Sparkle Clean Car Wash. Nestled conveniently on Main Street, this car wash establishment exceeded all my expectations.',
    rating: 4,
  },
  // More reviews can be added here
];

const LatestReviews = () => {
  return (
    <div className="latest-reviews">
      <h2>Latest Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review-box">
          <h3>{review.name}</h3>
          <p>{review.date}</p>
          <p>{review.review}</p>
          <div className="rating">
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
          </div>
          <button>Reply</button>
        </div>
      ))}
    </div>
  );
};

export default LatestReviews;
