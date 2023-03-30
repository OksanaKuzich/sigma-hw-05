import { Container } from 'components/Container/Container.styled';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { EcoSection, Image, EcoInfo } from './Eco.styled';

export const Eco = () => {
  return (
    <EcoSection>
      <Container>
        <Image />
        <EcoInfo>
          <Subtitle text={'Eco Friendly'} />
          <Title text={'Econis is a Friendly Organic Store'} />
        </EcoInfo>
      </Container>
    </EcoSection>
  );
};
