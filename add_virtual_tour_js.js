const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');

// Find the end of MosaicGalleryController to add VirtualTourController after it
const marker = '        };\n\n\n    /* ==========================================================================\n       13. CONTACT SECTION';
const idx = content.indexOf(marker);

if (idx === -1) {
    console.log('Marker not found');
    process.exit(1);
}

const newController = `
    /* ==========================================================================
       13. VIRTUAL TOUR OF WORKS CONTROLLER
       - Dynamic image grid populated from array
       - Scroll reveal animations via IntersectionObserver
       - Easy to add/remove images via workImages array
       ========================================================================== */
    const VirtualTourController = {
        // Easy image management - just add/remove from this array
        workImages: [
            { src: 'assets/certificates/certificate1.jpg', title: 'EcoBridge Platform', desc: 'Sustainable knowledge & IoT platform', type: 'large' },
            { src: 'assets/certificates/certificate2.jpg', title: 'CRUX AI', desc: 'Document intelligence & NLP', type: 'standard' },
            { src: 'assets/certificates/certificate3.jpg', title: 'Hackathon Projects', desc: 'Rapid prototyping & innovation', type: 'standard' },
            { src: 'assets/certificates/certificate4.jpg', title: 'AI/ML Work', desc: 'Machine learning & data science', type: 'standard' },
            { src: 'assets/certificates/certificate5.jpeg', title: 'Full Stack Development', desc: 'React, Node.js, MongoDB', type: 'tall' },
            { src: 'assets/certificates/certificate6.jpeg', title: 'Cybersecurity', desc: 'Security auditing & penetration testing', type: 'standard' },
            { src: 'assets/certificates/certificate7.jpeg', title: 'Machine Learning', desc: 'Model training & deployment', type: 'standard' },
            { src: 'assets/certificates/certificate8.jpeg', title: 'DevOps & CI/CD', desc: 'Automation & infrastructure', type: 'standard' },
            { src: 'assets/certificates/certificate9.jpeg', title: 'Data Science', desc: 'Analytics & visualization', type: 'standard' },
            { src: 'assets/certificates/certificate10.jpeg', title: 'React Advanced', desc: 'Performance & patterns', type: 'large' },
            { src: 'assets/certificates/certificate11.jpeg', title: 'Node.js Backend', desc: 'API design & microservices', type: 'standard' },
            { src: 'assets/certificates/certificate12.jpeg', title: 'Database Design', desc: 'Optimization & scaling', type: 'standard' },
            { src: 'assets/certificates/certificate13.jpeg', title: 'System Architecture', desc: 'Scalable system design', type: 'wide' },
            { src: 'assets/certificates/certificate14.jpeg', title: 'Mobile Development', desc: 'React Native & cross-platform', type: 'standard' },
            { src: 'assets/certificates/certificate15.jpeg', title: 'Testing & QA', desc: 'Automated testing strategies', type: 'standard' },
            { src: 'assets/certificates/certificate16.jpeg', title: 'GraphQL & APIs', desc: 'Flexible data fetching', type: 'standard' },
            { src: 'assets/certificates/certificate17.jpeg', title: 'Kubernetes', desc: 'Container orchestration', type: 'standard' },
            { src: 'assets/certificates/certificate18.jpeg', title: 'AI Ethics', desc: 'Responsible AI development', type: 'standard' },
            { src: 'assets/certificates/certificate19.jpeg', title: 'Blockchain', desc: 'Smart contracts & Web3', type: 'standard' },
            { src: 'assets/certificates/certificate20.jpeg', title: 'Tech Leadership', desc: 'Engineering management', type: 'large' },
            { src: 'assets/Profile.jpg', title: 'Profile Overview', desc: 'Developer journey & skills', type: 'wide' }
        ],

        init() {
            const grid = $('#virtualTourGrid');
            if (!grid) return;

            // Populate grid
            this.workImages.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = \`virtual-tour-item \${item.type || 'standard'}\`;
                div.style.transitionDelay = \`\${index * 100}ms\`;
                div.innerHTML = \`
                    <img src="\${item.src}" alt="\${item.title}" class="virtual-tour-img" loading="lazy">
                    <div class="virtual-tour-overlay">
                        <div class="virtual-tour-caption">
                            <h4>\${item.title}</h4>
                            <p>\${item.desc}</p>
                        </div>
                    </div>
                \`;
                grid.appendChild(div);
            });

            // Scroll reveal
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            $$('.virtual-tour-item', grid).forEach(item => observer.observe(item));
        }
    };
`;

const newContent = content.substring(0, idx) + newController + content.substring(idx);
fs.writeFileSync('script.js', newContent);
console.log('VirtualTourController added successfully');