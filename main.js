const colors = [
    '#FA8072',
    '#9370DB',
    '#40E0D0',
    '#8B0000',
    '#7FFF00',
    '#FF1493',
    '#1E90FF'
];

function createSquare() {
    const section = document.querySelector('section');
    const square = document.createElement('span');

    let size = Math.random() * 70;

    square.style.width = 30 + size + 'px';
    square.style.height = 30 + size + 'px';

    square.style.top = Math.random() * window.innerHeight + 'px';
    square.style.left = Math.random() * window.innerWidth + 'px';

    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bgColor;

    section.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 7000)
}

setInterval(createSquare, 150);
