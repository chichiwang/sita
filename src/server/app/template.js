/* @flow */

/**
 * Returns a string with the contents interpolated into a
 * HTML document template.
 */
export default function template(contents: string): String {
  return `
    <!doctype HTML>
    <head>
      <title>Sita</title>
    </head>
    <body>
      ${contents}
    </body>
  `;
}
