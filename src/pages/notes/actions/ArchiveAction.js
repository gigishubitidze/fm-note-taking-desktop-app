import React, { useState } from "react";
import Button from "../../../components/Buttons.styled";
import Modal from "../../../components/Modals.styled";
import { showInfoToast } from "../../../components/Toastify";
import { ReactComponent as ArchiveIcon } from "../../../assets/images/icon-archive.svg";

function ArchiveAction({ noteId }) {
  const [open, setOpen] = useState(false);
  const actionText = "Archive Note";

  const handleArchiveNote = () => {
    setOpen(false);
    showInfoToast("Note archived.", {
      linkProps: { text: "Archived Notes", to: "/archived-notes", noteId },
    });
  };

  return (
    <>
      <Button variant="border" icon={ArchiveIcon} onClick={() => setOpen(true)}>
        {actionText}
      </Button>

      <Modal
        icon={ArchiveIcon}
        title={actionText}
        text="Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime."
        open={open}
        onClose={() => setOpen(false)}
        action={<Button onClick={handleArchiveNote}>{actionText}</Button>}
      />
    </>
  );
}

export default ArchiveAction;
