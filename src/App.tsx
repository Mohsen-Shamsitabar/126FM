import { useState } from "react";
import AnimatedText from "./components/AnimatedText";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>126FM</h1>

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
