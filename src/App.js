import './index.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import About from './components/About';
import { ErrorPage } from './components/errorPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Contact } from './components/Contact';
import  RestraurantMenuSwiggy  from './components/restraurantMenuSwiggy';
// import Grocery from './components/Grocery';
import {lazy, Suspense} from 'react';
import Shimmer from './components/shimmer';

//Chunking
//Code splitting
//Dynamic Bundling
//Lazy Loading
//on demand loading
//dynamic import

const Grocery = lazy( () => import("./components/Grocery"));

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
console.log(App());
console.log(<App/>);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback= {<Shimmer/>}>  <Grocery/> </Suspense> ,
      },
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/Restraurant/:resId",
        element: <RestraurantMenuSwiggy/>,
      }
    ],
  },
]);

export default App;
