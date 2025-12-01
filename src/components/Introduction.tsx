import classes from "@/styles/introduction.module.css";

type Props = {
  onClick: () => void;
};

const Introduction = (props: Props) => {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classes.root}
    >
      <div className={classes["main-container"]}>
        <h1 className={classes.glitch}>126.FM</h1>

        <pre>Made with react.js</pre>

        <pre>Tap on screen to begin</pre>
      </div>
    </div>
  );
};

export default Introduction;
