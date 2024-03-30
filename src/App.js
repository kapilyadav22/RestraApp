import './index.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import About from './components/About';
import { ErrorPage } from './components/errorPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Contact } from './components/Contact';
import RestraurantMenuSwiggy from './components/restraurantMenuSwiggy';
// import Grocery from './components/Grocery';
import { lazy, Suspense } from 'react';
import Shimmer from './components/shimmer';
import { PopupProvider } from './components/Authentication/popupContext';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Cart from './components/cart';
import Payment from './components/payment';

//Chunking
//Code splitting
//Dynamic Bundling
//Lazy Loading
//on demand loading
//dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <>
      <Provider store={appStore}>
        <div className="App">
          <PopupProvider>
            <Header />
            <Outlet />
            <Footer />
          </PopupProvider>
        </div>
      </Provider>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      // {
      //   path: "/grocery",
      //   element: <Suspense fallback={<Shimmer />}>  <Grocery /> </Suspense>,
      // },
      {
        path: "/",
        element: <Body />,
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
        element: <Payment/>,
      },
    ],
  },
]);

export default App;
