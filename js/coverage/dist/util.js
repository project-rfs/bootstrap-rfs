/*!
  * Bootstrap util.js v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.Util = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  var cov_qi3uoijxr = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/util.js",
        hash = "cac616e81e3e716f7bec32957f3d29112565795b",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/util.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 17,
            column: 38
          }
        },
        "1": {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 18,
            column: 23
          }
        },
        "2": {
          start: {
            line: 19,
            column: 32
          },
          end: {
            line: 19,
            column: 36
          }
        },
        "3": {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 68
          }
        },
        "4": {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        "5": {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 33,
            column: 7
          }
        },
        "6": {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 61
          }
        },
        "7": {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 22
          }
        },
        "8": {
          start: {
            line: 40,
            column: 15
          },
          end: {
            line: 40,
            column: 20
          }
        },
        "9": {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 44,
            column: 4
          }
        },
        "10": {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 43,
            column: 17
          }
        },
        "11": {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 50,
            column: 14
          }
        },
        "12": {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 49,
            column: 5
          }
        },
        "13": {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 37
          }
        },
        "14": {
          start: {
            line: 52,
            column: 2
          },
          end: {
            line: 52,
            column: 13
          }
        },
        "15": {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 51
          }
        },
        "16": {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 71
          }
        },
        "17": {
          start: {
            line: 66,
            column: 13
          },
          end: {
            line: 147,
            column: 1
          }
        },
        "18": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 74,
            column: 45
          }
        },
        "19": {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 73,
            column: 43
          }
        },
        "20": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 17
          }
        },
        "21": {
          start: {
            line: 79,
            column: 19
          },
          end: {
            line: 79,
            column: 54
          }
        },
        "22": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        "23": {
          start: {
            line: 82,
            column: 23
          },
          end: {
            line: 82,
            column: 51
          }
        },
        "24": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 68
          }
        },
        "25": {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 73
          }
        },
        "26": {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        },
        "27": {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 14
          }
        },
        "28": {
          start: {
            line: 95,
            column: 29
          },
          end: {
            line: 95,
            column: 66
          }
        },
        "29": {
          start: {
            line: 96,
            column: 26
          },
          end: {
            line: 96,
            column: 60
          }
        },
        "30": {
          start: {
            line: 98,
            column: 36
          },
          end: {
            line: 98,
            column: 66
          }
        },
        "31": {
          start: {
            line: 99,
            column: 33
          },
          end: {
            line: 99,
            column: 60
          }
        },
        "32": {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 104,
            column: 5
          }
        },
        "33": {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 103,
            column: 14
          }
        },
        "34": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 57
          }
        },
        "35": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 51
          }
        },
        "36": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 99
          }
        },
        "37": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 31
          }
        },
        "38": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 118,
            column: 38
          }
        },
        "39": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 34
          }
        },
        "40": {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 127,
            column: 35
          }
        },
        "41": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        "42": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 144,
            column: 7
          }
        },
        "43": {
          start: {
            line: 133,
            column: 30
          },
          end: {
            line: 133,
            column: 51
          }
        },
        "44": {
          start: {
            line: 134,
            column: 30
          },
          end: {
            line: 134,
            column: 46
          }
        },
        "45": {
          start: {
            line: 135,
            column: 30
          },
          end: {
            line: 136,
            column: 37
          }
        },
        "46": {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 143,
            column: 9
          }
        },
        "47": {
          start: {
            line: 139,
            column: 10
          },
          end: {
            line: 142,
            column: 52
          }
        },
        "48": {
          start: {
            line: 149,
            column: 0
          },
          end: {
            line: 149,
            column: 25
          }
        }
      },
      fnMap: {
        "0": {
          name: "toType",
          decl: {
            start: {
              line: 22,
              column: 9
            },
            end: {
              line: 22,
              column: 15
            }
          },
          loc: {
            start: {
              line: 22,
              column: 21
            },
            end: {
              line: 24,
              column: 1
            }
          },
          line: 22
        },
        "1": {
          name: "getSpecialTransitionEndEvent",
          decl: {
            start: {
              line: 26,
              column: 9
            },
            end: {
              line: 26,
              column: 37
            }
          },
          loc: {
            start: {
              line: 26,
              column: 40
            },
            end: {
              line: 37,
              column: 1
            }
          },
          line: 26
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 30,
              column: 4
            },
            end: {
              line: 30,
              column: 5
            }
          },
          loc: {
            start: {
              line: 30,
              column: 18
            },
            end: {
              line: 35,
              column: 5
            }
          },
          line: 30
        },
        "3": {
          name: "transitionEndEmulator",
          decl: {
            start: {
              line: 39,
              column: 9
            },
            end: {
              line: 39,
              column: 30
            }
          },
          loc: {
            start: {
              line: 39,
              column: 41
            },
            end: {
              line: 53,
              column: 1
            }
          },
          line: 39
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 42,
              column: 35
            },
            end: {
              line: 42,
              column: 36
            }
          },
          loc: {
            start: {
              line: 42,
              column: 41
            },
            end: {
              line: 44,
              column: 3
            }
          },
          line: 42
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 46,
              column: 13
            },
            end: {
              line: 46,
              column: 14
            }
          },
          loc: {
            start: {
              line: 46,
              column: 19
            },
            end: {
              line: 50,
              column: 3
            }
          },
          line: 46
        },
        "6": {
          name: "setTransitionEndSupport",
          decl: {
            start: {
              line: 55,
              column: 9
            },
            end: {
              line: 55,
              column: 32
            }
          },
          loc: {
            start: {
              line: 55,
              column: 35
            },
            end: {
              line: 58,
              column: 1
            }
          },
          line: 55
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 70,
              column: 2
            },
            end: {
              line: 70,
              column: 3
            }
          },
          loc: {
            start: {
              line: 70,
              column: 17
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 70
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 78,
              column: 2
            },
            end: {
              line: 78,
              column: 3
            }
          },
          loc: {
            start: {
              line: 78,
              column: 34
            },
            end: {
              line: 87,
              column: 3
            }
          },
          line: 78
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 89,
              column: 2
            },
            end: {
              line: 89,
              column: 3
            }
          },
          loc: {
            start: {
              line: 89,
              column: 44
            },
            end: {
              line: 111,
              column: 3
            }
          },
          line: 89
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 113,
              column: 2
            },
            end: {
              line: 113,
              column: 3
            }
          },
          loc: {
            start: {
              line: 113,
              column: 18
            },
            end: {
              line: 115,
              column: 3
            }
          },
          line: 113
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 117,
              column: 2
            },
            end: {
              line: 117,
              column: 3
            }
          },
          loc: {
            start: {
              line: 117,
              column: 32
            },
            end: {
              line: 119,
              column: 3
            }
          },
          line: 117
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 122,
              column: 2
            },
            end: {
              line: 122,
              column: 3
            }
          },
          loc: {
            start: {
              line: 122,
              column: 26
            },
            end: {
              line: 124,
              column: 3
            }
          },
          line: 122
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 126,
              column: 2
            },
            end: {
              line: 126,
              column: 3
            }
          },
          loc: {
            start: {
              line: 126,
              column: 17
            },
            end: {
              line: 128,
              column: 3
            }
          },
          line: 126
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 130,
              column: 2
            },
            end: {
              line: 130,
              column: 3
            }
          },
          loc: {
            start: {
              line: 130,
              column: 54
            },
            end: {
              line: 146,
              column: 3
            }
          },
          line: 130
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 33,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 33,
              column: 7
            }
          }, {
            start: {
              line: 31,
              column: 6
            },
            end: {
              line: 33,
              column: 7
            }
          }],
          line: 31
        },
        "1": {
          loc: {
            start: {
              line: 47,
              column: 4
            },
            end: {
              line: 49,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 47,
              column: 4
            },
            end: {
              line: 49,
              column: 5
            }
          }, {
            start: {
              line: 47,
              column: 4
            },
            end: {
              line: 49,
              column: 5
            }
          }],
          line: 47
        },
        "2": {
          loc: {
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          }, {
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 84,
              column: 5
            }
          }],
          line: 81
        },
        "3": {
          loc: {
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 81,
              column: 37
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 81,
              column: 17
            }
          }, {
            start: {
              line: 81,
              column: 21
            },
            end: {
              line: 81,
              column: 37
            }
          }],
          line: 81
        },
        "4": {
          loc: {
            start: {
              line: 83,
              column: 17
            },
            end: {
              line: 83,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 83,
              column: 48
            },
            end: {
              line: 83,
              column: 63
            }
          }, {
            start: {
              line: 83,
              column: 66
            },
            end: {
              line: 83,
              column: 68
            }
          }],
          line: 83
        },
        "5": {
          loc: {
            start: {
              line: 83,
              column: 17
            },
            end: {
              line: 83,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 83,
              column: 17
            },
            end: {
              line: 83,
              column: 25
            }
          }, {
            start: {
              line: 83,
              column: 29
            },
            end: {
              line: 83,
              column: 45
            }
          }],
          line: 83
        },
        "6": {
          loc: {
            start: {
              line: 86,
              column: 11
            },
            end: {
              line: 86,
              column: 73
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 86,
              column: 58
            },
            end: {
              line: 86,
              column: 66
            }
          }, {
            start: {
              line: 86,
              column: 69
            },
            end: {
              line: 86,
              column: 73
            }
          }],
          line: 86
        },
        "7": {
          loc: {
            start: {
              line: 86,
              column: 11
            },
            end: {
              line: 86,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 86,
              column: 11
            },
            end: {
              line: 86,
              column: 19
            }
          }, {
            start: {
              line: 86,
              column: 23
            },
            end: {
              line: 86,
              column: 55
            }
          }],
          line: 86
        },
        "8": {
          loc: {
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          }, {
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 92,
              column: 5
            }
          }],
          line: 90
        },
        "9": {
          loc: {
            start: {
              line: 102,
              column: 4
            },
            end: {
              line: 104,
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
              line: 104,
              column: 5
            }
          }, {
            start: {
              line: 102,
              column: 4
            },
            end: {
              line: 104,
              column: 5
            }
          }],
          line: 102
        },
        "10": {
          loc: {
            start: {
              line: 102,
              column: 8
            },
            end: {
              line: 102,
              column: 57
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
              column: 32
            }
          }, {
            start: {
              line: 102,
              column: 36
            },
            end: {
              line: 102,
              column: 57
            }
          }],
          line: 102
        },
        "11": {
          loc: {
            start: {
              line: 127,
              column: 12
            },
            end: {
              line: 127,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 127,
              column: 12
            },
            end: {
              line: 127,
              column: 18
            }
          }, {
            start: {
              line: 127,
              column: 22
            },
            end: {
              line: 127,
              column: 25
            }
          }],
          line: 127
        },
        "12": {
          loc: {
            start: {
              line: 132,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 132,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          }, {
            start: {
              line: 132,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          }],
          line: 132
        },
        "13": {
          loc: {
            start: {
              line: 135,
              column: 30
            },
            end: {
              line: 136,
              column: 37
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 136,
              column: 12
            },
            end: {
              line: 136,
              column: 21
            }
          }, {
            start: {
              line: 136,
              column: 24
            },
            end: {
              line: 136,
              column: 37
            }
          }],
          line: 135
        },
        "14": {
          loc: {
            start: {
              line: 135,
              column: 30
            },
            end: {
              line: 135,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 135,
              column: 30
            },
            end: {
              line: 135,
              column: 35
            }
          }, {
            start: {
              line: 135,
              column: 39
            },
            end: {
              line: 135,
              column: 60
            }
          }],
          line: 135
        },
        "15": {
          loc: {
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 143,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 143,
              column: 9
            }
          }, {
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 143,
              column: 9
            }
          }],
          line: 138
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
        "48": 0
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
        "14": 0
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
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0]
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
   * Bootstrap (v4.1.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = (cov_qi3uoijxr.s[0]++, 'transitionend');
  var MAX_UID = (cov_qi3uoijxr.s[1]++, 1000000);
  var MILLISECONDS_MULTIPLIER = (cov_qi3uoijxr.s[2]++, 1000); // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    cov_qi3uoijxr.f[0]++;
    cov_qi3uoijxr.s[3]++;
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    cov_qi3uoijxr.f[1]++;
    cov_qi3uoijxr.s[4]++;
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        cov_qi3uoijxr.f[2]++;
        cov_qi3uoijxr.s[5]++;

        if ($(event.target).is(this)) {
          cov_qi3uoijxr.b[0][0]++;
          cov_qi3uoijxr.s[6]++;
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        } else {
          cov_qi3uoijxr.b[0][1]++;
        }

        cov_qi3uoijxr.s[7]++;
        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    cov_qi3uoijxr.f[3]++;
    var called = (cov_qi3uoijxr.s[8]++, false);
    cov_qi3uoijxr.s[9]++;
    $(this).one(Util.TRANSITION_END, function () {
      cov_qi3uoijxr.f[4]++;
      cov_qi3uoijxr.s[10]++;
      called = true;
    });
    cov_qi3uoijxr.s[11]++;
    setTimeout(function () {
      cov_qi3uoijxr.f[5]++;
      cov_qi3uoijxr.s[12]++;

      if (!called) {
        cov_qi3uoijxr.b[1][0]++;
        cov_qi3uoijxr.s[13]++;
        Util.triggerTransitionEnd(_this);
      } else {
        cov_qi3uoijxr.b[1][1]++;
      }
    }, duration);
    cov_qi3uoijxr.s[14]++;
    return this;
  }

  function setTransitionEndSupport() {
    cov_qi3uoijxr.f[6]++;
    cov_qi3uoijxr.s[15]++;
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    cov_qi3uoijxr.s[16]++;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = (cov_qi3uoijxr.s[17]++, {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      cov_qi3uoijxr.f[7]++;
      cov_qi3uoijxr.s[18]++;

      do {
        cov_qi3uoijxr.s[19]++;
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      cov_qi3uoijxr.s[20]++;
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      cov_qi3uoijxr.f[8]++;
      var selector = (cov_qi3uoijxr.s[21]++, element.getAttribute('data-target'));
      cov_qi3uoijxr.s[22]++;

      if ((cov_qi3uoijxr.b[3][0]++, !selector) || (cov_qi3uoijxr.b[3][1]++, selector === '#')) {
        cov_qi3uoijxr.b[2][0]++;
        var hrefAttr = (cov_qi3uoijxr.s[23]++, element.getAttribute('href'));
        cov_qi3uoijxr.s[24]++;
        selector = (cov_qi3uoijxr.b[5][0]++, hrefAttr) && (cov_qi3uoijxr.b[5][1]++, hrefAttr !== '#') ? (cov_qi3uoijxr.b[4][0]++, hrefAttr.trim()) : (cov_qi3uoijxr.b[4][1]++, '');
      } else {
        cov_qi3uoijxr.b[2][1]++;
      }

      cov_qi3uoijxr.s[25]++;
      return (cov_qi3uoijxr.b[7][0]++, selector) && (cov_qi3uoijxr.b[7][1]++, document.querySelector(selector)) ? (cov_qi3uoijxr.b[6][0]++, selector) : (cov_qi3uoijxr.b[6][1]++, null);
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      cov_qi3uoijxr.f[9]++;
      cov_qi3uoijxr.s[26]++;

      if (!element) {
        cov_qi3uoijxr.b[8][0]++;
        cov_qi3uoijxr.s[27]++;
        return 0;
      } else {
        cov_qi3uoijxr.b[8][1]++;
      } // Get transition-duration of the element


      var transitionDuration = (cov_qi3uoijxr.s[28]++, $(element).css('transition-duration'));
      var transitionDelay = (cov_qi3uoijxr.s[29]++, $(element).css('transition-delay'));
      var floatTransitionDuration = (cov_qi3uoijxr.s[30]++, parseFloat(transitionDuration));
      var floatTransitionDelay = (cov_qi3uoijxr.s[31]++, parseFloat(transitionDelay)); // Return 0 if element or transition duration is not found

      cov_qi3uoijxr.s[32]++;

      if ((cov_qi3uoijxr.b[10][0]++, !floatTransitionDuration) && (cov_qi3uoijxr.b[10][1]++, !floatTransitionDelay)) {
        cov_qi3uoijxr.b[9][0]++;
        cov_qi3uoijxr.s[33]++;
        return 0;
      } else {
        cov_qi3uoijxr.b[9][1]++;
      } // If multiple durations are defined, take the first


      cov_qi3uoijxr.s[34]++;
      transitionDuration = transitionDuration.split(',')[0];
      cov_qi3uoijxr.s[35]++;
      transitionDelay = transitionDelay.split(',')[0];
      cov_qi3uoijxr.s[36]++;
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      cov_qi3uoijxr.f[10]++;
      cov_qi3uoijxr.s[37]++;
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      cov_qi3uoijxr.f[11]++;
      cov_qi3uoijxr.s[38]++;
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      cov_qi3uoijxr.f[12]++;
      cov_qi3uoijxr.s[39]++;
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      cov_qi3uoijxr.f[13]++;
      cov_qi3uoijxr.s[40]++;
      return ((cov_qi3uoijxr.b[11][0]++, obj[0]) || (cov_qi3uoijxr.b[11][1]++, obj)).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      cov_qi3uoijxr.f[14]++;
      cov_qi3uoijxr.s[41]++;

      for (var property in configTypes) {
        cov_qi3uoijxr.s[42]++;

        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          cov_qi3uoijxr.b[12][0]++;
          var expectedTypes = (cov_qi3uoijxr.s[43]++, configTypes[property]);
          var value = (cov_qi3uoijxr.s[44]++, config[property]);
          var valueType = (cov_qi3uoijxr.s[45]++, (cov_qi3uoijxr.b[14][0]++, value) && (cov_qi3uoijxr.b[14][1]++, Util.isElement(value)) ? (cov_qi3uoijxr.b[13][0]++, 'element') : (cov_qi3uoijxr.b[13][1]++, toType(value)));
          cov_qi3uoijxr.s[46]++;

          if (!new RegExp(expectedTypes).test(valueType)) {
            cov_qi3uoijxr.b[15][0]++;
            cov_qi3uoijxr.s[47]++;
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          } else {
            cov_qi3uoijxr.b[15][1]++;
          }
        } else {
          cov_qi3uoijxr.b[12][1]++;
        }
      }
    }
  });
  cov_qi3uoijxr.s[48]++;
  setTransitionEndSupport();

  return Util;

})));
//# sourceMappingURL=util.js.map
