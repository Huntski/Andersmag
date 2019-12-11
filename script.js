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
    e.style.display = 'none';
})

setInterval(_ => {
    let light = lights[Math.floor(Math.random() * Math.floor(lights.length-1))]
    console.log(light.style.display, light)
    if (light.style.display == 'none' ) light.style.display = 'block'
    else light.style.display = 'none'
}, 200);