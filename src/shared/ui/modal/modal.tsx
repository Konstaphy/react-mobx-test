import { createPortal } from "react-dom";
import { FC, PropsWithChildren } from "react";
import "./modal.scss";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  return createPortal(
    <div className={"modal"}>
      <div className={"modal_content"}>{children}</div>
    </div>,
    document.body,
  );
};
