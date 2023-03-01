import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import { GalleryStyled } from './ImageGalleryStyled'
import LoadMore from '../Button/Button'
import axios from 'axios'
import Loader from 'components/Loader/Loader'


class ImageGallary extends Component {
    state = {
        page: 1,
        perPage: 12,
      data: null,
        loading: false
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
    if (this.state.perPage !== prevState.perPage) {
      
      this.fetch()
     
    }
  }

  loadMoreClick = (data) => {
    this.setState(prevState => ({
      perPage: prevState.perPage + Number(data.perPage)
    }))
  }

    render() {
        return (
            <div>
            <GalleryStyled>
                {this.state.data !== null &&  <ImageGalleryItem items ={this.state.data} />}
            </GalleryStyled>
            {this.state.loading && <Loader /> }
            {this.state.data !== null && <LoadMore click={this.loadMoreClick} />}
            </div>
    )
    }
}

export default ImageGallary;