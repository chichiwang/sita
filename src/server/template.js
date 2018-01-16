/* @flow */
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
