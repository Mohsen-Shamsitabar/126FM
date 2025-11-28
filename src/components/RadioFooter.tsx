import classes from "@/styles/radio-footer.module.css";
import { ChannelInfo, ChannelNavigation } from ".";

const RadioFooter = () => {
  return (
    <footer className={classes.root}>
      <ChannelInfo />

      <ChannelNavigation />
    </footer>
  );
};

export default RadioFooter;
