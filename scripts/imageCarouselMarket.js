
/*This JavaScript file will make the image cards rotate like a carousel.*/

const newImage = {
    english:"egg", 
    spanish:"huevo", 
    img: (function() {
        var img = new Image();
        img.src = "images/iconEgg.png";
        return img;
      })()
    };
    
    
console.log("img src: %o", obj.img.src);