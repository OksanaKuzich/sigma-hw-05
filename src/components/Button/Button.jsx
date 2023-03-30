import { ButtomComp } from './Button.styled';

export const Button = ({ text, stl, func }) => {
  return (
    <ButtomComp stl={stl} type="button" onClick={func}>
      {text}
    </ButtomComp>
  );
};
