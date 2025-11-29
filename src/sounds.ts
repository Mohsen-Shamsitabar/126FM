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
} as const;

export default sounds;
