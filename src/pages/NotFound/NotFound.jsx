import { Button } from 'components/Button/Button';
import { Title } from 'components/Home/Hero/Hero.styled';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';
import {
  NotFoundSection,
  NotFoundInfo,
  NotFoundSubtitle,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <main>
      <NotFoundSection>
        <NotFoundInfo>
          <img src={notFound} alt="not found" />
          <Title>Page not found</Title>
          <NotFoundSubtitle>
            The page you are looking for doesn't exist or has been moved
          </NotFoundSubtitle>
          <Link to="/">
            <Button text={'Go to Homepage'} stl="blue" />
          </Link>
        </NotFoundInfo>
      </NotFoundSection>
    </main>
  );
};

export default NotFound;
