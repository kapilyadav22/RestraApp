import './index.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import About from './components/About';
import { ErrorPage } from './components/errorPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Contact } from './components/Contact';
import RestraurantMenuSwiggy from './components/restraurantMenuSwiggy';
import { lazy, Suspense } from 'react';
import Shimmer from './components/shimmer';
import { PopupProvider } from './components/Authentication/popupContext';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/appStore'; 
import Cart from './components/cart';
import Payment from './components/payment';
import { PersistGate } from 'redux-persist/integration/react';

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <div className="App">
      <PopupProvider>
        <Header />
        <Outlet />
        <Footer />
      </PopupProvider>
    </div>
  );
}

const AppWithProvider = () => (
  <Provider store={store}>
    <PersistGate loading={<Shimmer />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppWithProvider />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/",
       element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Restraurant/:resId",
        element: <RestraurantMenuSwiggy />,
      },
      {
        path: "/Payment",
        element: <Payment />,
      },
    ],
  },
]);

export default AppWithProvider;
