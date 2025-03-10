import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState('');

  useEffect(() => {
    const keyPressHandler = (event: KeyboardEvent) => {
      setKeyPressed(event.key);
    };

    document.addEventListener('keydown', keyPressHandler);

    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });

  return (
    <div className="App">
      <p className="App__message">
        {!keyPressed
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${keyPressed}]`}
      </p>
    </div>
  );
};
