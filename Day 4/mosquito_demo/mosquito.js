//*Function*

function addMosquito(){
    //Step 1:  Append the created mosquito to mosquito fly trap container
    mosquitoTrapElem.appendChild(createMosquito())
}

// Variables*
let mosquitoTrapElem = document.getElementById('mosquito-trap-container')

function createMosquito(){
    //Step 1: Create Element
    let mosquitoElem = document.createElement('img')

    //Step 2:  Set the src attribute to a image address
    mosquitoElem.setAttribute('src', './assets/mosquito.jpeg');
    mosquitoElem.setAttribute('width', '10%')

    mosquitoElem.className = "mosquito"

    //Step 3:  Randomize the top and left
    let x = window.innerWidth;
    let y = window.innerHeight;
    let left = Math.random() * x;
    let top = Math.random() * y;

    mosquitoElem.style.top = '${top}px'
    mosquitoElem.style.left = '${left)px'

    //Step 4:  Kill the mosquito
    mosquitoElem.addEventListener("click", removeMosquito)

    //Step 5: return the element
    return mosquitoElem;
}

function removeMosquito(){
    this.remove();
}
