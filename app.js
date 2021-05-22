const button = document.getElementById('button');
const container = document.getElementById('container');
const copyButton = document.getElementById('copy');
const input = document.getElementById('input-for-copy');
let tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}});

// gsap animation
tl.paused(true);
tl.to('.container', {clipPath: 'circle(100%)'})

const randomColor = () => {
    let symbols = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    container.style.background = color;
    input.value = color;
    tl.restart()
    // copy event
    copyButton.addEventListener('click',() => {
        // document.getElementById('color').dataset.copy = color;
        input.select();
        input.setSelectionRange(0, 99999)
        document.execCommand("copy");
    })
};

// button event |
button.addEventListener('click', randomColor);