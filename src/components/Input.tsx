import { ANSWERS } from "@/content";
import { GameAction, useGameDispatch } from "@/contexts/game";
import sounds from "@/sounds";
import classes from "@/styles/input.module.css";
import clsx from "clsx";
import { LockKeyholeOpenIcon } from "lucide-react";
import { useState } from "react";

const checkAnswer = (input: string): boolean => {
  return ANSWERS.includes(input.trim().toLowerCase());
};

const Input = () => {
  const gameDispatch = useGameDispatch();
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasError) return;

    const isValid = checkAnswer(value);

    if (!isValid) {
      setHasError(true);
      sounds.wrongAnswer.play();
      return;
    }

    sounds.correctAnswer.play();

    gameDispatch({
      type: GameAction.SET_ANSWER,
      payload: { answer: value },
    });
  };

  const handleAnimationFinish = (
    _event: React.AnimationEvent<HTMLButtonElement>,
  ) => {
    setHasError(false);
  };

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="message-input"
        name="message-input"
        className={classes.input}
        onChange={handleTextChange}
        value={value}
      />

      <button
        type="submit"
        className={clsx(
          classes.button,
          hasError ? classes["button--error"] : undefined,
        )}
        onAnimationEnd={handleAnimationFinish}
      >
        <LockKeyholeOpenIcon size={16} />
      </button>
    </form>
  );
};

export default Input;
