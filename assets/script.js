//* Loading Screen
const frames = ['—', '\\', '|', '/'];
let currentFrame = 0;
const spinner = document.getElementById('spinner');
function animate() {
    spinner.textContent = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
}
const animationInterval = setInterval(animate, 100);
setTimeout(() => {
    const loadingContainer = document.querySelector('.loading-container');
    loadingContainer.classList.add('close')
    setTimeout(() => {
        loadingContainer.remove();
        clearInterval(animationInterval);
    }, 500);
}, 2000);

//* Cursor 
const cursor = document.querySelector('.cursor');
const cursorHoverElements = document.querySelectorAll('.cursor-hover');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    checkHoverElements();
    
    requestAnimationFrame(animateCursor);
}

function checkHoverElements() {
    let isHovering = false;
    
    cursorHoverElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (cursorX >= rect.left && cursorX <= rect.right && 
            cursorY >= rect.top && cursorY <= rect.bottom) {
            isHovering = true;
        }
    });
    
    if (isHovering) {
        cursor.classList.add('hover');
    } else {
        cursor.classList.remove('hover');
    }
}

animateCursor();

document.body.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

if (isMobile) {
    cursor.style.display = 'none';
} else {
    cursor.style.opacity = '0';
}

if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    cursor.style.display = 'none';
}