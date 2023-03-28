import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container.styled';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import advantagesIcon1 from '../../../images/about-1.png';
import advantagesIcon2 from '../../../images/about-2.png';
import {
  AboutSection,
  ImageWrapper,
  ContentWrapper,
  Content,
  AdvantagesList,
  AdvantagesItem,
  Image,
  AdvantagesWrapper,
  AdvantagesTitle,
  AdvantagesSubtitle,
} from './About.styled';

const advantages = [
  {
    icon: advantagesIcon1,
    title: 'Organic Foods Only',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    icon: advantagesIcon2,
    title: 'Quality Standards',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
];

export const About = () => {
  return (
    <AboutSection>
      <Container>
        <ImageWrapper />
        <ContentWrapper>
          <Subtitle text={'About Us'} />
          <Title text={'We Believe in Working Accredited Farmers'} />
          <Content>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Content>
          <AdvantagesList>
            {advantages.map(({ title, text, icon }) => (
              <AdvantagesItem key={title}>
                <AdvantagesWrapper>
                  <Image src={icon} alt="icon advantages" />
                </AdvantagesWrapper>
                <div>
                  <AdvantagesTitle>{title}</AdvantagesTitle>
                  <AdvantagesSubtitle>{text}</AdvantagesSubtitle>
                </div>
              </AdvantagesItem>
            ))}
          </AdvantagesList>
          <Button stl={'blue'} text={'Shop Now'} />
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};
