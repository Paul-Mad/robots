import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          name="searchfield"
          value={this.props.state.searchfield}
          onChange={(e) => this.props.onSearchChange(e)}
        />
      </div>
    );
  }
}

export default SearchBox;
