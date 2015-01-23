'use strict';

module.exports = function commaSplit(stringToSplit, options) {
  if (typeof stringToSplit != 'string') {
    throw new TypeError('comma-split expects a string');
  }

  options = options || {};

  if (options.ignoreWhitespace) {
    var splitRegex = /,/;
  } else if (options.ignoreTrailingWhitespace) {
    var splitRegex = /,\s*/;
  } else if (options.ignoreLeadingWhitespace) {
    var splitRegex = /\s*,/;
  } else {
    var splitRegex = /\s*,\s*/;
  }

  return stringToSplit.split(splitRegex);
}
