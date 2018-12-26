/*!
  * Bootstrap tab.js v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  global.Tab = factory(global.jQuery,global.Util);
}(typeof self !== 'undefined' ? self : this, function ($,Util) { 'use strict';

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

  var cov_2hi8a582b6 = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/tab.js",
        hash = "ab9c7e785ce5b2a323f04e7b2831d60f1ab1578c",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/tab.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 32
          }
        },
        "1": {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 34
          }
        },
        "2": {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 35
          }
        },
        "3": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 41
          }
        },
        "4": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 38
          }
        },
        "5": {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 37
          }
        },
        "6": {
          start: {
            line: 24,
            column: 14
          },
          end: {
            line: 30,
            column: 1
          }
        },
        "7": {
          start: {
            line: 32,
            column: 18
          },
          end: {
            line: 38,
            column: 1
          }
        },
        "8": {
          start: {
            line: 40,
            column: 17
          },
          end: {
            line: 48,
            column: 1
          }
        },
        "9": {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 27
          }
        },
        "10": {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 18
          }
        },
        "11": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        "12": {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 12
          }
        },
        "13": {
          start: {
            line: 79,
            column: 24
          },
          end: {
            line: 79,
            column: 76
          }
        },
        "14": {
          start: {
            line: 80,
            column: 21
          },
          end: {
            line: 80,
            column: 63
          }
        },
        "15": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        },
        "16": {
          start: {
            line: 83,
            column: 27
          },
          end: {
            line: 83,
            column: 128
          }
        },
        "17": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 63
          }
        },
        "18": {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 85,
            column: 46
          }
        },
        "19": {
          start: {
            line: 88,
            column: 22
          },
          end: {
            line: 90,
            column: 6
          }
        },
        "20": {
          start: {
            line: 92,
            column: 22
          },
          end: {
            line: 94,
            column: 6
          }
        },
        "21": {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        },
        "22": {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 97,
            column: 36
          }
        },
        "23": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 39
          }
        },
        "24": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 105,
            column: 5
          }
        },
        "25": {
          start: {
            line: 104,
            column: 6
          },
          end: {
            line: 104,
            column: 12
          }
        },
        "26": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        "27": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 47
          }
        },
        "28": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 114,
            column: 5
          }
        },
        "29": {
          start: {
            line: 116,
            column: 21
          },
          end: {
            line: 127,
            column: 5
          }
        },
        "30": {
          start: {
            line: 117,
            column: 26
          },
          end: {
            line: 119,
            column: 8
          }
        },
        "31": {
          start: {
            line: 121,
            column: 25
          },
          end: {
            line: 123,
            column: 8
          }
        },
        "32": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 38
          }
        },
        "33": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 42
          }
        },
        "34": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        "35": {
          start: {
            line: 130,
            column: 6
          },
          end: {
            line: 130,
            column: 57
          }
        },
        "36": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 132,
            column: 16
          }
        },
        "37": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 41
          }
        },
        "38": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 138,
            column: 24
          }
        },
        "39": {
          start: {
            line: 144,
            column: 27
          },
          end: {
            line: 146,
            column: 46
          }
        },
        "40": {
          start: {
            line: 148,
            column: 19
          },
          end: {
            line: 148,
            column: 36
          }
        },
        "41": {
          start: {
            line: 149,
            column: 28
          },
          end: {
            line: 149,
            column: 86
          }
        },
        "42": {
          start: {
            line: 150,
            column: 21
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "43": {
          start: {
            line: 150,
            column: 27
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "44": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        },
        "45": {
          start: {
            line: 157,
            column: 33
          },
          end: {
            line: 157,
            column: 78
          }
        },
        "46": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 162,
            column: 49
          }
        },
        "47": {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 164,
            column: 16
          }
        },
        "48": {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 183,
            column: 5
          }
        },
        "49": {
          start: {
            line: 170,
            column: 6
          },
          end: {
            line: 170,
            column: 45
          }
        },
        "50": {
          start: {
            line: 172,
            column: 28
          },
          end: {
            line: 174,
            column: 10
          }
        },
        "51": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 178,
            column: 7
          }
        },
        "52": {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 177,
            column: 54
          }
        },
        "53": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 182,
            column: 7
          }
        },
        "54": {
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 181,
            column: 51
          }
        },
        "55": {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 185,
            column: 41
          }
        },
        "56": {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        "57": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 187,
            column: 49
          }
        },
        "58": {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 190,
            column: 24
          }
        },
        "59": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 39
          }
        },
        "60": {
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 203,
            column: 5
          }
        },
        "61": {
          start: {
            line: 194,
            column: 30
          },
          end: {
            line: 194,
            column: 70
          }
        },
        "62": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 200,
            column: 7
          }
        },
        "63": {
          start: {
            line: 197,
            column: 35
          },
          end: {
            line: 197,
            column: 108
          }
        },
        "64": {
          start: {
            line: 199,
            column: 8
          },
          end: {
            line: 199,
            column: 56
          }
        },
        "65": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 202,
            column: 49
          }
        },
        "66": {
          start: {
            line: 205,
            column: 4
          },
          end: {
            line: 207,
            column: 5
          }
        },
        "67": {
          start: {
            line: 206,
            column: 6
          },
          end: {
            line: 206,
            column: 16
          }
        },
        "68": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 228,
            column: 6
          }
        },
        "69": {
          start: {
            line: 214,
            column: 20
          },
          end: {
            line: 214,
            column: 27
          }
        },
        "70": {
          start: {
            line: 215,
            column: 17
          },
          end: {
            line: 215,
            column: 37
          }
        },
        "71": {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 220,
            column: 7
          }
        },
        "72": {
          start: {
            line: 218,
            column: 8
          },
          end: {
            line: 218,
            column: 28
          }
        },
        "73": {
          start: {
            line: 219,
            column: 8
          },
          end: {
            line: 219,
            column: 34
          }
        },
        "74": {
          start: {
            line: 222,
            column: 6
          },
          end: {
            line: 227,
            column: 7
          }
        },
        "75": {
          start: {
            line: 223,
            column: 8
          },
          end: {
            line: 225,
            column: 9
          }
        },
        "76": {
          start: {
            line: 224,
            column: 10
          },
          end: {
            line: 224,
            column: 60
          }
        },
        "77": {
          start: {
            line: 226,
            column: 8
          },
          end: {
            line: 226,
            column: 22
          }
        },
        "78": {
          start: {
            line: 238,
            column: 0
          },
          end: {
            line: 242,
            column: 4
          }
        },
        "79": {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 240,
            column: 26
          }
        },
        "80": {
          start: {
            line: 241,
            column: 4
          },
          end: {
            line: 241,
            column: 46
          }
        },
        "81": {
          start: {
            line: 250,
            column: 0
          },
          end: {
            line: 250,
            column: 33
          }
        },
        "82": {
          start: {
            line: 251,
            column: 0
          },
          end: {
            line: 251,
            column: 28
          }
        },
        "83": {
          start: {
            line: 252,
            column: 0
          },
          end: {
            line: 255,
            column: 1
          }
        },
        "84": {
          start: {
            line: 253,
            column: 2
          },
          end: {
            line: 253,
            column: 33
          }
        },
        "85": {
          start: {
            line: 254,
            column: 2
          },
          end: {
            line: 254,
            column: 29
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 57,
              column: 2
            },
            end: {
              line: 57,
              column: 3
            }
          },
          loc: {
            start: {
              line: 57,
              column: 23
            },
            end: {
              line: 59,
              column: 3
            }
          },
          line: 57
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 63,
              column: 2
            },
            end: {
              line: 63,
              column: 3
            }
          },
          loc: {
            start: {
              line: 63,
              column: 23
            },
            end: {
              line: 65,
              column: 3
            }
          },
          line: 63
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 69,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          },
          loc: {
            start: {
              line: 69,
              column: 9
            },
            end: {
              line: 134,
              column: 3
            }
          },
          line: 69
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 116,
              column: 21
            },
            end: {
              line: 116,
              column: 22
            }
          },
          loc: {
            start: {
              line: 116,
              column: 27
            },
            end: {
              line: 127,
              column: 5
            }
          },
          line: 116
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 136,
              column: 2
            },
            end: {
              line: 136,
              column: 3
            }
          },
          loc: {
            start: {
              line: 136,
              column: 12
            },
            end: {
              line: 139,
              column: 3
            }
          },
          line: 136
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 143,
              column: 2
            },
            end: {
              line: 143,
              column: 3
            }
          },
          loc: {
            start: {
              line: 143,
              column: 42
            },
            end: {
              line: 166,
              column: 3
            }
          },
          line: 143
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 150,
              column: 21
            },
            end: {
              line: 150,
              column: 22
            }
          },
          loc: {
            start: {
              line: 150,
              column: 27
            },
            end: {
              line: 154,
              column: 5
            }
          },
          line: 150
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 168,
              column: 2
            },
            end: {
              line: 168,
              column: 3
            }
          },
          loc: {
            start: {
              line: 168,
              column: 49
            },
            end: {
              line: 208,
              column: 3
            }
          },
          line: 168
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 212,
              column: 2
            },
            end: {
              line: 212,
              column: 3
            }
          },
          loc: {
            start: {
              line: 212,
              column: 34
            },
            end: {
              line: 229,
              column: 3
            }
          },
          line: 212
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 213,
              column: 21
            },
            end: {
              line: 213,
              column: 22
            }
          },
          loc: {
            start: {
              line: 213,
              column: 33
            },
            end: {
              line: 228,
              column: 5
            }
          },
          line: 213
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 239,
              column: 50
            },
            end: {
              line: 239,
              column: 51
            }
          },
          loc: {
            start: {
              line: 239,
              column: 67
            },
            end: {
              line: 242,
              column: 3
            }
          },
          line: 239
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 252,
              column: 24
            },
            end: {
              line: 252,
              column: 25
            }
          },
          loc: {
            start: {
              line: 252,
              column: 30
            },
            end: {
              line: 255,
              column: 1
            }
          },
          line: 252
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          }, {
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          }],
          line: 70
        },
        "1": {
          loc: {
            start: {
              line: 70,
              column: 8
            },
            end: {
              line: 73,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 70,
              column: 8
            },
            end: {
              line: 70,
              column: 32
            }
          }, {
            start: {
              line: 71,
              column: 8
            },
            end: {
              line: 71,
              column: 63
            }
          }, {
            start: {
              line: 72,
              column: 8
            },
            end: {
              line: 72,
              column: 51
            }
          }, {
            start: {
              line: 73,
              column: 8
            },
            end: {
              line: 73,
              column: 53
            }
          }],
          line: 70
        },
        "2": {
          loc: {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 86,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 86,
              column: 5
            }
          }, {
            start: {
              line: 82,
              column: 4
            },
            end: {
              line: 86,
              column: 5
            }
          }],
          line: 82
        },
        "3": {
          loc: {
            start: {
              line: 83,
              column: 27
            },
            end: {
              line: 83,
              column: 128
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 83,
              column: 92
            },
            end: {
              line: 83,
              column: 110
            }
          }, {
            start: {
              line: 83,
              column: 113
            },
            end: {
              line: 83,
              column: 128
            }
          }],
          line: 83
        },
        "4": {
          loc: {
            start: {
              line: 83,
              column: 27
            },
            end: {
              line: 83,
              column: 89
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 83,
              column: 27
            },
            end: {
              line: 83,
              column: 56
            }
          }, {
            start: {
              line: 83,
              column: 60
            },
            end: {
              line: 83,
              column: 89
            }
          }],
          line: 83
        },
        "5": {
          loc: {
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 98,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 98,
              column: 5
            }
          }, {
            start: {
              line: 96,
              column: 4
            },
            end: {
              line: 98,
              column: 5
            }
          }],
          line: 96
        },
        "6": {
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
        "7": {
          loc: {
            start: {
              line: 102,
              column: 8
            },
            end: {
              line: 103,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 102,
              column: 8
            },
            end: {
              line: 102,
              column: 38
            }
          }, {
            start: {
              line: 103,
              column: 8
            },
            end: {
              line: 103,
              column: 38
            }
          }],
          line: 102
        },
        "8": {
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
        "9": {
          loc: {
            start: {
              line: 129,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 129,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          }, {
            start: {
              line: 129,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          }],
          line: 129
        },
        "10": {
          loc: {
            start: {
              line: 144,
              column: 27
            },
            end: {
              line: 146,
              column: 46
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 145,
              column: 8
            },
            end: {
              line: 145,
              column: 45
            }
          }, {
            start: {
              line: 146,
              column: 8
            },
            end: {
              line: 146,
              column: 46
            }
          }],
          line: 144
        },
        "11": {
          loc: {
            start: {
              line: 144,
              column: 27
            },
            end: {
              line: 144,
              column: 100
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 144,
              column: 27
            },
            end: {
              line: 144,
              column: 36
            }
          }, {
            start: {
              line: 144,
              column: 41
            },
            end: {
              line: 144,
              column: 68
            }
          }, {
            start: {
              line: 144,
              column: 72
            },
            end: {
              line: 144,
              column: 99
            }
          }],
          line: 144
        },
        "12": {
          loc: {
            start: {
              line: 149,
              column: 28
            },
            end: {
              line: 149,
              column: 86
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 149,
              column: 28
            },
            end: {
              line: 149,
              column: 36
            }
          }, {
            start: {
              line: 149,
              column: 41
            },
            end: {
              line: 149,
              column: 47
            }
          }, {
            start: {
              line: 149,
              column: 51
            },
            end: {
              line: 149,
              column: 85
            }
          }],
          line: 149
        },
        "13": {
          loc: {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          }, {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          }],
          line: 156
        },
        "14": {
          loc: {
            start: {
              line: 156,
              column: 8
            },
            end: {
              line: 156,
              column: 33
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 156,
              column: 8
            },
            end: {
              line: 156,
              column: 14
            }
          }, {
            start: {
              line: 156,
              column: 18
            },
            end: {
              line: 156,
              column: 33
            }
          }],
          line: 156
        },
        "15": {
          loc: {
            start: {
              line: 169,
              column: 4
            },
            end: {
              line: 183,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 169,
              column: 4
            },
            end: {
              line: 183,
              column: 5
            }
          }, {
            start: {
              line: 169,
              column: 4
            },
            end: {
              line: 183,
              column: 5
            }
          }],
          line: 169
        },
        "16": {
          loc: {
            start: {
              line: 176,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 176,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }, {
            start: {
              line: 176,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }],
          line: 176
        },
        "17": {
          loc: {
            start: {
              line: 180,
              column: 6
            },
            end: {
              line: 182,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 180,
              column: 6
            },
            end: {
              line: 182,
              column: 7
            }
          }, {
            start: {
              line: 180,
              column: 6
            },
            end: {
              line: 182,
              column: 7
            }
          }],
          line: 180
        },
        "18": {
          loc: {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }, {
            start: {
              line: 186,
              column: 4
            },
            end: {
              line: 188,
              column: 5
            }
          }],
          line: 186
        },
        "19": {
          loc: {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 203,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 203,
              column: 5
            }
          }, {
            start: {
              line: 193,
              column: 4
            },
            end: {
              line: 203,
              column: 5
            }
          }],
          line: 193
        },
        "20": {
          loc: {
            start: {
              line: 193,
              column: 8
            },
            end: {
              line: 193,
              column: 85
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 193,
              column: 8
            },
            end: {
              line: 193,
              column: 26
            }
          }, {
            start: {
              line: 193,
              column: 30
            },
            end: {
              line: 193,
              column: 85
            }
          }],
          line: 193
        },
        "21": {
          loc: {
            start: {
              line: 196,
              column: 6
            },
            end: {
              line: 200,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 196,
              column: 6
            },
            end: {
              line: 200,
              column: 7
            }
          }, {
            start: {
              line: 196,
              column: 6
            },
            end: {
              line: 200,
              column: 7
            }
          }],
          line: 196
        },
        "22": {
          loc: {
            start: {
              line: 205,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 205,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          }, {
            start: {
              line: 205,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          }],
          line: 205
        },
        "23": {
          loc: {
            start: {
              line: 217,
              column: 6
            },
            end: {
              line: 220,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 217,
              column: 6
            },
            end: {
              line: 220,
              column: 7
            }
          }, {
            start: {
              line: 217,
              column: 6
            },
            end: {
              line: 220,
              column: 7
            }
          }],
          line: 217
        },
        "24": {
          loc: {
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 227,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 227,
              column: 7
            }
          }, {
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 227,
              column: 7
            }
          }],
          line: 222
        },
        "25": {
          loc: {
            start: {
              line: 223,
              column: 8
            },
            end: {
              line: 225,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 223,
              column: 8
            },
            end: {
              line: 225,
              column: 9
            }
          }, {
            start: {
              line: 223,
              column: 8
            },
            end: {
              line: 225,
              column: 9
            }
          }],
          line: 223
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
        "72": 0,
        "73": 0,
        "74": 0,
        "75": 0,
        "76": 0,
        "77": 0,
        "78": 0,
        "79": 0,
        "80": 0,
        "81": 0,
        "82": 0,
        "83": 0,
        "84": 0,
        "85": 0
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
        "11": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0, 0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0, 0],
        "12": [0, 0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0]
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
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2hi8a582b6.s[0]++, 'tab');
  var VERSION = (cov_2hi8a582b6.s[1]++, '4.2.1');
  var DATA_KEY = (cov_2hi8a582b6.s[2]++, 'bs.tab');
  var EVENT_KEY = (cov_2hi8a582b6.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2hi8a582b6.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2hi8a582b6.s[5]++, $.fn[NAME]);
  var Event = (cov_2hi8a582b6.s[6]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_2hi8a582b6.s[7]++, {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_2hi8a582b6.s[8]++, {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      cov_2hi8a582b6.f[0]++;
      cov_2hi8a582b6.s[9]++;
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_2hi8a582b6.f[2]++;
      cov_2hi8a582b6.s[11]++;

      if ((cov_2hi8a582b6.b[1][0]++, this._element.parentNode) && (cov_2hi8a582b6.b[1][1]++, this._element.parentNode.nodeType === Node.ELEMENT_NODE) && (cov_2hi8a582b6.b[1][2]++, $(this._element).hasClass(ClassName.ACTIVE)) || (cov_2hi8a582b6.b[1][3]++, $(this._element).hasClass(ClassName.DISABLED))) {
        cov_2hi8a582b6.b[0][0]++;
        cov_2hi8a582b6.s[12]++;
        return;
      } else {
        cov_2hi8a582b6.b[0][1]++;
      }

      var target;
      var previous;
      var listElement = (cov_2hi8a582b6.s[13]++, $(this._element).closest(Selector.NAV_LIST_GROUP)[0]);
      var selector = (cov_2hi8a582b6.s[14]++, Util.getSelectorFromElement(this._element));
      cov_2hi8a582b6.s[15]++;

      if (listElement) {
        cov_2hi8a582b6.b[2][0]++;
        var itemSelector = (cov_2hi8a582b6.s[16]++, (cov_2hi8a582b6.b[4][0]++, listElement.nodeName === 'UL') || (cov_2hi8a582b6.b[4][1]++, listElement.nodeName === 'OL') ? (cov_2hi8a582b6.b[3][0]++, Selector.ACTIVE_UL) : (cov_2hi8a582b6.b[3][1]++, Selector.ACTIVE));
        cov_2hi8a582b6.s[17]++;
        previous = $.makeArray($(listElement).find(itemSelector));
        cov_2hi8a582b6.s[18]++;
        previous = previous[previous.length - 1];
      } else {
        cov_2hi8a582b6.b[2][1]++;
      }

      var hideEvent = (cov_2hi8a582b6.s[19]++, $.Event(Event.HIDE, {
        relatedTarget: this._element
      }));
      var showEvent = (cov_2hi8a582b6.s[20]++, $.Event(Event.SHOW, {
        relatedTarget: previous
      }));
      cov_2hi8a582b6.s[21]++;

      if (previous) {
        cov_2hi8a582b6.b[5][0]++;
        cov_2hi8a582b6.s[22]++;
        $(previous).trigger(hideEvent);
      } else {
        cov_2hi8a582b6.b[5][1]++;
      }

      cov_2hi8a582b6.s[23]++;
      $(this._element).trigger(showEvent);
      cov_2hi8a582b6.s[24]++;

      if ((cov_2hi8a582b6.b[7][0]++, showEvent.isDefaultPrevented()) || (cov_2hi8a582b6.b[7][1]++, hideEvent.isDefaultPrevented())) {
        cov_2hi8a582b6.b[6][0]++;
        cov_2hi8a582b6.s[25]++;
        return;
      } else {
        cov_2hi8a582b6.b[6][1]++;
      }

      cov_2hi8a582b6.s[26]++;

      if (selector) {
        cov_2hi8a582b6.b[8][0]++;
        cov_2hi8a582b6.s[27]++;
        target = document.querySelector(selector);
      } else {
        cov_2hi8a582b6.b[8][1]++;
      }

      cov_2hi8a582b6.s[28]++;

      this._activate(this._element, listElement);

      cov_2hi8a582b6.s[29]++;

      var complete = function complete() {
        cov_2hi8a582b6.f[3]++;
        var hiddenEvent = (cov_2hi8a582b6.s[30]++, $.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        }));
        var shownEvent = (cov_2hi8a582b6.s[31]++, $.Event(Event.SHOWN, {
          relatedTarget: previous
        }));
        cov_2hi8a582b6.s[32]++;
        $(previous).trigger(hiddenEvent);
        cov_2hi8a582b6.s[33]++;
        $(_this._element).trigger(shownEvent);
      };

      cov_2hi8a582b6.s[34]++;

      if (target) {
        cov_2hi8a582b6.b[9][0]++;
        cov_2hi8a582b6.s[35]++;

        this._activate(target, target.parentNode, complete);
      } else {
        cov_2hi8a582b6.b[9][1]++;
        cov_2hi8a582b6.s[36]++;
        complete();
      }
    };

    _proto.dispose = function dispose() {
      cov_2hi8a582b6.f[4]++;
      cov_2hi8a582b6.s[37]++;
      $.removeData(this._element, DATA_KEY);
      cov_2hi8a582b6.s[38]++;
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      cov_2hi8a582b6.f[5]++;
      var activeElements = (cov_2hi8a582b6.s[39]++, (cov_2hi8a582b6.b[11][0]++, container) && ((cov_2hi8a582b6.b[11][1]++, container.nodeName === 'UL') || (cov_2hi8a582b6.b[11][2]++, container.nodeName === 'OL')) ? (cov_2hi8a582b6.b[10][0]++, $(container).find(Selector.ACTIVE_UL)) : (cov_2hi8a582b6.b[10][1]++, $(container).children(Selector.ACTIVE)));
      var active = (cov_2hi8a582b6.s[40]++, activeElements[0]);
      var isTransitioning = (cov_2hi8a582b6.s[41]++, (cov_2hi8a582b6.b[12][0]++, callback) && (cov_2hi8a582b6.b[12][1]++, active) && (cov_2hi8a582b6.b[12][2]++, $(active).hasClass(ClassName.FADE)));
      cov_2hi8a582b6.s[42]++;

      var complete = function complete() {
        cov_2hi8a582b6.f[6]++;
        cov_2hi8a582b6.s[43]++;
        return _this2._transitionComplete(element, active, callback);
      };

      cov_2hi8a582b6.s[44]++;

      if ((cov_2hi8a582b6.b[14][0]++, active) && (cov_2hi8a582b6.b[14][1]++, isTransitioning)) {
        cov_2hi8a582b6.b[13][0]++;
        var transitionDuration = (cov_2hi8a582b6.s[45]++, Util.getTransitionDurationFromElement(active));
        cov_2hi8a582b6.s[46]++;
        $(active).removeClass(ClassName.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_2hi8a582b6.b[13][1]++;
        cov_2hi8a582b6.s[47]++;
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      cov_2hi8a582b6.f[7]++;
      cov_2hi8a582b6.s[48]++;

      if (active) {
        cov_2hi8a582b6.b[15][0]++;
        cov_2hi8a582b6.s[49]++;
        $(active).removeClass(ClassName.ACTIVE);
        var dropdownChild = (cov_2hi8a582b6.s[50]++, $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0]);
        cov_2hi8a582b6.s[51]++;

        if (dropdownChild) {
          cov_2hi8a582b6.b[16][0]++;
          cov_2hi8a582b6.s[52]++;
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        } else {
          cov_2hi8a582b6.b[16][1]++;
        }

        cov_2hi8a582b6.s[53]++;

        if (active.getAttribute('role') === 'tab') {
          cov_2hi8a582b6.b[17][0]++;
          cov_2hi8a582b6.s[54]++;
          active.setAttribute('aria-selected', false);
        } else {
          cov_2hi8a582b6.b[17][1]++;
        }
      } else {
        cov_2hi8a582b6.b[15][1]++;
      }

      cov_2hi8a582b6.s[55]++;
      $(element).addClass(ClassName.ACTIVE);
      cov_2hi8a582b6.s[56]++;

      if (element.getAttribute('role') === 'tab') {
        cov_2hi8a582b6.b[18][0]++;
        cov_2hi8a582b6.s[57]++;
        element.setAttribute('aria-selected', true);
      } else {
        cov_2hi8a582b6.b[18][1]++;
      }

      cov_2hi8a582b6.s[58]++;
      Util.reflow(element);
      cov_2hi8a582b6.s[59]++;
      $(element).addClass(ClassName.SHOW);
      cov_2hi8a582b6.s[60]++;

      if ((cov_2hi8a582b6.b[20][0]++, element.parentNode) && (cov_2hi8a582b6.b[20][1]++, $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU))) {
        cov_2hi8a582b6.b[19][0]++;
        var dropdownElement = (cov_2hi8a582b6.s[61]++, $(element).closest(Selector.DROPDOWN)[0]);
        cov_2hi8a582b6.s[62]++;

        if (dropdownElement) {
          cov_2hi8a582b6.b[21][0]++;
          var dropdownToggleList = (cov_2hi8a582b6.s[63]++, [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE)));
          cov_2hi8a582b6.s[64]++;
          $(dropdownToggleList).addClass(ClassName.ACTIVE);
        } else {
          cov_2hi8a582b6.b[21][1]++;
        }

        cov_2hi8a582b6.s[65]++;
        element.setAttribute('aria-expanded', true);
      } else {
        cov_2hi8a582b6.b[19][1]++;
      }

      cov_2hi8a582b6.s[66]++;

      if (callback) {
        cov_2hi8a582b6.b[22][0]++;
        cov_2hi8a582b6.s[67]++;
        callback();
      } else {
        cov_2hi8a582b6.b[22][1]++;
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      cov_2hi8a582b6.f[8]++;
      cov_2hi8a582b6.s[68]++;
      return this.each(function () {
        cov_2hi8a582b6.f[9]++;
        var $this = (cov_2hi8a582b6.s[69]++, $(this));
        var data = (cov_2hi8a582b6.s[70]++, $this.data(DATA_KEY));
        cov_2hi8a582b6.s[71]++;

        if (!data) {
          cov_2hi8a582b6.b[23][0]++;
          cov_2hi8a582b6.s[72]++;
          data = new Tab(this);
          cov_2hi8a582b6.s[73]++;
          $this.data(DATA_KEY, data);
        } else {
          cov_2hi8a582b6.b[23][1]++;
        }

        cov_2hi8a582b6.s[74]++;

        if (typeof config === 'string') {
          cov_2hi8a582b6.b[24][0]++;
          cov_2hi8a582b6.s[75]++;

          if (typeof data[config] === 'undefined') {
            cov_2hi8a582b6.b[25][0]++;
            cov_2hi8a582b6.s[76]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_2hi8a582b6.b[25][1]++;
          }

          cov_2hi8a582b6.s[77]++;
          data[config]();
        } else {
          cov_2hi8a582b6.b[24][1]++;
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        cov_2hi8a582b6.f[1]++;
        cov_2hi8a582b6.s[10]++;
        return VERSION;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_2hi8a582b6.s[78]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_2hi8a582b6.f[10]++;
    cov_2hi8a582b6.s[79]++;
    event.preventDefault();
    cov_2hi8a582b6.s[80]++;

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2hi8a582b6.s[81]++;
  $.fn[NAME] = Tab._jQueryInterface;
  cov_2hi8a582b6.s[82]++;
  $.fn[NAME].Constructor = Tab;
  cov_2hi8a582b6.s[83]++;

  $.fn[NAME].noConflict = function () {
    cov_2hi8a582b6.f[11]++;
    cov_2hi8a582b6.s[84]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2hi8a582b6.s[85]++;
    return Tab._jQueryInterface;
  };

  return Tab;

}));
//# sourceMappingURL=tab.js.map
