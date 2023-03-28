import { Subtitle } from 'components/Home/Subtitle/Subtitle';
import { Title } from 'components/Home/Title/Title';

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

export const Testimonial = () => {
  return (
    <>
      <Subtitle text={'Testimonial'} />
      <Title text={'What Our Customer Saying?'} />
    </>
  );
};
