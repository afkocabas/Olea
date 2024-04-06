import { useState } from 'react';

function useAlert(initialState, timeout = 3000) {
  const [showAlert, setShowAlert] = useState(initialState);

  const raiseAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, timeout);
  };

  return [showAlert, raiseAlert];
}

export default useAlert;