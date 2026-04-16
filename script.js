// ==================== DATA ====================
const projectsData = [
    { id: 1, title: "8 Unit Upmarket Clusters - Glenlorne", status: "Completed 2024", location: "Glenlorne, Harare", description: "500 Square Meters per unit | Double Storey | 4 Bedrooms | Club House and Social Amenities | 2 Carports per unit", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop", gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop"
    ]},
    { id: 2, title: "Ambassadorial Villas", status: "Work in Progress", location: "Harare", description: "Luxury diplomatic residences with premium finishes and world-class amenities. Featuring state-of-the-art security, landscaped gardens, and executive specifications.", image: "https://images4.imagebam.com/d4/ff/0b/ME1C8N2O_o.png", gallery: [
        "https://images4.imagebam.com/53/44/c5/ME1C8N2L_o.png",
        "https://images4.imagebam.com/a4/42/6c/ME1C8N2V_o.png",
        "https://images4.imagebam.com/4b/c2/6e/ME1C8N2P_o.png",
        "https://images4.imagebam.com/93/b7/d0/ME1C8N2W_o.png"
    ]},
    { id: 3, title: "Quinington 12 Unit Clusters", status: "Awaiting Groundbreaking", location: "Harare (3D Presentation)", description: "Mixed-use commercial and residential complex featuring modern design, sustainable construction, and premium finishes. Project scheduled for 2026 groundbreaking.", image: "https://images4.imagebam.com/09/17/98/ME1C8NGD_o.png", gallery: [
        "https://images4.imagebam.com/09/17/98/ME1C8NGD_o.png",
        "https://images4.imagebam.com/57/60/fa/ME1C8NGJ_o.png",
        "https://images4.imagebam.com/06/9c/e8/ME1C8NGQ_o.png",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    ]},
    { id: 4, title: "Interior Design & Furnishings", status: "Completed Projects", location: "Various Locations", description: "Tailored interior décor and furnishing services. 2D & 3D modeling, material selection, furniture and fixture sourcing to suit both design and budget.", image: "https://images4.imagebam.com/64/25/6e/ME1C8NMS_o.png", gallery: [
        "https://images4.imagebam.com/94/e8/b7/ME1C8NMT_o.png",
        "https://images4.imagebam.com/1a/c3/2c/ME1C8NMU_o.png",
        "https://images4.imagebam.com/d9/d8/be/ME1C8NMV_o.png",
        "https://images4.imagebam.com/64/25/6e/ME1C8NMS_o.png"
    ]}
];

// Team data with placeholder image URLs (replace these with actual photos later)
const teamData = [
    { 
        name: "Daires Semwayo", 
        title: "Managing Director", 
        shares: "25% Shareholder", 
        experience: "25+ years executive experience in insurance industry", 
        education: "", 
        responsibilities: "Driving innovative construction solutions, expanding Nylex's global footprint with partnerships in Turkey, Dubai, China, South Africa, Mauritius, and the UK",
        image: "https://images4.imagebam.com/81/ff/d7/ME1C8MEH_o.png",
        placeholderIcon: "user"
    },
    { 
        name: "Comfort Semwayo", 
        title: "General Manager", 
        shares: "25% Shareholder", 
        experience: "20+ years experience in construction industry", 
        education: "", 
        responsibilities: "Masterfully orchestrates construction nuances, transforming blueprints into realities. Expertise in building design, structural integrity, and project management",
        image: "https://images4.imagebam.com/49/41/e6/ME1C8MIG_o.png",
        placeholderIcon: "user"
    },
    { 
        name: "Chantelle Kwaramba", 
        title: "Finance Director", 
        shares: "25% Shareholder", 
        experience: "Law graduate from University of Essex", 
        education: "LLB Law, University of Essex", 
        responsibilities: "Project budget handling, cash flow forecasting, internal audits, financial reporting, contractual and risk management matters",
        image: "https://images4.imagebam.com/cd/af/eb/ME1C8MBO_o.png",
        placeholderIcon: "user"
    },
    { 
        name: "Patrick Matura", 
        title: "Operations Director", 
        shares: "25% Shareholder", 
        experience: "14+ years experience across mining, education, accounting, and business development", 
        education: "BA (Hons) Accounting and Finance, University of East London, UK", 
        responsibilities: "Oversees day-to-day management of diverse projects across multiple countries including Malaysia, China, and Zimbabwe",
        image: "https://images4.imagebam.com/12/16/2a/ME1C8MX4_o.png",
        placeholderIcon: "user"
    }
];

