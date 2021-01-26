"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQuotesList = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchQuotesList = function fetchQuotesList() {
  var response;
  return regeneratorRuntime.async(function fetchQuotesList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:9096/quotes"));

        case 3:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", []);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.fetchQuotesList = fetchQuotesList;