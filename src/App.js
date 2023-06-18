import React,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoApp from './todo/TodoApp';

class App extends Component {
  render (){
    return(
      <TodoApp/>
    )
  }
}

export default App;
