let cls = document.querySelectorAll('rect')
let lights = []

let addrectangles = false
cls.forEach(e => {
    if (e.classList[1] === 'end')
        addrectangles = false;

    if (addrectangles === true && e.classList[0] != 'cls-26')
        lights.push(e)

    if (e.classList[1] === 'start')
        addrectangles = true;
})

lights.forEach(e => {
    e.style.display = 'none';
})

setInterval(_ => {
    let light = lights[Math.floor(Math.random() * Math.floor(lights.length-1))]
    if (light.style.display == 'none' ) light.style.display = 'block'
    else light.style.display = 'none'
}, 100);