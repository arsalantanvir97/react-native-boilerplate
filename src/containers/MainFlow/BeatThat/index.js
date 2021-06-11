import React, { useState, useContext } from 'react';
import BeatThatView from './view';

const BeatThat: () => React$Node = (props) => {

  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <BeatThatView {...viewProps} />;
};

export default BeatThat;
