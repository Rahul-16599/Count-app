import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Todoitems from './component/Todoitems';
import Button from './component/Button';
import CounterComponent from './component/countercomponent';
import './style.css'


function App() {
  return (
    <div className='todo-container'> 
        <Header />
        <CounterComponent />
        <Todoitems text= "Eat"/>
        <Todoitems text= "Code"/>
        <Todoitems text= "Work"/>
        <Todoitems text= "Sleep"/>
        <Todoitems text= "Repeat"/>
        < Button />
    </div>
    
  );
}

export default App;
