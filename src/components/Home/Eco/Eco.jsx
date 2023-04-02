import { Container } from 'components/Container/Container.styled';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import {
  EcoSection,
  Image,
  EcoInfo,
  EcoList,
  EcoItemTitle,
  EcoItemSubtitle,
} from './Eco.styled';

const ecoArr = [
  {
    title: 'Start with Our Company First',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    title: 'Learn How to Grow Yourself',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    title: 'Farming Strategies of Today',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
];
export const Eco = () => {
  return (
    <EcoSection>
      <Container>
        <Image />
        <EcoInfo>
          <Subtitle text={'Eco Friendly'} />
          <Title text={'Econis is a Friendly Organic Store'} />
          <EcoList>
            {ecoArr.map(({ title, subtitle }) => (
              <li key={title}>
                <EcoItemTitle>{title}</EcoItemTitle>
                <EcoItemSubtitle>{subtitle}</EcoItemSubtitle>
              </li>
            ))}
          </EcoList>
        </EcoInfo>
      </Container>
    </EcoSection>
  );
};
