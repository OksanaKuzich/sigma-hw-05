import { Header } from 'components/Home/Header/Header';
import { Hero } from 'components/Home/Hero/Hero';
import { Naturel } from 'components/Home/Naturel/Naturel';
import { About } from 'components/Home/About/About';
import { Products } from 'components/Home/Products/Products';
import { Testimonial } from 'components/Testimonial/Testimonial';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Naturel />
        <About />
        <Products />
        <Testimonial />
      </main>
    </>
  );
};

export default HomePage;
