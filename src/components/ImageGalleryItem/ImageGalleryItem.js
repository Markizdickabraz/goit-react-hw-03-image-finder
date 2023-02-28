import { GalleryImageStyled, GalleryItemStyled } from "./ImageGalleryItemsStyled";

export default function ImageGalleryItem({items}) {

    return (
        items.map(item => (
        <GalleryItemStyled key ={item.id}>
            <GalleryImageStyled src={item.webformatURL} alt={item.tags} />
        </GalleryItemStyled>
        ))
        )
}




