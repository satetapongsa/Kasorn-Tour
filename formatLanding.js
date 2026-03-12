const fs = require('fs');

let content = fs.readFileSync('src/pages/LandingPage.jsx', 'utf8');

// Add imports
content = content.replace(/(import React from 'react';\nimport \{ Link \} from 'react-router-dom';)/, '$1\nimport Navbar from \'../components/Navbar\';\nimport Footer from \'../components/Footer\';');

// Replace header and footer with components
content = content.replace(/<header[\s\S]*?<\/header>/, '<Navbar variant="landing" />');
content = content.replace(/<footer[\s\S]*?<\/footer>/, '<Footer variant="landing" />');

// Links
content = content.replace(/<a ([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link $1to="/tours"$2>$3</Link>');

// Specific buttons that should be links
content = content.replace(/<button([^>]*)>(Explore\s*Package)<\/button>/g, '<Link to="/tour/1"$1>$2</Link>');
content = content.replace(/<button([^>]*)>(Start\s*Your Plan)<\/button>/g, '<Link to="/tours"$1>$2</Link>');
content = content.replace(/<button([^>]*)>(Contact\s*Concierge)<\/button>/g, '<Link to="/"$1>$2</Link>');

// One more button
content = content.replace(/<button([\s\S]*?)>(Book Now)<\/button>/, '<Link to="/tours"$1>$2</Link>');

// Fix button styling since they are now generic links
content = content.replace(/className="w-full bg-white text-primary/g, 'className="block text-center w-full bg-white text-primary');
content = content.replace(/className="bg-white text-primary font-black/g, 'className="block text-center bg-white text-primary font-black');
content = content.replace(/className="border-2 border-white\/30/g, 'className="block text-center border-2 border-white/30');

// Save back
fs.writeFileSync('src/pages/LandingPage.jsx', content);
console.log('LandingPage updated!');
