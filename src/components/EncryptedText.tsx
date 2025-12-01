import type { AnimatedTextProps } from ".";
import AnimatedText from "./AnimatedText";

const ENCRYPTED_PLACEHOLDER =
  "* ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *\
      ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *\
      ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *\
      ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *";

type Props = Pick<AnimatedTextProps, "onComplete">;

const EncryptedText = (props: Props) => {
  const { onComplete } = props;

  return (
    <AnimatedText
      onComplete={onComplete}
      text={ENCRYPTED_PLACEHOLDER}
    />
  );
};

export default EncryptedText;
