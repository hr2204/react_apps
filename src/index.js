import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
//creat a new component
// produce html
const API_KEY = 'AIzaSyD2F84fATr5tf7YDbGv-IAvatNWVK-mJRU';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos:[]
    };

    YTSearch({key:API_KEY,term:'surfboards'}, (videos)=>{
      this.setState({videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}
// take this component's generated html and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
