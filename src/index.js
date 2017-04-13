import React from 'react';
import ReactDom from 'react-dom'
import SearchBar from './components/search_bar'
//creat a new component
// produce html
const API_KEY = 'AIzaSyD2F84fATr5tf7YDbGv-IAvatNWVK-mJRU';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// take this component's generated html and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
