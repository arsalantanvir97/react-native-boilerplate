import React, { useState, useContext } from 'react';
import RecordingDoneView from './view';

const RecordingDone: () => React$Node = (props) => {

  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <RecordingDoneView {...viewProps} />;
};

export default RecordingDone;
