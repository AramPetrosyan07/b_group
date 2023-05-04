import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CustomerSaying from './components/CustomerSaying/CustomerSaying';
import Offer from './components/Offer/Offer';
import OurProducts from './components/OurProducts/OurProducts';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <OurProducts />
      <CustomerSaying />
      <Offer />
    </div>
  );
}

export default App;
