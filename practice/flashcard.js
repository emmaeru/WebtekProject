
//THIS FILE SHOULD NOT BE IN THIS FOLDER!!!!!!
function getImageFromFile() {
    return fetch("image.svg", {
        method: 'GET',
        headers: {
            'Content-Type': 'image/svg+xml'
        }
    }).then((res) => {
        return res.text()
    })
    .then((imageText) => {
       const elem = document.getElementById("app");

       const imageElement = document.createElement("image");
       imageElement.innerHTML = imageText;

       elem.appendChild(imageElement);
    })
}

function addHoverEffectToElement(nameId, scale = 2, tx = -25, ty = -75, speed = 1, title = "Hund", subtitle = "apple") {
    const element = document.getElementById(nameId)

    let textBox = null;

    const position = element.getBoundingClientRect()

    element.addEventListener('mouseover', function() {
        element.style = `transform: translate(${tx}%, ${ty}%) scale(${scale}); transition: all ${speed}s ease-out;`;

        textBox = document.createElement("div");

        console.log()

        textBox.style.position = "absolute";
        textBox.style.top = (position.top - position.height*1.5) + "px";
        textBox.style.left = (position.left) + "px";

        textBox.style.minWidth = "100px";
        textBox.style.padding = "6px 12px";
        textBox.style.backgroundColor = "white";
        textBox.style.boxShadow = "1px 2px 0px 0px rgba(0,0,0,0.3)";
        textBox.style.borderRadius = "6px"

        // Add text
        let text = document.createElement("p")
        text.innerHTML = title;
        text.style.textAlign = "center";
        text.style.fontWeight = 600;
        text.style.textTransform = "uppercase"; 
        textBox.appendChild(text)

        let subtitleText = document.createElement("p")
        subtitleText.innerHTML = subtitle;
        subtitleText.style.textAlign = "center";
        subtitleText.style.fontSize = "12px";
        subtitleText.style.textTransform = "lowercase"; 
        textBox.appendChild(subtitleText)

        let speakerBtn = document.createElement("img");
        speakerBtn.style.position = "absolute";
        speakerBtn.style.bottom = "4px";
        speakerBtn.style.left = "4px";
        speakerBtn.src = "image.svg";
        speakerBtn.width = 22;
        speakerBtn.height = 22;
        speakerBtn.onclick = () => {
            // TODO: Play sound :D
            console.log("Playing sound");
        }
        textBox.appendChild(speakerBtn);

        document.body.appendChild(textBox);

    })

    element.addEventListener('mouseout', function() {
        element.style = `transform: none; transition: all ${speed}s ease-out;`;

        document.body.removeChild(textBox);
    })
}

function addOverflowVisible(nameId) {
    const element = document.getElementById(nameId);
    element.style = "overflow: visible";
}

getImageFromFile()
.then(() => {

    addHoverEffectToElement('Layer_2', scale=1.5, tx=-12.5, ty=-42, speed = 0.5);

    addOverflowVisible("image");

})



/*
    var flashModal = document.getElementById("flashID");     // Get the flashcard
    var object = document.getElementById("flashObject");
    var isClicked = false;

    object.onclick = function() {      // show flascard when object is clicked
        flashModal.style.display = "block";
        isClicked = true;
        console.log("open"); //test
    }

//CLOSE doesn't work:((((((((     FIX!!
document.addEventListener("click", function(event) {
    console.log("close"); //test
    if(isClicked == true) {
        if(event.target.closest(".flashModal")) {
            flashModal.style.display = "none";
            isClicked == false;
        }
    }});
    
   

//GOOD help here maybe????
//https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page
    

MY original. don't touch!!


//THIS FILE SHOULD NOT BE IN THIS FOLDER!!!!!!
    var flashModal = document.getElementById("flashID");     // Get the flashcard
    var object = document.getElementById("flashObject");
    
    object.onclick = function() {      // show flascard when object is clicked
        flashModal.style.display = "block";
    }

//CLOSE doesn't work:((((((((            FIX!!
window.addEventListener("click", function(event) {
    if (event.target == flashModal) {
        flashModal.style.display = "none";
    }});


<!--FLASHCARDS!!!!!!!!-->

<!--FLASHCARD: DOG-->
<a id="flashObject"> <!--clickable object -->
    <img id="imageresource" src="marketObject1.png" style="width:30%;max-width:200px" class="zoom">
</a>

<div id="flashID" class="flashModal"> <!--CONTENT FLASHCARDS:-->
    <div class="flashcard">        
        <h4>PERRO </h4>
        <img src="speakerIcon.png" style="width:30px"> 
        <p>dog </p>
    </div>
</div>


<!--FLASHCARD: APPLE-->
<a id="flashObject"> <!--clickable object -->
    <img id="imageresource" src="marketObject2.png" style="width:30%;max-width:200px" class="zoom">
</a>

<div id="flashID" class="flashModal"> <!--CONTENT FLASHCARDS:-->
    <div class="flashcard">        
        <h4>MANZANA </h4>
        <img src="speakerIcon.png" style="width:30px"> 
        <p>apple</p>
    </div>
</div>

*/