"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fetch = _interopRequireDefault(require("./utils/fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Stats {
  constructor() {
    this.fetch = new _fetch.default();
  }

  async pkg({
    start,
    end,
    pkg
  }) {
    try {
      return await this.fetch.get({
        start,
        end,
        pkg
      });
    } catch (error) {
      return new Error(error);
    }
  }

}

exports.default = Stats;