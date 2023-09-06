// Get the header element
const header = document.querySelector('header');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Check the scroll position
  if (window.scrollY > 100) {
    // If scrolled down more than 100 pixels, change the header background color
    header.style.backgroundColor = 'rgba(95, 86, 87, 0.9)';
  } else {
    // If scrolled back to the top, reset the header background color
    header.style.backgroundColor = 'transparent';
  }
});
