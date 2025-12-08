class CertificateModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(10, 25, 47, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        
        .modal.active {
          opacity: 1;
          visibility: visible;
        }
        
        .modal-content {
          background-color: var(--bg-secondary);
          padding: 2rem;
          border-radius: 8px;
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid var(--accent);
        }
        
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--accent);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .certificate-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .certificate-logo {
          width: 80px;
          height: 80px;
          margin-right: 1.5rem;
          border-radius: 8px;
        }
        
        .certificate-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .certificate-meta {
          color: var(--accent);
          font-size: 0.9rem;
        }
        
        .certificate-body {
          margin-top: 1.5rem;
        }
        
        .certificate-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .certificate-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .skill-tag {
          background-color: var(--bg-tertiary);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
        }
        
        .certificate-link {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: var(--accent);
          color: var(--bg-primary);
          text-decoration: none;
          border-radius: 4px;
          font-weight: 500;
          transition: transform 0.2s ease;
        }
        
        .certificate-link:hover {
          transform: translateY(-2px);
        }
      </style>
      
      <div class="modal">
        <div class="modal-content">
          <button class="close-btn">&times;</button>
          <div class="certificate-header">
            <img class="certificate-logo" src="" alt="Certificate Logo">
            <div>
              <h3 class="certificate-title"></h3>
              <p class="certificate-meta"></p>
            </div>
          </div>
          <div class="certificate-body">
            <p class="certificate-description"></p>
            <div class="certificate-skills"></div>
            <a href="#" target="_blank" class="certificate-link">View Certificate</a>
          </div>
        </div>
      </div>
    `;
    
    this.closeBtn = this.shadowRoot.querySelector('.close-btn');
    this.modal = this.shadowRoot.querySelector('.modal');
    
    this.closeBtn.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
  }
  
  open(data) {
    this.shadowRoot.querySelector('.certificate-logo').src = data.image;
    this.shadowRoot.querySelector('.certificate-title').textContent = data.title;
    this.shadowRoot.querySelector('.certificate-meta').textContent = `${data.issuer} • ${data.date}`;
    this.shadowRoot.querySelector('.certificate-description').textContent = data.description;
    
    const skillsContainer = this.shadowRoot.querySelector('.certificate-skills');
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.className = 'skill-tag';
      skillTag.textContent = skill;
      skillsContainer.appendChild(skillTag);
    });
    
    this.shadowRoot.querySelector('.certificate-link').href = data.link;
    
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

customElements.define('certificate-modal', CertificateModal);