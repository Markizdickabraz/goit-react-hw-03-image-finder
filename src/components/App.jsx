import Searchbar from './Searchbar/Searchbar'
import React , { Component} from 'react'
import GlobalStyle from 'globalStyled'
import { AppStyled } from './AppStyled'
import ImageGallary from './ImageGallery/ImageGallery'


class App extends Component {
  state = {
    name: '',
    data: null
  }

  componentDidMount() {
  console.log('mount', this.state.name)
}

  componentDidUpdate(prevProps, prevState) {
  console.log('update' , this.state.name)
}


  onSubmit = (data) => {
    this.setState({name: data.name})
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