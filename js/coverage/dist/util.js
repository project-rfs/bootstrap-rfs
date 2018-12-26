/*!
  * Bootstrap util.js v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  global.Util = factory(global.jQuery);
}(typeof self !== 'undefined' ? self : this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  var cov_qi3uoijxr = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/util.js",
        hash = "aa314255c5db574917dd781b14ba84bf67b59c71",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/util.js",
      statementMap: {
        "0": {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 38
          }
        },
        "1": {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 23
          }
        },
        "2": {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 36
          }
        },
        "3": {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 68
          }
        },
        "4": {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        "5": {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        },
        "6": {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 61
          }
        },
        "7": {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 22
          }
        },
        "8": {
          start: {
            line: 39,
            column: 15
          },
          end: {
            line: 39,
            column: 20
          }
        },
        "9": {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 43,
            column: 4
          }
        },
        "10": {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 17
          }
        },
        "11": {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 49,
            column: 14
          }
        },
        "12": {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 48,
            column: 5
          }
        },
        "13": {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 47,
            column: 37
          }
        },
        "14": {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 13
          }
        },
        "15": {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 51
          }
        },
        "16": {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 71
          }
        },
        "17": {
          start: {
            line: 65,
            column: 13
          },
          end: {
            line: 173,
            column: 1
          }
        },
        "18": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 73,
            column: 45
          }
        },
        "19": {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 43
          }
        },
        "20": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 17
          }
        },
        "21": {
          start: {
            line: 78,
            column: 19
          },
          end: {
            line: 78,
            column: 54
          }
        },
        "22": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 83,
            column: 5
          }
        },
        "23": {
          start: {
            line: 81,
            column: 23
          },
          end: {
            line: 81,
            column: 51
          }
        },
        "24": {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 82,
            column: 68
          }
        },
        "25": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 89,
            column: 5
          }
        },
        "26": {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 86,
            column: 63
          }
        },
        "27": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 17
          }
        },
        "28": {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        },
        "29": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 14
          }
        },
        "30": {
          start: {
            line: 98,
            column: 29
          },
          end: {
            line: 98,
            column: 66
          }
        },
        "31": {
          start: {
            line: 99,
            column: 26
          },
          end: {
            line: 99,
            column: 60
          }
        },
        "32": {
          start: {
            line: 101,
            column: 36
          },
          end: {
            line: 101,
            column: 66
          }
        },
        "33": {
          start: {
            line: 102,
            column: 33
          },
          end: {
            line: 102,
            column: 60
          }
        },
        "34": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        },
        "35": {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 106,
            column: 14
          }
        },
        "36": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 57
          }
        },
        "37": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 51
          }
        },
        "38": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 99
          }
        },
        "39": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 31
          }
        },
        "40": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 38
          }
        },
        "41": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 34
          }
        },
        "42": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 35
          }
        },
        "43": {
          start: {
            line: 134,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        "44": {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 147,
            column: 7
          }
        },
        "45": {
          start: {
            line: 136,
            column: 30
          },
          end: {
            line: 136,
            column: 51
          }
        },
        "46": {
          start: {
            line: 137,
            column: 30
          },
          end: {
            line: 137,
            column: 46
          }
        },
        "47": {
          start: {
            line: 138,
            column: 30
          },
          end: {
            line: 139,
            column: 37
          }
        },
        "48": {
          start: {
            line: 141,
            column: 8
          },
          end: {
            line: 146,
            column: 9
          }
        },
        "49": {
          start: {
            line: 142,
            column: 10
          },
          end: {
            line: 145,
            column: 52
          }
        },
        "50": {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        "51": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 17
          }
        },
        "52": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "53": {
          start: {
            line: 158,
            column: 19
          },
          end: {
            line: 158,
            column: 40
          }
        },
        "54": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 53
          }
        },
        "55": {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        "56": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 20
          }
        },
        "57": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        "58": {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 168,
            column: 17
          }
        },
        "59": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 50
          }
        },
        "60": {
          start: {
            line: 175,
            column: 0
          },
          end: {
            line: 175,
            column: 25
          }
        }
      },
      fnMap: {
        "0": {
          name: "toType",
          decl: {
            start: {
              line: 21,
              column: 9
            },
            end: {
              line: 21,
              column: 15
            }
          },
          loc: {
            start: {
              line: 21,
              column: 21
            },
            end: {
              line: 23,
              column: 1
            }
          },
          line: 21
        },
        "1": {
          name: "getSpecialTransitionEndEvent",
          decl: {
            start: {
              line: 25,
              column: 9
            },
            end: {
              line: 25,
              column: 37
            }
          },
          loc: {
            start: {
              line: 25,
              column: 40
            },
            end: {
              line: 36,
              column: 1
            }
          },
          line: 25
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 29,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          },
          loc: {
            start: {
              line: 29,
              column: 18
            },
            end: {
              line: 34,
              column: 5
            }
          },
          line: 29
        },
        "3": {
          name: "transitionEndEmulator",
          decl: {
            start: {
              line: 38,
              column: 9
            },
            end: {
              line: 38,
              column: 30
            }
          },
          loc: {
            start: {
              line: 38,
              column: 41
            },
            end: {
              line: 52,
              column: 1
            }
          },
          line: 38
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 41,
              column: 35
            },
            end: {
              line: 41,
              column: 36
            }
          },
          loc: {
            start: {
              line: 41,
              column: 41
            },
            end: {
              line: 43,
              column: 3
            }
          },
          line: 41
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 45,
              column: 13
            },
            end: {
              line: 45,
              column: 14
            }
          },
          loc: {
            start: {
              line: 45,
              column: 19
            },
            end: {
              line: 49,
              column: 3
            }
          },
          line: 45
        },
        "6": {
          name: "setTransitionEndSupport",
          decl: {
            start: {
              line: 54,
              column: 9
            },
            end: {
              line: 54,
              column: 32
            }
          },
          loc: {
            start: {
              line: 54,
              column: 35
            },
            end: {
              line: 57,
              column: 1
            }
          },
          line: 54
        },
        "7": {
          name: "(anonymous_7)",
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
              column: 17
            },
            end: {
              line: 75,
              column: 3
            }
          },
          line: 69
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 77,
              column: 2
            },
            end: {
              line: 77,
              column: 3
            }
          },
          loc: {
            start: {
              line: 77,
              column: 34
            },
            end: {
              line: 90,
              column: 3
            }
          },
          line: 77
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 92,
              column: 3
            }
          },
          loc: {
            start: {
              line: 92,
              column: 44
            },
            end: {
              line: 114,
              column: 3
            }
          },
          line: 92
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 116,
              column: 2
            },
            end: {
              line: 116,
              column: 3
            }
          },
          loc: {
            start: {
              line: 116,
              column: 18
            },
            end: {
              line: 118,
              column: 3
            }
          },
          line: 116
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 120,
              column: 2
            },
            end: {
              line: 120,
              column: 3
            }
          },
          loc: {
            start: {
              line: 120,
              column: 32
            },
            end: {
              line: 122,
              column: 3
            }
          },
          line: 120
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 125,
              column: 2
            },
            end: {
              line: 125,
              column: 3
            }
          },
          loc: {
            start: {
              line: 125,
              column: 26
            },
            end: {
              line: 127,
              column: 3
            }
          },
          line: 125
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 129,
              column: 2
            },
            end: {
              line: 129,
              column: 3
            }
          },
          loc: {
            start: {
              line: 129,
              column: 17
            },
            end: {
              line: 131,
              column: 3
            }
          },
          line: 129
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 133,
              column: 2
            },
            end: {
              line: 133,
              column: 3
            }
          },
          loc: {
            start: {
              line: 133,
              column: 54
            },
            end: {
              line: 149,
              column: 3
            }
          },
          line: 133
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 151,
              column: 2
            },
            end: {
              line: 151,
              column: 3
            }
          },
          loc: {
            start: {
              line: 151,
              column: 26
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 151
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 30,
              column: 6
            },
            end: {
              line: 32,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 30,
              column: 6
            },
            end: {
              line: 32,
              column: 7
            }
          }, {
            start: {
              line: 30,
              column: 6
            },
            end: {
              line: 32,
              column: 7
            }
          }],
          line: 30
        },
        "1": {
          loc: {
            start: {
              line: 46,
              column: 4
            },
            end: {
              line: 48,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 46,
              column: 4
            },
            end: {
              line: 48,
              column: 5
            }
          }, {
            start: {
              line: 46,
              column: 4
            },
            end: {
              line: 48,
              column: 5
            }
          }],
          line: 46
        },
        "2": {
          loc: {
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          }, {
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          }],
          line: 80
        },
        "3": {
          loc: {
            start: {
              line: 80,
              column: 8
            },
            end: {
              line: 80,
              column: 37
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 80,
              column: 8
            },
            end: {
              line: 80,
              column: 17
            }
          }, {
            start: {
              line: 80,
              column: 21
            },
            end: {
              line: 80,
              column: 37
            }
          }],
          line: 80
        },
        "4": {
          loc: {
            start: {
              line: 82,
              column: 17
            },
            end: {
              line: 82,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 82,
              column: 48
            },
            end: {
              line: 82,
              column: 63
            }
          }, {
            start: {
              line: 82,
              column: 66
            },
            end: {
              line: 82,
              column: 68
            }
          }],
          line: 82
        },
        "5": {
          loc: {
            start: {
              line: 82,
              column: 17
            },
            end: {
              line: 82,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 82,
              column: 17
            },
            end: {
              line: 82,
              column: 25
            }
          }, {
            start: {
              line: 82,
              column: 29
            },
            end: {
              line: 82,
              column: 45
            }
          }],
          line: 82
        },
        "6": {
          loc: {
            start: {
              line: 86,
              column: 13
            },
            end: {
              line: 86,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 86,
              column: 48
            },
            end: {
              line: 86,
              column: 56
            }
          }, {
            start: {
              line: 86,
              column: 59
            },
            end: {
              line: 86,
              column: 63
            }
          }],
          line: 86
        },
        "7": {
          loc: {
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          }, {
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          }],
          line: 93
        },
        "8": {
          loc: {
            start: {
              line: 105,
              column: 4
            },
            end: {
              line: 107,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 105,
              column: 4
            },
            end: {
              line: 107,
              column: 5
            }
          }, {
            start: {
              line: 105,
              column: 4
            },
            end: {
              line: 107,
              column: 5
            }
          }],
          line: 105
        },
        "9": {
          loc: {
            start: {
              line: 105,
              column: 8
            },
            end: {
              line: 105,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 105,
              column: 8
            },
            end: {
              line: 105,
              column: 32
            }
          }, {
            start: {
              line: 105,
              column: 36
            },
            end: {
              line: 105,
              column: 57
            }
          }],
          line: 105
        },
        "10": {
          loc: {
            start: {
              line: 130,
              column: 12
            },
            end: {
              line: 130,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 130,
              column: 12
            },
            end: {
              line: 130,
              column: 18
            }
          }, {
            start: {
              line: 130,
              column: 22
            },
            end: {
              line: 130,
              column: 25
            }
          }],
          line: 130
        },
        "11": {
          loc: {
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }, {
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }],
          line: 135
        },
        "12": {
          loc: {
            start: {
              line: 138,
              column: 30
            },
            end: {
              line: 139,
              column: 37
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 139,
              column: 12
            },
            end: {
              line: 139,
              column: 21
            }
          }, {
            start: {
              line: 139,
              column: 24
            },
            end: {
              line: 139,
              column: 37
            }
          }],
          line: 138
        },
        "13": {
          loc: {
            start: {
              line: 138,
              column: 30
            },
            end: {
              line: 138,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 138,
              column: 30
            },
            end: {
              line: 138,
              column: 35
            }
          }, {
            start: {
              line: 138,
              column: 39
            },
            end: {
              line: 138,
              column: 60
            }
          }],
          line: 138
        },
        "14": {
          loc: {
            start: {
              line: 141,
              column: 8
            },
            end: {
              line: 146,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 141,
              column: 8
            },
            end: {
              line: 146,
              column: 9
            }
          }, {
            start: {
              line: 141,
              column: 8
            },
            end: {
              line: 146,
              column: 9
            }
          }],
          line: 141
        },
        "15": {
          loc: {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          }, {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          }],
          line: 152
        },
        "16": {
          loc: {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }, {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }],
          line: 157
        },
        "17": {
          loc: {
            start: {
              line: 159,
              column: 13
            },
            end: {
              line: 159,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 159,
              column: 42
            },
            end: {
              line: 159,
              column: 46
            }
          }, {
            start: {
              line: 159,
              column: 49
            },
            end: {
              line: 159,
              column: 53
            }
          }],
          line: 159
        },
        "18": {
          loc: {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          }, {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 164,
              column: 5
            }
          }],
          line: 162
        },
        "19": {
          loc: {
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }, {
            start: {
              line: 167,
              column: 4
            },
            end: {
              line: 169,
              column: 5
            }
          }],
          line: 167
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
        "60": 0
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
        "15": 0
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
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0]
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

      try {
        cov_qi3uoijxr.s[26]++;
        return document.querySelector(selector) ? (cov_qi3uoijxr.b[6][0]++, selector) : (cov_qi3uoijxr.b[6][1]++, null);
      } catch (err) {
        cov_qi3uoijxr.s[27]++;
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      cov_qi3uoijxr.f[9]++;
      cov_qi3uoijxr.s[28]++;

      if (!element) {
        cov_qi3uoijxr.b[7][0]++;
        cov_qi3uoijxr.s[29]++;
        return 0;
      } else {
        cov_qi3uoijxr.b[7][1]++;
      } // Get transition-duration of the element


      var transitionDuration = (cov_qi3uoijxr.s[30]++, $(element).css('transition-duration'));
      var transitionDelay = (cov_qi3uoijxr.s[31]++, $(element).css('transition-delay'));
      var floatTransitionDuration = (cov_qi3uoijxr.s[32]++, parseFloat(transitionDuration));
      var floatTransitionDelay = (cov_qi3uoijxr.s[33]++, parseFloat(transitionDelay)); // Return 0 if element or transition duration is not found

      cov_qi3uoijxr.s[34]++;

      if ((cov_qi3uoijxr.b[9][0]++, !floatTransitionDuration) && (cov_qi3uoijxr.b[9][1]++, !floatTransitionDelay)) {
        cov_qi3uoijxr.b[8][0]++;
        cov_qi3uoijxr.s[35]++;
        return 0;
      } else {
        cov_qi3uoijxr.b[8][1]++;
      } // If multiple durations are defined, take the first


      cov_qi3uoijxr.s[36]++;
      transitionDuration = transitionDuration.split(',')[0];
      cov_qi3uoijxr.s[37]++;
      transitionDelay = transitionDelay.split(',')[0];
      cov_qi3uoijxr.s[38]++;
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      cov_qi3uoijxr.f[10]++;
      cov_qi3uoijxr.s[39]++;
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      cov_qi3uoijxr.f[11]++;
      cov_qi3uoijxr.s[40]++;
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      cov_qi3uoijxr.f[12]++;
      cov_qi3uoijxr.s[41]++;
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      cov_qi3uoijxr.f[13]++;
      cov_qi3uoijxr.s[42]++;
      return ((cov_qi3uoijxr.b[10][0]++, obj[0]) || (cov_qi3uoijxr.b[10][1]++, obj)).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      cov_qi3uoijxr.f[14]++;
      cov_qi3uoijxr.s[43]++;

      for (var property in configTypes) {
        cov_qi3uoijxr.s[44]++;

        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          cov_qi3uoijxr.b[11][0]++;
          var expectedTypes = (cov_qi3uoijxr.s[45]++, configTypes[property]);
          var value = (cov_qi3uoijxr.s[46]++, config[property]);
          var valueType = (cov_qi3uoijxr.s[47]++, (cov_qi3uoijxr.b[13][0]++, value) && (cov_qi3uoijxr.b[13][1]++, Util.isElement(value)) ? (cov_qi3uoijxr.b[12][0]++, 'element') : (cov_qi3uoijxr.b[12][1]++, toType(value)));
          cov_qi3uoijxr.s[48]++;

          if (!new RegExp(expectedTypes).test(valueType)) {
            cov_qi3uoijxr.b[14][0]++;
            cov_qi3uoijxr.s[49]++;
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          } else {
            cov_qi3uoijxr.b[14][1]++;
          }
        } else {
          cov_qi3uoijxr.b[11][1]++;
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      cov_qi3uoijxr.f[15]++;
      cov_qi3uoijxr.s[50]++;

      if (!document.documentElement.attachShadow) {
        cov_qi3uoijxr.b[15][0]++;
        cov_qi3uoijxr.s[51]++;
        return null;
      } else {
        cov_qi3uoijxr.b[15][1]++;
      } // Can find the shadow root otherwise it'll return the document


      cov_qi3uoijxr.s[52]++;

      if (typeof element.getRootNode === 'function') {
        cov_qi3uoijxr.b[16][0]++;
        var root = (cov_qi3uoijxr.s[53]++, element.getRootNode());
        cov_qi3uoijxr.s[54]++;
        return root instanceof ShadowRoot ? (cov_qi3uoijxr.b[17][0]++, root) : (cov_qi3uoijxr.b[17][1]++, null);
      } else {
        cov_qi3uoijxr.b[16][1]++;
      }

      cov_qi3uoijxr.s[55]++;

      if (element instanceof ShadowRoot) {
        cov_qi3uoijxr.b[18][0]++;
        cov_qi3uoijxr.s[56]++;
        return element;
      } else {
        cov_qi3uoijxr.b[18][1]++;
      } // when we don't find a shadow root


      cov_qi3uoijxr.s[57]++;

      if (!element.parentNode) {
        cov_qi3uoijxr.b[19][0]++;
        cov_qi3uoijxr.s[58]++;
        return null;
      } else {
        cov_qi3uoijxr.b[19][1]++;
      }

      cov_qi3uoijxr.s[59]++;
      return Util.findShadowRoot(element.parentNode);
    }
  });
  cov_qi3uoijxr.s[60]++;
  setTransitionEndSupport();

  return Util;

}));
//# sourceMappingURL=util.js.map
