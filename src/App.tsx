import classes from "@/styles/app.module.css";
import { useState } from "react";
import AnimatedText from "./components/AnimatedText";
import LoopingText from "./components/LoopingText";
import RadioSpeaker from "./components/RadioSpeaker";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>126FM</h1>

      <RadioSpeaker className={classes["radio-speaker"]} />

      <LoopingText
        className={classes["looping-text"]}
        text="Meow meow nigga"
      />

      <AnimatedText
        interval={20}
        text="First text..."
        onComplete={() => setCounter(counter + 1)}
      />

      {counter >= 1 && (
        <AnimatedText
          interval={100}
          text="Second text..."
          onComplete={() => setCounter(counter + 1)}
        />
      )}

      {counter >= 2 && (
        <AnimatedText
          interval={50}
          text="Third text..."
          onComplete={() => setCounter(counter + 1)}
        />
      )}
    </>
  );
};

export default App;
