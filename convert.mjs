import fs from 'fs';
import path from 'path';

const htmlFile = 'c:\\Users\\acer\\Desktop\\Kasorn Tour\\New Text Document.txt.html';
const pagesDir = 'c:\\Users\\acer\\Desktop\\Kasorn Tour\\kasorn-tour-app\\src\\pages';

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const content = fs.readFileSync(htmlFile, 'utf8');

// The file contains multiple HTML documents. Let's split them by `</body>\\s*</html>`.
// Or let's just find each `<body` up to `</body>`.
const docs = [];
let currentIndex = 0;
while (true) {
  const startIdx = content.indexOf('<body', currentIndex);
  if (startIdx === -1) break;
  
  const endIdx = content.indexOf('</body>', startIdx);
  if (endIdx === -1) break;
  
  docs.push(content.substring(startIdx, endIdx + 7));
  currentIndex = endIdx + 7;
}

const pageNames = ['LandingPage', 'TourListings', 'TourDetails', 'AdminDashboard'];

function htmlToReact(htmlChunk) {
  let jsx = htmlChunk;
  // Extract body content and class
  const bodyMatch = jsx.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return { wrapperClass: '', content: '' };
  
  let wrapperClass = '';
  const classMatch = bodyMatch[1].match(/class="([^"]+)"/i);
  if (classMatch) {
    wrapperClass = classMatch[1];
  }
  
  let bodyContent = bodyMatch[2];
  
  // HTML to JSX conversions
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
  
  // SVG attributes
  bodyContent = bodyContent.replace(/fill-rule=/g, 'fillRule=');
  bodyContent = bodyContent.replace(/clip-rule=/g, 'clipRule=');
  bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
  bodyContent = bodyContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
  bodyContent = bodyContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  
  // Self closing tags
  bodyContent = bodyContent.replace(/<img(.*?)>/g, (match) => {
    if(match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  bodyContent = bodyContent.replace(/<input(.*?)>/g, (match) => {
    if(match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  bodyContent = bodyContent.replace(/<br>/g, '<br />');
  bodyContent = bodyContent.replace(/<hr>/g, '<hr />');
  
  // Inline styles
  // e.g. style='background-image: linear-gradient(...), url("...")'
  bodyContent = bodyContent.replace(/style='([^']+)'/g, (match, p1) => {
    let styleStr = p1.replace(/background-image:\s*/i, '');
    styleStr = styleStr.replace(/"/g, "'"); // replace inner quotes if needed
    return `style={{ backgroundImage: "${styleStr}" }}`;
  });

  // e.g. style="background-image: linear-gradient(...)"
  bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, p1) => {
    // If it already has {{ and }}, ignore
    if (p1.includes('{{')) return match;
    let styleStr = p1.replace(/background-image:\s*/i, '');
    styleStr = styleStr.replace(/"/g, "'");
    return `style={{ backgroundImage: "${styleStr}" }}`;
  });
  
  // Comments
  bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  
  // Checked attribute
  bodyContent = bodyContent.replace(/checked=""/g, 'defaultChecked');
  bodyContent = bodyContent.replace(/disabled=""/g, 'disabled');

  return { wrapperClass, content: bodyContent };
}

docs.forEach((doc, index) => {
  if (index >= pageNames.length) return;
  const componentName = pageNames[index];
  const { wrapperClass, content } = htmlToReact(doc);

  const componentCode = `import React from 'react';
import { Link } from 'react-router-dom';

export default function ${componentName}() {
  return (
    <div className="${wrapperClass}">
${content}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(pagesDir, `${componentName}.jsx`), componentCode);
  console.log(`Generated ${componentName}.jsx`);
});
