# front-matter-html

> Parse Front Matter from an HTML comment

[![Travis](https://img.shields.io/travis/gakimball/front-matter-html.svg?maxAge=2592000)](https://travis-ci.org/gakimball/front-matter-html) [![npm](https://img.shields.io/npm/v/front-matter-html.svg?maxAge=2592000)](https://www.npmjs.com/package/front-matter-html)

## Installation

```bash
npm install front-matter-html
```

## Usage

```js
const fm = require('front-matter-html');

const html = `<!--
kittens: true
puppies: true
lizards: false
-->

<!doctype html>
<html>
  <!-- ... -->
</html>
`;

const content = fm(html);
```

## API

### fm(html)

Parse YAML Front Matter from an HTML comment at the top of an HTML document.

- **html** (String): input HTML.

Returns an object with these properties:

- **attributes** (Object): extracted YAML.
- **body** (String): HTML without Front Matter comment.
- **frontmatter** (String): original YAML string.

### fm.test(html)

Test if an HTML document contains a Front Matter block within `<!-- -->`.

Returns `true` or `false`.

## Local Development

```bash
git clone https://github.com/gakimball/front-matter-html
cd front-matter-html
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
