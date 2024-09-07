function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    section.addEventListener('scroll', () => {
      section.classList.add('animate');
    });
  });