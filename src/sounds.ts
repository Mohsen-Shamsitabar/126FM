import { Howl } from "howler";

const sounds = {
  radioClick: new Howl({
    src: "/sounds/radio-click.mp3",
    format: "mp3",
    volume: 0.75,
  }),
  wrongAnswer: new Howl({
    src: "/sounds/wrong-answer.mp3",
    format: "mp3",
    volume: 0.75,
  }),
  keyboardPress: new Howl({
    src: "/sounds/keyboard-press.mp3",
    format: "mp3",
    volume: 0.5,
  }),
  correctAnswer: new Howl({
    src: "/sounds/correct-answer.mp3",
    format: "mp3",
    volume: 0.75,
  }),

  // ========= BACKGROUND ========= //

  mainMenu: new Howl({
    src: "/sounds/jay-varton_my-kind-of-illusion.mp3",
    format: "mp3",
    volume: 0.3,
    loop: true,
  }),
  radioStatic: new Howl({
    src: "/sounds/radio-static.mp3",
    format: "mp3",
    volume: 0.1,
    loop: true,
  }),
} as const;

export default sounds;
