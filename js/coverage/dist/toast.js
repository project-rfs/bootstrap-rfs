/*!
  * Bootstrap toast.js v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Toast = factory(global.jQuery,global.Util));
}(this, (function ($,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var cov_6cmj9vu4f = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/toast.js",
        hash = "714ca64a84b32e5cb1c8d8362864bd5e3645b775",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/toast.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 14
          },
          end: {
            line: 220,
            column: 5
          }
        },
        "1": {
          start: {
            line: 18,
            column: 29
          },
          end: {
            line: 18,
            column: 36
          }
        },
        "2": {
          start: {
            line: 19,
            column: 29
          },
          end: {
            line: 19,
            column: 36
          }
        },
        "3": {
          start: {
            line: 20,
            column: 29
          },
          end: {
            line: 20,
            column: 39
          }
        },
        "4": {
          start: {
            line: 21,
            column: 29
          },
          end: {
            line: 21,
            column: 43
          }
        },
        "5": {
          start: {
            line: 22,
            column: 29
          },
          end: {
            line: 22,
            column: 39
          }
        },
        "6": {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 30,
            column: 3
          }
        },
        "7": {
          start: {
            line: 32,
            column: 20
          },
          end: {
            line: 36,
            column: 3
          }
        },
        "8": {
          start: {
            line: 38,
            column: 22
          },
          end: {
            line: 42,
            column: 3
          }
        },
        "9": {
          start: {
            line: 44,
            column: 18
          },
          end: {
            line: 48,
            column: 3
          }
        },
        "10": {
          start: {
            line: 50,
            column: 19
          },
          end: {
            line: 52,
            column: 3
          }
        },
        "11": {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 62,
            column: 29
          }
        },
        "12": {
          start: {
            line: 63,
            column: 6
          },
          end: {
            line: 63,
            column: 45
          }
        },
        "13": {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 64,
            column: 26
          }
        },
        "14": {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 65,
            column: 26
          }
        },
        "15": {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 71,
            column: 20
          }
        },
        "16": {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 75,
            column: 24
          }
        },
        "17": {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 81,
            column: 42
          }
        },
        "18": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 85,
            column: 7
          }
        },
        "19": {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 84,
            column: 51
          }
        },
        "20": {
          start: {
            line: 87,
            column: 23
          },
          end: {
            line: 93,
            column: 7
          }
        },
        "21": {
          start: {
            line: 88,
            column: 8
          },
          end: {
            line: 88,
            column: 45
          }
        },
        "22": {
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        },
        "23": {
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 91,
            column: 21
          }
        },
        "24": {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 95,
            column: 49
          }
        },
        "25": {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 104,
            column: 7
          }
        },
        "26": {
          start: {
            line: 97,
            column: 35
          },
          end: {
            line: 97,
            column: 87
          }
        },
        "27": {
          start: {
            line: 99,
            column: 8
          },
          end: {
            line: 101,
            column: 51
          }
        },
        "28": {
          start: {
            line: 103,
            column: 8
          },
          end: {
            line: 103,
            column: 18
          }
        },
        "29": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        },
        "30": {
          start: {
            line: 109,
            column: 8
          },
          end: {
            line: 109,
            column: 14
          }
        },
        "31": {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 112,
            column: 42
          }
        },
        "32": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 120,
            column: 7
          }
        },
        "33": {
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 115,
            column: 21
          }
        },
        "34": {
          start: {
            line: 117,
            column: 8
          },
          end: {
            line: 119,
            column: 30
          }
        },
        "35": {
          start: {
            line: 118,
            column: 10
          },
          end: {
            line: 118,
            column: 23
          }
        },
        "36": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 124,
            column: 33
          }
        },
        "37": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 26
          }
        },
        "38": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 129,
            column: 7
          }
        },
        "39": {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 54
          }
        },
        "40": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 131,
            column: 47
          }
        },
        "41": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 133,
            column: 43
          }
        },
        "42": {
          start: {
            line: 134,
            column: 6
          },
          end: {
            line: 134,
            column: 26
          }
        },
        "43": {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 135,
            column: 26
          }
        },
        "44": {
          start: {
            line: 141,
            column: 6
          },
          end: {
            line: 145,
            column: 7
          }
        },
        "45": {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 151,
            column: 7
          }
        },
        "46": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 19
          }
        },
        "47": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 161,
            column: 7
          }
        },
        "48": {
          start: {
            line: 160,
            column: 14
          },
          end: {
            line: 160,
            column: 29
          }
        },
        "49": {
          start: {
            line: 165,
            column: 23
          },
          end: {
            line: 167,
            column: 7
          }
        },
        "50": {
          start: {
            line: 166,
            column: 8
          },
          end: {
            line: 166,
            column: 46
          }
        },
        "51": {
          start: {
            line: 169,
            column: 6
          },
          end: {
            line: 169,
            column: 52
          }
        },
        "52": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 179,
            column: 7
          }
        },
        "53": {
          start: {
            line: 172,
            column: 35
          },
          end: {
            line: 172,
            column: 87
          }
        },
        "54": {
          start: {
            line: 174,
            column: 8
          },
          end: {
            line: 176,
            column: 51
          }
        },
        "55": {
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 178,
            column: 18
          }
        },
        "56": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 202,
            column: 8
          }
        },
        "57": {
          start: {
            line: 186,
            column: 25
          },
          end: {
            line: 186,
            column: 32
          }
        },
        "58": {
          start: {
            line: 187,
            column: 25
          },
          end: {
            line: 187,
            column: 48
          }
        },
        "59": {
          start: {
            line: 188,
            column: 25
          },
          end: {
            line: 188,
            column: 61
          }
        },
        "60": {
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 193,
            column: 9
          }
        },
        "61": {
          start: {
            line: 191,
            column: 10
          },
          end: {
            line: 191,
            column: 41
          }
        },
        "62": {
          start: {
            line: 192,
            column: 10
          },
          end: {
            line: 192,
            column: 39
          }
        },
        "63": {
          start: {
            line: 195,
            column: 8
          },
          end: {
            line: 201,
            column: 9
          }
        },
        "64": {
          start: {
            line: 196,
            column: 10
          },
          end: {
            line: 198,
            column: 11
          }
        },
        "65": {
          start: {
            line: 197,
            column: 12
          },
          end: {
            line: 197,
            column: 62
          }
        },
        "66": {
          start: {
            line: 200,
            column: 10
          },
          end: {
            line: 200,
            column: 28
          }
        },
        "67": {
          start: {
            line: 212,
            column: 2
          },
          end: {
            line: 212,
            column: 49
          }
        },
        "68": {
          start: {
            line: 213,
            column: 2
          },
          end: {
            line: 213,
            column: 32
          }
        },
        "69": {
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 217,
            column: 3
          }
        },
        "70": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 35
          }
        },
        "71": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 33
          }
        },
        "72": {
          start: {
            line: 219,
            column: 2
          },
          end: {
            line: 219,
            column: 14
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 11,
              column: 15
            },
            end: {
              line: 11,
              column: 16
            }
          },
          loc: {
            start: {
              line: 11,
              column: 22
            },
            end: {
              line: 220,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 61,
              column: 5
            }
          },
          loc: {
            start: {
              line: 61,
              column: 33
            },
            end: {
              line: 66,
              column: 5
            }
          },
          line: 61
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 70,
              column: 5
            }
          },
          loc: {
            start: {
              line: 70,
              column: 25
            },
            end: {
              line: 72,
              column: 5
            }
          },
          line: 70
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 74,
              column: 4
            },
            end: {
              line: 74,
              column: 5
            }
          },
          loc: {
            start: {
              line: 74,
              column: 29
            },
            end: {
              line: 76,
              column: 5
            }
          },
          line: 74
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 80,
              column: 5
            }
          },
          loc: {
            start: {
              line: 80,
              column: 11
            },
            end: {
              line: 105,
              column: 5
            }
          },
          line: 80
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 87,
              column: 23
            },
            end: {
              line: 87,
              column: 24
            }
          },
          loc: {
            start: {
              line: 87,
              column: 29
            },
            end: {
              line: 93,
              column: 7
            }
          },
          line: 87
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 107,
              column: 4
            },
            end: {
              line: 107,
              column: 5
            }
          },
          loc: {
            start: {
              line: 107,
              column: 25
            },
            end: {
              line: 121,
              column: 5
            }
          },
          line: 107
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 117,
              column: 35
            },
            end: {
              line: 117,
              column: 36
            }
          },
          loc: {
            start: {
              line: 117,
              column: 41
            },
            end: {
              line: 119,
              column: 9
            }
          },
          line: 117
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 123,
              column: 5
            }
          },
          loc: {
            start: {
              line: 123,
              column: 14
            },
            end: {
              line: 136,
              column: 5
            }
          },
          line: 123
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 140,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          },
          loc: {
            start: {
              line: 140,
              column: 23
            },
            end: {
              line: 154,
              column: 5
            }
          },
          line: 140
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 156,
              column: 5
            }
          },
          loc: {
            start: {
              line: 156,
              column: 20
            },
            end: {
              line: 162,
              column: 5
            }
          },
          line: 156
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 160,
              column: 8
            },
            end: {
              line: 160,
              column: 9
            }
          },
          loc: {
            start: {
              line: 160,
              column: 14
            },
            end: {
              line: 160,
              column: 29
            }
          },
          line: 160
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 164,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          },
          loc: {
            start: {
              line: 164,
              column: 13
            },
            end: {
              line: 180,
              column: 5
            }
          },
          line: 164
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 165,
              column: 23
            },
            end: {
              line: 165,
              column: 24
            }
          },
          loc: {
            start: {
              line: 165,
              column: 29
            },
            end: {
              line: 167,
              column: 7
            }
          },
          line: 165
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 184,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          },
          loc: {
            start: {
              line: 184,
              column: 36
            },
            end: {
              line: 203,
              column: 5
            }
          },
          line: 184
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 185,
              column: 23
            },
            end: {
              line: 185,
              column: 24
            }
          },
          loc: {
            start: {
              line: 185,
              column: 35
            },
            end: {
              line: 202,
              column: 7
            }
          },
          line: 185
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 214,
              column: 27
            },
            end: {
              line: 214,
              column: 28
            }
          },
          loc: {
            start: {
              line: 214,
              column: 33
            },
            end: {
              line: 217,
              column: 3
            }
          },
          line: 214
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 83,
              column: 6
            },
            end: {
              line: 85,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 6
            },
            end: {
              line: 85,
              column: 7
            }
          }, {
            start: {
              line: 83,
              column: 6
            },
            end: {
              line: 85,
              column: 7
            }
          }],
          line: 83
        },
        "1": {
          loc: {
            start: {
              line: 90,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 90,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          }, {
            start: {
              line: 90,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          }],
          line: 90
        },
        "2": {
          loc: {
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          }, {
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 104,
              column: 7
            }
          }],
          line: 96
        },
        "3": {
          loc: {
            start: {
              line: 108,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 108,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }, {
            start: {
              line: 108,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }],
          line: 108
        },
        "4": {
          loc: {
            start: {
              line: 114,
              column: 6
            },
            end: {
              line: 120,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 114,
              column: 6
            },
            end: {
              line: 120,
              column: 7
            }
          }, {
            start: {
              line: 114,
              column: 6
            },
            end: {
              line: 120,
              column: 7
            }
          }],
          line: 114
        },
        "5": {
          loc: {
            start: {
              line: 127,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 127,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          }, {
            start: {
              line: 127,
              column: 6
            },
            end: {
              line: 129,
              column: 7
            }
          }],
          line: 127
        },
        "6": {
          loc: {
            start: {
              line: 144,
              column: 11
            },
            end: {
              line: 144,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 144,
              column: 50
            },
            end: {
              line: 144,
              column: 56
            }
          }, {
            start: {
              line: 144,
              column: 59
            },
            end: {
              line: 144,
              column: 61
            }
          }],
          line: 144
        },
        "7": {
          loc: {
            start: {
              line: 144,
              column: 11
            },
            end: {
              line: 144,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 144,
              column: 11
            },
            end: {
              line: 144,
              column: 37
            }
          }, {
            start: {
              line: 144,
              column: 41
            },
            end: {
              line: 144,
              column: 47
            }
          }],
          line: 144
        },
        "8": {
          loc: {
            start: {
              line: 171,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 171,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          }, {
            start: {
              line: 171,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          }],
          line: 171
        },
        "9": {
          loc: {
            start: {
              line: 188,
              column: 25
            },
            end: {
              line: 188,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 188,
              column: 25
            },
            end: {
              line: 188,
              column: 51
            }
          }, {
            start: {
              line: 188,
              column: 55
            },
            end: {
              line: 188,
              column: 61
            }
          }],
          line: 188
        },
        "10": {
          loc: {
            start: {
              line: 190,
              column: 8
            },
            end: {
              line: 193,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 190,
              column: 8
            },
            end: {
              line: 193,
              column: 9
            }
          }, {
            start: {
              line: 190,
              column: 8
            },
            end: {
              line: 193,
              column: 9
            }
          }],
          line: 190
        },
        "11": {
          loc: {
            start: {
              line: 195,
              column: 8
            },
            end: {
              line: 201,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 195,
              column: 8
            },
            end: {
              line: 201,
              column: 9
            }
          }, {
            start: {
              line: 195,
              column: 8
            },
            end: {
              line: 201,
              column: 9
            }
          }],
          line: 195
        },
        "12": {
          loc: {
            start: {
              line: 196,
              column: 10
            },
            end: {
              line: 198,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 196,
              column: 10
            },
            end: {
              line: 198,
              column: 11
            }
          }, {
            start: {
              line: 196,
              column: 10
            },
            end: {
              line: 198,
              column: 11
            }
          }],
          line: 196
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
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0,
        "62": 0,
        "63": 0,
        "64": 0,
        "65": 0,
        "66": 0,
        "67": 0,
        "68": 0,
        "69": 0,
        "70": 0,
        "71": 0,
        "72": 0
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
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0
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
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0]
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
   * Bootstrap (v4.1.3): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Toast = (cov_6cmj9vu4f.s[0]++, function ($$$1) {
    cov_6cmj9vu4f.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_6cmj9vu4f.s[1]++, 'toast');
    var VERSION = (cov_6cmj9vu4f.s[2]++, '4.1.3');
    var DATA_KEY = (cov_6cmj9vu4f.s[3]++, 'bs.toast');
    var EVENT_KEY = (cov_6cmj9vu4f.s[4]++, "." + DATA_KEY);
    var JQUERY_NO_CONFLICT = (cov_6cmj9vu4f.s[5]++, $$$1.fn[NAME]);
    var Event = (cov_6cmj9vu4f.s[6]++, {
      CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY
    });
    var ClassName = (cov_6cmj9vu4f.s[7]++, {
      FADE: 'fade',
      HIDE: 'hide',
      SHOW: 'show'
    });
    var DefaultType = (cov_6cmj9vu4f.s[8]++, {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    });
    var Default = (cov_6cmj9vu4f.s[9]++, {
      animation: true,
      autohide: true,
      delay: 500
    });
    var Selector = (cov_6cmj9vu4f.s[10]++, {
      DATA_DISMISS: '[data-dismiss="toast"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Toast =
    /*#__PURE__*/
    function () {
      function Toast(element, config) {
        cov_6cmj9vu4f.f[1]++;
        cov_6cmj9vu4f.s[11]++;
        this._element = element;
        cov_6cmj9vu4f.s[12]++;
        this._config = this._getConfig(config);
        cov_6cmj9vu4f.s[13]++;
        this._timeout = null;
        cov_6cmj9vu4f.s[14]++;

        this._setListeners();
      } // Getters


      var _proto = Toast.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        cov_6cmj9vu4f.f[4]++;
        cov_6cmj9vu4f.s[17]++;
        $$$1(this._element).trigger(Event.SHOW);
        cov_6cmj9vu4f.s[18]++;

        if (this._config.animation) {
          cov_6cmj9vu4f.b[0][0]++;
          cov_6cmj9vu4f.s[19]++;

          this._element.classList.add(ClassName.FADE);
        } else {
          cov_6cmj9vu4f.b[0][1]++;
        }

        cov_6cmj9vu4f.s[20]++;

        var complete = function complete() {
          cov_6cmj9vu4f.f[5]++;
          cov_6cmj9vu4f.s[21]++;
          $$$1(_this._element).trigger(Event.SHOWN);
          cov_6cmj9vu4f.s[22]++;

          if (_this._config.autohide) {
            cov_6cmj9vu4f.b[1][0]++;
            cov_6cmj9vu4f.s[23]++;

            _this.hide();
          } else {
            cov_6cmj9vu4f.b[1][1]++;
          }
        };

        cov_6cmj9vu4f.s[24]++;

        this._element.classList.add(ClassName.SHOW);

        cov_6cmj9vu4f.s[25]++;

        if (this._config.animation) {
          cov_6cmj9vu4f.b[2][0]++;
          var transitionDuration = (cov_6cmj9vu4f.s[26]++, Util.getTransitionDurationFromElement(this._element));
          cov_6cmj9vu4f.s[27]++;
          $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_6cmj9vu4f.b[2][1]++;
          cov_6cmj9vu4f.s[28]++;
          complete();
        }
      };

      _proto.hide = function hide(withoutTimeout) {
        var _this2 = this;

        cov_6cmj9vu4f.f[6]++;
        cov_6cmj9vu4f.s[29]++;

        if (!this._element.classList.contains(ClassName.SHOW)) {
          cov_6cmj9vu4f.b[3][0]++;
          cov_6cmj9vu4f.s[30]++;
          return;
        } else {
          cov_6cmj9vu4f.b[3][1]++;
        }

        cov_6cmj9vu4f.s[31]++;
        $$$1(this._element).trigger(Event.HIDE);
        cov_6cmj9vu4f.s[32]++;

        if (withoutTimeout) {
          cov_6cmj9vu4f.b[4][0]++;
          cov_6cmj9vu4f.s[33]++;

          this._close();
        } else {
          cov_6cmj9vu4f.b[4][1]++;
          cov_6cmj9vu4f.s[34]++;
          this._timeout = setTimeout(function () {
            cov_6cmj9vu4f.f[7]++;
            cov_6cmj9vu4f.s[35]++;

            _this2._close();
          }, this._config.delay);
        }
      };

      _proto.dispose = function dispose() {
        cov_6cmj9vu4f.f[8]++;
        cov_6cmj9vu4f.s[36]++;
        clearTimeout(this._timeout);
        cov_6cmj9vu4f.s[37]++;
        this._timeout = null;
        cov_6cmj9vu4f.s[38]++;

        if (this._element.classList.contains(ClassName.SHOW)) {
          cov_6cmj9vu4f.b[5][0]++;
          cov_6cmj9vu4f.s[39]++;

          this._element.classList.remove(ClassName.SHOW);
        } else {
          cov_6cmj9vu4f.b[5][1]++;
        }

        cov_6cmj9vu4f.s[40]++;
        $$$1(this._element).off(Event.CLICK_DISMISS);
        cov_6cmj9vu4f.s[41]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_6cmj9vu4f.s[42]++;
        this._element = null;
        cov_6cmj9vu4f.s[43]++;
        this._config = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        cov_6cmj9vu4f.f[9]++;
        cov_6cmj9vu4f.s[44]++;
        config = _objectSpread({}, Default, $$$1(this._element).data(), (cov_6cmj9vu4f.b[7][0]++, typeof config === 'object') && (cov_6cmj9vu4f.b[7][1]++, config) ? (cov_6cmj9vu4f.b[6][0]++, config) : (cov_6cmj9vu4f.b[6][1]++, {}));
        cov_6cmj9vu4f.s[45]++;
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        cov_6cmj9vu4f.s[46]++;
        return config;
      };

      _proto._setListeners = function _setListeners() {
        var _this3 = this;

        cov_6cmj9vu4f.f[10]++;
        cov_6cmj9vu4f.s[47]++;
        $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function () {
          cov_6cmj9vu4f.f[11]++;
          cov_6cmj9vu4f.s[48]++;
          return _this3.hide(true);
        });
      };

      _proto._close = function _close() {
        var _this4 = this;

        cov_6cmj9vu4f.f[12]++;
        cov_6cmj9vu4f.s[49]++;

        var complete = function complete() {
          cov_6cmj9vu4f.f[13]++;
          cov_6cmj9vu4f.s[50]++;
          $$$1(_this4._element).trigger(Event.HIDDEN);
        };

        cov_6cmj9vu4f.s[51]++;

        this._element.classList.remove(ClassName.SHOW);

        cov_6cmj9vu4f.s[52]++;

        if (this._config.animation) {
          cov_6cmj9vu4f.b[8][0]++;
          var transitionDuration = (cov_6cmj9vu4f.s[53]++, Util.getTransitionDurationFromElement(this._element));
          cov_6cmj9vu4f.s[54]++;
          $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_6cmj9vu4f.b[8][1]++;
          cov_6cmj9vu4f.s[55]++;
          complete();
        }
      }; // Static


      Toast._jQueryInterface = function _jQueryInterface(config) {
        cov_6cmj9vu4f.f[14]++;
        cov_6cmj9vu4f.s[56]++;
        return this.each(function () {
          cov_6cmj9vu4f.f[15]++;
          var $element = (cov_6cmj9vu4f.s[57]++, $$$1(this));
          var data = (cov_6cmj9vu4f.s[58]++, $element.data(DATA_KEY));

          var _config = (cov_6cmj9vu4f.s[59]++, (cov_6cmj9vu4f.b[9][0]++, typeof config === 'object') && (cov_6cmj9vu4f.b[9][1]++, config));

          cov_6cmj9vu4f.s[60]++;

          if (!data) {
            cov_6cmj9vu4f.b[10][0]++;
            cov_6cmj9vu4f.s[61]++;
            data = new Toast(this, _config);
            cov_6cmj9vu4f.s[62]++;
            $element.data(DATA_KEY, data);
          } else {
            cov_6cmj9vu4f.b[10][1]++;
          }

          cov_6cmj9vu4f.s[63]++;

          if (typeof config === 'string') {
            cov_6cmj9vu4f.b[11][0]++;
            cov_6cmj9vu4f.s[64]++;

            if (typeof data[config] === 'undefined') {
              cov_6cmj9vu4f.b[12][0]++;
              cov_6cmj9vu4f.s[65]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_6cmj9vu4f.b[12][1]++;
            }

            cov_6cmj9vu4f.s[66]++;
            data[config](this);
          } else {
            cov_6cmj9vu4f.b[11][1]++;
          }
        });
      };

      _createClass(Toast, null, [{
        key: "VERSION",
        get: function get() {
          cov_6cmj9vu4f.f[2]++;
          cov_6cmj9vu4f.s[15]++;
          return VERSION;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          cov_6cmj9vu4f.f[3]++;
          cov_6cmj9vu4f.s[16]++;
          return DefaultType;
        }
      }]);

      return Toast;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    cov_6cmj9vu4f.s[67]++;
    $$$1.fn[NAME] = Toast._jQueryInterface;
    cov_6cmj9vu4f.s[68]++;
    $$$1.fn[NAME].Constructor = Toast;
    cov_6cmj9vu4f.s[69]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_6cmj9vu4f.f[16]++;
      cov_6cmj9vu4f.s[70]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_6cmj9vu4f.s[71]++;
      return Toast._jQueryInterface;
    };

    cov_6cmj9vu4f.s[72]++;
    return Toast;
  }($));

  return Toast;

})));
//# sourceMappingURL=toast.js.map
