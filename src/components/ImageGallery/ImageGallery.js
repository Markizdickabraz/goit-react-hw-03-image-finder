import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import { GalleryStyled } from './ImageGalleryStyled'
import axios from 'axios'
import Loader from 'components/Loader/Loader'



class ImageGallary extends Component {
    state = {
        page: 1,
        perPage: 12,
        data: null,
        loading: false,
    }
    
  async fetch() {
    this.setState({
      loading: true
   })
      const BASEURL = 'https://pixabay.com/api/';
      try {
        const response = await axios.get(`${BASEURL}?key=32463298-aa2adc14f1416dd47ab6801d7&q=${this.props.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.page}`);
        const responseData = await response.data.hits;
        this.setState({
          data: responseData
        })
    
      } catch (error) {
        console.log(error);
      }
        this.setState({loading:false})
  }
  
  async componentDidUpdate(prevProps, prevState) {

    if (this.props.name !== prevProps.name) {
      this.setState({
        perPage: 12
      })
        this.fetch()
    }

  }

  


  galleryItemClick =(e) => {
    console.dir(e.target)
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    const dataFind = this.state.data.find(items => items.id === Number(e.target.id))
    this.props.modalItems(dataFind);
    this.props.toggleModal();

  }

    render() {
        return (
            <div>
            <GalleryStyled onClick={this.galleryItemClick}>
            {this.state.data !== null &&  <ImageGalleryItem items ={this.state.data} />}
            </GalleryStyled>
            {this.state.loading && <Loader /> }
            </div>
    )
    }
}

export default ImageGallary;