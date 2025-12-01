import { Howl } from "howler";

const sounds = {
  radioClick: new Howl({
    src: "src/assets/audio/radio-click.mp3",
    format: "mp3",
    volume: 0.75,
  }),
  wrongAnswer: new Howl({
    src: "src/assets/audio/wrong-answer.mp3",
    format: "mp3",
    volume: 0.75,
  }),
  keyboardPress: new Howl({
    src: "src/assets/audio/keyboard-press.mp3",
    format: "mp3",
    volume: 0.5,
  }),
  correctAnswer: new Howl({
    src: "src/assets/audio/correct-answer.mp3",
    format: "mp3",
    volume: 0.75,
  }),

  // ========= PAGES ========= //

  channel3: new Howl({
    src: "src/assets/audio/communication-1.mp3",
    format: "mp3",
    volume: 0.3,
  }),
  mainMenu: new Howl({
    src: "src/assets/audio/jay-varton_my-kind-of-illusion.mp3",
    format: "mp3",
    volume: 0.3,
    loop: true,
  }),
  radioStatic: new Howl({
    src: "src/assets/audio/radio-static.mp3",
    format: "mp3",
    volume: 0.1,
    loop: true,
  }),
} as const;

export default sounds;
