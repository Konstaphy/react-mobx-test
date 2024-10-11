import { createPortal } from "react-dom";
import { FC, PropsWithChildren } from "react";
import "./modal.scss";

export const Modal: FC<PropsWithChildren<{ closeModal: VoidFunction }>> = ({
  children,
  closeModal,
}) => {
  return createPortal(
    <div className={"modal"} onClick={closeModal}>
      <div className={"modal_content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};
