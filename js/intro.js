// Make the key on the intro page draggable

let newX = 0, newY = 0, startX = 0, startY = 0

const key = document.getElementById('decoy')

console.log({key})

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

}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}