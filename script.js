let cls = document.querySelectorAll('rect')
let lights = []

let addrectangles = false
cls.forEach(e => {
    if (e.classList[1] === 'end')
        addrectangles = false;

    if (addrectangles === true)
        lights.push(e)

    if (e.classList[1] === 'start')
        addrectangles = true;
    
})

lights.forEach(e => {
    // e.style.display = 'none';
})