import React, { useState, useContext } from 'react';
import ViewResultView from './view';

const ViewResult: () => React$Node = (props) => {

  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <ViewResultView {...viewProps} />;
};

export default ViewResult;
