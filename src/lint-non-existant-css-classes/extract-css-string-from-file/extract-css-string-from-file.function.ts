import { readFileSync } from 'fs';

import { compile } from 'sass';

export function extractCssStringFromFile(filePath: string): string {
  /** In case of SCSS file, parse it first. */

  if (/\.scss$/.test(filePath)) {
    const scssRenderResult = compile(filePath);
    return scssRenderResult.css;
  }
  /** In case of css file, just read the contents. */
  if (/\.css$/.test(filePath)) {
    return readFileSync(filePath, 'utf8');
  }

  throw 'Unsupported file format';
}
