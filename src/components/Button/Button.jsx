import { ButtomComp } from './Button.styled';

export const Button = ({ text, stl }) => {
  return <ButtomComp stl={stl}>{text}</ButtomComp>;
};
