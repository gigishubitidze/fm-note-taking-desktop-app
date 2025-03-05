import React, { useState } from "react";
import Button from "../../../components/Buttons.styled";
import Modal from "../../../components/Modals.styled";
import { showInfoToast } from "../../../components/Toastify";
import { ReactComponent as RestoreIcon } from "../../../assets/images/icon-restore.svg";

function RestoreAction({ noteId }) {
  const [open, setOpen] = useState(false);
  const actionText = "Restore Note";

  const handleRestoreNote = () => {
    setOpen(false);
    showInfoToast("Note restored to active notes.", {
      linkProps: { text: "All Notes", to: "/all-notes", noteId },
    });
  };

  return (
    <>
      <Button variant="border" icon={RestoreIcon} onClick={() => setOpen(true)}>
        {actionText}
      </Button>

      <Modal
        icon={RestoreIcon}
        title={actionText}
        text="Are you sure you want to restore this note? You can find it in the All Notes section and archive it anytime."
        open={open}
        onClose={() => setOpen(false)}
        action={<Button onClick={handleRestoreNote}>{actionText}</Button>}
      />
    </>
  );
}

export default RestoreAction;
