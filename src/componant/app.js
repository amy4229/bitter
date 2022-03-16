import React , { Component}  from 'react';
import {firebaseInstance} from '../fbase'


class App extends Component {
  
  render() {
    console.log(firebaseInstance)
    return (
      <div className="App">APP</div>
    );
  }
}

export default App;
