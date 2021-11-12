/* CREATES AND DISPLAYS FLASHCARDS WITH TRANSLATED NOUNS IN PRACTICE GAMIFICATION */

let imageEmbed = null;
let textBox = null;
let text = null;
let titleText = null;
let subtitleText = null;
let speakerBtn = null;
let imageElement = null;
let selectedElement = null;
let selectedOptions = null;

const seenObjects = {};
let totalObjects = 0;

const app = document.getElementById('app');

function createTextBox() {
        
    if(textBox !== null) { // IF THE TEXTBOX ALREADY EXISTS, DO NOTHING
        return;
    }

    textBox = document.createElement("div");

    textBox.style.position = "absolute";

    textBox.style.minWidth = '8vw';
    textBox.style.minHeight = '3vw';
    textBox.style.padding = "16px 12px";
    textBox.style.backgroundColor = "white";
    textBox.style.boxShadow = "1px 2px 0px 0px rgba(0,0,0,0.3)";
    textBox.style.borderRadius = "6px"

    // ADDS TEXT FO TEXTBOX
    titleText = document.createElement("p")
    titleText.style.textAlign = "center";
    titleText.style.fontWeight = 600;
    titleText.style.fontSize = '1.2vw';
    titleText.style.textTransform = "uppercase"; 
    titleText.style.margin = "0"; 
    textBox.appendChild(titleText)
    
    
    subtitleText = document.createElement("p")
    
    subtitleText.style.textAlign = "center";
    subtitleText.style.fontSize = '0.9vw';
    subtitleText.style.color = "grey";
    subtitleText.style.textTransform = "lowercase"; 
    subtitleText.style.margin = "0"; 
    textBox.appendChild(subtitleText)

    speakerBtn = document.createElement("img");
    speakerBtn.style.position = "absolute";
    speakerBtn.style.bottom = "4px";
    speakerBtn.style.left = "4px";
    speakerBtn.src = "images/sound.png";
    speakerBtn.width = 10;
    speakerBtn.height = 10;

    textBox.style.display = "none";  // HIDE TEXTBOX

    textBox.style.transition = 'all 1s ease-out';

    textBox.appendChild(speakerBtn);

    // UPDATES THE POSITION OF THE TEXTBOX WHEN VIEWPORT DIMENSIONS CHANGE
    app.appendChild(textBox);
    window.addEventListener("resize", updateTextboxPosition);
}

function enableTextBox(enable) {
    if(textBox === null) {
        return;
    }

    // DECIDES WHEN THE FLASHCARD / TEXTBOX IS VISIBLE AND NOT
    textBox.style.display = enable ? "block" : "none";

    const { title = '', subtitle = ''} = selectedOptions;

    titleText.innerHTML = title || '';
    subtitleText.innerHTML = subtitle || '';

    speakerBtn.onclick = () => {
        if(selectedOptions.audio) {
            let audio = new Audio(selectedOptions.audio);
            audio.play();
        }
    }

    setTimeout(() => {
        if(enable) {
            window.addEventListener("mousedown", removeTextBoxOnClick);
        } else {
            window.removeEventListener("mousedown", removeTextBoxOnClick);
        }
    })
}

function setTextBoxPosition(position, textBoxPosition, options) {
    const imagePosition = imageEmbed.getBoundingClientRect();

    textBox.style.top = (position.top + imagePosition.top - (textBoxPosition.height || position.height)) + "px";
    textBox.style.left = (position.left + imagePosition.left) + "px";
}

function updateTextboxPosition() {                      
    if(textBox === null || selectedElement === null) {                          // SAFETY CHECK
        return;
    }

    let position = selectedElement.getBoundingClientRect();                     // FETCH ELEMENT
    let positionTextBox = textBox.getBoundingClientRect();

    setTextBoxPosition(position, positionTextBox, selectedOptions);
}                                  

function removeTextBoxOnClick(event) {
    if(textBox === null || textBox.style.display === "none") {
        return;
    }
    
    // IF CLICKED OUTSIDE BOX, DISPLAY: NONE
    let didIClickInsideBox = textBox.contains(event.target);
    if(!didIClickInsideBox) {
        enableTextBox(false);
    }
};

