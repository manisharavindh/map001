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

const positionElement = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  cursor.style.transform = `translate3d(${mouseX - cursor.offsetWidth / 2}px, ${mouseY - cursor.offsetHeight / 2}px, 0)`;
};

window.addEventListener('mousemove', positionElement);
