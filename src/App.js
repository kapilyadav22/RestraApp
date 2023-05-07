import logo from './logo.svg';
import './index.css';
import Header from './header';
import Body from './body';
import { Footer } from './footer';
// Header
//   -Logo
//   -Nav Items
// Body
//   -Search
//   -RestraurantContainer
//   -RestraurantCard
// Footer
//   -Copyright
//   -Links
//   -Address
//   -Contact

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>

  );
}

export default App;
