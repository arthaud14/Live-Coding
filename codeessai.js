const images = ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg'];

let i = 0;
let timer = 2000;

function changeImages() {
    document.diaporama.src = images[i]
    if(i < images.length -1) {
        i++;
    }
    else{
        i = 0;
    }
    setTimeout (changeImages, timer)
}    
    changeImages();