import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import EmojiList from './EmojiList';
import emojiData from './emoji.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({ data: emojiData });
  }

  handleSearch(e) {
    const search = e.target.value.toLowerCase();
    const result = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search)
    );
    this.setState({ search, data: result });
  }

  render() {
    const { search, data } = this.state;
    return (
      <div className='main'>
        <SearchBar search={search} onSearch={this.handleSearch} />
        {data.length==0?"Search not found":<EmojiList data={data} />}
      </div>
    );
  }
}

export default App;