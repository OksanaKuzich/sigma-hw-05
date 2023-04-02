import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      {/* <AppBar /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
