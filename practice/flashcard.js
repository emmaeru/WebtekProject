
//THIS FILE SHOULD NOT BE IN THIS FOLDER!!!!!!
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
    
//if flashmodal clicked gi verdi true ->display none


























    

//GOOD help here maybe????
//https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page
    

/*MY original. don't touch!!


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