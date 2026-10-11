const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const virtualTour = fs.readFileSync('virtual_tour_section.html', 'utf8');

// Find the end of certificates section (after </section> before mosaic gallery)
const marker = '</section>\n\n\n<!-- =================================================\n             10. COMPACT MOSAIC GALLERY';
const idx = content.indexOf(marker);

if (idx === -1) {
    console.log('Marker not found');
    process.exit(1);
}

const newContent = content.substring(0, idx) + '\n\n' + virtualTour + '\n\n' + content.substring(idx);
fs.writeFileSync('index.html', newContent);
console.log('Virtual Tour section added successfully');