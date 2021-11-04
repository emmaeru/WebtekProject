let textBox = null;
let text = null;
let subtitleText = null;
let speakerBtn = null;

const seenObjects = {};
let totalObjects = 0;

function createTextBox() {
        
    if(textBox !== null) {               //hvis den eksisterer skal den ikke gjøre noe
        return;
    }

    textBox = document.createElement("div");

    textBox.style.position = "absolute";

    textBox.style.minWidth = "1px";
    textBox.style.padding = "6px 12px";
    textBox.style.backgroundColor = "white";
    textBox.style.boxShadow = "1px 2px 0px 0px rgba(0,0,0,0.3)";
    textBox.style.borderRadius = "6px"

    // Add text
    text = document.createElement("p")
    text.style.textAlign = "center";
    text.style.fontWeight = 600;
    text.style.textTransform = "uppercase"; 
    textBox.appendChild(text)

    subtitleText = document.createElement("p")
  
    subtitleText.style.textAlign = "center";
    subtitleText.style.fontSize = "12px";
    subtitleText.style.textTransform = "lowercase"; 
    textBox.appendChild(subtitleText)

    speakerBtn = document.createElement("img");
    speakerBtn.style.position = "absolute";
    speakerBtn.style.bottom = "4px";
    speakerBtn.style.left = "4px";
    speakerBtn.src = "image.svg";
    speakerBtn.width = 22;
    speakerBtn.height = 22;

    textBox.style.display = "none"; // Ikke vis tekstboks

    textBox.appendChild(speakerBtn);

    document.body.appendChild(textBox);

}

function enableTextBox(enable, position, title, subtitle, bx, by) {
    if(textBox === null) {
        return;
    }

    // Vis eller ikke vis textboksen
    textBox.style.display = enable ? "block" : "none";

    if(position) {
        textBox.style.top = (position.top - position.height*1.5 + by) + "px";
        textBox.style.left = (position.left + bx) + "px";
    }

    text.innerHTML = title || '';
    subtitleText.innerHTML = subtitle || '';

    setTimeout(() => {
        if(enable) {
            window.addEventListener("mousedown", removeTextBoxOnClick);
        } else {
            window.removeEventListener("mousedown", removeTextBoxOnClick);
        }
    })
}

function removeTextBoxOnClick(event) {
    if(textBox === null || textBox.style.display === "none") {
        return;
    }
    
    // Hvis jeg trykker utenfor boksen, display = none
    let didIClickInsideBox = textBox.contains(event.target);
    if(!didIClickInsideBox) {
        enableTextBox(false);
    }
};

function updateCounterText() {
    const counterTextElemenet = document.getElementById("counter");

    counterTextElemenet.innerText = `${Object.keys(seenObjects).length}/${totalObjects}`;
}

function getImageFromFile() {
    return fetch('image.svg', {
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

function addHoverEffectToElement(nameId, {scale = 2, tx = -25, ty = -75, speed = 3, title = "Dog", subtitle = "apple", bx = 0, by = 0}) {
    totalObjects += 1;
    
    const element = document.getElementById(nameId)

    let _title = title;
    let _subtitle = subtitle;
    
    const position = element.getBoundingClientRect()
    
    element.addEventListener('mousedown', function() {
        
        console.log(_title, _subtitle)
        enableTextBox(true, position, _title, _subtitle, bx, by);

        seenObjects[nameId] = true;     //nameid er sett
        updateCounterText();
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

getImageFromFile()
.then(() => {

    addHoverEffectToElement('Dog', {
        scale: 1.5,
        tx: -12.5,
        ty: -42,
        speed: 0.5
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
        speed:  0.5
    });
    addHoverEffectToElement('Apple', {
        scale: 2, 
        tx: -32, 
        ty: -72, 
        speed:  0.5
    });
    addHoverEffectToElement('Banana', {
        scale: 1.5, 
        tx: -23, 
        ty: -35, 
        speed:  0.5
    });
/*    addHoverEffectToElement('Meat', {
        scale: 2, 
        tx: -72, 
        ty: -72, 
        speed:  0.5
    }); */
    addHoverEffectToElement('Fish', {
        scale: 2, 
        tx: -64, 
        ty: -71, 
        speed:  0.5
    });
    addHoverEffectToElement('Egg', {
        scale: 4, 
        tx: -221.5, 
        ty: -270, 
        speed:  0.5
    });
    addHoverEffectToElement('Worker', {
        scale: 1.5, 
        tx: -20, 
        ty: -20, 
        speed:  0.5
    });
    addHoverEffectToElement('Bread', {
        scale: 1.5, 
        tx: -11, 
        ty: -34, 
        speed:  0.5
    });

    addHoverEffectToElement('Money', {
        scale: 2.5, 
        tx: -124, 
        ty: -93, 
        speed:  0.5
    });

    addOverflowVisible("image");

    createTextBox();

    updateCounterText()

})



