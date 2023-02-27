import Searchbar from './Searchbar/Searchbar'
import React , { Component} from 'react'
// import { AppStyled } from './AppStyled'
import GlobalStyle from 'globalStyled'

class App extends Component {
  state = {
    
  }

  onSubmit = (data)  => {
    console.log('dasadsd')
    console.log(data)
}

  render() {
    return (
      <div>
        <GlobalStyle />
  <Searchbar onSubmit ={this.onSubmit} />
      </div>
    );


  }
};

export default App;