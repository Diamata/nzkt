import React, {FC, useEffect} from 'react';
import "./style.css";
import {createPortal} from "react-dom";
import ReactFocusLock from "react-focus-lock";

export interface IModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent?: JSX.Element;
}

const Modal: FC<IModalProps> = ({
   isShown,
   hide,
   modalContent,
 }) => {

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
      <ReactFocusLock>
        <div
            className="modal"
            aria-modal
            tabIndex={-1}
            role="dialog"  >
          <div
              className="modal__close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
          />
          {modalContent}
        </div>
      </ReactFocusLock>

  );

  return isShown ? createPortal(modal, document.body) : null;
};

export default Modal;