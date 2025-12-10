import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onFilter = (event) => {
    this.setState({ type: event.target.value });
  }

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);

    if (this.state.type === "All") {
      return matchesSearch;
    }

    return matchesSearch && item.type === this.state.type;
  }

  render() {
    return (
      <div className="filter-list">

        <select onChange={this.onFilter}>
          <option value="All">All</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetables</option>
        </select>

        <input 
          type="text" 
          placeholder="Search" 
          onChange={this.onSearch} 
        />

        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
