import './App.css';
import lemon from './images/lemon.png';
import carrot from './images/carrot.png';
import leaf from './images/leaf.png';
import tommato from './images/tommato.png';
import raspberry from './images/raspberry.png';
import orange from './images/orange.png';
import Banner from './Banner/Banner';
import Portfolio from './Portfolio/Portfolio';
import { useEffect, useState } from 'react';

const images = [lemon, carrot, leaf, tommato, raspberry, orange];

function App() {
  const [image, setImage] = useState()

  useEffect(()=>{
    setImage(images)
    
  },[])
  

  return (
    <div className="App">
      <Banner />
      {
        image && image.map((img)=>{
          return <Portfolio image={img} />
        })
      }
        
      
    </div>
  );
}

export default App;
