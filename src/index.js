import React from 'react';
import ReactDOM from 'react-dom';
//Create a new Copemnet 
  //make some HTML

const App = () =>  {
  return <div>Hi!</div>
}

//take the gerneated HTML and put it on the page
  //(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
