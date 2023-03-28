import { GlobalStyle } from '../utiles/globalStyles';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const MyCompLayout = lazy(() => import('./Layout/Layout'));
const MyCompHome = lazy(() => import('../pages/HomePage/HomePage'));
const MyCompCart = lazy(() => import('../pages/CartPage/CartPage'));
const MyCompNotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MyCompLayout />}>
            <Route index element={<MyCompHome />} />
            <Route path="cart" element={<MyCompCart />} />
            <Route path="*" element={<MyCompNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};
