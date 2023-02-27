import Searchbar from './Searchbar/Searchbar'
import React , { Component} from 'react'
import GlobalStyle from 'globalStyled'
import { AppStyled } from './AppStyled'

class App extends Component {
  state = {
    
  }

  onSubmit = (data)  => {
    console.log('dasadsd')
    console.log(data)
}

  render() {
    return (
      <AppStyled>
        <GlobalStyle />
  <Searchbar onSubmit ={this.onSubmit} />
      </AppStyled>
    );


  }
};

export default App;