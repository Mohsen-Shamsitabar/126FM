import classes from "@/styles/channel-content.module.css";
import { useState } from "react";
import { BubbleText } from ".";

const ChannelContent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={classes.root}>
      <BubbleText
        author="Mohsen"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quaerat perspiciatis aut sapiente fuga. Sapiente sit dolor error ipsa nemo earum eos blanditiis dolorem tempore explicabo pariatur, velit assumenda? Repellendus labore quasi assumenda magni, rem repellat. Totam, distinctio quaerat rem eaque impedit recusandae! Exercitationem asperiores magnam sed blanditiis, incidunt qui velit a iste sint eos? Cupiditate dolores similique fuga? Unde dolorum sed tempore laudantium at error minus cupiditate voluptas quod eius quis temporibus adipisci minima ad ratione rem, atque sit? Voluptatum, odit quam. Soluta molestiae earum temporibus deleniti, nobis accusamus, error illo in vero suscipit nihil unde numquam voluptatem nisi."
        interval={5}
        onComplete={() => setCounter(counter + 1)}
      />

      {counter === 1 && (
        <BubbleText
          author="Amir"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quaerat perspiciatis aut sapiente fuga. Sapiente sit dolor error ipsa nemo earum eos blanditiis dolorem tempore explicabo pariatur, velit assumenda? Repellendus labore quasi assumenda magni, rem repellat. Totam, distinctio quaerat rem eaque impedit recusandae! Exercitationem asperiores magnam sed blanditiis, incidunt qui velit a iste sint eos? Cupiditate dolores similique fuga? Unde dolorum sed tempore laudantium at error minus cupiditate voluptas quod eius quis temporibus adipisci minima ad ratione rem, atque sit? Voluptatum, odit quam. Soluta molestiae earum temporibus deleniti, nobis accusamus, error illo in vero suscipit nihil unde numquam voluptatem nisi."
          interval={5}
        />
      )}
    </div>
  );
};

export default ChannelContent;
