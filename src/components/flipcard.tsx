import React, { useState } from 'react';

function QuizCard({ question, answer }:any) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [curindex,setCurindex] = useState<number>(0);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
    return (

    <div   className="relative w-full max-w-lg mx-auto perspective cursor-pointer"onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
            <h2 className="text-3xl font-extrabold text-yellow-300 mb-4">Question</h2>
          <p>{question}</p>
        </div>
        <div className="card-back">
            <h2 className="text-3xl font-extrabold text-green-300 mb-4">Answer</h2>
          <p>{answer}</p>
        </div>
      <div className="navigation">
      </div>
      </div>
    </div>
  );
}

export default QuizCard;
