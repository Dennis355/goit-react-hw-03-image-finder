import { Component } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';

import { HiSearch } from 'react-icons/hi';

export class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handlerNameChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handlerSubmit = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('Please enter a valid search value');
      return;
    }

    this.props.onSubmit(this.state.searchName);

    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={this.handlerSubmit}>
          <button type="submit" className={css.searchorm_button}>
            <HiSearch />
            <span className={css.searchorm_button_label}> Search</span>
          </button>

          <input
            className={css.searchorm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handlerNameChange}
            value={this.state.searchName}
          />
        </form>
      </header>
    );
  }
}
