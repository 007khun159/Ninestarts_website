// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Get all the objects
const objects = document.querySelectorAll('.object');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const target = document.querySelector(link.getAttribute('href'));
    
    // Show the corresponding object and hide other objects
    objects.forEach(object => {
      if (object === target) {
        object.style.display = 'block';
      } else {
        object.style.display = 'none';
      }
    });
  });
});
