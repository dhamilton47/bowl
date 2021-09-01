import { useState } from 'react';

const useStatus = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleModal() {
    const timer = setTimeout(
      () => setIsVisible(!isVisible), 10000
    )
    return () => clearTimeout(timer);
  }

  return {
    isVisible,
    toggleModal,
  }
};

export default useStatus;