import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container.styled';
import newsFirst from '../../../images/news-1.jpg';
import newsSecond from '../../../images/news-2.jpg';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ReactComponent as Icon } from '../../../images/icon/person.svg';
import {
  NewsWrapper,
  NewsTitles,
  NewsList,
  NewsItem,
  Image,
  NewsDate,
  NewsCard,
  AuthorInfo,
  CardTitle,
  CardInfo,
} from './News.styled';

const newsArr = [
  {
    image: newsFirst,
    author: 'By Rachi Card',
    title: 'The Benefits of Vitamin D & How to Get It',
    info: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    date: '25 Nov',
  },
  {
    image: newsSecond,
    author: 'By Rachi Card',
    title: 'Our Favourite Summertime Tommeto',
    info: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    date: '25 Nov',
  },
];

export const News = () => {
  return (
    <section>
      <Container>
        <NewsWrapper>
          <NewsTitles>
            <Subtitle text={'News'} />
            <Title
              text={'Discover weekly content about organic food, & more'}
            />
          </NewsTitles>
          <Button text={'More News'} stl="white" />
        </NewsWrapper>
        <NewsList>
          {newsArr.map(({ image, author, title, info, date }) => {
            return (
              <NewsItem key={title}>
                <Image src={image} alt={title} />
                <NewsDate>{date}</NewsDate>
                <NewsCard>
                  <AuthorInfo>
                    <Icon />
                    <p>{author}</p>
                  </AuthorInfo>
                  <CardTitle>{title}</CardTitle>
                  <CardInfo>{info}</CardInfo>
                  <Button text={'Read More'} stl="yellow" />
                </NewsCard>
              </NewsItem>
            );
          })}
        </NewsList>
      </Container>
    </section>
  );
};
