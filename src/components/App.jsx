import React , { Component} from 'react'
import { AppStyled } from './AppStyled'
import GlobalStyle from 'globalStyled'
import Searchbar from './Searchbar/Searchbar'
import ImageGallary from './ImageGallery/ImageGallery'

class App extends Component {
  state = {
    name: '',
    data: null
  }
  
  onSubmit = (data) => {
    this.setState({
      name: data.name})
    
  }
  
  render() {
    return (
      <AppStyled>
        <GlobalStyle />
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallary name={this.state.name} />  
          
      </AppStyled>
    );
  }
};

export default App;