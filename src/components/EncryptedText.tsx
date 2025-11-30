import AnimatedText from "./AnimatedText";

const ENCRYPTED_PLACEHOLDER =
  "* ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *\
      ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *\
      ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *\
      ***** ********* * ***** *** ***** ** ***** *** **** ** **** ***** *** *";

const EncryptedText = () => {
  return <AnimatedText text={ENCRYPTED_PLACEHOLDER} />;
};

export default EncryptedText;
