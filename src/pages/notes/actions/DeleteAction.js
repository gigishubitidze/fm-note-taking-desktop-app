import React, { useState } from "react";
import Button from "../../../components/Buttons.styled";
import Modal from "../../../components/Modals.styled";
import { showInfoToast } from "../../../components/Toastify";
import { ReactComponent as DeleteIcon } from "../../../assets/images/icon-delete.svg";

function DeleteAction({ noteId }) {
  const [open, setOpen] = useState(false);
  const actionText = "Delete Note";

  const handleDeleteNote = () => {
    setOpen(false);
    showInfoToast("Note permanently deleted.");
  };

  return (
    <>
      <Button variant="border" icon={DeleteIcon} onClick={() => setOpen(true)}>
        {actionText}
      </Button>

      <Modal
        icon={DeleteIcon}
        title={actionText}
        text="Are you sure you want to permanently delete this note? This action cannot be undone."
        open={open}
        onClose={() => setOpen(false)}
        action={
          <Button variant="delete" onClick={handleDeleteNote}>
            {actionText}
          </Button>
        }
      />
    </>
  );
}

export default DeleteAction;
