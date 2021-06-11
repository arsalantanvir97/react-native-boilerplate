import React, { useState, useContext } from 'react';
import MeasureSkillView from './view';

const MeasureSkill: () => React$Node = (props) => {

  const [rating, setRating] = useState(5)
  const [review, setReview] = useState("")

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <MeasureSkillView {...viewProps} />;
};

export default MeasureSkill;
