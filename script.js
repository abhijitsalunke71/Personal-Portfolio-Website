
// Certificate data
const certificates = [
  {
    id: 1,
    title: "Azure Fundametal (AZ-900)",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/twitter_thumb_201604_image.png",
    description: "Demonstrated foundational knowledge of cloud concepts, core Azure services, pricing, SLA, and lifecycle. Covers Azure architecture, security, governance, and compliance, along with basics of cloud computing models and deployment strategies using Microsoft Azure.",
    skills: ["Azure", "Cloud Data Management", "Cloud Infrastructure", "Cloud Security", "Cloud Services","Cloud Storage","Virtualization"],
    link: "https://www.credly.com/badges/c14ebb8e-48cd-4f2f-8ce1-9b137d948753"
  },
  {
    id: 2,
    title: "Career Essentials in System Administration",
    issuer: "LinkedIn Learning",
    date: "2024",
    image: "https://thumbs.dreamstime.com/b/microsoft-linkedin-logos-kiev-ukraine-june-printed-white-paper-buys-social-media-73453287.jpg",
    description: "Certified in system administration, focusing on managing operating systems, networks, user access, and IT infrastructure reliability through Microsoft and LinkedIn Learning.",
    skills: ["System Administration", "Network Administration", "Network Security", "Operating System Management (Windows & Linux)"]  ,
    link: "https://www.linkedin.com/learning/certificates/d64e69d1fe8c7adad2e3ebdd3d2fd8105d79d1d170c8ad8440efcedc6d887e52"
  }
];

// Initialize certificate modal
const certificateModal = document.createElement('certificate-modal');
document.body.appendChild(certificateModal);

// Set up certificate click handlers
document.addEventListener('DOMContentLoaded', () => {
  const certificateElements = document.querySelectorAll('#certifications > div > div');
  certificateElements.forEach((el, index) => {
    el.addEventListener('click', () => {
      certificateModal.open(certificates[index]);
    });
    el.style.cursor = 'pointer';
  });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});
// Theme toggle functionality
const themeToggle = document.querySelector('#theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
} else if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

