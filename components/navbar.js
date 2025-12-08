class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    background-color: rgba(10, 25, 47, 0.9);
                    backdrop-filter: blur(10px);
                    height: 80px;
                    display: flex;
                    justify-content: center;
                }
                
                .nav-container {
                    width: 100%;
                    max-width: 1200px;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    color: #64ffda;
                    font-weight: bold;
                    font-size: 1.5rem;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #ccd6f6;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #64ffda;
                }
                
                .nav-link::before {
                    content: '0' counter(item) '.';
                    counter-increment: item;
                    color: #64ffda;
                    margin-right: 5px;
                    font-size: 0.8rem;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #64ffda;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#home" class="logo">AbhijitSalunke</a>
                    <div class="nav-links">
                        <a href="#about" class="nav-link">About</a>
                        <a href="#work" class="nav-link">Work</a>
                        <a href="#experience" class="nav-link">Experience</a>
                        <a href="#certifications" class="nav-link">Certifications</a>
                        <a href="#contact" class="nav-link">Contact</a>
<a href="/resume.html" class="nav-link">Resume</a>
</div>
                    <button id="theme-toggle" class="text-secondary-500 hover:text-primary-500 transition-colors mr-4">
                        <i class="fas fa-moon"></i>
                    </button>
                    <button class="mobile-menu-btn">
<i data-feather="menu"></i>
                    </button>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);