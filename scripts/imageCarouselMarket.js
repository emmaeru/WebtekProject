
/*This JavaScript file will make the image cards rotate like a carousel.*/

const im = ["images/iconEgg.png", "images/iconBanana.png", "images/iconHen.png", "images/iconCarrot.png","images/iconSeller.png","images/iconBread.png","images/iconCash.png","images/iconFish.png","images/iconApple.png","images/iconDog.png","images/iconBlue.png"];
let prev = document.getElementById("previousImg");
let curr = document.getElementById("currentImg");
let currDiv = document.getElementById("currDiv");
let next = document.getElementById("nextImg");
const nextButtonCarousel = document.getElementById("nextButton"); // endret fra nextButton til nextButtonCarousel
let counterCarousel = 0;                                          // er endret fra "counter" til "counterCarousel"
/*let counter2 = 0;*/

function imageCarousel(){
    
    //prev.style.visibility = "visible";
    prev.src = im[counterCarousel];
    curr.src = im[counterCarousel +1];
    next.src = im[counterCarousel +2];

    counterCarousel += 1;
    let imLength=im.length;

    if (counterCarousel == (imLength-2)){
      next.style.visibility = "hidden";
    }

    else if(counterCarousel==imLength-1){
      prev.style.display = "none";
      curr.style.display = "none";
      next.style.display = "none";
      currDiv.style.display = "none";
    }
}

nextButtonCarousel.addEventListener("click", imageCarousel);

/*nextButtonCarousel.addEventListener("click", imageCarousel2);*/
