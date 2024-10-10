// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Contact Form Validation
  const contactForm = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Simple validation check
    let isValid = true;
    
    if (nameInput.value.trim() === '') {
      alert('Please enter your name');
      isValid = false;
    }
    
    if (emailInput.value.trim() === '') {
      alert('Please enter your email');
      isValid = false;
    }
    
    if (messageInput.value.trim() === '') {
      alert('Please enter your message');
      isValid = false;
    }
    
    if (isValid) {
      alert('Form submitted successfully!');
      // Here you can handle the form submission, such as sending it to a server
      contactForm.reset(); // Reset the form after submission
    }
  });
  