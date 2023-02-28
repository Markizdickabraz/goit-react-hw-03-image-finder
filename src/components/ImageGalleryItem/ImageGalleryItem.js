
export default function ImageGalleryItem({id , tag, url}) {
;
    return (
        <ImageGalleryItem key = {id}> 
            <img src= {url} alt= {tag} />
                </ImageGalleryItem>
        )
}




