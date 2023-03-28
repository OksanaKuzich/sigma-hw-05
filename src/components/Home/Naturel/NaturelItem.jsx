import {
  CardWrapper,
  CardItem,
  ContentWrapper,
  CardSubtitle,
  CardTitle,
} from './NaturelItem.styled';

const naturelCards = [
  {
    subtitle: 'Natural!!',
    title: 'Get Garden Fresh Fruits',
  },
  {
    subtitle: 'Offer!!',
    title: 'Get 10% off on Vegetables',
  },
];

export const NaturelItem = () => {
  return (
    <CardWrapper>
      {naturelCards.map(item => (
        <CardItem key={item.subtitle}>
          <ContentWrapper>
            <CardSubtitle>{item.subtitle}</CardSubtitle>
            <CardTitle>{item.title}</CardTitle>
          </ContentWrapper>
        </CardItem>
      ))}
    </CardWrapper>
  );
};
