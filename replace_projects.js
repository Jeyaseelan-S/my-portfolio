const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const newSection = fs.readFileSync('new_projects_section.html', 'utf8');

const startMarker = '<div class="achievements-interactive-list">';
const endMarker = '</div>\n\n        </section>';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker, startIdx);

if (startIdx === -1 || endIdx === -1) {
    console.log('Markers not found');
    process.exit(1);
}

const newContent = content.substring(0, startIdx) + newSection + '\n\n        </section>' + content.substring(endIdx + endMarker.length);
fs.writeFileSync('index.html', newContent);
console.log('Projects section updated successfully');