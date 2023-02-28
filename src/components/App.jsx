import Searchbar from './Searchbar/Searchbar'
import React , { Component} from 'react'
import GlobalStyle from 'globalStyled'
import { AppStyled } from './AppStyled'
import axios from 'axios'
import ImageGallary from './ImageGallery/ImageGallery'


class App extends Component {
  state = {
    page: 1,
    perPage: 12,
    name: '',
    data: null
  }


  // componentDidMount() {
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name) {
      console.log(this.state.name);
      console.log(prevState.name);
      // const BASEURL = 'https://pixabay.com/api/';
      // if (this.state.name.length === 0) {
      //   return;
      // }
      // try {
      //   const response = await axios.get(`${BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${this.state.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.page}`);
      //   const responseData = await response.data.hits;
      //   console.log(responseData)
      //   this.setState({
      //     data: responseData
      //   })
    
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }



  onSubmit = (data)  => {
    this.setState({name: data.name})
}

  render() {
    return (
      <AppStyled>
        <GlobalStyle />
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.data !== null && <ImageGallary items={this.state.data} />}
      </AppStyled>
    );


  }
};

export default App;