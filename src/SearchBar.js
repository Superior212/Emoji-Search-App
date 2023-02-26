import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  render() {
    const { search, onSearch } = this.props;
    return (
      <div >
        <h1 className='cover cover1'>💻Emoji Search💻</h1>
        <form className='cover'>
        <input type="text" name='search'
          value={search}
          onChange={onSearch}
         placeholder='Search'  className='input' />
       
          </form>
      </div>
    );
  }
}

export default SearchBar;