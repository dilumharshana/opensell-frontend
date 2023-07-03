import { Modal } from "antd";
import React from "react";

export const ModalCopmonet = ({
  open,
  children,
  onCancel,
  onOk,
  okuttonDisabled,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      closable={false}
      okButtonProps={{ disabled: okuttonDisabled }}
    >
      {children}
    </Modal>
  );
};
