import './App.css';
import lemon from './images/lemon.png';
import carrot from './images/carrot.png';
import leaf from './images/leaf.png';
import tommato from './images/tommato.png';
import raspberry from './images/raspberry.png';
import orange from './images/orange.png';
import Banner from './Banner/Banner';
import Portfolio from './Portfolio/Portfolio';
import {v4 as uuidv4} from 'uuid'


const images = [lemon, carrot, leaf, tommato, raspberry, orange];

function App() {
    
  return (
    <div className="App">
      <Banner />
      <div className='container'>
        {
          images && images.map((image)=>{
            return(
              <Portfolio 
                id = {uuidv4()}
                key = {uuidv4()}
                image={image} 
              />
               
            )
          })
        }
      </div>
    
      
    </div>
  );
}

export default App;