function updateCounterText() {
    const counterTextElemenet = document.getElementById("counter");

    const countSeen = Object.keys(seenObjects).length;

    counterTextElemenet.innerText = `${countSeen}/${totalObjects}`;

    // WHEN ALL OBJECTS HAVE BEEN CLICKED, DISPLAY TEST-BUTTON
    if(countSeen >= totalObjects) {
        document.getElementById('toTestMarket').style.display = "block";
    }
}

function addHoverEffectToElement(nameId, options) {
    const {scale = 2, tx = -25, ty = -75, speed = 3, title = "HELLO :D", subtitle = "Its me, mario! :D", bx = '', by = '', audio = undefined} = options;

    totalObjects += 1;
    
    const element = imageEmbed.getSVGDocument().getElementById(nameId);

    element.addEventListener('mousedown', function() {

        seenObjects[nameId] = true;     // NAMEID HAS BEEN DISPLAYED
        selectedElement = element;
        selectedOptions = options;
        updateCounterText();
        updateTextboxPosition();
        setTimeout(() => {
            enableTextBox(true);
            updateTextboxPosition();
        }, 100);

    });

    element.addEventListener('mouseover', function() {
        element.style = `transform: translate(${tx}%, ${ty}%) scale(${scale}); transition: all ${speed}s ease-out;`;
    })

    element.addEventListener('mouseout', function() {
        element.style = `transform: none; transition: all ${speed}s ease-out;`;

    })
}

function addOverflowVisible(nameId) {
    const element = document.getElementById(nameId);
    element.style = "overflow: visible";
}

// EACH ELEMENT HAS UNIQUE COORDINATES AS THEY ARE FETCHED FROM DIFFERENT IDS IN SVG-FILE
imageEmbed = document.getElementById('imageMarket');
imageEmbed.addEventListener('load', () => {

    addHoverEffectToElement('Dog', {
        scale: 1.5,
        tx: -12.5,
        ty: -42,
        speed: 0.5,
        title: 'perro',
        subtitle: 'dog',
        by: -400,
        bx: -30,
        
    });
    addHoverEffectToElement('Chicken', {
        scale: 1.5, 
        tx: -34, 
        ty: -43, 
        speed:  0.5, 
        title: 'POLLO', 
        subtitle: 'chicken',
        by: -42,
        bx: -30,
    });
    addHoverEffectToElement('Carrot', {
        scale: 2, 
        tx: -40, 
        ty: -70, 
        speed:  0.5,
        title: 'zanahoria', 
        subtitle: 'carrot',
        by: -42,
        bx: -30,

    });
    addHoverEffectToElement('Apple', {
        scale: 2, 
        tx: -32, 
        ty: -72, 
        speed:  0.5,
        title: 'MANZANA',
        subtitle: 'apple',
    });
    addHoverEffectToElement('Banana', {
        scale: 1.5, 
        tx: -23, 
        ty: -35, 
        speed:  0.5,
        title: 'PLATANO',
        subtitle: 'banana',
    });
    
    addHoverEffectToElement('Fish', {
        scale: 2, 
        tx: -64, 
        ty: -71, 
        speed:  0.5,
        title: 'PEZ',
        subtitle: 'fish',

    });
    addHoverEffectToElement('Egg', {
        scale: 4, 
        tx: -221.5, 
        ty: -270, 
        speed:  0.5,
        title: 'HUEVO',
        subtitle: 'egg',

    });
    addHoverEffectToElement('Worker', {
        scale: 1.5, 
        tx: -20, 
        ty: -20, 
        speed:  0.5,
        title: 'VENDEDORA',
        subtitle: 'vendor',

    });
    addHoverEffectToElement('Bread', {
        scale: 1.5, 
        tx: -11, 
        ty: -34, 
        speed:  0.5,
        title: 'PAN',
        subtitle: 'bread',

        
    });

    addHoverEffectToElement('Money', {
        scale: 2.5, 
        tx: -124, 
        ty: -93, 
        speed:  0.5,
        title: 'DINERO',
        subtitle: 'money',

    });

    addOverflowVisible("imageMarket");

    createTextBox();

    updateCounterText()


});