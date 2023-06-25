import React from 'react';
import Feedback from './Feedback/Feedback';

const App = () => {
  const handleLeaveFeedback = () => {
  };

  return (
    <div>
      <Feedback onLeaveFeedback={handleLeaveFeedback} />
    </div>
  );
};

export default App;
