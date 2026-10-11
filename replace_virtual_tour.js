const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const oldSection = `<!-- =================================================
      VIRTUAL TOUR OF WORKS — Visual Walkthrough
      ================================================= -->
<section class="virtual-tour-section" id="virtualTourSection" aria-label="Virtual Tour of Works">

    <div class="section-tag-row">
        <span class="sec-num">VT</span>
        <span class="sec-title">// VIRTUAL TOUR OF WORKS</span>
    </div>

    <div class="editorial-title-wrap" data-reveal="fade-up">
        <h2 class="huge-editorial-title">
            Virtual Tour<br>
            <span class="italic-serif">of Works.</span>
        </h2>
        <p class="section-desc-lead">
            A visual walkthrough of projects, interfaces, and development milestones. Scroll to explore.
        </p>
    </div>

    <!-- Virtual Tour Grid - Dynamic Layout -->
    <div class="virtual-tour-grid" id="virtualTourGrid" data-reveal="scale-up">
        <!-- Images will be populated by JavaScript -->
    </div>

</section>


<!-- =================================================
             10. COMPACT MOSAIC GALLERY — WORK IMAGES PREVIEW
             ================================================= -->`;

const newSection = `<!-- =================================================
     VIRTUAL TOUR OF WORKS — Ancient Book Experience
     ================================================= -->
<section class="virtual-book-section" id="virtualBookSection" aria-label="Virtual Tour of Works">

    <div class="section-tag-row">
        <span class="sec-num">VT</span>
        <span class="sec-title">// VIRTUAL TOUR OF WORKS</span>
    </div>

    <div class="editorial-title-wrap" data-reveal="fade-up">
        <h2 class="huge-editorial-title">
            Virtual Tour<br>
            <span class="italic-serif">of Works.</span>
        </h2>
        <p class="section-desc-lead">
            Open the ancient tome to explore projects, interfaces, and development milestones.
        </p>
    </div>

    <!-- Ancient Book Container -->
    <div class="ancient-book" id="ancientBook">
        <!-- Book Cover (Front) -->
        <div class="book-cover" id="bookCover">
            <div class="cover-outer">
                <div class="cover-leather"></div>
                <div class="cover-stitching"></div>
                <div class="cover-metal-corners">
                    <span class="corner tl"></span>
                    <span class="corner tr"></span>
                    <span class="corner bl"></span>
                    <span class="corner br"></span>
                </div>
                <div class="cover-metal-center"></div>
                <div class="cover-title-area">
                    <div class="cover-title-line"></div>
                    <h3 class="cover-main-title">Codex</h3>
                    <h4 class="cover-sub-title">Developer Works</h4>
                    <div class="cover-title-line"></div>
                    <p class="cover-author">S Jeyaseelan</p>
                    <div class="cover-year">MMXXVI</div>
                </div>
                <div class="cover-ribbon"></div>
                <div class="open-hint">
                    <span>Click to Open</span>
                    <svg class="open-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 12h16M12 4l8 8-8 8"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Book Spine -->
        <div class="book-spine">
            <div class="spine-leather"></div>
            <div class="spine-bands"></div>
            <div class="spine-text">CODEX</div>
        </div>

        <!-- Book Pages Container -->
        <div class="book-pages" id="bookPages">
            <!-- Pages will be inserted here by JavaScript -->
        </div>

        <!-- Book Back Cover -->
        <div class="book-back-cover">
            <div class="cover-outer">
                <div class="cover-leather"></div>
                <div class="cover-stitching"></div>
                <div class="cover-metal-corners">
                    <span class="corner tl"></span>
                    <span class="corner tr"></span>
                    <span class="corner bl"></span>
                    <span class="corner br"></span>
                </div>
                <div class="cover-metal-center"></div>
            </div>
        </div>
    </div>

</section>


<!-- =================================================
             10. COMPACT MOSAIC GALLERY — WORK IMAGES PREVIEW
             ================================================= -->`;

if (content.includes(oldSection)) {
    content = content.replace(oldSection, newSection);
    fs.writeFileSync('index.html', content);
    console.log('Replaced successfully');
} else {
    console.log('Old section not found');
    // Try to find what's there
    const idx = content.indexOf('VIRTUAL TOUR OF WORKS');
    if (idx !== -1) {
        console.log('Found at index:', idx);
        console.log('Context:', content.substring(idx, idx + 200));
    }
}