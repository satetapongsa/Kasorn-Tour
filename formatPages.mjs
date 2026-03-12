import fs from 'fs';

const pages = [
  { file: 'src/pages/LandingPage.jsx', variant: '"landing"' },
  { file: 'src/pages/TourListings.jsx', variant: 'undefined' },
  { file: 'src/pages/TourDetails.jsx', variant: 'undefined' }
];

pages.forEach(({ file, variant }) => {
  let content = fs.readFileSync(file, 'utf8');

  // Add imports if not present
  if (!content.includes('import Navbar')) {
    content = content.replace(/(import React.*?;)/, '$1\nimport Navbar from \'../components/Navbar\';\nimport Footer from \'../components/Footer\';');
  }

  // Replace header and footer
  const navbarProp = variant !== 'undefined' ? ` variant=${variant}` : '';
  const footerProp = variant !== 'undefined' ? ` variant=${variant}` : '';

  content = content.replace(/<header[\s\S]*?<\/header>/, `<Navbar${navbarProp} />`);
  content = content.replace(/<footer[\s\S]*?<\/footer>/, `<Footer${footerProp} />`);

  // General links
  content = content.replace(/<a ([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, '<Link $1to="/tours"$2>$3</Link>');
  // If there are standard class= update to className (already handled during convert.mjs)

  // specific buttons in LandingPage
  if (file.includes('LandingPage')) {
    content = content.replace(/<button([^>]*)>(Explore\s*Package)<\/button>/g, '<Link to="/tour/1"$1>$2</Link>');
    content = content.replace(/<button([^>]*)>(Start\s*Your Plan)<\/button>/g, '<Link to="/tours"$1>$2</Link>');
    content = content.replace(/<button([^>]*)>(Contact\s*Concierge)<\/button>/g, '<Link to="/"$1>$2</Link>');
    content = content.replace(/<button([\s\S]*?)>(Book\s*Now)<\/button>/g, '<Link to="/tours"$1>$2</Link>');
    
    // Fix button styling since they are now generic links
    content = content.replace(/className="w-full bg-white text-primary/g, 'className="block text-center w-full bg-white text-primary');
    content = content.replace(/className="bg-white text-primary font-black/g, 'className="block text-center bg-white text-primary font-black');
    content = content.replace(/className="border-2 border-white\/30/g, 'className="block text-center flex items-center justify-center border-2 border-white/30');
  }

  // specific buttons in TourListings
  if (file.includes('TourListings')) {
    content = content.replace(/<button([^>]*)>\s*View Details\s*<\/button>/g, '<Link to="/tour/1"$1>View Details</Link>');
    // Fix block layout for link
    content = content.replace(/rounded-lg border border-primary px-4/g, 'block text-center rounded-lg border border-primary px-4');
  }

  // specific buttons in TourDetails
  if (file.includes('TourDetails')) {
    content = content.replace(/<button([^>]*)>([\s\S]*?Confirm Booking[\s\S]*?)<\/button>/g, '<Link to="/"$1>$2</Link>');
  }

  fs.writeFileSync(file, content);
  console.log(`${file} updated!`);
});
