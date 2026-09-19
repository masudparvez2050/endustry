const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '..', 'public', 'portfolio');
const newsDir = path.join(__dirname, '..', 'public', 'news');

function sanitizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Fix jQuery UI tabs href bug: replace any url before #qodef-tab-xxx with just #qodef-tab-xxx
  // When an anchor has a path before hash (e.g. /portfolio/slug/#qodef-tab-...), jQuery UI treats it as an AJAX remote tab and loads the full page recursively!
  content = content.replace(/href="[^"]*#(qodef-tab-[^"]+)"/g, 'href="#$1"');

  // Also fix comment reply respond links
  content = content.replace(/href="\/[^"]*#respond"/g, 'href="#respond"');

  // Also fix any other hash-based tabs or accordion anchors if they have absolute path
  content = content.replace(/href="[^"]*#(ui-id-[^"]+)"/g, 'href="#$1"');

  // 2. Remove chrome extension scripts
  content = content.replace(/<script[^>]*chrome-extension:[^>]*><\/script>/gi, '');

  // 3. Remove speculationrules
  content = content.replace(/<script type="speculationrules">[\s\S]*?<\/script>/gi, '');

  // 4. Remove translator and extension junk tags
  content = content.replace(/<img id="translator-icon"[^>]*>/gi, '');
  content = content.replace(/<div id="translator-container"[\s\S]*?<\/div>\s*<\/div>/gi, '');
  content = content.replace(/<bubbles-pinned-extension-[^>]*>[\s\S]*?<\/bubbles-pinned-extension-[^>]*>/gi, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Sanitized:', path.basename(filePath));
  } else {
    console.log('No change needed for:', path.basename(filePath));
  }
}

[portfolioDir, newsDir].forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).filter(f => f.endsWith('.html')).forEach(f => {
      sanitizeFile(path.join(dir, f));
    });
  }
});
console.log('Done sanitizing.');
