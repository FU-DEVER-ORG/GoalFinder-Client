import { useState } from 'react';

const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  function toggle() {
    setVisible(!visible);
  }

  return {
    visible,
    toggle,
  };
};

export default useModal;
