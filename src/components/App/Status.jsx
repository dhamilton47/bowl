import React from 'react';
import { createPortal } from 'react-dom';

const Status = ({ isVisible, hideModal, message }) => {

  return isVisible ?
    createPortal(
      <div sx={{position: `fixed`, bottom: `25px`, right: `25px`}}>
        <div>{message}</div>
      </div>,
      document.body,
    )
  : null;
};

export default Status;
