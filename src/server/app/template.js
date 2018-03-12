/* @flow */
import type { PageObject } from './renderToString';

/**
 * Returns a string with the contents interpolated into a
 * HTML document template.
 */
export default function template(page: PageObject): String {
  const { app, headTags, htmlAttributes, bodyAttributes } = page;
  return `
    <!doctype HTML>
    <html ${htmlAttributes}>
      <head>
        ${headTags}
      </head>
      <body ${bodyAttributes}>
        ${app}
      </body>
    </html>
  `;
}
