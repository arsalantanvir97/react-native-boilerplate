import React, { useState, useContext } from 'react';
import SendChallangeView from './view';

const SendChallenge: () => React$Node = (props) => {

  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <SendChallangeView {...viewProps} />;
};

export default SendChallenge;
