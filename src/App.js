import logo from './logo.svg';
import './App.css';

import NewList from './Components/NewList';
import Count from'./Components/Count';
import CounterHook from'./Components/CounterHook';

function App() {
  return (
    <div className="App">
      
      <NewList></NewList> 
      
      <Count></Count>
      <CounterHook></CounterHook>
      
    </div>
  );
}

export default App;
