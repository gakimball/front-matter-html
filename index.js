'use strict';

const fm = require('front-matter');

/**
 * Strip the HTML comments from a Front Matter block, so the front-matter library can properly parse it.
 * @param {String} html - Input HTML.
 * @returns {String} Modified HTML.
 */
const parse = html => {
  // RegExp to find HTML comment at the start of a string
  const rx = /^.*<!--\n([\s\S]+:[\s\S]+)\n-->/m;
  const match = rx.exec(html);

  if (match) {
    // Remove the HTML comment delimiters, so front-matter can parse it
    return html.replace(match[0], `---\n${match[1]}\n---`);
  }

  return html;
};

/**
 * Parse YAML Front Matter from an HTML comment at the top of an HTML document.
 * @param {String} html - Input HTML.
 * @returns {Object} Output from front-matter library.
 */
module.exports = html => fm(parse(html));

/**
 * Test if an HTML document contains a Front Matter block within `<!-- -->`.
 * @param {String} html - Input HTML.
 * @returns {Boolean}
 */
module.exports.test = html => fm.test(parse(html));
