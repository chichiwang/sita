/* @flow */
import ReactDomServer from 'react-dom/server';
import Helmet from 'react-helmet';

import type { Element } from 'react';

export type PageObject = {
  app: string,
  headTags: string,
  htmlAttributes: string,
  bodyAttributes: string,
};

/**
 * Returns a function that will convert a head tag
 * to a string. The outer function holds the `head`
 * object in scope.
 */
function headTagToString(head: Object): Function {
  /**
   * Calls `toString` on a given head tag
   */
  return function tagNameToString(tagName: string): string {
    return head[tagName].toString();
  };
}

/**
 * Returns `true` if provided string is not empty,
 * else returns `false`
 */
function isNotEmptyString(str: string): boolean {
  return !!str.length;
}

/**
 * Returns `true` if the provided string does not contain
 * the substring `"Attributes"`, otherwise returns `false`
 */
function containsNoAttributes(str: string): boolean {
  return !str.match(/Attributes/);
}

/**
 * Given an instance of [Helmet](https://github.com/nfl/react-helmet)
 * this function returns an object of strings representing
 * tags to be rendered to the markup.
 */
function getHeadStrings(head: Object): HeadObject {
  const headTagNames: string[] = Object.keys(head).filter(containsNoAttributes);
  return headTagNames
    .map(headTagToString(head))
    .filter(isNotEmptyString)
    .join('\n');
}

/**
 * Returns a PageObject with head tags,
 * html attributes, body attributes,
 * and the React Application object rendered
 * to string.
 */
export default function renderToString(Application: Element<*>): PageObject {
  // renderToString must be called before Helmet is invoked to prevent memory leak
  const app: string = ReactDomServer.renderToString(Application);
  const head: Object = Helmet.renderStatic();
  const headTags: string = getHeadStrings(head);
  return {
    app,
    headTags,
    bodyAttributes: head.bodyAttributes.toString(),
    htmlAttributes: head.htmlAttributes.toString(),
  };
}
