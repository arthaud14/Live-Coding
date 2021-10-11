let i = 0;
const images = ['img/image1.jpg','img/image2.jpg','img/image3.jpg',
'img/image4.jpg','img/image5.jpg','img/image6.jpg','img/image7.jpg','img/image8.jpg',
'img/image9.jpg',
];
let timer = 2000;

function changeImages() {
    document.diaporama.src = images[i];
    if(i < images.length -1) {
        i++;
    }
        else {
            i = 0;
        }
    setTimeout("changeImages()", timer);
    }
    window.onload = changeImages;
    