const timelineData = [
    { year: "2011", event: "Nylex International incorporated in Zimbabwe" },
    { year: "2015", event: "Expanded into commercial construction" },
    { year: "2018", event: "Launched interior design & furnishings division" },
    { year: "2020", event: "Completed 50+ projects milestone" },
    { year: "2024", event: "Global partnerships: Turkey, Dubai, China, South Africa, Mauritius, UK" },
    { year: "2025", event: "Expanding across Zimbabwe" }
];

const partnersData = [
    { country: "Turkey", flag: "🇹🇷" },
    { country: "Dubai", flag: "🇦🇪" },
    { country: "China", flag: "🇨🇳" },
    { country: "South Africa", flag: "🇿🇦" },
    { country: "Mauritius", flag: "🇲🇺" },
    { country: "United Kingdom", flag: "🇬🇧" }
];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderTeam();
    renderTimeline();
    renderPartners();
    refreshIcons();
});

function refreshIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ==================== RENDER FUNCTIONS ====================
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    grid.innerHTML = projectsData.map(project => `
        <div class="project-card" onclick="openProjectModal(${project.id})">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <span class="project-badge">${project.status}</span>
                <h3>${project.title}</h3>
                <p>${project.location}</p>
            </div>
        </div>
    `).join('');
    refreshIcons();
}

function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;
    
    grid.innerHTML = teamData.map((member, index) => `
        <div class="team-card" onclick="openTeamModal(${index})">
            <div class="team-image">
                <img src="${member.image}" alt="${member.name}" onerror="this.src='https://placehold.co/400x400/1a1a2e/C6A43F?text=${encodeURIComponent(member.name.split(' ')[0])}'">
            </div>
            <h3>${member.name}</h3>
            <p class="team-title">${member.title}</p>
            <p class="team-desc">${member.shares}</p>
        </div>
    `).join('');
    refreshIcons();
}

function renderTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;
    
    container.innerHTML = timelineData.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h4>${item.year}</h4>
                <p>${item.event}</p>
            </div>
        </div>
    `).join('');
}

function renderPartners() {
    const container = document.getElementById('partners-list');
    if (!container) return;
    
    container.innerHTML = partnersData.map(partner => `
        <div class="partner-item">
            <span class="partner-flag">${partner.flag}</span>
            <span class="partner-name">${partner.country}</span>
        </div>
    `).join('');
}

// ==================== MODAL FUNCTIONS ====================
let currentGalleryIndex = 0;
let currentGalleryImages = [];

function openProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;
    
    currentGalleryImages = project.gallery;
    currentGalleryIndex = 0;
    
    const modalContent = document.getElementById('project-modal-content');
    modalContent.innerHTML = `
        <button class="modal-close" onclick="closeProjectModal()"><i data-lucide="x" class="icon-sm"></i></button>
        <h2 style="font-size:1.5rem; font-weight:700; margin-bottom:0.5rem;">${project.title}</h2>
        <span style="display:inline-block; background:var(--gold); color:var(--charcoal); font-size:0.75rem; font-weight:600; padding:0.25rem 0.75rem; border-radius:9999px; margin-bottom:1rem;">${project.status}</span>
        <p style="color:#6b7280; margin-bottom:0.5rem;"><strong>Location:</strong> ${project.location}</p>
        <p style="color:#4b5563; margin-bottom:1.5rem; line-height:1.6;">${project.description}</p>
        
        <div style="margin-bottom:1rem;">
            <img id="main-gallery-image" src="${currentGalleryImages[0]}" alt="Gallery" class="main-gallery-image" onclick="nextGalleryImage()">
        </div>
        
        <div class="gallery-grid" id="gallery-thumbnails"></div>
        
        <p style="text-align:center; color:#6b7280; font-size:0.75rem; margin-top:1rem;">Click image to view next | ${currentGalleryImages.length} photos</p>
        
        <button onclick="closeProjectModal()" class="btn-primary" style="margin-top:1.5rem; width:100%;">Close</button>
    `;
    
    renderGalleryThumbnails();
    document.getElementById('project-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    refreshIcons();
}

function renderGalleryThumbnails() {
    const container = document.getElementById('gallery-thumbnails');
    if (!container) return;
    
    container.innerHTML = currentGalleryImages.map((img, idx) => `
        <div class="gallery-item" onclick="setGalleryImage(${idx})">
            <img src="${img}" alt="Thumbnail ${idx + 1}">
        </div>
    `).join('');
}

function setGalleryImage(index) {
    currentGalleryIndex = index;
    const mainImage = document.getElementById('main-gallery-image');
    if (mainImage) {
        mainImage.src = currentGalleryImages[currentGalleryIndex];
    }
}

function nextGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
    const mainImage = document.getElementById('main-gallery-image');
    if (mainImage) {
        mainImage.src = currentGalleryImages[currentGalleryIndex];
    }
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function openTeamModal(index) {
    const member = teamData[index];
    const modalContent = document.getElementById('team-modal-content');
    modalContent.innerHTML = `
        <button class="modal-close" onclick="closeTeamModal()"><i data-lucide="x" class="icon-sm"></i></button>
        <div style="text-align:center; margin-bottom:1.5rem;">
            <div style="width:120px; height:120px; margin:0 auto 1rem; border-radius:50%; overflow:hidden; background:#e5e7eb;">
                <img src="${member.image}" alt="${member.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='https://placehold.co/400x400/1a1a2e/C6A43F?text=${encodeURIComponent(member.name.split(' ')[0])}'">
            </div>
            <h2 style="font-size:1.5rem; font-weight:700;">${member.name}</h2>
            <p style="color:var(--gold); font-weight:600;">${member.title}</p>
            <p style="color:#6b7280; font-size:0.875rem;">${member.shares}</p>
        </div>
        <div style="border-top:1px solid #e5e7eb; padding-top:1rem;">
            <p style="margin-bottom:0.75rem;"><strong>📋 Experience:</strong><br>${member.experience}</p>
            ${member.education ? `<p style="margin-bottom:0.75rem;"><strong>🎓 Education:</strong><br>${member.education}</p>` : ''}
            <p style="margin-bottom:0.75rem;"><strong>💼 Responsibilities:</strong><br>${member.responsibilities}</p>
        </div>
        <button onclick="closeTeamModal()" class="btn-primary" style="margin-top:1.5rem; width:100%;">Close</button>
    `;
    document.getElementById('team-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    refreshIcons();
}

function closeTeamModal() {
    document.getElementById('team-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function openQuoteModal() { 
    document.getElementById('quote-modal').classList.remove('hidden'); 
    document.body.style.overflow = 'hidden'; 
    refreshIcons();
}
function closeQuoteModal() { 
    document.getElementById('quote-modal').classList.add('hidden'); 
    document.body.style.overflow = ''; 
}

// ==================== FORM HANDLERS ====================
function submitContactForm(e) {
    e.preventDefault();
    alert('Thank you! We will respond within 24 hours.');
    e.target.reset();
}

function submitQuoteRequest(e) {
    e.preventDefault();
    alert('Quote request received! We will contact you shortly.');
    closeQuoteModal();
}

function subscribeNewsletter(e) {
    e.preventDefault();
    alert('Subscribed to newsletter!');
    e.target.reset();
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() { 
    document.getElementById('mobile-menu').classList.toggle('hidden'); 
}
function closeMobileMenu() { 
    document.getElementById('mobile-menu').classList.add('hidden'); 
}

// ==================== EXPORTS ====================
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openTeamModal = openTeamModal;
window.closeTeamModal = closeTeamModal;
window.openQuoteModal = openQuoteModal;
window.closeQuoteModal = closeQuoteModal;
window.submitContactForm = submitContactForm;
window.submitQuoteRequest = submitQuoteRequest;
window.subscribeNewsletter = subscribeNewsletter;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.setGalleryImage = setGalleryImage;
window.nextGalleryImage = nextGalleryImage;