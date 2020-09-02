import React, { useState, useContext } from 'react';
import FeedbackView from './view';

const Feedback: () => React$Node = (props) => {

  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <FeedbackView {...viewProps} />;
};

export default Feedback;
