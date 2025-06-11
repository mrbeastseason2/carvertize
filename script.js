// Get DOM elements for navigation
const sidemenu = document.getElementById("sidemenu"),
    navOpen = document.getElementById("nav_open"),
    navClose = document.getElementById("nav_close"),
    overlay = document.getElementById("overlay"),
    body = document.body;

// Function to open the menu and handle overlay and scroll
function openmenu() {
    sidemenu.style.right = "0"; // Show the side menu
    if (overlay) overlay.style.display = "block"; // Show overlay
    body.classList.add('no-scroll'); // Prevent scrolling
}

// Function to close the menu and handle overlay and scroll
function closemenu() {
    sidemenu.style.right = "-250px"; // Hide the side menu
    if (overlay) overlay.style.display = "none"; // Hide overlay
    body.classList.remove('no-scroll'); // Restore scrolling
}

// Event listeners
if (navOpen) navOpen.addEventListener('click', openmenu);
if (navClose) navClose.addEventListener('click', closemenu);
if (overlay) overlay.addEventListener('click', closemenu);




const contactForm = document.getElementById('applicationForm'),
      contactMessage = document.getElementById('contact-message'),
      application = document.getElementById('form_container');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ea2op0e', 'template_7g9o502', contactForm, '7U90LQQDhI-WAWO8I')
    .then(() => {
        application.style.display = 'none';  // Hide the form
        contactMessage.style.display = 'block'; // Show the message

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.textContent = ''; // Clear the message text
        }, 5000);

        contactForm.reset();
    })
    .catch((error) => {
        contactMessage.style.display = 'block'; // Show the message
        contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send application. Please try again later.</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = ''; // Clear the message text
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);