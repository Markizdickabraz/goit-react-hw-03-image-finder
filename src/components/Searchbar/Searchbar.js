import React, { Component } from "react";
import { SearchForm } from "./searchbarStyled";

class Searchbar extends Component {
    state = {
        page: 1,
        perPage: 1,
        name: ''
    }
     
  handleChacge = e => {
      const {name, value} = e.currentTarget;
      this.setState({ [name]: value })
  }


  formSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
    //   this.reset();
  }
    
//     reset = () => {
//     this.setState({name : ''})
// }

    render() {
        return (
    <header className="searchbar">
        <SearchForm onSubmit={this.formSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
        name="name"
        className="input"
        value={this.state.name}
        onChange = {this.handleChacge}
      type="text"
      placeholder="Search images and photos"
    />
  </SearchForm>
</header>
        )
    }
}

export default Searchbar;