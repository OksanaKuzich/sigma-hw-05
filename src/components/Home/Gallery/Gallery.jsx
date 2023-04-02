import galleryJuice from '../../../images/organic-1.jpg';
import galleryFood from '../../../images/organic-2.jpg';
import galleryCookis from '../../../images/organic-3.jpg';
import {
  GallerySection,
  GalleryList,
  GalleryItem,
  GalleryTitle,
} from './Gallery.styled';

const galleryArr = [
  {
    image: galleryJuice,
    title: 'Organic Juice',
  },
  {
    image: galleryFood,
    title: 'Organic Food',
  },
  {
    image: galleryCookis,
    title: 'Nuts Cookis',
  },
];

export const Gallery = () => {
  return (
    <GallerySection>
      <GalleryList>
        {galleryArr.map(({ image, title }) => {
          return (
            <GalleryItem key={title}>
              <img src={image} alt={title} />
              <GalleryTitle>{title}</GalleryTitle>
            </GalleryItem>
          );
        })}
      </GalleryList>
    </GallerySection>
  );
};
