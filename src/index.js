import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './components/api';

import Searchbar from './components/search_bar';



//Create a new Copemnet 
  //make some HTML

const App = () =>  {
  return (
    <div>
     <Searchbar />
    </div>
  )
}

//take the gerneated HTML and put it on the page
  //(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
