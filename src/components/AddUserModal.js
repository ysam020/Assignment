import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddUserForm from "../forms/AddUserForm";
import { Box } from "@mui/material";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 10px 8px rgba(0, 0, 0, 0.3)",
  padding: "30px",
};

function AddUserModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="add-user-modal"
    >
      <Box sx={styles}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a user
        </Typography>
        <AddUserForm handleClose={props.handleClose} />
      </Box>
    </Modal>
  );
}

export default AddUserModal;
