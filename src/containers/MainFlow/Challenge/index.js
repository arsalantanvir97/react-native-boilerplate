import React, { useState, useContext } from 'react';
import ChallengeView from './view';

const Challenge: () => React$Node = (props) => {

  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <ChallengeView {...viewProps} />;
};

export default Challenge;
