import _ from 'lodash'
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search';

//creat a new component
// produce html
const API_KEY = 'AIzaSyD2F84fATr5tf7YDbGv-IAvatNWVK-mJRU';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

    }


    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <div>
                    <SearchBar onSearchTermChange={videoSearch} />
                </div>
                <div>
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }

}
// take this component's generated html and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
