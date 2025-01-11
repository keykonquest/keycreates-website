// Make the key on the intro page draggable

let newX = 0, newY = 0, startX = 0, startY = 0

const key = document.getElementById('decoy');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

console.log({key})
console.log({viewportWidth})
console.log({viewportHeight})

key.addEventListener('dragstart', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('click', mouseUp)
}


function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    key.style.top = startY + 'px'
    key.style.left = startX + 'px'

    console.log({startX, startY})

    if ((Math.round((viewportWidth / 2)) + 20) > startX 
        && startX > (Math.round((viewportWidth / 2)) - 100)
        && (Math.round((viewportWidth / 2)) + 100) > startY 
        && startY > (Math.round((viewportWidth / 2)) - 80)) {
        window.location.href = "home.html";
    }
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

//  && startY == (Math.round(viewportHeight / 2) - 80)