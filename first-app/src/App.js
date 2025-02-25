import logo from './logo.svg';
import './App.css';
import Msg from './components/Functional';
import ClassComponent from './components/Class';
import State from './components/State';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <State/>
      <Msg name='Ashwanth' branch='CSE' />
      <Msg name='Realme' branch='ECE'/>
      <ClassComponent topic='React'/> */}
    </div>
  );
}

export default App;
