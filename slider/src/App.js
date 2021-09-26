import './App.css';
import { Slider } from './components/slider';
import Data from './components/data'

function App() {
  return (
    <div className="App">
      <Slider  slides = {Data}/>
    </div>
  );
}

export default App;
