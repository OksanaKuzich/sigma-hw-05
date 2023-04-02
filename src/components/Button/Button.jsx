import { ButtomComp } from './Button.styled';

export const Button = ({ text, stl, func, type = 'button' }) => {
  return (
    <ButtomComp stl={stl} type={type} onClick={func}>
      {text}
    </ButtomComp>
  );
};
