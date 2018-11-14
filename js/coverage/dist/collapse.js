/*!
  * Bootstrap collapse.js v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Collapse = factory(global.jQuery,global.Util));
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

  var cov_2ky4ec64tw = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/collapse.js",
        hash = "137b755ac22ca1f8b34db2ae9f50dae03fc2e1e4",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/collapse.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 17,
            column: 38
          }
        },
        "1": {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 35
          }
        },
        "2": {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 41
          }
        },
        "3": {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 20,
            column: 42
          }
        },
        "4": {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 39
          }
        },
        "5": {
          start: {
            line: 22,
            column: 28
          },
          end: {
            line: 22,
            column: 38
          }
        },
        "6": {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 27,
            column: 1
          }
        },
        "7": {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 32,
            column: 1
          }
        },
        "8": {
          start: {
            line: 34,
            column: 14
          },
          end: {
            line: 40,
            column: 1
          }
        },
        "9": {
          start: {
            line: 42,
            column: 18
          },
          end: {
            line: 47,
            column: 1
          }
        },
        "10": {
          start: {
            line: 49,
            column: 18
          },
          end: {
            line: 52,
            column: 1
          }
        },
        "11": {
          start: {
            line: 54,
            column: 17
          },
          end: {
            line: 57,
            column: 1
          }
        },
        "12": {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 67,
            column: 33
          }
        },
        "13": {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 68,
            column: 35
          }
        },
        "14": {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 51
          }
        },
        "15": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 73,
            column: 6
          }
        },
        "16": {
          start: {
            line: 74,
            column: 23
          },
          end: {
            line: 74,
            column: 85
          }
        },
        "17": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 85,
            column: 5
          }
        },
        "18": {
          start: {
            line: 76,
            column: 19
          },
          end: {
            line: 76,
            column: 32
          }
        },
        "19": {
          start: {
            line: 77,
            column: 23
          },
          end: {
            line: 77,
            column: 56
          }
        },
        "20": {
          start: {
            line: 78,
            column: 28
          },
          end: {
            line: 79,
            column: 53
          }
        },
        "21": {
          start: {
            line: 79,
            column: 31
          },
          end: {
            line: 79,
            column: 52
          }
        },
        "22": {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 84,
            column: 7
          }
        },
        "23": {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 82,
            column: 33
          }
        },
        "24": {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 83,
            column: 37
          }
        },
        "25": {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 65
          }
        },
        "26": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 91,
            column: 5
          }
        },
        "27": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 71
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
            column: 19
          }
        },
        "30": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 18
          }
        },
        "31": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 18
          }
        },
        "32": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        "33": {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 112,
            column: 17
          }
        },
        "34": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 17
          }
        },
        "35": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        "36": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 121,
            column: 12
          }
        },
        "37": {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        "38": {
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 135,
            column: 10
          }
        },
        "39": {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        },
        "40": {
          start: {
            line: 131,
            column: 12
          },
          end: {
            line: 131,
            column: 75
          }
        },
        "41": {
          start: {
            line: 134,
            column: 10
          },
          end: {
            line: 134,
            column: 60
          }
        },
        "42": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        },
        "43": {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 22
          }
        },
        "44": {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 147,
            column: 5
          }
        },
        "45": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 65
          }
        },
        "46": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 146,
            column: 7
          }
        },
        "47": {
          start: {
            line: 145,
            column: 8
          },
          end: {
            line: 145,
            column: 14
          }
        },
        "48": {
          start: {
            line: 149,
            column: 23
          },
          end: {
            line: 149,
            column: 42
          }
        },
        "49": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 40
          }
        },
        "50": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 153,
            column: 5
          }
        },
        "51": {
          start: {
            line: 152,
            column: 6
          },
          end: {
            line: 152,
            column: 12
          }
        },
        "52": {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "53": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 156,
            column: 76
          }
        },
        "54": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 159,
            column: 7
          }
        },
        "55": {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 158,
            column: 39
          }
        },
        "56": {
          start: {
            line: 162,
            column: 22
          },
          end: {
            line: 162,
            column: 42
          }
        },
        "57": {
          start: {
            line: 164,
            column: 4
          },
          end: {
            line: 166,
            column: 37
          }
        },
        "58": {
          start: {
            line: 168,
            column: 4
          },
          end: {
            line: 168,
            column: 38
          }
        },
        "59": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        },
        "60": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 173,
            column: 36
          }
        },
        "61": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 31
          }
        },
        "62": {
          start: {
            line: 178,
            column: 21
          },
          end: {
            line: 189,
            column: 5
          }
        },
        "63": {
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 182,
            column: 33
          }
        },
        "64": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 184,
            column: 41
          }
        },
        "65": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 186,
            column: 34
          }
        },
        "66": {
          start: {
            line: 188,
            column: 6
          },
          end: {
            line: 188,
            column: 43
          }
        },
        "67": {
          start: {
            line: 191,
            column: 33
          },
          end: {
            line: 191,
            column: 80
          }
        },
        "68": {
          start: {
            line: 192,
            column: 23
          },
          end: {
            line: 192,
            column: 54
          }
        },
        "69": {
          start: {
            line: 193,
            column: 31
          },
          end: {
            line: 193,
            column: 83
          }
        },
        "70": {
          start: {
            line: 195,
            column: 4
          },
          end: {
            line: 197,
            column: 47
          }
        },
        "71": {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 199,
            column: 69
          }
        },
        "72": {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 206,
            column: 5
          }
        },
        "73": {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 205,
            column: 12
          }
        },
        "74": {
          start: {
            line: 208,
            column: 23
          },
          end: {
            line: 208,
            column: 42
          }
        },
        "75": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 40
          }
        },
        "76": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 212,
            column: 5
          }
        },
        "77": {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 211,
            column: 12
          }
        },
        "78": {
          start: {
            line: 214,
            column: 22
          },
          end: {
            line: 214,
            column: 42
          }
        },
        "79": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 92
          }
        },
        "80": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 30
          }
        },
        "81": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 223,
            column: 34
          }
        },
        "82": {
          start: {
            line: 225,
            column: 31
          },
          end: {
            line: 225,
            column: 56
          }
        },
        "83": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 238,
            column: 5
          }
        },
        "84": {
          start: {
            line: 227,
            column: 6
          },
          end: {
            line: 237,
            column: 7
          }
        },
        "85": {
          start: {
            line: 228,
            column: 24
          },
          end: {
            line: 228,
            column: 45
          }
        },
        "86": {
          start: {
            line: 229,
            column: 25
          },
          end: {
            line: 229,
            column: 61
          }
        },
        "87": {
          start: {
            line: 230,
            column: 8
          },
          end: {
            line: 236,
            column: 9
          }
        },
        "88": {
          start: {
            line: 231,
            column: 24
          },
          end: {
            line: 231,
            column: 77
          }
        },
        "89": {
          start: {
            line: 232,
            column: 10
          },
          end: {
            line: 235,
            column: 11
          }
        },
        "90": {
          start: {
            line: 233,
            column: 12
          },
          end: {
            line: 234,
            column: 43
          }
        },
        "91": {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 240,
            column: 31
          }
        },
        "92": {
          start: {
            line: 242,
            column: 21
          },
          end: {
            line: 248,
            column: 5
          }
        },
        "93": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 243,
            column: 34
          }
        },
        "94": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 247,
            column: 30
          }
        },
        "95": {
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 250,
            column: 39
          }
        },
        "96": {
          start: {
            line: 251,
            column: 31
          },
          end: {
            line: 251,
            column: 83
          }
        },
        "97": {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 255,
            column: 47
          }
        },
        "98": {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 259,
            column: 43
          }
        },
        "99": {
          start: {
            line: 263,
            column: 4
          },
          end: {
            line: 263,
            column: 41
          }
        },
        "100": {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 265,
            column: 32
          }
        },
        "101": {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 266,
            column: 32
          }
        },
        "102": {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 32
          }
        },
        "103": {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 268,
            column: 32
          }
        },
        "104": {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 269,
            column: 32
          }
        },
        "105": {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 278,
            column: 5
          }
        },
        "106": {
          start: {
            line: 279,
            column: 4
          },
          end: {
            line: 279,
            column: 42
          }
        },
        "107": {
          start: {
            line: 280,
            column: 4
          },
          end: {
            line: 280,
            column: 51
          }
        },
        "108": {
          start: {
            line: 281,
            column: 4
          },
          end: {
            line: 281,
            column: 17
          }
        },
        "109": {
          start: {
            line: 285,
            column: 21
          },
          end: {
            line: 285,
            column: 63
          }
        },
        "110": {
          start: {
            line: 286,
            column: 4
          },
          end: {
            line: 286,
            column: 56
          }
        },
        "111": {
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 301,
            column: 5
          }
        },
        "112": {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 293,
            column: 34
          }
        },
        "113": {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        },
        "114": {
          start: {
            line: 297,
            column: 8
          },
          end: {
            line: 297,
            column: 39
          }
        },
        "115": {
          start: {
            line: 300,
            column: 6
          },
          end: {
            line: 300,
            column: 58
          }
        },
        "116": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 304,
            column: 70
          }
        },
        "117": {
          start: {
            line: 306,
            column: 21
          },
          end: {
            line: 306,
            column: 69
          }
        },
        "118": {
          start: {
            line: 307,
            column: 4
          },
          end: {
            line: 312,
            column: 6
          }
        },
        "119": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 311,
            column: 7
          }
        },
        "120": {
          start: {
            line: 314,
            column: 4
          },
          end: {
            line: 314,
            column: 17
          }
        },
        "121": {
          start: {
            line: 318,
            column: 19
          },
          end: {
            line: 318,
            column: 54
          }
        },
        "122": {
          start: {
            line: 320,
            column: 4
          },
          end: {
            line: 324,
            column: 5
          }
        },
        "123": {
          start: {
            line: 321,
            column: 6
          },
          end: {
            line: 323,
            column: 38
          }
        },
        "124": {
          start: {
            line: 330,
            column: 21
          },
          end: {
            line: 330,
            column: 57
          }
        },
        "125": {
          start: {
            line: 331,
            column: 4
          },
          end: {
            line: 331,
            column: 61
          }
        },
        "126": {
          start: {
            line: 335,
            column: 4
          },
          end: {
            line: 359,
            column: 6
          }
        },
        "127": {
          start: {
            line: 336,
            column: 22
          },
          end: {
            line: 336,
            column: 29
          }
        },
        "128": {
          start: {
            line: 337,
            column: 22
          },
          end: {
            line: 337,
            column: 42
          }
        },
        "129": {
          start: {
            line: 338,
            column: 22
          },
          end: {
            line: 342,
            column: 7
          }
        },
        "130": {
          start: {
            line: 344,
            column: 6
          },
          end: {
            line: 346,
            column: 7
          }
        },
        "131": {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 345,
            column: 30
          }
        },
        "132": {
          start: {
            line: 348,
            column: 6
          },
          end: {
            line: 351,
            column: 7
          }
        },
        "133": {
          start: {
            line: 349,
            column: 8
          },
          end: {
            line: 349,
            column: 42
          }
        },
        "134": {
          start: {
            line: 350,
            column: 8
          },
          end: {
            line: 350,
            column: 34
          }
        },
        "135": {
          start: {
            line: 353,
            column: 6
          },
          end: {
            line: 358,
            column: 7
          }
        },
        "136": {
          start: {
            line: 354,
            column: 8
          },
          end: {
            line: 356,
            column: 9
          }
        },
        "137": {
          start: {
            line: 355,
            column: 10
          },
          end: {
            line: 355,
            column: 60
          }
        },
        "138": {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 357,
            column: 22
          }
        },
        "139": {
          start: {
            line: 369,
            column: 0
          },
          end: {
            line: 384,
            column: 2
          }
        },
        "140": {
          start: {
            line: 371,
            column: 2
          },
          end: {
            line: 373,
            column: 3
          }
        },
        "141": {
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 372,
            column: 26
          }
        },
        "142": {
          start: {
            line: 375,
            column: 19
          },
          end: {
            line: 375,
            column: 26
          }
        },
        "143": {
          start: {
            line: 376,
            column: 19
          },
          end: {
            line: 376,
            column: 52
          }
        },
        "144": {
          start: {
            line: 377,
            column: 20
          },
          end: {
            line: 377,
            column: 70
          }
        },
        "145": {
          start: {
            line: 378,
            column: 2
          },
          end: {
            line: 383,
            column: 4
          }
        },
        "146": {
          start: {
            line: 379,
            column: 20
          },
          end: {
            line: 379,
            column: 27
          }
        },
        "147": {
          start: {
            line: 380,
            column: 20
          },
          end: {
            line: 380,
            column: 42
          }
        },
        "148": {
          start: {
            line: 381,
            column: 20
          },
          end: {
            line: 381,
            column: 53
          }
        },
        "149": {
          start: {
            line: 382,
            column: 4
          },
          end: {
            line: 382,
            column: 51
          }
        },
        "150": {
          start: {
            line: 392,
            column: 0
          },
          end: {
            line: 392,
            column: 38
          }
        },
        "151": {
          start: {
            line: 393,
            column: 0
          },
          end: {
            line: 393,
            column: 33
          }
        },
        "152": {
          start: {
            line: 394,
            column: 0
          },
          end: {
            line: 397,
            column: 1
          }
        },
        "153": {
          start: {
            line: 395,
            column: 2
          },
          end: {
            line: 395,
            column: 33
          }
        },
        "154": {
          start: {
            line: 396,
            column: 2
          },
          end: {
            line: 396,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 66,
              column: 2
            },
            end: {
              line: 66,
              column: 3
            }
          },
          loc: {
            start: {
              line: 66,
              column: 31
            },
            end: {
              line: 96,
              column: 3
            }
          },
          line: 66
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 79,
              column: 16
            },
            end: {
              line: 79,
              column: 17
            }
          },
          loc: {
            start: {
              line: 79,
              column: 31
            },
            end: {
              line: 79,
              column: 52
            }
          },
          line: 79
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 100,
              column: 2
            },
            end: {
              line: 100,
              column: 3
            }
          },
          loc: {
            start: {
              line: 100,
              column: 23
            },
            end: {
              line: 102,
              column: 3
            }
          },
          line: 100
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 104,
              column: 2
            },
            end: {
              line: 104,
              column: 3
            }
          },
          loc: {
            start: {
              line: 104,
              column: 23
            },
            end: {
              line: 106,
              column: 3
            }
          },
          line: 104
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 110,
              column: 2
            },
            end: {
              line: 110,
              column: 3
            }
          },
          loc: {
            start: {
              line: 110,
              column: 11
            },
            end: {
              line: 116,
              column: 3
            }
          },
          line: 110
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 118,
              column: 2
            },
            end: {
              line: 118,
              column: 3
            }
          },
          loc: {
            start: {
              line: 118,
              column: 9
            },
            end: {
              line: 200,
              column: 3
            }
          },
          line: 118
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 129,
              column: 16
            },
            end: {
              line: 129,
              column: 17
            }
          },
          loc: {
            start: {
              line: 129,
              column: 26
            },
            end: {
              line: 135,
              column: 9
            }
          },
          line: 129
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 178,
              column: 21
            },
            end: {
              line: 178,
              column: 22
            }
          },
          loc: {
            start: {
              line: 178,
              column: 27
            },
            end: {
              line: 189,
              column: 5
            }
          },
          line: 178
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 202,
              column: 2
            },
            end: {
              line: 202,
              column: 3
            }
          },
          loc: {
            start: {
              line: 202,
              column: 9
            },
            end: {
              line: 256,
              column: 3
            }
          },
          line: 202
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 242,
              column: 21
            },
            end: {
              line: 242,
              column: 22
            }
          },
          loc: {
            start: {
              line: 242,
              column: 27
            },
            end: {
              line: 248,
              column: 5
            }
          },
          line: 242
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 258,
              column: 2
            },
            end: {
              line: 258,
              column: 3
            }
          },
          loc: {
            start: {
              line: 258,
              column: 36
            },
            end: {
              line: 260,
              column: 3
            }
          },
          line: 258
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 262,
              column: 2
            },
            end: {
              line: 262,
              column: 3
            }
          },
          loc: {
            start: {
              line: 262,
              column: 12
            },
            end: {
              line: 270,
              column: 3
            }
          },
          line: 262
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 274,
              column: 2
            },
            end: {
              line: 274,
              column: 3
            }
          },
          loc: {
            start: {
              line: 274,
              column: 21
            },
            end: {
              line: 282,
              column: 3
            }
          },
          line: 274
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 284,
              column: 2
            },
            end: {
              line: 284,
              column: 3
            }
          },
          loc: {
            start: {
              line: 284,
              column: 18
            },
            end: {
              line: 287,
              column: 3
            }
          },
          line: 284
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 289,
              column: 2
            },
            end: {
              line: 289,
              column: 3
            }
          },
          loc: {
            start: {
              line: 289,
              column: 15
            },
            end: {
              line: 315,
              column: 3
            }
          },
          line: 289
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 307,
              column: 21
            },
            end: {
              line: 307,
              column: 22
            }
          },
          loc: {
            start: {
              line: 307,
              column: 37
            },
            end: {
              line: 312,
              column: 5
            }
          },
          line: 307
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 317,
              column: 2
            },
            end: {
              line: 317,
              column: 3
            }
          },
          loc: {
            start: {
              line: 317,
              column: 51
            },
            end: {
              line: 325,
              column: 3
            }
          },
          line: 317
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 329,
              column: 2
            },
            end: {
              line: 329,
              column: 3
            }
          },
          loc: {
            start: {
              line: 329,
              column: 40
            },
            end: {
              line: 332,
              column: 3
            }
          },
          line: 329
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 334,
              column: 2
            },
            end: {
              line: 334,
              column: 3
            }
          },
          loc: {
            start: {
              line: 334,
              column: 34
            },
            end: {
              line: 360,
              column: 3
            }
          },
          line: 334
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 335,
              column: 21
            },
            end: {
              line: 335,
              column: 22
            }
          },
          loc: {
            start: {
              line: 335,
              column: 33
            },
            end: {
              line: 359,
              column: 5
            }
          },
          line: 335
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 369,
              column: 59
            },
            end: {
              line: 369,
              column: 60
            }
          },
          loc: {
            start: {
              line: 369,
              column: 76
            },
            end: {
              line: 384,
              column: 1
            }
          },
          line: 369
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 378,
              column: 20
            },
            end: {
              line: 378,
              column: 21
            }
          },
          loc: {
            start: {
              line: 378,
              column: 32
            },
            end: {
              line: 383,
              column: 3
            }
          },
          line: 378
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 394,
              column: 24
            },
            end: {
              line: 394,
              column: 25
            }
          },
          loc: {
            start: {
              line: 394,
              column: 30
            },
            end: {
              line: 397,
              column: 1
            }
          },
          line: 394
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 81,
              column: 6
            },
            end: {
              line: 84,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 81,
              column: 6
            },
            end: {
              line: 84,
              column: 7
            }
          }, {
            start: {
              line: 81,
              column: 6
            },
            end: {
              line: 84,
              column: 7
            }
          }],
          line: 81
        },
        "1": {
          loc: {
            start: {
              line: 81,
              column: 10
            },
            end: {
              line: 81,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 81,
              column: 10
            },
            end: {
              line: 81,
              column: 27
            }
          }, {
            start: {
              line: 81,
              column: 31
            },
            end: {
              line: 81,
              column: 55
            }
          }],
          line: 81
        },
        "2": {
          loc: {
            start: {
              line: 87,
              column: 19
            },
            end: {
              line: 87,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 87,
              column: 41
            },
            end: {
              line: 87,
              column: 58
            }
          }, {
            start: {
              line: 87,
              column: 61
            },
            end: {
              line: 87,
              column: 65
            }
          }],
          line: 87
        },
        "3": {
          loc: {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          }, {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          }],
          line: 89
        },
        "4": {
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
        "5": {
          loc: {
            start: {
              line: 111,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 111,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }, {
            start: {
              line: 111,
              column: 4
            },
            end: {
              line: 115,
              column: 5
            }
          }],
          line: 111
        },
        "6": {
          loc: {
            start: {
              line: 119,
              column: 4
            },
            end: {
              line: 122,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 119,
              column: 4
            },
            end: {
              line: 122,
              column: 5
            }
          }, {
            start: {
              line: 119,
              column: 4
            },
            end: {
              line: 122,
              column: 5
            }
          }],
          line: 119
        },
        "7": {
          loc: {
            start: {
              line: 119,
              column: 8
            },
            end: {
              line: 120,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 119,
              column: 8
            },
            end: {
              line: 119,
              column: 29
            }
          }, {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 120,
              column: 47
            }
          }],
          line: 119
        },
        "8": {
          loc: {
            start: {
              line: 127,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 127,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          }, {
            start: {
              line: 127,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          }],
          line: 127
        },
        "9": {
          loc: {
            start: {
              line: 130,
              column: 10
            },
            end: {
              line: 132,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 10
            },
            end: {
              line: 132,
              column: 11
            }
          }, {
            start: {
              line: 130,
              column: 10
            },
            end: {
              line: 132,
              column: 11
            }
          }],
          line: 130
        },
        "10": {
          loc: {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          }, {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 139,
              column: 7
            }
          }],
          line: 137
        },
        "11": {
          loc: {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          }, {
            start: {
              line: 142,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          }],
          line: 142
        },
        "12": {
          loc: {
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
              column: 7
            }
          }, {
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
              column: 7
            }
          }],
          line: 144
        },
        "13": {
          loc: {
            start: {
              line: 144,
              column: 10
            },
            end: {
              line: 144,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 144,
              column: 10
            },
            end: {
              line: 144,
              column: 21
            }
          }, {
            start: {
              line: 144,
              column: 25
            },
            end: {
              line: 144,
              column: 53
            }
          }],
          line: 144
        },
        "14": {
          loc: {
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 153,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 153,
              column: 5
            }
          }, {
            start: {
              line: 151,
              column: 4
            },
            end: {
              line: 153,
              column: 5
            }
          }],
          line: 151
        },
        "15": {
          loc: {
            start: {
              line: 155,
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
              line: 155,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }, {
            start: {
              line: 155,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }],
          line: 155
        },
        "16": {
          loc: {
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          }, {
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          }],
          line: 157
        },
        "17": {
          loc: {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          }, {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          }],
          line: 170
        },
        "18": {
          loc: {
            start: {
              line: 203,
              column: 4
            },
            end: {
              line: 206,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 203,
              column: 4
            },
            end: {
              line: 206,
              column: 5
            }
          }, {
            start: {
              line: 203,
              column: 4
            },
            end: {
              line: 206,
              column: 5
            }
          }],
          line: 203
        },
        "19": {
          loc: {
            start: {
              line: 203,
              column: 8
            },
            end: {
              line: 204,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 203,
              column: 8
            },
            end: {
              line: 203,
              column: 29
            }
          }, {
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 204,
              column: 48
            }
          }],
          line: 203
        },
        "20": {
          loc: {
            start: {
              line: 210,
              column: 4
            },
            end: {
              line: 212,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 210,
              column: 4
            },
            end: {
              line: 212,
              column: 5
            }
          }, {
            start: {
              line: 210,
              column: 4
            },
            end: {
              line: 212,
              column: 5
            }
          }],
          line: 210
        },
        "21": {
          loc: {
            start: {
              line: 226,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 226,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          }, {
            start: {
              line: 226,
              column: 4
            },
            end: {
              line: 238,
              column: 5
            }
          }],
          line: 226
        },
        "22": {
          loc: {
            start: {
              line: 230,
              column: 8
            },
            end: {
              line: 236,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 230,
              column: 8
            },
            end: {
              line: 236,
              column: 9
            }
          }, {
            start: {
              line: 230,
              column: 8
            },
            end: {
              line: 236,
              column: 9
            }
          }],
          line: 230
        },
        "23": {
          loc: {
            start: {
              line: 232,
              column: 10
            },
            end: {
              line: 235,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 232,
              column: 10
            },
            end: {
              line: 235,
              column: 11
            }
          }, {
            start: {
              line: 232,
              column: 10
            },
            end: {
              line: 235,
              column: 11
            }
          }],
          line: 232
        },
        "24": {
          loc: {
            start: {
              line: 286,
              column: 11
            },
            end: {
              line: 286,
              column: 56
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 286,
              column: 22
            },
            end: {
              line: 286,
              column: 37
            }
          }, {
            start: {
              line: 286,
              column: 40
            },
            end: {
              line: 286,
              column: 56
            }
          }],
          line: 286
        },
        "25": {
          loc: {
            start: {
              line: 292,
              column: 4
            },
            end: {
              line: 301,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 292,
              column: 4
            },
            end: {
              line: 301,
              column: 5
            }
          }, {
            start: {
              line: 292,
              column: 4
            },
            end: {
              line: 301,
              column: 5
            }
          }],
          line: 292
        },
        "26": {
          loc: {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 298,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 298,
              column: 7
            }
          }, {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 298,
              column: 7
            }
          }],
          line: 296
        },
        "27": {
          loc: {
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 324,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 324,
              column: 5
            }
          }, {
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 324,
              column: 5
            }
          }],
          line: 320
        },
        "28": {
          loc: {
            start: {
              line: 331,
              column: 11
            },
            end: {
              line: 331,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 331,
              column: 22
            },
            end: {
              line: 331,
              column: 54
            }
          }, {
            start: {
              line: 331,
              column: 57
            },
            end: {
              line: 331,
              column: 61
            }
          }],
          line: 331
        },
        "29": {
          loc: {
            start: {
              line: 341,
              column: 11
            },
            end: {
              line: 341,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 341,
              column: 50
            },
            end: {
              line: 341,
              column: 56
            }
          }, {
            start: {
              line: 341,
              column: 59
            },
            end: {
              line: 341,
              column: 61
            }
          }],
          line: 341
        },
        "30": {
          loc: {
            start: {
              line: 341,
              column: 11
            },
            end: {
              line: 341,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 341,
              column: 11
            },
            end: {
              line: 341,
              column: 37
            }
          }, {
            start: {
              line: 341,
              column: 41
            },
            end: {
              line: 341,
              column: 47
            }
          }],
          line: 341
        },
        "31": {
          loc: {
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 346,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 346,
              column: 7
            }
          }, {
            start: {
              line: 344,
              column: 6
            },
            end: {
              line: 346,
              column: 7
            }
          }],
          line: 344
        },
        "32": {
          loc: {
            start: {
              line: 344,
              column: 10
            },
            end: {
              line: 344,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 344,
              column: 10
            },
            end: {
              line: 344,
              column: 15
            }
          }, {
            start: {
              line: 344,
              column: 19
            },
            end: {
              line: 344,
              column: 33
            }
          }, {
            start: {
              line: 344,
              column: 37
            },
            end: {
              line: 344,
              column: 61
            }
          }],
          line: 344
        },
        "33": {
          loc: {
            start: {
              line: 348,
              column: 6
            },
            end: {
              line: 351,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 348,
              column: 6
            },
            end: {
              line: 351,
              column: 7
            }
          }, {
            start: {
              line: 348,
              column: 6
            },
            end: {
              line: 351,
              column: 7
            }
          }],
          line: 348
        },
        "34": {
          loc: {
            start: {
              line: 353,
              column: 6
            },
            end: {
              line: 358,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 353,
              column: 6
            },
            end: {
              line: 358,
              column: 7
            }
          }, {
            start: {
              line: 353,
              column: 6
            },
            end: {
              line: 358,
              column: 7
            }
          }],
          line: 353
        },
        "35": {
          loc: {
            start: {
              line: 354,
              column: 8
            },
            end: {
              line: 356,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 354,
              column: 8
            },
            end: {
              line: 356,
              column: 9
            }
          }, {
            start: {
              line: 354,
              column: 8
            },
            end: {
              line: 356,
              column: 9
            }
          }],
          line: 354
        },
        "36": {
          loc: {
            start: {
              line: 371,
              column: 2
            },
            end: {
              line: 373,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 371,
              column: 2
            },
            end: {
              line: 373,
              column: 3
            }
          }, {
            start: {
              line: 371,
              column: 2
            },
            end: {
              line: 373,
              column: 3
            }
          }],
          line: 371
        },
        "37": {
          loc: {
            start: {
              line: 381,
              column: 20
            },
            end: {
              line: 381,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 381,
              column: 27
            },
            end: {
              line: 381,
              column: 35
            }
          }, {
            start: {
              line: 381,
              column: 38
            },
            end: {
              line: 381,
              column: 53
            }
          }],
          line: 381
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
        "85": 0,
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0
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
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0
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
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0]
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
   * Bootstrap (v4.1.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_2ky4ec64tw.s[0]++, 'collapse');
  var VERSION = (cov_2ky4ec64tw.s[1]++, '4.1.3');
  var DATA_KEY = (cov_2ky4ec64tw.s[2]++, 'bs.collapse');
  var EVENT_KEY = (cov_2ky4ec64tw.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_2ky4ec64tw.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_2ky4ec64tw.s[5]++, $.fn[NAME]);
  var Default = (cov_2ky4ec64tw.s[6]++, {
    toggle: true,
    parent: ''
  });
  var DefaultType = (cov_2ky4ec64tw.s[7]++, {
    toggle: 'boolean',
    parent: '(string|element)'
  });
  var Event = (cov_2ky4ec64tw.s[8]++, {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_2ky4ec64tw.s[9]++, {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  });
  var Dimension = (cov_2ky4ec64tw.s[10]++, {
    WIDTH: 'width',
    HEIGHT: 'height'
  });
  var Selector = (cov_2ky4ec64tw.s[11]++, {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      cov_2ky4ec64tw.f[0]++;
      cov_2ky4ec64tw.s[12]++;
      this._isTransitioning = false;
      cov_2ky4ec64tw.s[13]++;
      this._element = element;
      cov_2ky4ec64tw.s[14]++;
      this._config = this._getConfig(config);
      cov_2ky4ec64tw.s[15]++;
      this._triggerArray = $.makeArray(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = (cov_2ky4ec64tw.s[16]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE)));
      cov_2ky4ec64tw.s[17]++;

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = (cov_2ky4ec64tw.s[18]++, toggleList[i]);
        var selector = (cov_2ky4ec64tw.s[19]++, Util.getSelectorFromElement(elem));
        var filterElement = (cov_2ky4ec64tw.s[20]++, [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          cov_2ky4ec64tw.f[1]++;
          cov_2ky4ec64tw.s[21]++;
          return foundElem === element;
        }));
        cov_2ky4ec64tw.s[22]++;

        if ((cov_2ky4ec64tw.b[1][0]++, selector !== null) && (cov_2ky4ec64tw.b[1][1]++, filterElement.length > 0)) {
          cov_2ky4ec64tw.b[0][0]++;
          cov_2ky4ec64tw.s[23]++;
          this._selector = selector;
          cov_2ky4ec64tw.s[24]++;

          this._triggerArray.push(elem);
        } else {
          cov_2ky4ec64tw.b[0][1]++;
        }
      }

      cov_2ky4ec64tw.s[25]++;
      this._parent = this._config.parent ? (cov_2ky4ec64tw.b[2][0]++, this._getParent()) : (cov_2ky4ec64tw.b[2][1]++, null);
      cov_2ky4ec64tw.s[26]++;

      if (!this._config.parent) {
        cov_2ky4ec64tw.b[3][0]++;
        cov_2ky4ec64tw.s[27]++;

        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      } else {
        cov_2ky4ec64tw.b[3][1]++;
      }

      cov_2ky4ec64tw.s[28]++;

      if (this._config.toggle) {
        cov_2ky4ec64tw.b[4][0]++;
        cov_2ky4ec64tw.s[29]++;
        this.toggle();
      } else {
        cov_2ky4ec64tw.b[4][1]++;
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_2ky4ec64tw.f[4]++;
      cov_2ky4ec64tw.s[32]++;

      if ($(this._element).hasClass(ClassName.SHOW)) {
        cov_2ky4ec64tw.b[5][0]++;
        cov_2ky4ec64tw.s[33]++;
        this.hide();
      } else {
        cov_2ky4ec64tw.b[5][1]++;
        cov_2ky4ec64tw.s[34]++;
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      cov_2ky4ec64tw.f[5]++;
      cov_2ky4ec64tw.s[35]++;

      if ((cov_2ky4ec64tw.b[7][0]++, this._isTransitioning) || (cov_2ky4ec64tw.b[7][1]++, $(this._element).hasClass(ClassName.SHOW))) {
        cov_2ky4ec64tw.b[6][0]++;
        cov_2ky4ec64tw.s[36]++;
        return;
      } else {
        cov_2ky4ec64tw.b[6][1]++;
      }

      var actives;
      var activesData;
      cov_2ky4ec64tw.s[37]++;

      if (this._parent) {
        cov_2ky4ec64tw.b[8][0]++;
        cov_2ky4ec64tw.s[38]++;
        actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
          cov_2ky4ec64tw.f[6]++;
          cov_2ky4ec64tw.s[39]++;

          if (typeof _this._config.parent === 'string') {
            cov_2ky4ec64tw.b[9][0]++;
            cov_2ky4ec64tw.s[40]++;
            return elem.getAttribute('data-parent') === _this._config.parent;
          } else {
            cov_2ky4ec64tw.b[9][1]++;
          }

          cov_2ky4ec64tw.s[41]++;
          return elem.classList.contains(ClassName.COLLAPSE);
        });
        cov_2ky4ec64tw.s[42]++;

        if (actives.length === 0) {
          cov_2ky4ec64tw.b[10][0]++;
          cov_2ky4ec64tw.s[43]++;
          actives = null;
        } else {
          cov_2ky4ec64tw.b[10][1]++;
        }
      } else {
        cov_2ky4ec64tw.b[8][1]++;
      }

      cov_2ky4ec64tw.s[44]++;

      if (actives) {
        cov_2ky4ec64tw.b[11][0]++;
        cov_2ky4ec64tw.s[45]++;
        activesData = $(actives).not(this._selector).data(DATA_KEY);
        cov_2ky4ec64tw.s[46]++;

        if ((cov_2ky4ec64tw.b[13][0]++, activesData) && (cov_2ky4ec64tw.b[13][1]++, activesData._isTransitioning)) {
          cov_2ky4ec64tw.b[12][0]++;
          cov_2ky4ec64tw.s[47]++;
          return;
        } else {
          cov_2ky4ec64tw.b[12][1]++;
        }
      } else {
        cov_2ky4ec64tw.b[11][1]++;
      }

      var startEvent = (cov_2ky4ec64tw.s[48]++, $.Event(Event.SHOW));
      cov_2ky4ec64tw.s[49]++;
      $(this._element).trigger(startEvent);
      cov_2ky4ec64tw.s[50]++;

      if (startEvent.isDefaultPrevented()) {
        cov_2ky4ec64tw.b[14][0]++;
        cov_2ky4ec64tw.s[51]++;
        return;
      } else {
        cov_2ky4ec64tw.b[14][1]++;
      }

      cov_2ky4ec64tw.s[52]++;

      if (actives) {
        cov_2ky4ec64tw.b[15][0]++;
        cov_2ky4ec64tw.s[53]++;

        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        cov_2ky4ec64tw.s[54]++;

        if (!activesData) {
          cov_2ky4ec64tw.b[16][0]++;
          cov_2ky4ec64tw.s[55]++;
          $(actives).data(DATA_KEY, null);
        } else {
          cov_2ky4ec64tw.b[16][1]++;
        }
      } else {
        cov_2ky4ec64tw.b[15][1]++;
      }

      var dimension = (cov_2ky4ec64tw.s[56]++, this._getDimension());
      cov_2ky4ec64tw.s[57]++;
      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      cov_2ky4ec64tw.s[58]++;
      this._element.style[dimension] = 0;
      cov_2ky4ec64tw.s[59]++;

      if (this._triggerArray.length) {
        cov_2ky4ec64tw.b[17][0]++;
        cov_2ky4ec64tw.s[60]++;
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      } else {
        cov_2ky4ec64tw.b[17][1]++;
      }

      cov_2ky4ec64tw.s[61]++;
      this.setTransitioning(true);
      cov_2ky4ec64tw.s[62]++;

      var complete = function complete() {
        cov_2ky4ec64tw.f[7]++;
        cov_2ky4ec64tw.s[63]++;
        $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        cov_2ky4ec64tw.s[64]++;
        _this._element.style[dimension] = '';
        cov_2ky4ec64tw.s[65]++;

        _this.setTransitioning(false);

        cov_2ky4ec64tw.s[66]++;
        $(_this._element).trigger(Event.SHOWN);
      };

      var capitalizedDimension = (cov_2ky4ec64tw.s[67]++, dimension[0].toUpperCase() + dimension.slice(1));
      var scrollSize = (cov_2ky4ec64tw.s[68]++, "scroll" + capitalizedDimension);
      var transitionDuration = (cov_2ky4ec64tw.s[69]++, Util.getTransitionDurationFromElement(this._element));
      cov_2ky4ec64tw.s[70]++;
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      cov_2ky4ec64tw.s[71]++;
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      cov_2ky4ec64tw.f[8]++;
      cov_2ky4ec64tw.s[72]++;

      if ((cov_2ky4ec64tw.b[19][0]++, this._isTransitioning) || (cov_2ky4ec64tw.b[19][1]++, !$(this._element).hasClass(ClassName.SHOW))) {
        cov_2ky4ec64tw.b[18][0]++;
        cov_2ky4ec64tw.s[73]++;
        return;
      } else {
        cov_2ky4ec64tw.b[18][1]++;
      }

      var startEvent = (cov_2ky4ec64tw.s[74]++, $.Event(Event.HIDE));
      cov_2ky4ec64tw.s[75]++;
      $(this._element).trigger(startEvent);
      cov_2ky4ec64tw.s[76]++;

      if (startEvent.isDefaultPrevented()) {
        cov_2ky4ec64tw.b[20][0]++;
        cov_2ky4ec64tw.s[77]++;
        return;
      } else {
        cov_2ky4ec64tw.b[20][1]++;
      }

      var dimension = (cov_2ky4ec64tw.s[78]++, this._getDimension());
      cov_2ky4ec64tw.s[79]++;
      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      cov_2ky4ec64tw.s[80]++;
      Util.reflow(this._element);
      cov_2ky4ec64tw.s[81]++;
      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
      var triggerArrayLength = (cov_2ky4ec64tw.s[82]++, this._triggerArray.length);
      cov_2ky4ec64tw.s[83]++;

      if (triggerArrayLength > 0) {
        cov_2ky4ec64tw.b[21][0]++;
        cov_2ky4ec64tw.s[84]++;

        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = (cov_2ky4ec64tw.s[85]++, this._triggerArray[i]);
          var selector = (cov_2ky4ec64tw.s[86]++, Util.getSelectorFromElement(trigger));
          cov_2ky4ec64tw.s[87]++;

          if (selector !== null) {
            cov_2ky4ec64tw.b[22][0]++;
            var $elem = (cov_2ky4ec64tw.s[88]++, $([].slice.call(document.querySelectorAll(selector))));
            cov_2ky4ec64tw.s[89]++;

            if (!$elem.hasClass(ClassName.SHOW)) {
              cov_2ky4ec64tw.b[23][0]++;
              cov_2ky4ec64tw.s[90]++;
              $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            } else {
              cov_2ky4ec64tw.b[23][1]++;
            }
          } else {
            cov_2ky4ec64tw.b[22][1]++;
          }
        }
      } else {
        cov_2ky4ec64tw.b[21][1]++;
      }

      cov_2ky4ec64tw.s[91]++;
      this.setTransitioning(true);
      cov_2ky4ec64tw.s[92]++;

      var complete = function complete() {
        cov_2ky4ec64tw.f[9]++;
        cov_2ky4ec64tw.s[93]++;

        _this2.setTransitioning(false);

        cov_2ky4ec64tw.s[94]++;
        $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      cov_2ky4ec64tw.s[95]++;
      this._element.style[dimension] = '';
      var transitionDuration = (cov_2ky4ec64tw.s[96]++, Util.getTransitionDurationFromElement(this._element));
      cov_2ky4ec64tw.s[97]++;
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      cov_2ky4ec64tw.f[10]++;
      cov_2ky4ec64tw.s[98]++;
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      cov_2ky4ec64tw.f[11]++;
      cov_2ky4ec64tw.s[99]++;
      $.removeData(this._element, DATA_KEY);
      cov_2ky4ec64tw.s[100]++;
      this._config = null;
      cov_2ky4ec64tw.s[101]++;
      this._parent = null;
      cov_2ky4ec64tw.s[102]++;
      this._element = null;
      cov_2ky4ec64tw.s[103]++;
      this._triggerArray = null;
      cov_2ky4ec64tw.s[104]++;
      this._isTransitioning = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      cov_2ky4ec64tw.f[12]++;
      cov_2ky4ec64tw.s[105]++;
      config = _objectSpread({}, Default, config);
      cov_2ky4ec64tw.s[106]++;
      config.toggle = Boolean(config.toggle); // Coerce string values

      cov_2ky4ec64tw.s[107]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_2ky4ec64tw.s[108]++;
      return config;
    };

    _proto._getDimension = function _getDimension() {
      cov_2ky4ec64tw.f[13]++;
      var hasWidth = (cov_2ky4ec64tw.s[109]++, $(this._element).hasClass(Dimension.WIDTH));
      cov_2ky4ec64tw.s[110]++;
      return hasWidth ? (cov_2ky4ec64tw.b[24][0]++, Dimension.WIDTH) : (cov_2ky4ec64tw.b[24][1]++, Dimension.HEIGHT);
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      cov_2ky4ec64tw.f[14]++;
      var parent;
      cov_2ky4ec64tw.s[111]++;

      if (Util.isElement(this._config.parent)) {
        cov_2ky4ec64tw.b[25][0]++;
        cov_2ky4ec64tw.s[112]++;
        parent = this._config.parent; // It's a jQuery object

        cov_2ky4ec64tw.s[113]++;

        if (typeof this._config.parent.jquery !== 'undefined') {
          cov_2ky4ec64tw.b[26][0]++;
          cov_2ky4ec64tw.s[114]++;
          parent = this._config.parent[0];
        } else {
          cov_2ky4ec64tw.b[26][1]++;
        }
      } else {
        cov_2ky4ec64tw.b[25][1]++;
        cov_2ky4ec64tw.s[115]++;
        parent = document.querySelector(this._config.parent);
      }

      var selector = (cov_2ky4ec64tw.s[116]++, "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]");
      var children = (cov_2ky4ec64tw.s[117]++, [].slice.call(parent.querySelectorAll(selector)));
      cov_2ky4ec64tw.s[118]++;
      $(children).each(function (i, element) {
        cov_2ky4ec64tw.f[15]++;
        cov_2ky4ec64tw.s[119]++;

        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      cov_2ky4ec64tw.s[120]++;
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      cov_2ky4ec64tw.f[16]++;
      var isOpen = (cov_2ky4ec64tw.s[121]++, $(element).hasClass(ClassName.SHOW));
      cov_2ky4ec64tw.s[122]++;

      if (triggerArray.length) {
        cov_2ky4ec64tw.b[27][0]++;
        cov_2ky4ec64tw.s[123]++;
        $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      } else {
        cov_2ky4ec64tw.b[27][1]++;
      }
    }; // Static


    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      cov_2ky4ec64tw.f[17]++;
      var selector = (cov_2ky4ec64tw.s[124]++, Util.getSelectorFromElement(element));
      cov_2ky4ec64tw.s[125]++;
      return selector ? (cov_2ky4ec64tw.b[28][0]++, document.querySelector(selector)) : (cov_2ky4ec64tw.b[28][1]++, null);
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      cov_2ky4ec64tw.f[18]++;
      cov_2ky4ec64tw.s[126]++;
      return this.each(function () {
        cov_2ky4ec64tw.f[19]++;
        var $this = (cov_2ky4ec64tw.s[127]++, $(this));
        var data = (cov_2ky4ec64tw.s[128]++, $this.data(DATA_KEY));

        var _config = (cov_2ky4ec64tw.s[129]++, _objectSpread({}, Default, $this.data(), (cov_2ky4ec64tw.b[30][0]++, typeof config === 'object') && (cov_2ky4ec64tw.b[30][1]++, config) ? (cov_2ky4ec64tw.b[29][0]++, config) : (cov_2ky4ec64tw.b[29][1]++, {})));

        cov_2ky4ec64tw.s[130]++;

        if ((cov_2ky4ec64tw.b[32][0]++, !data) && (cov_2ky4ec64tw.b[32][1]++, _config.toggle) && (cov_2ky4ec64tw.b[32][2]++, /show|hide/.test(config))) {
          cov_2ky4ec64tw.b[31][0]++;
          cov_2ky4ec64tw.s[131]++;
          _config.toggle = false;
        } else {
          cov_2ky4ec64tw.b[31][1]++;
        }

        cov_2ky4ec64tw.s[132]++;

        if (!data) {
          cov_2ky4ec64tw.b[33][0]++;
          cov_2ky4ec64tw.s[133]++;
          data = new Collapse(this, _config);
          cov_2ky4ec64tw.s[134]++;
          $this.data(DATA_KEY, data);
        } else {
          cov_2ky4ec64tw.b[33][1]++;
        }

        cov_2ky4ec64tw.s[135]++;

        if (typeof config === 'string') {
          cov_2ky4ec64tw.b[34][0]++;
          cov_2ky4ec64tw.s[136]++;

          if (typeof data[config] === 'undefined') {
            cov_2ky4ec64tw.b[35][0]++;
            cov_2ky4ec64tw.s[137]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_2ky4ec64tw.b[35][1]++;
          }

          cov_2ky4ec64tw.s[138]++;
          data[config]();
        } else {
          cov_2ky4ec64tw.b[34][1]++;
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        cov_2ky4ec64tw.f[2]++;
        cov_2ky4ec64tw.s[30]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_2ky4ec64tw.f[3]++;
        cov_2ky4ec64tw.s[31]++;
        return Default;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_2ky4ec64tw.s[139]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_2ky4ec64tw.f[20]++;
    cov_2ky4ec64tw.s[140]++;

    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      cov_2ky4ec64tw.b[36][0]++;
      cov_2ky4ec64tw.s[141]++;
      event.preventDefault();
    } else {
      cov_2ky4ec64tw.b[36][1]++;
    }

    var $trigger = (cov_2ky4ec64tw.s[142]++, $(this));
    var selector = (cov_2ky4ec64tw.s[143]++, Util.getSelectorFromElement(this));
    var selectors = (cov_2ky4ec64tw.s[144]++, [].slice.call(document.querySelectorAll(selector)));
    cov_2ky4ec64tw.s[145]++;
    $(selectors).each(function () {
      cov_2ky4ec64tw.f[21]++;
      var $target = (cov_2ky4ec64tw.s[146]++, $(this));
      var data = (cov_2ky4ec64tw.s[147]++, $target.data(DATA_KEY));
      var config = (cov_2ky4ec64tw.s[148]++, data ? (cov_2ky4ec64tw.b[37][0]++, 'toggle') : (cov_2ky4ec64tw.b[37][1]++, $trigger.data()));
      cov_2ky4ec64tw.s[149]++;

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_2ky4ec64tw.s[150]++;
  $.fn[NAME] = Collapse._jQueryInterface;
  cov_2ky4ec64tw.s[151]++;
  $.fn[NAME].Constructor = Collapse;
  cov_2ky4ec64tw.s[152]++;

  $.fn[NAME].noConflict = function () {
    cov_2ky4ec64tw.f[22]++;
    cov_2ky4ec64tw.s[153]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_2ky4ec64tw.s[154]++;
    return Collapse._jQueryInterface;
  };

  return Collapse;

})));
//# sourceMappingURL=collapse.js.map
