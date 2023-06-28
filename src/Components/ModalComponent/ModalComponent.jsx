import { Modal } from '@material-ui/core'
import React from 'react'

export const ModalCopmonet = ({open , handleClose , children,data}) => {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       {children}
      </Modal>
  )
}
