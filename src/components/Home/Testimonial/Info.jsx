import {
  InfoList,
  InfoItem,
  InfoNumber,
  InfoTitle,
  InfoDecore,
} from './Info.styled';

const allTestimonial = [
  {
    number: '100%',
    title: 'Organic',
  },
  {
    number: '285',
    title: 'Active Product',
  },
  {
    number: '350+',
    title: 'Organic Orchads',
  },
  {
    number: '25+',
    title: 'Years of Farming',
  },
];

export const Info = () => {
  return (
    <InfoList>
      {allTestimonial.map(({ number, title }) => (
        <InfoItem key={number}>
          <InfoDecore>
            <InfoNumber>{number}</InfoNumber>
            <InfoTitle>{title}</InfoTitle>
          </InfoDecore>
        </InfoItem>
      ))}
    </InfoList>
  );
};
