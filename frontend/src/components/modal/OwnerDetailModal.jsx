import React from "react";
import { Modal, TextField, Button, IconButton, Divider } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./Modal.module.css";

function OwnerDetailModal({ open, onClose, ownerData }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.modalWrapper}>
        <IconButton
          aria-label="close"
          className={styles.closeButton}
          onClick={onClose}
        >
          <IoMdCloseCircle />
        </IconButton>
        <div className={styles.content}>
          <div className={styles.field}>
            <p className={styles.label}>Owner Name</p>
            <p className={styles.value}>{ownerData.firstName}</p>
          </div>
          <Divider />
          <div className={styles.field}>
            <p className={styles.label}>Contact Number</p>
            <p className={styles.value}>{ownerData.phone}</p>
          </div>
          <Divider />
          <div className={styles.field}>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>
              <a href="mailto:xyz@gmail.com" className={styles.emailLink}>
                {ownerData.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OwnerDetailModal;
