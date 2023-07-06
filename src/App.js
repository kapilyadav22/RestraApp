import './index.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import About from './components/About';
import { ErrorPage } from './components/errorPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Contact } from './components/Contact';
import  RestraurantMenuSwiggy  from './components/restraurantMenuSwiggy';

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
