// Simple contact form submission handler (no backend)
function submitForm() {
  alert("Thank you! Your message has been submitted.");
}

// Added JavaScript to toggle the 'visible' class for the toppers section on scroll
window.addEventListener('scroll', () => {
  const toppersSection = document.querySelector('.toppers');
  const sectionPosition = toppersSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    toppersSection.classList.add('visible');
  } else {
    toppersSection.classList.remove('visible');
  }
});

// Added JavaScript to toggle the 'visible' class for the Why Choose Us section on scroll
window.addEventListener('scroll', () => {
  const whyChooseUsSection = document.querySelector('.why-choose-us');
  const sectionPosition = whyChooseUsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    whyChooseUsSection.classList.add('visible');
  } else {
    whyChooseUsSection.classList.remove('visible');
  }
});

// Added JavaScript to toggle the 'visible' class for the Admission Open section on scroll
window.addEventListener('scroll', () => {
  const admissionOpenSection = document.querySelector('.admission-open');
  const sectionPosition = admissionOpenSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    admissionOpenSection.classList.add('visible');
  } else {
    admissionOpenSection.classList.remove('visible');
  }
});

// Added JavaScript to toggle the 'visible' class for the Contact Us section on scroll
window.addEventListener('scroll', () => {
  const contactUsSection = document.querySelector('.contact-us');
  const sectionPosition = contactUsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    contactUsSection.classList.add('visible');
  } else {
    contactUsSection.classList.remove('visible');
  }
});

