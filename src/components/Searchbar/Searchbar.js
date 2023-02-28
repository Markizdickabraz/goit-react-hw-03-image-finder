import React, { Component } from "react";
import { SearchForm, SearchbarBtn, SearchBtnLabel, SearchInput, SearchbarStyled } from "./searchbarStyled";


class Searchbar extends Component {
    state = {
        name: ''
    }
     
  handleChacge = e => {
      const {name, value} = e.currentTarget;
      this.setState({ [name]: value })
  }


  formSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      alert('Там цей скрока пуста!');
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({name: ''})
  }


    render() {
        return (
    <SearchbarStyled>
        <SearchForm onSubmit={this.formSubmit}>
    <SearchbarBtn type="submit">
      <SearchBtnLabel>Search</SearchBtnLabel>
    </SearchbarBtn>

    <SearchInput
        name="name"
       
        value={this.state.name}
        onChange = {this.handleChacge}
      type="text"
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchbarStyled>
        )
    }
}

export default Searchbar;