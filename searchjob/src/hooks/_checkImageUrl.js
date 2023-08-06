export const checkImaheUrl = (url)=>{
    if(!url) return false
    else {
        const pattern = new RegExp('^*.(png|jpeg|jpg|bmp|gif|webp)$','i');
        return pattern.test(url)
    }
}