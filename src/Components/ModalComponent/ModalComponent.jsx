import { Modal } from "antd";
import React from "react";

export const ModalCopmonet = ({
  open,
  children,
  onCancel,
  onOk,
  okuttonDisabled,
  centerd,
  title,
  footer,
  width,
}) => {
  return (
    <Modal
      open={open}
      title={title && title}
      onCancel={onCancel && onCancel}
      onOk={onOk && onOk}
      closable={false}
      okButtonProps={{ disabled: okuttonDisabled }}
      centered={centerd}
      footer={footer && footer}
      width={width && width}
    >
      {children}
    </Modal>
  );
};
