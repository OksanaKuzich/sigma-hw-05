import { Container } from 'components/Container/Container.styled';
import { NaturelItem } from './NaturelItem';
import { NaturelSection } from './Naturel.styled';

export const Naturel = () => {
  return (
    <NaturelSection>
      <Container>
        <NaturelItem />
      </Container>
    </NaturelSection>
  );
};
