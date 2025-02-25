import './App.css';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet';
import Parent from './components/Parent';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <Parent/>
      <UserGreet/>
      <ParentComponent/>
    </div>
  );
}

export default App;
