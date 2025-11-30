import sounds from "@/sounds";
import classes from "@/styles/input.module.css";
import clsx from "clsx";
import { LockKeyholeOpenIcon } from "lucide-react";
import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    const randomRate = Math.random() * 0.5;

    sounds.keyboardPress.rate(1 + randomRate);
    sounds.keyboardPress.play();

    setHasError(false);
    setValue(newValue);
  };

  const handleBtnClick = () => {
    if (hasError) return;

    setHasError(true);

    sounds.wrongAnswer.play();
  };

  const handleAnimationFinish = (
    _event: React.AnimationEvent<HTMLButtonElement>,
  ) => {
    setHasError(false);
  };

  return (
    <div className={classes.root}>
      <input
        type="text"
        name="message-input"
        id="message-input"
        className={classes.input}
        onChange={handleTextChange}
        value={value}
      />

      <button
        className={clsx(
          classes.button,
          hasError ? classes["button--error"] : undefined,
        )}
        onAnimationEnd={handleAnimationFinish}
        onClick={handleBtnClick}
      >
        <LockKeyholeOpenIcon size={16} />
      </button>
    </div>
  );
};

export default Input;
