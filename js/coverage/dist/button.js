/*!
  * Bootstrap button.js v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.Button = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var cov_2ylbqbdfo = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/button.js",
        hash = "d7cea0c05e7c807c3df67b966459f4b7492723ee",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/button.js",
      statementMap: {
        "0": {
          start: {
            line: 16,
            column: 28
          },
          end: {
            line: 16,
            column: 36
          }
        },
        "1": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 35
          }
        },
        "2": {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 39
          }
        },
        "3": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 42
          }
        },
        "4": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 39
          }
        },
        "5": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "6": {
          start: {
            line: 23,
            column: 18
          },
          end: {
            line: 27,
            column: 1
          }
        },
        "7": {
          start: {
            line: 29,
            column: 17
          },
          end: {
            line: 35,
            column: 1
          }
        },
        "8": {
          start: {
            line: 37,
            column: 14
          },
          end: {
            line: 41,
            column: 1
          }
        },
        "9": {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 51,
            column: 27
          }
        },
        "10": {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 18
          }
        },
        "11": {
          start: {
            line: 63,
            column: 29
          },
          end: {
            line: 63,
            column: 33
          }
        },
        "12": {
          start: {
            line: 64,
            column: 25
          },
          end: {
            line: 64,
            column: 29
          }
        },
        "13": {
          start: {
            line: 65,
            column: 24
          },
          end: {
            line: 67,
            column: 8
          }
        },
        "14": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 100,
            column: 5
          }
        },
        "15": {
          start: {
            line: 70,
            column: 20
          },
          end: {
            line: 70,
            column: 63
          }
        },
        "16": {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 99,
            column: 7
          }
        },
        "17": {
          start: {
            line: 73,
            column: 8
          },
          end: {
            line: 84,
            column: 9
          }
        },
        "18": {
          start: {
            line: 74,
            column: 10
          },
          end: {
            line: 83,
            column: 11
          }
        },
        "19": {
          start: {
            line: 76,
            column: 12
          },
          end: {
            line: 76,
            column: 38
          }
        },
        "20": {
          start: {
            line: 78,
            column: 34
          },
          end: {
            line: 78,
            column: 76
          }
        },
        "21": {
          start: {
            line: 80,
            column: 12
          },
          end: {
            line: 82,
            column: 13
          }
        },
        "22": {
          start: {
            line: 81,
            column: 14
          },
          end: {
            line: 81,
            column: 60
          }
        },
        "23": {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 95,
            column: 9
          }
        },
        "24": {
          start: {
            line: 87,
            column: 10
          },
          end: {
            line: 92,
            column: 11
          }
        },
        "25": {
          start: {
            line: 91,
            column: 12
          },
          end: {
            line: 91,
            column: 18
          }
        },
        "26": {
          start: {
            line: 93,
            column: 10
          },
          end: {
            line: 93,
            column: 77
          }
        },
        "27": {
          start: {
            line: 94,
            column: 10
          },
          end: {
            line: 94,
            column: 36
          }
        },
        "28": {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 97,
            column: 21
          }
        },
        "29": {
          start: {
            line: 98,
            column: 8
          },
          end: {
            line: 98,
            column: 30
          }
        },
        "30": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        "31": {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 104,
            column: 60
          }
        },
        "32": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        "33": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 52
          }
        },
        "34": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 41
          }
        },
        "35": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 24
          }
        },
        "36": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 131,
            column: 6
          }
        },
        "37": {
          start: {
            line: 121,
            column: 17
          },
          end: {
            line: 121,
            column: 39
          }
        },
        "38": {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 126,
            column: 7
          }
        },
        "39": {
          start: {
            line: 124,
            column: 8
          },
          end: {
            line: 124,
            column: 31
          }
        },
        "40": {
          start: {
            line: 125,
            column: 8
          },
          end: {
            line: 125,
            column: 36
          }
        },
        "41": {
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 130,
            column: 7
          }
        },
        "42": {
          start: {
            line: 129,
            column: 8
          },
          end: {
            line: 129,
            column: 22
          }
        },
        "43": {
          start: {
            line: 141,
            column: 0
          },
          end: {
            line: 156,
            column: 4
          }
        },
        "44": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 143,
            column: 26
          }
        },
        "45": {
          start: {
            line: 145,
            column: 17
          },
          end: {
            line: 145,
            column: 29
          }
        },
        "46": {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        "47": {
          start: {
            line: 148,
            column: 6
          },
          end: {
            line: 148,
            column: 49
          }
        },
        "48": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 151,
            column: 53
          }
        },
        "49": {
          start: {
            line: 154,
            column: 19
          },
          end: {
            line: 154,
            column: 62
          }
        },
        "50": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 155,
            column: 75
          }
        },
        "51": {
          start: {
            line: 164,
            column: 0
          },
          end: {
            line: 164,
            column: 36
          }
        },
        "52": {
          start: {
            line: 165,
            column: 0
          },
          end: {
            line: 165,
            column: 31
          }
        },
        "53": {
          start: {
            line: 166,
            column: 0
          },
          end: {
            line: 169,
            column: 1
          }
        },
        "54": {
          start: {
            line: 167,
            column: 2
          },
          end: {
            line: 167,
            column: 33
          }
        },
        "55": {
          start: {
            line: 168,
            column: 2
          },
          end: {
            line: 168,
            column: 32
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 50,
              column: 2
            },
            end: {
              line: 50,
              column: 3
            }
          },
          loc: {
            start: {
              line: 50,
              column: 23
            },
            end: {
              line: 52,
              column: 3
            }
          },
          line: 50
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 56,
              column: 2
            },
            end: {
              line: 56,
              column: 3
            }
          },
          loc: {
            start: {
              line: 56,
              column: 23
            },
            end: {
              line: 58,
              column: 3
            }
          },
          line: 56
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 62,
              column: 2
            },
            end: {
              line: 62,
              column: 3
            }
          },
          loc: {
            start: {
              line: 62,
              column: 11
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 62
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 112,
              column: 2
            },
            end: {
              line: 112,
              column: 3
            }
          },
          loc: {
            start: {
              line: 112,
              column: 12
            },
            end: {
              line: 115,
              column: 3
            }
          },
          line: 112
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 119,
              column: 2
            },
            end: {
              line: 119,
              column: 3
            }
          },
          loc: {
            start: {
              line: 119,
              column: 34
            },
            end: {
              line: 132,
              column: 3
            }
          },
          line: 119
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 120,
              column: 21
            },
            end: {
              line: 120,
              column: 22
            }
          },
          loc: {
            start: {
              line: 120,
              column: 33
            },
            end: {
              line: 131,
              column: 5
            }
          },
          line: 120
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 142,
              column: 57
            },
            end: {
              line: 142,
              column: 58
            }
          },
          loc: {
            start: {
              line: 142,
              column: 68
            },
            end: {
              line: 152,
              column: 3
            }
          },
          line: 142
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 153,
              column: 62
            },
            end: {
              line: 153,
              column: 63
            }
          },
          loc: {
            start: {
              line: 153,
              column: 73
            },
            end: {
              line: 156,
              column: 3
            }
          },
          line: 153
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 166,
              column: 24
            },
            end: {
              line: 166,
              column: 25
            }
          },
          loc: {
            start: {
              line: 166,
              column: 30
            },
            end: {
              line: 169,
              column: 1
            }
          },
          line: 166
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 69,
              column: 4
            },
            end: {
              line: 100,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 69,
              column: 4
            },
            end: {
              line: 100,
              column: 5
            }
          }, {
            start: {
              line: 69,
              column: 4
            },
            end: {
              line: 100,
              column: 5
            }
          }],
          line: 69
        },
        "1": {
          loc: {
            start: {
              line: 72,
              column: 6
            },
            end: {
              line: 99,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 72,
              column: 6
            },
            end: {
              line: 99,
              column: 7
            }
          }, {
            start: {
              line: 72,
              column: 6
            },
            end: {
              line: 99,
              column: 7
            }
          }],
          line: 72
        },
        "2": {
          loc: {
            start: {
              line: 73,
              column: 8
            },
            end: {
              line: 84,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 73,
              column: 8
            },
            end: {
              line: 84,
              column: 9
            }
          }, {
            start: {
              line: 73,
              column: 8
            },
            end: {
              line: 84,
              column: 9
            }
          }],
          line: 73
        },
        "3": {
          loc: {
            start: {
              line: 74,
              column: 10
            },
            end: {
              line: 83,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 74,
              column: 10
            },
            end: {
              line: 83,
              column: 11
            }
          }, {
            start: {
              line: 74,
              column: 10
            },
            end: {
              line: 83,
              column: 11
            }
          }],
          line: 74
        },
        "4": {
          loc: {
            start: {
              line: 74,
              column: 14
            },
            end: {
              line: 75,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 74,
              column: 14
            },
            end: {
              line: 74,
              column: 27
            }
          }, {
            start: {
              line: 75,
              column: 12
            },
            end: {
              line: 75,
              column: 62
            }
          }],
          line: 74
        },
        "5": {
          loc: {
            start: {
              line: 80,
              column: 12
            },
            end: {
              line: 82,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 80,
              column: 12
            },
            end: {
              line: 82,
              column: 13
            }
          }, {
            start: {
              line: 80,
              column: 12
            },
            end: {
              line: 82,
              column: 13
            }
          }],
          line: 80
        },
        "6": {
          loc: {
            start: {
              line: 86,
              column: 8
            },
            end: {
              line: 95,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 86,
              column: 8
            },
            end: {
              line: 95,
              column: 9
            }
          }, {
            start: {
              line: 86,
              column: 8
            },
            end: {
              line: 95,
              column: 9
            }
          }],
          line: 86
        },
        "7": {
          loc: {
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 92,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 92,
              column: 11
            }
          }, {
            start: {
              line: 87,
              column: 10
            },
            end: {
              line: 92,
              column: 11
            }
          }],
          line: 87
        },
        "8": {
          loc: {
            start: {
              line: 87,
              column: 14
            },
            end: {
              line: 90,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 87,
              column: 14
            },
            end: {
              line: 87,
              column: 44
            }
          }, {
            start: {
              line: 88,
              column: 12
            },
            end: {
              line: 88,
              column: 48
            }
          }, {
            start: {
              line: 89,
              column: 12
            },
            end: {
              line: 89,
              column: 48
            }
          }, {
            start: {
              line: 90,
              column: 12
            },
            end: {
              line: 90,
              column: 54
            }
          }],
          line: 87
        },
        "9": {
          loc: {
            start: {
              line: 102,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 102,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }, {
            start: {
              line: 102,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          }],
          line: 102
        },
        "10": {
          loc: {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }, {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          }],
          line: 107
        },
        "11": {
          loc: {
            start: {
              line: 123,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 123,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }, {
            start: {
              line: 123,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }],
          line: 123
        },
        "12": {
          loc: {
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 130,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 130,
              column: 7
            }
          }, {
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 130,
              column: 7
            }
          }],
          line: 128
        },
        "13": {
          loc: {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          }, {
            start: {
              line: 147,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          }],
          line: 147
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0, 0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2ylbqbdfo.s[0]++, 'button');
  var VERSION = (cov_2ylbqbdfo.s[1]++, '4.1.3');
  var DATA_KEY = (cov_2ylbqbdfo.s[2]++, 'bs.button');
  var EVENT_KEY = (cov_2ylbqbdfo.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2ylbqbdfo.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2ylbqbdfo.s[5]++, $.fn[NAME]);
  var ClassName = (cov_2ylbqbdfo.s[6]++, {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  });
  var Selector = (cov_2ylbqbdfo.s[7]++, {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  });
  var Event = (cov_2ylbqbdfo.s[8]++, {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      cov_2ylbqbdfo.f[0]++;
      cov_2ylbqbdfo.s[9]++;
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2ylbqbdfo.f[2]++;
      var triggerChangeEvent = (cov_2ylbqbdfo.s[11]++, true);
      var addAriaPressed = (cov_2ylbqbdfo.s[12]++, true);
      var rootElement = (cov_2ylbqbdfo.s[13]++, $(this._element).closest(Selector.DATA_TOGGLE)[0]);
      cov_2ylbqbdfo.s[14]++;

      if (rootElement) {
        cov_2ylbqbdfo.b[0][0]++;
        var input = (cov_2ylbqbdfo.s[15]++, this._element.querySelector(Selector.INPUT));
        cov_2ylbqbdfo.s[16]++;

        if (input) {
          cov_2ylbqbdfo.b[1][0]++;
          cov_2ylbqbdfo.s[17]++;

          if (input.type === 'radio') {
            cov_2ylbqbdfo.b[2][0]++;
            cov_2ylbqbdfo.s[18]++;

            if ((cov_2ylbqbdfo.b[4][0]++, input.checked) && (cov_2ylbqbdfo.b[4][1]++, this._element.classList.contains(ClassName.ACTIVE))) {
              cov_2ylbqbdfo.b[3][0]++;
              cov_2ylbqbdfo.s[19]++;
              triggerChangeEvent = false;
            } else {
              cov_2ylbqbdfo.b[3][1]++;
              var activeElement = (cov_2ylbqbdfo.s[20]++, rootElement.querySelector(Selector.ACTIVE));
              cov_2ylbqbdfo.s[21]++;

              if (activeElement) {
                cov_2ylbqbdfo.b[5][0]++;
                cov_2ylbqbdfo.s[22]++;
                $(activeElement).removeClass(ClassName.ACTIVE);
              } else {
                cov_2ylbqbdfo.b[5][1]++;
              }
            }
          } else {
            cov_2ylbqbdfo.b[2][1]++;
          }

          cov_2ylbqbdfo.s[23]++;

          if (triggerChangeEvent) {
            cov_2ylbqbdfo.b[6][0]++;
            cov_2ylbqbdfo.s[24]++;

            if ((cov_2ylbqbdfo.b[8][0]++, input.hasAttribute('disabled')) || (cov_2ylbqbdfo.b[8][1]++, rootElement.hasAttribute('disabled')) || (cov_2ylbqbdfo.b[8][2]++, input.classList.contains('disabled')) || (cov_2ylbqbdfo.b[8][3]++, rootElement.classList.contains('disabled'))) {
              cov_2ylbqbdfo.b[7][0]++;
              cov_2ylbqbdfo.s[25]++;
              return;
            } else {
              cov_2ylbqbdfo.b[7][1]++;
            }

            cov_2ylbqbdfo.s[26]++;
            input.checked = !this._element.classList.contains(ClassName.ACTIVE);
            cov_2ylbqbdfo.s[27]++;
            $(input).trigger('change');
          } else {
            cov_2ylbqbdfo.b[6][1]++;
          }

          cov_2ylbqbdfo.s[28]++;
          input.focus();
          cov_2ylbqbdfo.s[29]++;
          addAriaPressed = false;
        } else {
          cov_2ylbqbdfo.b[1][1]++;
        }
      } else {
        cov_2ylbqbdfo.b[0][1]++;
      }

      cov_2ylbqbdfo.s[30]++;

      if (addAriaPressed) {
        cov_2ylbqbdfo.b[9][0]++;
        cov_2ylbqbdfo.s[31]++;

        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
      } else {
        cov_2ylbqbdfo.b[9][1]++;
      }

      cov_2ylbqbdfo.s[32]++;

      if (triggerChangeEvent) {
        cov_2ylbqbdfo.b[10][0]++;
        cov_2ylbqbdfo.s[33]++;
        $(this._element).toggleClass(ClassName.ACTIVE);
      } else {
        cov_2ylbqbdfo.b[10][1]++;
      }
    };

    _proto.dispose = function dispose() {
      cov_2ylbqbdfo.f[3]++;
      cov_2ylbqbdfo.s[34]++;
      $.removeData(this._element, DATA_KEY);
      cov_2ylbqbdfo.s[35]++;
      this._element = null;
    }; // Static


    Button._jQueryInterface = function _jQueryInterface(config) {
      cov_2ylbqbdfo.f[4]++;
      cov_2ylbqbdfo.s[36]++;
      return this.each(function () {
        cov_2ylbqbdfo.f[5]++;
        var data = (cov_2ylbqbdfo.s[37]++, $(this).data(DATA_KEY));
        cov_2ylbqbdfo.s[38]++;

        if (!data) {
          cov_2ylbqbdfo.b[11][0]++;
          cov_2ylbqbdfo.s[39]++;
          data = new Button(this);
          cov_2ylbqbdfo.s[40]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_2ylbqbdfo.b[11][1]++;
        }

        cov_2ylbqbdfo.s[41]++;

        if (config === 'toggle') {
          cov_2ylbqbdfo.b[12][0]++;
          cov_2ylbqbdfo.s[42]++;
          data[config]();
        } else {
          cov_2ylbqbdfo.b[12][1]++;
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        cov_2ylbqbdfo.f[1]++;
        cov_2ylbqbdfo.s[10]++;
        return VERSION;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_2ylbqbdfo.s[43]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    cov_2ylbqbdfo.f[6]++;
    cov_2ylbqbdfo.s[44]++;
    event.preventDefault();
    var button = (cov_2ylbqbdfo.s[45]++, event.target);
    cov_2ylbqbdfo.s[46]++;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      cov_2ylbqbdfo.b[13][0]++;
      cov_2ylbqbdfo.s[47]++;
      button = $(button).closest(Selector.BUTTON);
    } else {
      cov_2ylbqbdfo.b[13][1]++;
    }

    cov_2ylbqbdfo.s[48]++;

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    cov_2ylbqbdfo.f[7]++;
    var button = (cov_2ylbqbdfo.s[49]++, $(event.target).closest(Selector.BUTTON)[0]);
    cov_2ylbqbdfo.s[50]++;
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2ylbqbdfo.s[51]++;
  $.fn[NAME] = Button._jQueryInterface;
  cov_2ylbqbdfo.s[52]++;
  $.fn[NAME].Constructor = Button;
  cov_2ylbqbdfo.s[53]++;

  $.fn[NAME].noConflict = function () {
    cov_2ylbqbdfo.f[8]++;
    cov_2ylbqbdfo.s[54]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2ylbqbdfo.s[55]++;
    return Button._jQueryInterface;
  };

  return Button;

})));
//# sourceMappingURL=button.js.map
