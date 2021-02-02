import React ,{Component} from 'react'; 
import logo from './logo.svg';
import './App.css';

class  App extends Component {

constructor() {
  super();

 this.state = {
   string: 'rahat'
 };
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.string} </p>
          <button class= "button" onClick = {()=> this.setState({ string :'Hello'}) }> 
          Change text
          </button>
          <br/>
          <button class = "button" onClick = {()=> this.setState({ string :'rahat'}) }> 
          Change text back
          </button>
      
       </header>
    </div>
  );
    
 }
}
export default App;
