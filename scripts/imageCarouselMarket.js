

/*This JavaScript file will make the image cards rotate like a carousel.*/

const im = ["images/iconEgg.png", "images/iconBanana.png", "images/iconHen.png", "images/iconCarrot.png","images/iconSeller.png","images/iconBread.png","images/iconCash.png","images/iconFish.png","images/iconApple.png","images/iconDog.png"];
let prev = document.getElementById("previous");
let curr = document.getElementById("current");
let next = document.getElementById("next");
const nextButtonCarousel = document.getElementById("nextButton"); // endret fra nextButton til nextButtonCarousel
let counterCarousel = 0;                                          // er endret fra "counter" til "counterCarousel"
/*let counter2 = 0;*/

/*Implementerer canvaene mine.
let previousCanvas = document.getElementById("previousC");
/*let currentCanvas = document.getElementById("currentC");
let nestCanvas = document.getElementById("nextC");
let ctx = previousCanvas.getContext("2d");
let ctx2 = currentCanvas.getContext("2d");
let ctx3 = nextCanvas.getContext("2d");

function imageCarousel2(){
    ctx.drawImage(im[counterCarousel], 0, 0);
    ctx2.drawImage(im[counterCarousel +1], 0, 0);
    ctx3.drawImage(im[counterCarousel +2], 0, 0);
    counter2 += 1;
  }*/

/*const img = document.getElementById("eeveelutions");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");*/

/*img.onload = function () {
  img.crossOrigin = "anonymous";
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (i = 0; i < imgData.data.length; i += 4) {
    let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
    let colour = 0;
    if (count > 383) colour = 255;
    
    imgData.data[i] = colour;
    imgData.data[i + 1] = colour;
    imgData.data[i + 2] = colour;
    imgData.data[i + 3] = 255;
  }

}*/


    


function imageCarousel(){
    
    prev.style.visibility = "visible";
    prev.src = im[counterCarousel];
    curr.src = im[counterCarousel +1];
    next.src = im[counterCarousel +2];

    counterCarousel += 1;
    let imLength=im.length;

    if (counterCarousel == (imLength-1)){
      next.style.visibility = "hidden";
    }
    else if(counterCarousel==imLength){
      prev.style.display = "none";
      curr.style.display = "none";
      next.style.display = "none";
       
    }
     
}


nextButtonCarousel.addEventListener("click", imageCarousel);

/*nextButtonCarousel.addEventListener("click", imageCarousel2);*/