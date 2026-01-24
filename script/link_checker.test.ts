
import { describe, it, expect, vi, afterEach } from 'vitest';
import { findExternalLinks } from './link_checker';
import fs from 'fs';
import path from 'path';

// Mock fs
vi.mock('fs');

describe('link_checker', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should find https links', () => {
    const mockContent = `
      const url = "https://example.com";
      <a href="https://google.com">Google</a>
    `;
    vi.spyOn(fs, 'readFileSync').mockReturnValue(mockContent);

    const links = findExternalLinks('dummy.ts');
    expect(links).toContain('https://example.com');
    expect(links).toContain('https://google.com');
    expect(links.length).toBe(2);
  });

  it('should find http links', () => {
    const mockContent = `
      Go to http://insecure.com for more info.
    `;
    vi.spyOn(fs, 'readFileSync').mockReturnValue(mockContent);

    const links = findExternalLinks('dummy.ts');
    expect(links).toContain('http://insecure.com');
    expect(links.length).toBe(1);
  });

  it('should return empty array if no links found', () => {
    const mockContent = `
      const local = "/internal/path";
      import { something } from "module";
    `;
    vi.spyOn(fs, 'readFileSync').mockReturnValue(mockContent);

    const links = findExternalLinks('dummy.ts');
    expect(links).toEqual([]);
  });

  it('should handle complex code structures', () => {
    const mockContent = `
      const map = {
        "google": "https://google.com",
        "bing": "https://bing.com"
      };
      const list = ["https://array.com", "https://another.com"];
    `;
    vi.spyOn(fs, 'readFileSync').mockReturnValue(mockContent);

    const links = findExternalLinks('dummy.ts');
    expect(links).toContain('https://google.com');
    expect(links).toContain('https://bing.com');
    expect(links).toContain('https://array.com');
    expect(links).toContain('https://another.com');
    expect(links.length).toBe(4);
  });
});
