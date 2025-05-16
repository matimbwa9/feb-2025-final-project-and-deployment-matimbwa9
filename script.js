
// ========== Expand blog post content ========== //
document.addEventListener('DOMContentLoaded', () => {
  const blogPosts = [
    { buttonText: 'Read More', elementId: 'fullArticle1' },
    { buttonText: 'Read More', elementId: 'fullArticle2' },
    { buttonText: 'Read More', elementId: 'fullArticle3' }
  ];

  blogPosts.forEach((post, index) => {
    const article = document.getElementById(post.elementId);
    if (article) {
      const button = document.createElement('button');
      button.textContent = post.buttonText;
      button.style.marginTop = '1rem';
      button.className = 'read-more-btn';
      article.previousElementSibling.insertAdjacentElement('afterend', button);

      button.addEventListener('click', () => {
        const isVisible = article.style.display === 'block';
        article.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'Read More' : 'Show Less';
      });
    }
  });

  // ========== Smooth scroll for nav links ========== //
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ========== Fade-in animation on scroll ========== //
  const fadeIns = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  fadeIns.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
});
// ========== Contact Form Validation & Success Message ========== //
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form');

  if (contactForm) {
    const successMessage = document.createElement('p');
    successMessage.style.color = 'green';
    successMessage.style.marginTop = '1rem';
    successMessage.style.display = 'none';
    contactForm.appendChild(successMessage);

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission

      const name = this.querySelector('#name');
      const email = this.querySelector('#email');
      const message = this.querySelector('#message');

      // Basic empty field check
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please fill in all the fields.');
        return;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
      }

      // Success: Reset fields and show message
      name.value = '';
      email.value = '';
      message.value = '';
      successMessage.textContent = '✅ Message sent successfully!';
      successMessage.style.display = 'block';
    });
  }
});
