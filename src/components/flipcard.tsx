import React, { useState } from 'react';

function QuizCard({ question, answer }:any) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [curindex,setCurindex] = useState<number>(0);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleNext = () => {
    setIsFlipped(false);
    setCurindex((prevIndex) => (prevIndex + 1) % question.length);
  };
 const handlePrevious = () => {
    setIsFlipped(false);
    setCurindex((prevIndex) => 
      prevIndex === 0 ? question.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h2>Question</h2>
          <p>{question}</p>
        </div>
        <div className="card-back">
          <h2>Answer</h2>
          <p>{answer}</p>
        </div>
      <div className="navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      </div>
    </div>
  );
}

export default QuizCard;
