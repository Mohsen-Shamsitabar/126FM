import classes from "@/styles/confirm-dialog.module.css";
import clsx from "clsx";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmDialog = ({
  message,
  onConfirm,
  onCancel,
  confirmText = "Yes",
  cancelText = "No",
}: ConfirmDialogProps) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.dialog}>
        <p className={classes.message}>{message}</p>
        <div className={classes.buttons}>
          <button
            className={clsx(classes.button, classes["button--confirm"])}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
          <button
            className={clsx(classes.button, classes["button--cancel"])}
            onClick={onCancel}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
