import './App.css';
import ListOfEmployee from './components/ListOfEmployee'
import AddEmployee from './components/AddEmployee'
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div>
<Switch>
<Route exact path="/" component = {ListOfEmployee}/>
<Route path="/employees" component = {ListOfEmployee}/>
<Route path = "/add-employee" component = {AddEmployee}/>
</Switch>

</div>
  );
}

export default App;
