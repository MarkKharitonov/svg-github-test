const SVG_WIDTH = 3000;
const SVG_HEIGHT = 2000;
const MINIMAP_WIDTH = 196;
const MINIMAP_HEIGHT = 131;

let viewport = document.getElementById('viewport');
let minimap = document.getElementById('minimap');

function updateViewport() {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate viewport position and size in minimap coordinates
    const x = (scrollX / SVG_WIDTH) * MINIMAP_WIDTH;
    const y = (scrollY / SVG_HEIGHT) * MINIMAP_HEIGHT;
    const width = (windowWidth / SVG_WIDTH) * MINIMAP_WIDTH;
    const height = (windowHeight / SVG_HEIGHT) * MINIMAP_HEIGHT;

    viewport.style.left = x + 'px';
    viewport.style.top = y + 'px';
    viewport.style.width = width + 'px';
    viewport.style.height = height + 'px';
}

function handleMinimapClick(e) {
    const rect = minimap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert minimap coordinates to document coordinates
    const scrollX = (x / MINIMAP_WIDTH) * SVG_WIDTH;
    const scrollY = (y / MINIMAP_HEIGHT) * SVG_HEIGHT;

    window.scrollTo(scrollX, scrollY);
}

// Event listeners
window.addEventListener('scroll', updateViewport);
window.addEventListener('resize', updateViewport);
minimap.addEventListener('click', handleMinimapClick);

// Initial viewport update
updateViewport();