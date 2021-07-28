console.log("test");
const circle = document.getElementById("circle");
const dot = document.getElementById("dot");
let x = 100;
let y = 20;



window.document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    //move the cursor
    circle.style.transform = `translate(${x - 15 + 2.5}px, ${y - 15 + 2.5}px)`;
    dot.style.transform =  `translate(${x}px, ${y}px)`;
})
