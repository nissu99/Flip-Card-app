import React, { useState } from 'react';

function QuizCard({ question, answer }: any) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [curindex, setCurindex] = useState<number>(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full h-[50vh] min-h-[400px] max-w-4xl mx-auto perspective cursor-pointer"
      onClick={handleFlip}
    >
      <div className={`card ${isFlipped ? 'flipped' : ''} w-full h-full`}>
      <div className="card-front  p-12 flex flex-col justify-center items-center min-w-[40vh] min-h-[50vh]">
  <h2 className="text-6xl md:text-7xl font-extrabold text-yellow-300 mb-12">Question</h2>
  <p className="text-4xl md:text-5xl text-center max-w-3xl">{question}</p>
</div>
<div className="card-back p-12 flex flex-col justify-center items-center min-w-[40vh] min-h-[50vh]">
  <h2 className="text-6xl md:text-7xl font-extrabold text-green-300 mb-12">Answer</h2>
  <p className="text-4xl md:text-5xl text-center max-w-3xl">{answer}</p>
</div>
<div className="navigation">
</div>
      </div>
    </div>
  );
}

export default QuizCard;