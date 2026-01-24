
import fs from 'fs';
import path from 'path';

/**
 * Parses a file and returns a list of external links.
 * External links are defined as those starting with http:// or https://.
 * 
 * @param filePath - The path to the file to check.
 * @returns An array of found external links.
 */
export function findExternalLinks(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Regex to match http:// or https:// followed by non-whitespace/quote characters
    // This is a basic regex and might need refinement for complex cases, 
    // but works for standard URLs in code/html.
    const urlRegex = /https?:\/\/[^\s"'`<>]+/g;
    
    const matches = content.match(urlRegex) || [];
    
    // Clean up matches (remove trailing punctuation often caught)
    return matches.map(url => {
        // Remove common trailing characters that might be part of code syntax not the URL
        return url.replace(/[),;\]}]+$/, '');
    });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
}

// If run directly
if (process.argv[1] === import.meta.filename) {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error('Please provide a file path to check.');
    process.exit(1);
  }

  const absolutePath = path.resolve(process.cwd(), targetFile);
  console.log(`Checking for external links in: ${absolutePath}`);

  const links = findExternalLinks(absolutePath);

  if (links.length === 0) {
    console.log('There are no external links on this page.');
  } else {
    console.log(`Found ${links.length} external links:`);
    links.forEach(link => console.log(`- ${link}`));
  }
}
