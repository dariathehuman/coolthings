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
    const figure = document.createElement('span');

    let size = Math.random() * 70;

    figure.style.width = 30 + size + 'px';
    figure.style.height = 30 + size + 'px';

    figure.style.top = Math.random() * window.innerHeight + 'px';
    figure.style.left = Math.random() * window.innerWidth + 'px';

    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    figure.style.background = bgColor;

    section.appendChild(figure);

    setTimeout(() => {
        figure.remove();
    }, 7000)
}

setInterval(createSquare, 150);
