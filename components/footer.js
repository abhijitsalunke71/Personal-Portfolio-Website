class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #0a192f;
                    padding: 2rem 0;
                    text-align: center;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .social-link {
                    color: #ccd6f6;
                    transition: color 0.3s ease, transform 0.3s ease;
                }
                
                .social-link:hover {
                    color: #64ffda;
                    transform: translateY(-3px);
                }
                
                .credit {
                    color: #8892b0;
                    font-size: 0.8rem;
                }
                
                .credit a {
                    color: #64ffda;
                    text-decoration: none;
                }
            </style>
            <footer>
                <div class="social-links">
                    <a href="https://github.com/yourusername" class="social-link" target="_blank">
                        <i data-feather="github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" class="social-link" target="_blank">
                        <i data-feather="linkedin"></i>
                    </a>
                    <a href="https://instagram.com/yourusername" class="social-link" target="_blank">
                        <i data-feather="instagram"></i>
                    </a>
                    <a href="https://naukri.com/yourprofile" class="social-link" target="_blank">
                        <i class="fas fa-briefcase"></i>
                    </a>
                    <a href="mailto:your@email.com" class="social-link">
                        <i data-feather="mail"></i>
                    </a>
                </div>
<p class="credit">
                    Designed & Built by <a href="#">Abhijit Salunke</a>
                </p>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);