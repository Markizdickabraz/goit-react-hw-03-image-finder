import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallary({ items }) {
    console.log(items)
    return (
        <ul className="gallery">
           {items.map(item => (
           <ImageGalleryItem key = {item.id} tag = {item.tags} url ={item.webformatURL}> </ImageGalleryItem>
            ))}
</ul>
    )
}

