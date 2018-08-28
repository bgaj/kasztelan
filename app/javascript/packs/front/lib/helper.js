import Background from 'images/placeholder.jpg'

export const img_url = (img) => {
    if(img){
        return img
    }
    else{
        return Background
    }
}