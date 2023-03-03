import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import { GalleryStyled } from './ImageGalleryStyled'

export default class ImageGallary extends Component {
  state = {
        data: null,
        loading: false,
        name: ''
    }
    
  // componentDidMount() {
  //   this.setState({data: this.props.data})
  // }
  
  galleryItemClick =(e) => {
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
            {this.state.data !== null && <GalleryStyled onClick={this.galleryItemClick}>
              <ImageGalleryItem items={this.props.data} />
            </GalleryStyled>}
                    </div>
    )
    }
}

