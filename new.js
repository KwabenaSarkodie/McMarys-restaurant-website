// Show welcome popup when page loads
window.addEventListener('load', function() {
showPopup('Welcome to McMarys Restaurant! Experience the authentic taste of Ghana.');
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetSection = document.querySelector(targetId);


    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    
    // Scroll to section
    targetSection.scrollIntoView({ behavior: 'smooth' });
});


});

// Handle order form submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
e.preventDefault();


// Get form values
const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const dish = document.getElementById('dish').options[document.getElementById('dish').selectedIndex].text;
const quantity = document.getElementById('quantity').value;
const address = document.getElementById('address').value;

// Show thank you popup
showPopup('Thank you for choosing McMarys Restaurant! Your order has been received and will be delivered soon.');

// Reset form
this.reset();


});

// Popup functions
function showPopup(message) {
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');


popupMessage.textContent = message;
popup.style.display = 'block';


}

// Close popup when clicking the X
document.querySelector('.close-popup').addEventListener('click', function() {
document.getElementById('popup').style.display = 'none';
});

// Close popup when clicking outside the popup content
window.addEventListener('click', function(e) {
const popup = document.getElementById('popup');
if (e.target === popup) {
popup.style.display = 'none';
}
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');


let current = '';

sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
    }
});

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
    }
});


});