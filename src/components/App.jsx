import React , { Component} from 'react'
import { AppStyled } from './AppStyled'
import GlobalStyle from 'globalStyled'
import Searchbar from './Searchbar/Searchbar'
import ImageGallary from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal'
import LoadMore from './Button/Button'


const askServer = new ImageGallary();

class App extends Component {
  state = {
    name: '',
    data: null,
    showModal: false,
    largeUrl: null,
    alt: null,
    loading: false,
    perPage: 12
  }
  
    toggleModal = () => this.setState(({showModal}) => ({
    showModal: !showModal
  }))
  

  modalItems = (dataFind) => {
    console.log(dataFind)
    this.setState({
      largeUrl: dataFind.largeImageURL,
      alt: dataFind.tags
  })
  }

  onSubmit = (data) => {
    this.setState({
      name: data.name})
    
  }

  loadMoreClick = (data) => {
      console.log(data)
    this.setState(prevState => ({
      perPage: prevState.perPage + Number(data.perPage)
    }))
  }
  
  componentDidUpdate(prevProps, prevState) {
        if (this.state.perPage !== prevState.perPage) {
          askServer.fetch();
     
    }
  }

  render() {
    return (
      <AppStyled>
        <GlobalStyle />
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallary name={this.state.name} toggleModal={this.toggleModal } modalItems= {this.modalItems} /> 
        {this.state.showModal && <Modal onClick={() => { this.toggleModal()}} src ={this.state.largeUrl} alt={this.state.alt}></Modal>}
        {this.state.data !== null && <LoadMore click={this.loadMoreClick} />}

      </AppStyled>
    );
  }
};

export default App;