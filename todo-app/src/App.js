import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Hover from './components/Hover';
import CreateList from './components/ToDo';

function App() {
  console.log("Init")
  return (
    <div className="App">
      <CreateList/>
      {/* <Button name='Ashwanth'/>
      <Hover/> */}
    </div>
  );
}

export default App;
