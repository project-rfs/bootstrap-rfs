/*!
  * Bootstrap carousel.js v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  global.Carousel = factory(global.jQuery,global.Util);
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

  var cov_1usbl39ql6 = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/carousel.js",
        hash = "7b8b3dd993ac4e8624866550db34f76a2f074278",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/carousel.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 31
          },
          end: {
            line: 17,
            column: 41
          }
        },
        "1": {
          start: {
            line: 18,
            column: 31
          },
          end: {
            line: 18,
            column: 38
          }
        },
        "2": {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 44
          }
        },
        "3": {
          start: {
            line: 20,
            column: 31
          },
          end: {
            line: 20,
            column: 45
          }
        },
        "4": {
          start: {
            line: 21,
            column: 31
          },
          end: {
            line: 21,
            column: 42
          }
        },
        "5": {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 22,
            column: 41
          }
        },
        "6": {
          start: {
            line: 23,
            column: 31
          },
          end: {
            line: 23,
            column: 33
          }
        },
        "7": {
          start: {
            line: 24,
            column: 31
          },
          end: {
            line: 24,
            column: 33
          }
        },
        "8": {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 25,
            column: 34
          }
        },
        "9": {
          start: {
            line: 26,
            column: 31
          },
          end: {
            line: 26,
            column: 33
          }
        },
        "10": {
          start: {
            line: 28,
            column: 16
          },
          end: {
            line: 35,
            column: 1
          }
        },
        "11": {
          start: {
            line: 37,
            column: 20
          },
          end: {
            line: 44,
            column: 1
          }
        },
        "12": {
          start: {
            line: 46,
            column: 18
          },
          end: {
            line: 51,
            column: 1
          }
        },
        "13": {
          start: {
            line: 53,
            column: 14
          },
          end: {
            line: 67,
            column: 1
          }
        },
        "14": {
          start: {
            line: 69,
            column: 18
          },
          end: {
            line: 79,
            column: 1
          }
        },
        "15": {
          start: {
            line: 81,
            column: 17
          },
          end: {
            line: 90,
            column: 1
          }
        },
        "16": {
          start: {
            line: 92,
            column: 20
          },
          end: {
            line: 95,
            column: 1
          }
        },
        "17": {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 104,
            column: 30
          }
        },
        "18": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 30
          }
        },
        "19": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 30
          }
        },
        "20": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 31
          }
        },
        "21": {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 31
          }
        },
        "22": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 30
          }
        },
        "23": {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 27
          }
        },
        "24": {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 27
          }
        },
        "25": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 53
          }
        },
        "26": {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 114,
            column: 37
          }
        },
        "27": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 78
          }
        },
        "28": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 104
          }
        },
        "29": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 83
          }
        },
        "30": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 119,
            column: 29
          }
        },
        "31": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 18
          }
        },
        "32": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 18
          }
        },
        "33": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 137,
            column: 5
          }
        },
        "34": {
          start: {
            line: 136,
            column: 6
          },
          end: {
            line: 136,
            column: 33
          }
        },
        "35": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 146,
            column: 5
          }
        },
        "36": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 145,
            column: 17
          }
        },
        "37": {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        "38": {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 151,
            column: 33
          }
        },
        "39": {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 158,
            column: 5
          }
        },
        "40": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 157,
            column: 27
          }
        },
        "41": {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        "42": {
          start: {
            line: 161,
            column: 6
          },
          end: {
            line: 161,
            column: 46
          }
        },
        "43": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 22
          }
        },
        "44": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 165,
            column: 33
          }
        },
        "45": {
          start: {
            line: 166,
            column: 4
          },
          end: {
            line: 166,
            column: 25
          }
        },
        "46": {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        "47": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 171,
            column: 28
          }
        },
        "48": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        "49": {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 175,
            column: 35
          }
        },
        "50": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 27
          }
        },
        "51": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        "52": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 183,
            column: 7
          }
        },
        "53": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 188,
            column: 75
          }
        },
        "54": {
          start: {
            line: 190,
            column: 24
          },
          end: {
            line: 190,
            column: 63
          }
        },
        "55": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 194,
            column: 5
          }
        },
        "56": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 12
          }
        },
        "57": {
          start: {
            line: 196,
            column: 4
          },
          end: {
            line: 199,
            column: 5
          }
        },
        "58": {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 197,
            column: 60
          }
        },
        "59": {
          start: {
            line: 197,
            column: 45
          },
          end: {
            line: 197,
            column: 59
          }
        },
        "60": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 198,
            column: 12
          }
        },
        "61": {
          start: {
            line: 201,
            column: 4
          },
          end: {
            line: 205,
            column: 5
          }
        },
        "62": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 202,
            column: 18
          }
        },
        "63": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 18
          }
        },
        "64": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 12
          }
        },
        "65": {
          start: {
            line: 207,
            column: 22
          },
          end: {
            line: 209,
            column: 22
          }
        },
        "66": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 46
          }
        },
        "67": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 35
          }
        },
        "68": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 41
          }
        },
        "69": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 34
          }
        },
        "70": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 34
          }
        },
        "71": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 220,
            column: 34
          }
        },
        "72": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 221,
            column: 34
          }
        },
        "73": {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 222,
            column: 34
          }
        },
        "74": {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 223,
            column: 34
          }
        },
        "75": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 34
          }
        },
        "76": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 34
          }
        },
        "77": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 234,
            column: 5
          }
        },
        "78": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 51
          }
        },
        "79": {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 236,
            column: 17
          }
        },
        "80": {
          start: {
            line: 240,
            column: 22
          },
          end: {
            line: 240,
            column: 48
          }
        },
        "81": {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        },
        "82": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 243,
            column: 12
          }
        },
        "83": {
          start: {
            line: 246,
            column: 22
          },
          end: {
            line: 246,
            column: 50
          }
        },
        "84": {
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 251,
            column: 5
          }
        },
        "85": {
          start: {
            line: 250,
            column: 6
          },
          end: {
            line: 250,
            column: 17
          }
        },
        "86": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 256,
            column: 5
          }
        },
        "87": {
          start: {
            line: 255,
            column: 6
          },
          end: {
            line: 255,
            column: 17
          }
        },
        "88": {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        },
        "89": {
          start: {
            line: 261,
            column: 6
          },
          end: {
            line: 262,
            column: 59
          }
        },
        "90": {
          start: {
            line: 262,
            column: 38
          },
          end: {
            line: 262,
            column: 58
          }
        },
        "91": {
          start: {
            line: 265,
            column: 4
          },
          end: {
            line: 269,
            column: 5
          }
        },
        "92": {
          start: {
            line: 266,
            column: 6
          },
          end: {
            line: 268,
            column: 59
          }
        },
        "93": {
          start: {
            line: 267,
            column: 41
          },
          end: {
            line: 267,
            column: 58
          }
        },
        "94": {
          start: {
            line: 268,
            column: 41
          },
          end: {
            line: 268,
            column: 58
          }
        },
        "95": {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 271,
            column: 34
          }
        },
        "96": {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 277,
            column: 5
          }
        },
        "97": {
          start: {
            line: 276,
            column: 6
          },
          end: {
            line: 276,
            column: 12
          }
        },
        "98": {
          start: {
            line: 279,
            column: 18
          },
          end: {
            line: 285,
            column: 5
          }
        },
        "99": {
          start: {
            line: 280,
            column: 6
          },
          end: {
            line: 284,
            column: 7
          }
        },
        "100": {
          start: {
            line: 281,
            column: 8
          },
          end: {
            line: 281,
            column: 54
          }
        },
        "101": {
          start: {
            line: 282,
            column: 13
          },
          end: {
            line: 284,
            column: 7
          }
        },
        "102": {
          start: {
            line: 283,
            column: 8
          },
          end: {
            line: 283,
            column: 65
          }
        },
        "103": {
          start: {
            line: 287,
            column: 17
          },
          end: {
            line: 294,
            column: 5
          }
        },
        "104": {
          start: {
            line: 289,
            column: 6
          },
          end: {
            line: 293,
            column: 7
          }
        },
        "105": {
          start: {
            line: 290,
            column: 8
          },
          end: {
            line: 290,
            column: 28
          }
        },
        "106": {
          start: {
            line: 292,
            column: 8
          },
          end: {
            line: 292,
            column: 84
          }
        },
        "107": {
          start: {
            line: 296,
            column: 16
          },
          end: {
            line: 317,
            column: 5
          }
        },
        "108": {
          start: {
            line: 297,
            column: 6
          },
          end: {
            line: 299,
            column: 7
          }
        },
        "109": {
          start: {
            line: 298,
            column: 8
          },
          end: {
            line: 298,
            column: 73
          }
        },
        "110": {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 301,
            column: 25
          }
        },
        "111": {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 316,
            column: 7
          }
        },
        "112": {
          start: {
            line: 311,
            column: 8
          },
          end: {
            line: 311,
            column: 20
          }
        },
        "113": {
          start: {
            line: 312,
            column: 8
          },
          end: {
            line: 314,
            column: 9
          }
        },
        "114": {
          start: {
            line: 313,
            column: 10
          },
          end: {
            line: 313,
            column: 41
          }
        },
        "115": {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 315,
            column: 116
          }
        },
        "116": {
          start: {
            line: 315,
            column: 50
          },
          end: {
            line: 315,
            column: 67
          }
        },
        "117": {
          start: {
            line: 319,
            column: 4
          },
          end: {
            line: 319,
            column: 104
          }
        },
        "118": {
          start: {
            line: 319,
            column: 85
          },
          end: {
            line: 319,
            column: 103
          }
        },
        "119": {
          start: {
            line: 320,
            column: 4
          },
          end: {
            line: 329,
            column: 5
          }
        },
        "120": {
          start: {
            line: 321,
            column: 6
          },
          end: {
            line: 321,
            column: 69
          }
        },
        "121": {
          start: {
            line: 321,
            column: 56
          },
          end: {
            line: 321,
            column: 68
          }
        },
        "122": {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 65
          }
        },
        "123": {
          start: {
            line: 322,
            column: 54
          },
          end: {
            line: 322,
            column: 64
          }
        },
        "124": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 58
          }
        },
        "125": {
          start: {
            line: 326,
            column: 6
          },
          end: {
            line: 326,
            column: 68
          }
        },
        "126": {
          start: {
            line: 326,
            column: 55
          },
          end: {
            line: 326,
            column: 67
          }
        },
        "127": {
          start: {
            line: 327,
            column: 6
          },
          end: {
            line: 327,
            column: 66
          }
        },
        "128": {
          start: {
            line: 327,
            column: 54
          },
          end: {
            line: 327,
            column: 65
          }
        },
        "129": {
          start: {
            line: 328,
            column: 6
          },
          end: {
            line: 328,
            column: 64
          }
        },
        "130": {
          start: {
            line: 328,
            column: 53
          },
          end: {
            line: 328,
            column: 63
          }
        },
        "131": {
          start: {
            line: 333,
            column: 4
          },
          end: {
            line: 335,
            column: 5
          }
        },
        "132": {
          start: {
            line: 334,
            column: 6
          },
          end: {
            line: 334,
            column: 12
          }
        },
        "133": {
          start: {
            line: 337,
            column: 4
          },
          end: {
            line: 347,
            column: 5
          }
        },
        "134": {
          start: {
            line: 339,
            column: 8
          },
          end: {
            line: 339,
            column: 30
          }
        },
        "135": {
          start: {
            line: 340,
            column: 8
          },
          end: {
            line: 340,
            column: 19
          }
        },
        "136": {
          start: {
            line: 341,
            column: 8
          },
          end: {
            line: 341,
            column: 13
          }
        },
        "137": {
          start: {
            line: 343,
            column: 8
          },
          end: {
            line: 343,
            column: 30
          }
        },
        "138": {
          start: {
            line: 344,
            column: 8
          },
          end: {
            line: 344,
            column: 19
          }
        },
        "139": {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 345,
            column: 13
          }
        },
        "140": {
          start: {
            line: 351,
            column: 4
          },
          end: {
            line: 353,
            column: 10
          }
        },
        "141": {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 354,
            column: 39
          }
        },
        "142": {
          start: {
            line: 358,
            column: 28
          },
          end: {
            line: 358,
            column: 56
          }
        },
        "143": {
          start: {
            line: 359,
            column: 28
          },
          end: {
            line: 359,
            column: 56
          }
        },
        "144": {
          start: {
            line: 360,
            column: 28
          },
          end: {
            line: 360,
            column: 61
          }
        },
        "145": {
          start: {
            line: 361,
            column: 28
          },
          end: {
            line: 361,
            column: 50
          }
        },
        "146": {
          start: {
            line: 362,
            column: 28
          },
          end: {
            line: 363,
            column: 76
          }
        },
        "147": {
          start: {
            line: 365,
            column: 4
          },
          end: {
            line: 367,
            column: 5
          }
        },
        "148": {
          start: {
            line: 366,
            column: 6
          },
          end: {
            line: 366,
            column: 26
          }
        },
        "149": {
          start: {
            line: 369,
            column: 22
          },
          end: {
            line: 369,
            column: 59
          }
        },
        "150": {
          start: {
            line: 370,
            column: 22
          },
          end: {
            line: 370,
            column: 64
          }
        },
        "151": {
          start: {
            line: 372,
            column: 4
          },
          end: {
            line: 373,
            column: 68
          }
        },
        "152": {
          start: {
            line: 377,
            column: 24
          },
          end: {
            line: 377,
            column: 57
          }
        },
        "153": {
          start: {
            line: 378,
            column: 22
          },
          end: {
            line: 378,
            column: 91
          }
        },
        "154": {
          start: {
            line: 379,
            column: 23
          },
          end: {
            line: 384,
            column: 6
          }
        },
        "155": {
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 386,
            column: 40
          }
        },
        "156": {
          start: {
            line: 388,
            column: 4
          },
          end: {
            line: 388,
            column: 21
          }
        },
        "157": {
          start: {
            line: 392,
            column: 4
          },
          end: {
            line: 404,
            column: 5
          }
        },
        "158": {
          start: {
            line: 393,
            column: 25
          },
          end: {
            line: 393,
            column: 97
          }
        },
        "159": {
          start: {
            line: 394,
            column: 6
          },
          end: {
            line: 395,
            column: 38
          }
        },
        "160": {
          start: {
            line: 397,
            column: 28
          },
          end: {
            line: 399,
            column: 7
          }
        },
        "161": {
          start: {
            line: 401,
            column: 6
          },
          end: {
            line: 403,
            column: 7
          }
        },
        "162": {
          start: {
            line: 402,
            column: 8
          },
          end: {
            line: 402,
            column: 51
          }
        },
        "163": {
          start: {
            line: 408,
            column: 26
          },
          end: {
            line: 408,
            column: 75
          }
        },
        "164": {
          start: {
            line: 409,
            column: 31
          },
          end: {
            line: 409,
            column: 64
          }
        },
        "165": {
          start: {
            line: 410,
            column: 26
          },
          end: {
            line: 411,
            column: 56
          }
        },
        "166": {
          start: {
            line: 412,
            column: 29
          },
          end: {
            line: 412,
            column: 60
          }
        },
        "167": {
          start: {
            line: 413,
            column: 22
          },
          end: {
            line: 413,
            column: 45
          }
        },
        "168": {
          start: {
            line: 419,
            column: 4
          },
          end: {
            line: 427,
            column: 5
          }
        },
        "169": {
          start: {
            line: 420,
            column: 6
          },
          end: {
            line: 420,
            column: 43
          }
        },
        "170": {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 37
          }
        },
        "171": {
          start: {
            line: 422,
            column: 6
          },
          end: {
            line: 422,
            column: 41
          }
        },
        "172": {
          start: {
            line: 424,
            column: 6
          },
          end: {
            line: 424,
            column: 44
          }
        },
        "173": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 425,
            column: 37
          }
        },
        "174": {
          start: {
            line: 426,
            column: 6
          },
          end: {
            line: 426,
            column: 42
          }
        },
        "175": {
          start: {
            line: 429,
            column: 4
          },
          end: {
            line: 432,
            column: 5
          }
        },
        "176": {
          start: {
            line: 430,
            column: 6
          },
          end: {
            line: 430,
            column: 29
          }
        },
        "177": {
          start: {
            line: 431,
            column: 6
          },
          end: {
            line: 431,
            column: 12
          }
        },
        "178": {
          start: {
            line: 434,
            column: 23
          },
          end: {
            line: 434,
            column: 79
          }
        },
        "179": {
          start: {
            line: 435,
            column: 4
          },
          end: {
            line: 437,
            column: 5
          }
        },
        "180": {
          start: {
            line: 436,
            column: 6
          },
          end: {
            line: 436,
            column: 12
          }
        },
        "181": {
          start: {
            line: 439,
            column: 4
          },
          end: {
            line: 442,
            column: 5
          }
        },
        "182": {
          start: {
            line: 441,
            column: 6
          },
          end: {
            line: 441,
            column: 12
          }
        },
        "183": {
          start: {
            line: 444,
            column: 4
          },
          end: {
            line: 444,
            column: 26
          }
        },
        "184": {
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 448,
            column: 5
          }
        },
        "185": {
          start: {
            line: 447,
            column: 6
          },
          end: {
            line: 447,
            column: 18
          }
        },
        "186": {
          start: {
            line: 450,
            column: 4
          },
          end: {
            line: 450,
            column: 48
          }
        },
        "187": {
          start: {
            line: 452,
            column: 22
          },
          end: {
            line: 457,
            column: 6
          }
        },
        "188": {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 496,
            column: 5
          }
        },
        "189": {
          start: {
            line: 460,
            column: 6
          },
          end: {
            line: 460,
            column: 45
          }
        },
        "190": {
          start: {
            line: 462,
            column: 6
          },
          end: {
            line: 462,
            column: 30
          }
        },
        "191": {
          start: {
            line: 464,
            column: 6
          },
          end: {
            line: 464,
            column: 53
          }
        },
        "192": {
          start: {
            line: 465,
            column: 6
          },
          end: {
            line: 465,
            column: 51
          }
        },
        "193": {
          start: {
            line: 467,
            column: 34
          },
          end: {
            line: 467,
            column: 89
          }
        },
        "194": {
          start: {
            line: 468,
            column: 6
          },
          end: {
            line: 473,
            column: 7
          }
        },
        "195": {
          start: {
            line: 469,
            column: 8
          },
          end: {
            line: 469,
            column: 92
          }
        },
        "196": {
          start: {
            line: 470,
            column: 8
          },
          end: {
            line: 470,
            column: 51
          }
        },
        "197": {
          start: {
            line: 472,
            column: 8
          },
          end: {
            line: 472,
            column: 85
          }
        },
        "198": {
          start: {
            line: 475,
            column: 33
          },
          end: {
            line: 475,
            column: 85
          }
        },
        "199": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 489,
            column: 49
          }
        },
        "200": {
          start: {
            line: 479,
            column: 10
          },
          end: {
            line: 481,
            column: 39
          }
        },
        "201": {
          start: {
            line: 483,
            column: 10
          },
          end: {
            line: 483,
            column: 103
          }
        },
        "202": {
          start: {
            line: 485,
            column: 10
          },
          end: {
            line: 485,
            column: 33
          }
        },
        "203": {
          start: {
            line: 487,
            column: 10
          },
          end: {
            line: 487,
            column: 66
          }
        },
        "204": {
          start: {
            line: 487,
            column: 27
          },
          end: {
            line: 487,
            column: 62
          }
        },
        "205": {
          start: {
            line: 491,
            column: 6
          },
          end: {
            line: 491,
            column: 52
          }
        },
        "206": {
          start: {
            line: 492,
            column: 6
          },
          end: {
            line: 492,
            column: 47
          }
        },
        "207": {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 494,
            column: 29
          }
        },
        "208": {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 495,
            column: 41
          }
        },
        "209": {
          start: {
            line: 498,
            column: 4
          },
          end: {
            line: 500,
            column: 5
          }
        },
        "210": {
          start: {
            line: 499,
            column: 6
          },
          end: {
            line: 499,
            column: 18
          }
        },
        "211": {
          start: {
            line: 506,
            column: 4
          },
          end: {
            line: 538,
            column: 6
          }
        },
        "212": {
          start: {
            line: 507,
            column: 17
          },
          end: {
            line: 507,
            column: 39
          }
        },
        "213": {
          start: {
            line: 508,
            column: 20
          },
          end: {
            line: 511,
            column: 7
          }
        },
        "214": {
          start: {
            line: 513,
            column: 6
          },
          end: {
            line: 518,
            column: 7
          }
        },
        "215": {
          start: {
            line: 514,
            column: 8
          },
          end: {
            line: 517,
            column: 9
          }
        },
        "216": {
          start: {
            line: 520,
            column: 21
          },
          end: {
            line: 520,
            column: 72
          }
        },
        "217": {
          start: {
            line: 522,
            column: 6
          },
          end: {
            line: 525,
            column: 7
          }
        },
        "218": {
          start: {
            line: 523,
            column: 8
          },
          end: {
            line: 523,
            column: 42
          }
        },
        "219": {
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 524,
            column: 36
          }
        },
        "220": {
          start: {
            line: 527,
            column: 6
          },
          end: {
            line: 537,
            column: 7
          }
        },
        "221": {
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 528,
            column: 23
          }
        },
        "222": {
          start: {
            line: 529,
            column: 13
          },
          end: {
            line: 537,
            column: 7
          }
        },
        "223": {
          start: {
            line: 530,
            column: 8
          },
          end: {
            line: 532,
            column: 9
          }
        },
        "224": {
          start: {
            line: 531,
            column: 10
          },
          end: {
            line: 531,
            column: 60
          }
        },
        "225": {
          start: {
            line: 533,
            column: 8
          },
          end: {
            line: 533,
            column: 22
          }
        },
        "226": {
          start: {
            line: 534,
            column: 13
          },
          end: {
            line: 537,
            column: 7
          }
        },
        "227": {
          start: {
            line: 535,
            column: 8
          },
          end: {
            line: 535,
            column: 20
          }
        },
        "228": {
          start: {
            line: 536,
            column: 8
          },
          end: {
            line: 536,
            column: 20
          }
        },
        "229": {
          start: {
            line: 542,
            column: 21
          },
          end: {
            line: 542,
            column: 54
          }
        },
        "230": {
          start: {
            line: 544,
            column: 4
          },
          end: {
            line: 546,
            column: 5
          }
        },
        "231": {
          start: {
            line: 545,
            column: 6
          },
          end: {
            line: 545,
            column: 12
          }
        },
        "232": {
          start: {
            line: 548,
            column: 19
          },
          end: {
            line: 548,
            column: 33
          }
        },
        "233": {
          start: {
            line: 550,
            column: 4
          },
          end: {
            line: 552,
            column: 5
          }
        },
        "234": {
          start: {
            line: 551,
            column: 6
          },
          end: {
            line: 551,
            column: 12
          }
        },
        "235": {
          start: {
            line: 554,
            column: 19
          },
          end: {
            line: 557,
            column: 5
          }
        },
        "236": {
          start: {
            line: 558,
            column: 23
          },
          end: {
            line: 558,
            column: 57
          }
        },
        "237": {
          start: {
            line: 560,
            column: 4
          },
          end: {
            line: 562,
            column: 5
          }
        },
        "238": {
          start: {
            line: 561,
            column: 6
          },
          end: {
            line: 561,
            column: 29
          }
        },
        "239": {
          start: {
            line: 564,
            column: 4
          },
          end: {
            line: 564,
            column: 53
          }
        },
        "240": {
          start: {
            line: 566,
            column: 4
          },
          end: {
            line: 568,
            column: 5
          }
        },
        "241": {
          start: {
            line: 567,
            column: 6
          },
          end: {
            line: 567,
            column: 45
          }
        },
        "242": {
          start: {
            line: 570,
            column: 4
          },
          end: {
            line: 570,
            column: 26
          }
        },
        "243": {
          start: {
            line: 580,
            column: 0
          },
          end: {
            line: 581,
            column: 79
          }
        },
        "244": {
          start: {
            line: 583,
            column: 0
          },
          end: {
            line: 589,
            column: 2
          }
        },
        "245": {
          start: {
            line: 584,
            column: 20
          },
          end: {
            line: 584,
            column: 80
          }
        },
        "246": {
          start: {
            line: 585,
            column: 2
          },
          end: {
            line: 588,
            column: 3
          }
        },
        "247": {
          start: {
            line: 586,
            column: 22
          },
          end: {
            line: 586,
            column: 37
          }
        },
        "248": {
          start: {
            line: 587,
            column: 4
          },
          end: {
            line: 587,
            column: 63
          }
        },
        "249": {
          start: {
            line: 597,
            column: 0
          },
          end: {
            line: 597,
            column: 38
          }
        },
        "250": {
          start: {
            line: 598,
            column: 0
          },
          end: {
            line: 598,
            column: 33
          }
        },
        "251": {
          start: {
            line: 599,
            column: 0
          },
          end: {
            line: 602,
            column: 1
          }
        },
        "252": {
          start: {
            line: 600,
            column: 2
          },
          end: {
            line: 600,
            column: 33
          }
        },
        "253": {
          start: {
            line: 601,
            column: 2
          },
          end: {
            line: 601,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 103,
              column: 2
            },
            end: {
              line: 103,
              column: 3
            }
          },
          loc: {
            start: {
              line: 103,
              column: 31
            },
            end: {
              line: 120,
              column: 3
            }
          },
          line: 103
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 124,
              column: 2
            },
            end: {
              line: 124,
              column: 3
            }
          },
          loc: {
            start: {
              line: 124,
              column: 23
            },
            end: {
              line: 126,
              column: 3
            }
          },
          line: 124
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 128,
              column: 2
            },
            end: {
              line: 128,
              column: 3
            }
          },
          loc: {
            start: {
              line: 128,
              column: 23
            },
            end: {
              line: 130,
              column: 3
            }
          },
          line: 128
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 134,
              column: 2
            },
            end: {
              line: 134,
              column: 3
            }
          },
          loc: {
            start: {
              line: 134,
              column: 9
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 134
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 140,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          },
          loc: {
            start: {
              line: 140,
              column: 20
            },
            end: {
              line: 147,
              column: 3
            }
          },
          line: 140
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 149,
              column: 2
            },
            end: {
              line: 149,
              column: 3
            }
          },
          loc: {
            start: {
              line: 149,
              column: 9
            },
            end: {
              line: 153,
              column: 3
            }
          },
          line: 149
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 155,
              column: 2
            },
            end: {
              line: 155,
              column: 3
            }
          },
          loc: {
            start: {
              line: 155,
              column: 15
            },
            end: {
              line: 167,
              column: 3
            }
          },
          line: 155
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 169,
              column: 2
            },
            end: {
              line: 169,
              column: 3
            }
          },
          loc: {
            start: {
              line: 169,
              column: 15
            },
            end: {
              line: 185,
              column: 3
            }
          },
          line: 169
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 187,
              column: 2
            },
            end: {
              line: 187,
              column: 3
            }
          },
          loc: {
            start: {
              line: 187,
              column: 12
            },
            end: {
              line: 212,
              column: 3
            }
          },
          line: 187
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 197,
              column: 39
            },
            end: {
              line: 197,
              column: 40
            }
          },
          loc: {
            start: {
              line: 197,
              column: 45
            },
            end: {
              line: 197,
              column: 59
            }
          },
          line: 197
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 214,
              column: 2
            },
            end: {
              line: 214,
              column: 3
            }
          },
          loc: {
            start: {
              line: 214,
              column: 12
            },
            end: {
              line: 226,
              column: 3
            }
          },
          line: 214
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 230,
              column: 2
            },
            end: {
              line: 230,
              column: 3
            }
          },
          loc: {
            start: {
              line: 230,
              column: 21
            },
            end: {
              line: 237,
              column: 3
            }
          },
          line: 230
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 239,
              column: 2
            },
            end: {
              line: 239,
              column: 3
            }
          },
          loc: {
            start: {
              line: 239,
              column: 17
            },
            end: {
              line: 257,
              column: 3
            }
          },
          line: 239
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 259,
              column: 2
            },
            end: {
              line: 259,
              column: 3
            }
          },
          loc: {
            start: {
              line: 259,
              column: 23
            },
            end: {
              line: 272,
              column: 3
            }
          },
          line: 259
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 262,
              column: 27
            },
            end: {
              line: 262,
              column: 28
            }
          },
          loc: {
            start: {
              line: 262,
              column: 38
            },
            end: {
              line: 262,
              column: 58
            }
          },
          line: 262
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 267,
              column: 30
            },
            end: {
              line: 267,
              column: 31
            }
          },
          loc: {
            start: {
              line: 267,
              column: 41
            },
            end: {
              line: 267,
              column: 58
            }
          },
          line: 267
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 268,
              column: 30
            },
            end: {
              line: 268,
              column: 31
            }
          },
          loc: {
            start: {
              line: 268,
              column: 41
            },
            end: {
              line: 268,
              column: 58
            }
          },
          line: 268
        },
        "17": {
          name: "(anonymous_17)",
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
              column: 28
            },
            end: {
              line: 330,
              column: 3
            }
          },
          line: 274
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 279,
              column: 18
            },
            end: {
              line: 279,
              column: 19
            }
          },
          loc: {
            start: {
              line: 279,
              column: 29
            },
            end: {
              line: 285,
              column: 5
            }
          },
          line: 279
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 287,
              column: 17
            },
            end: {
              line: 287,
              column: 18
            }
          },
          loc: {
            start: {
              line: 287,
              column: 28
            },
            end: {
              line: 294,
              column: 5
            }
          },
          line: 287
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 296,
              column: 16
            },
            end: {
              line: 296,
              column: 17
            }
          },
          loc: {
            start: {
              line: 296,
              column: 27
            },
            end: {
              line: 317,
              column: 5
            }
          },
          line: 296
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 315,
              column: 39
            },
            end: {
              line: 315,
              column: 40
            }
          },
          loc: {
            start: {
              line: 315,
              column: 50
            },
            end: {
              line: 315,
              column: 67
            }
          },
          line: 315
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 319,
              column: 78
            },
            end: {
              line: 319,
              column: 79
            }
          },
          loc: {
            start: {
              line: 319,
              column: 85
            },
            end: {
              line: 319,
              column: 103
            }
          },
          line: 319
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 321,
              column: 45
            },
            end: {
              line: 321,
              column: 46
            }
          },
          loc: {
            start: {
              line: 321,
              column: 56
            },
            end: {
              line: 321,
              column: 68
            }
          },
          line: 321
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 322,
              column: 43
            },
            end: {
              line: 322,
              column: 44
            }
          },
          loc: {
            start: {
              line: 322,
              column: 54
            },
            end: {
              line: 322,
              column: 64
            }
          },
          line: 322
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 326,
              column: 44
            },
            end: {
              line: 326,
              column: 45
            }
          },
          loc: {
            start: {
              line: 326,
              column: 55
            },
            end: {
              line: 326,
              column: 67
            }
          },
          line: 326
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 327,
              column: 43
            },
            end: {
              line: 327,
              column: 44
            }
          },
          loc: {
            start: {
              line: 327,
              column: 54
            },
            end: {
              line: 327,
              column: 65
            }
          },
          line: 327
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 328,
              column: 42
            },
            end: {
              line: 328,
              column: 43
            }
          },
          loc: {
            start: {
              line: 328,
              column: 53
            },
            end: {
              line: 328,
              column: 63
            }
          },
          line: 328
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 332,
              column: 2
            },
            end: {
              line: 332,
              column: 3
            }
          },
          loc: {
            start: {
              line: 332,
              column: 18
            },
            end: {
              line: 348,
              column: 3
            }
          },
          line: 332
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 350,
              column: 2
            },
            end: {
              line: 350,
              column: 3
            }
          },
          loc: {
            start: {
              line: 350,
              column: 25
            },
            end: {
              line: 355,
              column: 3
            }
          },
          line: 350
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 357,
              column: 2
            },
            end: {
              line: 357,
              column: 3
            }
          },
          loc: {
            start: {
              line: 357,
              column: 48
            },
            end: {
              line: 374,
              column: 3
            }
          },
          line: 357
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 376,
              column: 2
            },
            end: {
              line: 376,
              column: 3
            }
          },
          loc: {
            start: {
              line: 376,
              column: 56
            },
            end: {
              line: 389,
              column: 3
            }
          },
          line: 376
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 391,
              column: 2
            },
            end: {
              line: 391,
              column: 3
            }
          },
          loc: {
            start: {
              line: 391,
              column: 38
            },
            end: {
              line: 405,
              column: 3
            }
          },
          line: 391
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 407,
              column: 2
            },
            end: {
              line: 407,
              column: 3
            }
          },
          loc: {
            start: {
              line: 407,
              column: 29
            },
            end: {
              line: 501,
              column: 3
            }
          },
          line: 407
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 478,
              column: 34
            },
            end: {
              line: 478,
              column: 35
            }
          },
          loc: {
            start: {
              line: 478,
              column: 40
            },
            end: {
              line: 488,
              column: 9
            }
          },
          line: 478
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 487,
              column: 21
            },
            end: {
              line: 487,
              column: 22
            }
          },
          loc: {
            start: {
              line: 487,
              column: 27
            },
            end: {
              line: 487,
              column: 62
            }
          },
          line: 487
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 505,
              column: 2
            },
            end: {
              line: 505,
              column: 3
            }
          },
          loc: {
            start: {
              line: 505,
              column: 34
            },
            end: {
              line: 539,
              column: 3
            }
          },
          line: 505
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 506,
              column: 21
            },
            end: {
              line: 506,
              column: 22
            }
          },
          loc: {
            start: {
              line: 506,
              column: 33
            },
            end: {
              line: 538,
              column: 5
            }
          },
          line: 506
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 541,
              column: 2
            },
            end: {
              line: 541,
              column: 3
            }
          },
          loc: {
            start: {
              line: 541,
              column: 37
            },
            end: {
              line: 571,
              column: 3
            }
          },
          line: 541
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 583,
              column: 34
            },
            end: {
              line: 583,
              column: 35
            }
          },
          loc: {
            start: {
              line: 583,
              column: 40
            },
            end: {
              line: 589,
              column: 1
            }
          },
          line: 583
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 599,
              column: 24
            },
            end: {
              line: 599,
              column: 25
            }
          },
          loc: {
            start: {
              line: 599,
              column: 30
            },
            end: {
              line: 602,
              column: 1
            }
          },
          line: 599
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 116,
              column: 30
            },
            end: {
              line: 116,
              column: 104
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 116,
              column: 30
            },
            end: {
              line: 116,
              column: 72
            }
          }, {
            start: {
              line: 116,
              column: 76
            },
            end: {
              line: 116,
              column: 104
            }
          }],
          line: 116
        },
        "1": {
          loc: {
            start: {
              line: 117,
              column: 38
            },
            end: {
              line: 117,
              column: 82
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 117,
              column: 38
            },
            end: {
              line: 117,
              column: 57
            }
          }, {
            start: {
              line: 117,
              column: 61
            },
            end: {
              line: 117,
              column: 82
            }
          }],
          line: 117
        },
        "2": {
          loc: {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          }, {
            start: {
              line: 135,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          }],
          line: 135
        },
        "3": {
          loc: {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 146,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 146,
              column: 5
            }
          }, {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 146,
              column: 5
            }
          }],
          line: 143
        },
        "4": {
          loc: {
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 144,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 143,
              column: 24
            }
          }, {
            start: {
              line: 144,
              column: 7
            },
            end: {
              line: 144,
              column: 38
            }
          }, {
            start: {
              line: 144,
              column: 42
            },
            end: {
              line: 144,
              column: 89
            }
          }],
          line: 143
        },
        "5": {
          loc: {
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 152,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 152,
              column: 5
            }
          }, {
            start: {
              line: 150,
              column: 4
            },
            end: {
              line: 152,
              column: 5
            }
          }],
          line: 150
        },
        "6": {
          loc: {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 158,
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
              line: 158,
              column: 5
            }
          }, {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 158,
              column: 5
            }
          }],
          line: 156
        },
        "7": {
          loc: {
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }, {
            start: {
              line: 160,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }],
          line: 160
        },
        "8": {
          loc: {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 172,
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
              line: 172,
              column: 5
            }
          }, {
            start: {
              line: 170,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          }],
          line: 170
        },
        "9": {
          loc: {
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }, {
            start: {
              line: 174,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }],
          line: 174
        },
        "10": {
          loc: {
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }, {
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 184,
              column: 5
            }
          }],
          line: 179
        },
        "11": {
          loc: {
            start: {
              line: 179,
              column: 8
            },
            end: {
              line: 179,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 179,
              column: 8
            },
            end: {
              line: 179,
              column: 29
            }
          }, {
            start: {
              line: 179,
              column: 33
            },
            end: {
              line: 179,
              column: 48
            }
          }],
          line: 179
        },
        "12": {
          loc: {
            start: {
              line: 181,
              column: 9
            },
            end: {
              line: 181,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 181,
              column: 36
            },
            end: {
              line: 181,
              column: 56
            }
          }, {
            start: {
              line: 181,
              column: 59
            },
            end: {
              line: 181,
              column: 68
            }
          }],
          line: 181
        },
        "13": {
          loc: {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 194,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 194,
              column: 5
            }
          }, {
            start: {
              line: 192,
              column: 4
            },
            end: {
              line: 194,
              column: 5
            }
          }],
          line: 192
        },
        "14": {
          loc: {
            start: {
              line: 192,
              column: 8
            },
            end: {
              line: 192,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 192,
              column: 8
            },
            end: {
              line: 192,
              column: 38
            }
          }, {
            start: {
              line: 192,
              column: 42
            },
            end: {
              line: 192,
              column: 51
            }
          }],
          line: 192
        },
        "15": {
          loc: {
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }, {
            start: {
              line: 196,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          }],
          line: 196
        },
        "16": {
          loc: {
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }, {
            start: {
              line: 201,
              column: 4
            },
            end: {
              line: 205,
              column: 5
            }
          }],
          line: 201
        },
        "17": {
          loc: {
            start: {
              line: 207,
              column: 22
            },
            end: {
              line: 209,
              column: 22
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 208,
              column: 8
            },
            end: {
              line: 208,
              column: 22
            }
          }, {
            start: {
              line: 209,
              column: 8
            },
            end: {
              line: 209,
              column: 22
            }
          }],
          line: 207
        },
        "18": {
          loc: {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }, {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }],
          line: 242
        },
        "19": {
          loc: {
            start: {
              line: 249,
              column: 4
            },
            end: {
              line: 251,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 249,
              column: 4
            },
            end: {
              line: 251,
              column: 5
            }
          }, {
            start: {
              line: 249,
              column: 4
            },
            end: {
              line: 251,
              column: 5
            }
          }],
          line: 249
        },
        "20": {
          loc: {
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          }, {
            start: {
              line: 254,
              column: 4
            },
            end: {
              line: 256,
              column: 5
            }
          }],
          line: 254
        },
        "21": {
          loc: {
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 263,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 263,
              column: 5
            }
          }, {
            start: {
              line: 260,
              column: 4
            },
            end: {
              line: 263,
              column: 5
            }
          }],
          line: 260
        },
        "22": {
          loc: {
            start: {
              line: 265,
              column: 4
            },
            end: {
              line: 269,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 265,
              column: 4
            },
            end: {
              line: 269,
              column: 5
            }
          }, {
            start: {
              line: 265,
              column: 4
            },
            end: {
              line: 269,
              column: 5
            }
          }],
          line: 265
        },
        "23": {
          loc: {
            start: {
              line: 275,
              column: 4
            },
            end: {
              line: 277,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 275,
              column: 4
            },
            end: {
              line: 277,
              column: 5
            }
          }, {
            start: {
              line: 275,
              column: 4
            },
            end: {
              line: 277,
              column: 5
            }
          }],
          line: 275
        },
        "24": {
          loc: {
            start: {
              line: 280,
              column: 6
            },
            end: {
              line: 284,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 280,
              column: 6
            },
            end: {
              line: 284,
              column: 7
            }
          }, {
            start: {
              line: 280,
              column: 6
            },
            end: {
              line: 284,
              column: 7
            }
          }],
          line: 280
        },
        "25": {
          loc: {
            start: {
              line: 280,
              column: 10
            },
            end: {
              line: 280,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 280,
              column: 10
            },
            end: {
              line: 280,
              column: 28
            }
          }, {
            start: {
              line: 280,
              column: 32
            },
            end: {
              line: 280,
              column: 90
            }
          }],
          line: 280
        },
        "26": {
          loc: {
            start: {
              line: 282,
              column: 13
            },
            end: {
              line: 284,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 282,
              column: 13
            },
            end: {
              line: 284,
              column: 7
            }
          }, {
            start: {
              line: 282,
              column: 13
            },
            end: {
              line: 284,
              column: 7
            }
          }],
          line: 282
        },
        "27": {
          loc: {
            start: {
              line: 289,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 289,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          }, {
            start: {
              line: 289,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          }],
          line: 289
        },
        "28": {
          loc: {
            start: {
              line: 289,
              column: 10
            },
            end: {
              line: 289,
              column: 79
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 289,
              column: 10
            },
            end: {
              line: 289,
              column: 37
            }
          }, {
            start: {
              line: 289,
              column: 41
            },
            end: {
              line: 289,
              column: 79
            }
          }],
          line: 289
        },
        "29": {
          loc: {
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 299,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 299,
              column: 7
            }
          }, {
            start: {
              line: 297,
              column: 6
            },
            end: {
              line: 299,
              column: 7
            }
          }],
          line: 297
        },
        "30": {
          loc: {
            start: {
              line: 297,
              column: 10
            },
            end: {
              line: 297,
              column: 90
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 297,
              column: 10
            },
            end: {
              line: 297,
              column: 28
            }
          }, {
            start: {
              line: 297,
              column: 32
            },
            end: {
              line: 297,
              column: 90
            }
          }],
          line: 297
        },
        "31": {
          loc: {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 316,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 316,
              column: 7
            }
          }, {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 316,
              column: 7
            }
          }],
          line: 302
        },
        "32": {
          loc: {
            start: {
              line: 312,
              column: 8
            },
            end: {
              line: 314,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 312,
              column: 8
            },
            end: {
              line: 314,
              column: 9
            }
          }, {
            start: {
              line: 312,
              column: 8
            },
            end: {
              line: 314,
              column: 9
            }
          }],
          line: 312
        },
        "33": {
          loc: {
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 329,
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
              line: 329,
              column: 5
            }
          }, {
            start: {
              line: 320,
              column: 4
            },
            end: {
              line: 329,
              column: 5
            }
          }],
          line: 320
        },
        "34": {
          loc: {
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 335,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 335,
              column: 5
            }
          }, {
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 335,
              column: 5
            }
          }],
          line: 333
        },
        "35": {
          loc: {
            start: {
              line: 337,
              column: 4
            },
            end: {
              line: 347,
              column: 5
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 338,
              column: 6
            },
            end: {
              line: 341,
              column: 13
            }
          }, {
            start: {
              line: 342,
              column: 6
            },
            end: {
              line: 345,
              column: 13
            }
          }, {
            start: {
              line: 346,
              column: 6
            },
            end: {
              line: 346,
              column: 14
            }
          }],
          line: 337
        },
        "36": {
          loc: {
            start: {
              line: 351,
              column: 18
            },
            end: {
              line: 353,
              column: 10
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 352,
              column: 8
            },
            end: {
              line: 352,
              column: 73
            }
          }, {
            start: {
              line: 353,
              column: 8
            },
            end: {
              line: 353,
              column: 10
            }
          }],
          line: 351
        },
        "37": {
          loc: {
            start: {
              line: 351,
              column: 18
            },
            end: {
              line: 351,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 351,
              column: 18
            },
            end: {
              line: 351,
              column: 25
            }
          }, {
            start: {
              line: 351,
              column: 29
            },
            end: {
              line: 351,
              column: 47
            }
          }],
          line: 351
        },
        "38": {
          loc: {
            start: {
              line: 362,
              column: 28
            },
            end: {
              line: 363,
              column: 76
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 362,
              column: 28
            },
            end: {
              line: 362,
              column: 43
            }
          }, {
            start: {
              line: 362,
              column: 47
            },
            end: {
              line: 362,
              column: 64
            }
          }, {
            start: {
              line: 363,
              column: 28
            },
            end: {
              line: 363,
              column: 43
            }
          }, {
            start: {
              line: 363,
              column: 47
            },
            end: {
              line: 363,
              column: 76
            }
          }],
          line: 362
        },
        "39": {
          loc: {
            start: {
              line: 365,
              column: 4
            },
            end: {
              line: 367,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 365,
              column: 4
            },
            end: {
              line: 367,
              column: 5
            }
          }, {
            start: {
              line: 365,
              column: 4
            },
            end: {
              line: 367,
              column: 5
            }
          }],
          line: 365
        },
        "40": {
          loc: {
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 365,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 365,
              column: 21
            }
          }, {
            start: {
              line: 365,
              column: 25
            },
            end: {
              line: 365,
              column: 43
            }
          }],
          line: 365
        },
        "41": {
          loc: {
            start: {
              line: 369,
              column: 22
            },
            end: {
              line: 369,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 369,
              column: 53
            },
            end: {
              line: 369,
              column: 55
            }
          }, {
            start: {
              line: 369,
              column: 58
            },
            end: {
              line: 369,
              column: 59
            }
          }],
          line: 369
        },
        "42": {
          loc: {
            start: {
              line: 372,
              column: 11
            },
            end: {
              line: 373,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 373,
              column: 8
            },
            end: {
              line: 373,
              column: 43
            }
          }, {
            start: {
              line: 373,
              column: 46
            },
            end: {
              line: 373,
              column: 68
            }
          }],
          line: 372
        },
        "43": {
          loc: {
            start: {
              line: 392,
              column: 4
            },
            end: {
              line: 404,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 4
            },
            end: {
              line: 404,
              column: 5
            }
          }, {
            start: {
              line: 392,
              column: 4
            },
            end: {
              line: 404,
              column: 5
            }
          }],
          line: 392
        },
        "44": {
          loc: {
            start: {
              line: 401,
              column: 6
            },
            end: {
              line: 403,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 401,
              column: 6
            },
            end: {
              line: 403,
              column: 7
            }
          }, {
            start: {
              line: 401,
              column: 6
            },
            end: {
              line: 403,
              column: 7
            }
          }],
          line: 401
        },
        "45": {
          loc: {
            start: {
              line: 410,
              column: 26
            },
            end: {
              line: 411,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 410,
              column: 26
            },
            end: {
              line: 410,
              column: 33
            }
          }, {
            start: {
              line: 410,
              column: 37
            },
            end: {
              line: 410,
              column: 50
            }
          }, {
            start: {
              line: 411,
              column: 6
            },
            end: {
              line: 411,
              column: 56
            }
          }],
          line: 410
        },
        "46": {
          loc: {
            start: {
              line: 419,
              column: 4
            },
            end: {
              line: 427,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 419,
              column: 4
            },
            end: {
              line: 427,
              column: 5
            }
          }, {
            start: {
              line: 419,
              column: 4
            },
            end: {
              line: 427,
              column: 5
            }
          }],
          line: 419
        },
        "47": {
          loc: {
            start: {
              line: 429,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 429,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          }, {
            start: {
              line: 429,
              column: 4
            },
            end: {
              line: 432,
              column: 5
            }
          }],
          line: 429
        },
        "48": {
          loc: {
            start: {
              line: 429,
              column: 8
            },
            end: {
              line: 429,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 429,
              column: 8
            },
            end: {
              line: 429,
              column: 19
            }
          }, {
            start: {
              line: 429,
              column: 23
            },
            end: {
              line: 429,
              column: 64
            }
          }],
          line: 429
        },
        "49": {
          loc: {
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 437,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 437,
              column: 5
            }
          }, {
            start: {
              line: 435,
              column: 4
            },
            end: {
              line: 437,
              column: 5
            }
          }],
          line: 435
        },
        "50": {
          loc: {
            start: {
              line: 439,
              column: 4
            },
            end: {
              line: 442,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 439,
              column: 4
            },
            end: {
              line: 442,
              column: 5
            }
          }, {
            start: {
              line: 439,
              column: 4
            },
            end: {
              line: 442,
              column: 5
            }
          }],
          line: 439
        },
        "51": {
          loc: {
            start: {
              line: 439,
              column: 8
            },
            end: {
              line: 439,
              column: 38
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 439,
              column: 8
            },
            end: {
              line: 439,
              column: 22
            }
          }, {
            start: {
              line: 439,
              column: 26
            },
            end: {
              line: 439,
              column: 38
            }
          }],
          line: 439
        },
        "52": {
          loc: {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }, {
            start: {
              line: 446,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }],
          line: 446
        },
        "53": {
          loc: {
            start: {
              line: 459,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 459,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          }, {
            start: {
              line: 459,
              column: 4
            },
            end: {
              line: 496,
              column: 5
            }
          }],
          line: 459
        },
        "54": {
          loc: {
            start: {
              line: 468,
              column: 6
            },
            end: {
              line: 473,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 468,
              column: 6
            },
            end: {
              line: 473,
              column: 7
            }
          }, {
            start: {
              line: 468,
              column: 6
            },
            end: {
              line: 473,
              column: 7
            }
          }],
          line: 468
        },
        "55": {
          loc: {
            start: {
              line: 469,
              column: 39
            },
            end: {
              line: 469,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 469,
              column: 39
            },
            end: {
              line: 469,
              column: 67
            }
          }, {
            start: {
              line: 469,
              column: 71
            },
            end: {
              line: 469,
              column: 92
            }
          }],
          line: 469
        },
        "56": {
          loc: {
            start: {
              line: 472,
              column: 32
            },
            end: {
              line: 472,
              column: 85
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 472,
              column: 32
            },
            end: {
              line: 472,
              column: 60
            }
          }, {
            start: {
              line: 472,
              column: 64
            },
            end: {
              line: 472,
              column: 85
            }
          }],
          line: 472
        },
        "57": {
          loc: {
            start: {
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }, {
            start: {
              line: 498,
              column: 4
            },
            end: {
              line: 500,
              column: 5
            }
          }],
          line: 498
        },
        "58": {
          loc: {
            start: {
              line: 513,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 513,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          }, {
            start: {
              line: 513,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          }],
          line: 513
        },
        "59": {
          loc: {
            start: {
              line: 520,
              column: 21
            },
            end: {
              line: 520,
              column: 72
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 520,
              column: 50
            },
            end: {
              line: 520,
              column: 56
            }
          }, {
            start: {
              line: 520,
              column: 59
            },
            end: {
              line: 520,
              column: 72
            }
          }],
          line: 520
        },
        "60": {
          loc: {
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 525,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 525,
              column: 7
            }
          }, {
            start: {
              line: 522,
              column: 6
            },
            end: {
              line: 525,
              column: 7
            }
          }],
          line: 522
        },
        "61": {
          loc: {
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 537,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 537,
              column: 7
            }
          }, {
            start: {
              line: 527,
              column: 6
            },
            end: {
              line: 537,
              column: 7
            }
          }],
          line: 527
        },
        "62": {
          loc: {
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 537,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 537,
              column: 7
            }
          }, {
            start: {
              line: 529,
              column: 13
            },
            end: {
              line: 537,
              column: 7
            }
          }],
          line: 529
        },
        "63": {
          loc: {
            start: {
              line: 530,
              column: 8
            },
            end: {
              line: 532,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 530,
              column: 8
            },
            end: {
              line: 532,
              column: 9
            }
          }, {
            start: {
              line: 530,
              column: 8
            },
            end: {
              line: 532,
              column: 9
            }
          }],
          line: 530
        },
        "64": {
          loc: {
            start: {
              line: 534,
              column: 13
            },
            end: {
              line: 537,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 534,
              column: 13
            },
            end: {
              line: 537,
              column: 7
            }
          }, {
            start: {
              line: 534,
              column: 13
            },
            end: {
              line: 537,
              column: 7
            }
          }],
          line: 534
        },
        "65": {
          loc: {
            start: {
              line: 544,
              column: 4
            },
            end: {
              line: 546,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 544,
              column: 4
            },
            end: {
              line: 546,
              column: 5
            }
          }, {
            start: {
              line: 544,
              column: 4
            },
            end: {
              line: 546,
              column: 5
            }
          }],
          line: 544
        },
        "66": {
          loc: {
            start: {
              line: 550,
              column: 4
            },
            end: {
              line: 552,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 550,
              column: 4
            },
            end: {
              line: 552,
              column: 5
            }
          }, {
            start: {
              line: 550,
              column: 4
            },
            end: {
              line: 552,
              column: 5
            }
          }],
          line: 550
        },
        "67": {
          loc: {
            start: {
              line: 550,
              column: 8
            },
            end: {
              line: 550,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 550,
              column: 8
            },
            end: {
              line: 550,
              column: 15
            }
          }, {
            start: {
              line: 550,
              column: 19
            },
            end: {
              line: 550,
              column: 58
            }
          }],
          line: 550
        },
        "68": {
          loc: {
            start: {
              line: 560,
              column: 4
            },
            end: {
              line: 562,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 560,
              column: 4
            },
            end: {
              line: 562,
              column: 5
            }
          }, {
            start: {
              line: 560,
              column: 4
            },
            end: {
              line: 562,
              column: 5
            }
          }],
          line: 560
        },
        "69": {
          loc: {
            start: {
              line: 566,
              column: 4
            },
            end: {
              line: 568,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 566,
              column: 4
            },
            end: {
              line: 568,
              column: 5
            }
          }, {
            start: {
              line: 566,
              column: 4
            },
            end: {
              line: 568,
              column: 5
            }
          }],
          line: 566
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
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0,
        "243": 0,
        "244": 0,
        "245": 0,
        "246": 0,
        "247": 0,
        "248": 0,
        "249": 0,
        "250": 0,
        "251": 0,
        "252": 0,
        "253": 0
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
        "40": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0, 0],
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
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0, 0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0]
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

  var NAME = (cov_1usbl39ql6.s[0]++, 'carousel');
  var VERSION = (cov_1usbl39ql6.s[1]++, '4.2.1');
  var DATA_KEY = (cov_1usbl39ql6.s[2]++, 'bs.carousel');
  var EVENT_KEY = (cov_1usbl39ql6.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_1usbl39ql6.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_1usbl39ql6.s[5]++, $.fn[NAME]);
  var ARROW_LEFT_KEYCODE = (cov_1usbl39ql6.s[6]++, 37); // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = (cov_1usbl39ql6.s[7]++, 39); // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = (cov_1usbl39ql6.s[8]++, 500); // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = (cov_1usbl39ql6.s[9]++, 40);
  var Default = (cov_1usbl39ql6.s[10]++, {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  });
  var DefaultType = (cov_1usbl39ql6.s[11]++, {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  });
  var Direction = (cov_1usbl39ql6.s[12]++, {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  });
  var Event = (cov_1usbl39ql6.s[13]++, {
    SLIDE: "slide" + EVENT_KEY,
    SLID: "slid" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    TOUCHSTART: "touchstart" + EVENT_KEY,
    TOUCHMOVE: "touchmove" + EVENT_KEY,
    TOUCHEND: "touchend" + EVENT_KEY,
    POINTERDOWN: "pointerdown" + EVENT_KEY,
    POINTERUP: "pointerup" + EVENT_KEY,
    DRAG_START: "dragstart" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_1usbl39ql6.s[14]++, {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  });
  var Selector = (cov_1usbl39ql6.s[15]++, {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  });
  var PointerType = (cov_1usbl39ql6.s[16]++, {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      cov_1usbl39ql6.f[0]++;
      cov_1usbl39ql6.s[17]++;
      this._items = null;
      cov_1usbl39ql6.s[18]++;
      this._interval = null;
      cov_1usbl39ql6.s[19]++;
      this._activeElement = null;
      cov_1usbl39ql6.s[20]++;
      this._isPaused = false;
      cov_1usbl39ql6.s[21]++;
      this._isSliding = false;
      cov_1usbl39ql6.s[22]++;
      this.touchTimeout = null;
      cov_1usbl39ql6.s[23]++;
      this.touchStartX = 0;
      cov_1usbl39ql6.s[24]++;
      this.touchDeltaX = 0;
      cov_1usbl39ql6.s[25]++;
      this._config = this._getConfig(config);
      cov_1usbl39ql6.s[26]++;
      this._element = element;
      cov_1usbl39ql6.s[27]++;
      this._indicatorsElement = this._element.querySelector(Selector.INDICATORS);
      cov_1usbl39ql6.s[28]++;
      this._touchSupported = (cov_1usbl39ql6.b[0][0]++, 'ontouchstart' in document.documentElement) || (cov_1usbl39ql6.b[0][1]++, navigator.maxTouchPoints > 0);
      cov_1usbl39ql6.s[29]++;
      this._pointerEvent = Boolean((cov_1usbl39ql6.b[1][0]++, window.PointerEvent) || (cov_1usbl39ql6.b[1][1]++, window.MSPointerEvent));
      cov_1usbl39ql6.s[30]++;

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      cov_1usbl39ql6.f[3]++;
      cov_1usbl39ql6.s[33]++;

      if (!this._isSliding) {
        cov_1usbl39ql6.b[2][0]++;
        cov_1usbl39ql6.s[34]++;

        this._slide(Direction.NEXT);
      } else {
        cov_1usbl39ql6.b[2][1]++;
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      cov_1usbl39ql6.f[4]++;
      cov_1usbl39ql6.s[35]++;

      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if ((cov_1usbl39ql6.b[4][0]++, !document.hidden) && (cov_1usbl39ql6.b[4][1]++, $(this._element).is(':visible')) && (cov_1usbl39ql6.b[4][2]++, $(this._element).css('visibility') !== 'hidden')) {
        cov_1usbl39ql6.b[3][0]++;
        cov_1usbl39ql6.s[36]++;
        this.next();
      } else {
        cov_1usbl39ql6.b[3][1]++;
      }
    };

    _proto.prev = function prev() {
      cov_1usbl39ql6.f[5]++;
      cov_1usbl39ql6.s[37]++;

      if (!this._isSliding) {
        cov_1usbl39ql6.b[5][0]++;
        cov_1usbl39ql6.s[38]++;

        this._slide(Direction.PREV);
      } else {
        cov_1usbl39ql6.b[5][1]++;
      }
    };

    _proto.pause = function pause(event) {
      cov_1usbl39ql6.f[6]++;
      cov_1usbl39ql6.s[39]++;

      if (!event) {
        cov_1usbl39ql6.b[6][0]++;
        cov_1usbl39ql6.s[40]++;
        this._isPaused = true;
      } else {
        cov_1usbl39ql6.b[6][1]++;
      }

      cov_1usbl39ql6.s[41]++;

      if (this._element.querySelector(Selector.NEXT_PREV)) {
        cov_1usbl39ql6.b[7][0]++;
        cov_1usbl39ql6.s[42]++;
        Util.triggerTransitionEnd(this._element);
        cov_1usbl39ql6.s[43]++;
        this.cycle(true);
      } else {
        cov_1usbl39ql6.b[7][1]++;
      }

      cov_1usbl39ql6.s[44]++;
      clearInterval(this._interval);
      cov_1usbl39ql6.s[45]++;
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      cov_1usbl39ql6.f[7]++;
      cov_1usbl39ql6.s[46]++;

      if (!event) {
        cov_1usbl39ql6.b[8][0]++;
        cov_1usbl39ql6.s[47]++;
        this._isPaused = false;
      } else {
        cov_1usbl39ql6.b[8][1]++;
      }

      cov_1usbl39ql6.s[48]++;

      if (this._interval) {
        cov_1usbl39ql6.b[9][0]++;
        cov_1usbl39ql6.s[49]++;
        clearInterval(this._interval);
        cov_1usbl39ql6.s[50]++;
        this._interval = null;
      } else {
        cov_1usbl39ql6.b[9][1]++;
      }

      cov_1usbl39ql6.s[51]++;

      if ((cov_1usbl39ql6.b[11][0]++, this._config.interval) && (cov_1usbl39ql6.b[11][1]++, !this._isPaused)) {
        cov_1usbl39ql6.b[10][0]++;
        cov_1usbl39ql6.s[52]++;
        this._interval = setInterval((document.visibilityState ? (cov_1usbl39ql6.b[12][0]++, this.nextWhenVisible) : (cov_1usbl39ql6.b[12][1]++, this.next)).bind(this), this._config.interval);
      } else {
        cov_1usbl39ql6.b[10][1]++;
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      cov_1usbl39ql6.f[8]++;
      cov_1usbl39ql6.s[53]++;
      this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);
      var activeIndex = (cov_1usbl39ql6.s[54]++, this._getItemIndex(this._activeElement));
      cov_1usbl39ql6.s[55]++;

      if ((cov_1usbl39ql6.b[14][0]++, index > this._items.length - 1) || (cov_1usbl39ql6.b[14][1]++, index < 0)) {
        cov_1usbl39ql6.b[13][0]++;
        cov_1usbl39ql6.s[56]++;
        return;
      } else {
        cov_1usbl39ql6.b[13][1]++;
      }

      cov_1usbl39ql6.s[57]++;

      if (this._isSliding) {
        cov_1usbl39ql6.b[15][0]++;
        cov_1usbl39ql6.s[58]++;
        $(this._element).one(Event.SLID, function () {
          cov_1usbl39ql6.f[9]++;
          cov_1usbl39ql6.s[59]++;
          return _this.to(index);
        });
        cov_1usbl39ql6.s[60]++;
        return;
      } else {
        cov_1usbl39ql6.b[15][1]++;
      }

      cov_1usbl39ql6.s[61]++;

      if (activeIndex === index) {
        cov_1usbl39ql6.b[16][0]++;
        cov_1usbl39ql6.s[62]++;
        this.pause();
        cov_1usbl39ql6.s[63]++;
        this.cycle();
        cov_1usbl39ql6.s[64]++;
        return;
      } else {
        cov_1usbl39ql6.b[16][1]++;
      }

      var direction = (cov_1usbl39ql6.s[65]++, index > activeIndex ? (cov_1usbl39ql6.b[17][0]++, Direction.NEXT) : (cov_1usbl39ql6.b[17][1]++, Direction.PREV));
      cov_1usbl39ql6.s[66]++;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      cov_1usbl39ql6.f[10]++;
      cov_1usbl39ql6.s[67]++;
      $(this._element).off(EVENT_KEY);
      cov_1usbl39ql6.s[68]++;
      $.removeData(this._element, DATA_KEY);
      cov_1usbl39ql6.s[69]++;
      this._items = null;
      cov_1usbl39ql6.s[70]++;
      this._config = null;
      cov_1usbl39ql6.s[71]++;
      this._element = null;
      cov_1usbl39ql6.s[72]++;
      this._interval = null;
      cov_1usbl39ql6.s[73]++;
      this._isPaused = null;
      cov_1usbl39ql6.s[74]++;
      this._isSliding = null;
      cov_1usbl39ql6.s[75]++;
      this._activeElement = null;
      cov_1usbl39ql6.s[76]++;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      cov_1usbl39ql6.f[11]++;
      cov_1usbl39ql6.s[77]++;
      config = _objectSpread({}, Default, config);
      cov_1usbl39ql6.s[78]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_1usbl39ql6.s[79]++;
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      cov_1usbl39ql6.f[12]++;
      var absDeltax = (cov_1usbl39ql6.s[80]++, Math.abs(this.touchDeltaX));
      cov_1usbl39ql6.s[81]++;

      if (absDeltax <= SWIPE_THRESHOLD) {
        cov_1usbl39ql6.b[18][0]++;
        cov_1usbl39ql6.s[82]++;
        return;
      } else {
        cov_1usbl39ql6.b[18][1]++;
      }

      var direction = (cov_1usbl39ql6.s[83]++, absDeltax / this.touchDeltaX); // swipe left

      cov_1usbl39ql6.s[84]++;

      if (direction > 0) {
        cov_1usbl39ql6.b[19][0]++;
        cov_1usbl39ql6.s[85]++;
        this.prev();
      } else {
        cov_1usbl39ql6.b[19][1]++;
      } // swipe right


      cov_1usbl39ql6.s[86]++;

      if (direction < 0) {
        cov_1usbl39ql6.b[20][0]++;
        cov_1usbl39ql6.s[87]++;
        this.next();
      } else {
        cov_1usbl39ql6.b[20][1]++;
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      cov_1usbl39ql6.f[13]++;
      cov_1usbl39ql6.s[88]++;

      if (this._config.keyboard) {
        cov_1usbl39ql6.b[21][0]++;
        cov_1usbl39ql6.s[89]++;
        $(this._element).on(Event.KEYDOWN, function (event) {
          cov_1usbl39ql6.f[14]++;
          cov_1usbl39ql6.s[90]++;
          return _this2._keydown(event);
        });
      } else {
        cov_1usbl39ql6.b[21][1]++;
      }

      cov_1usbl39ql6.s[91]++;

      if (this._config.pause === 'hover') {
        cov_1usbl39ql6.b[22][0]++;
        cov_1usbl39ql6.s[92]++;
        $(this._element).on(Event.MOUSEENTER, function (event) {
          cov_1usbl39ql6.f[15]++;
          cov_1usbl39ql6.s[93]++;
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          cov_1usbl39ql6.f[16]++;
          cov_1usbl39ql6.s[94]++;
          return _this2.cycle(event);
        });
      } else {
        cov_1usbl39ql6.b[22][1]++;
      }

      cov_1usbl39ql6.s[95]++;

      this._addTouchEventListeners();
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      cov_1usbl39ql6.f[17]++;
      cov_1usbl39ql6.s[96]++;

      if (!this._touchSupported) {
        cov_1usbl39ql6.b[23][0]++;
        cov_1usbl39ql6.s[97]++;
        return;
      } else {
        cov_1usbl39ql6.b[23][1]++;
      }

      cov_1usbl39ql6.s[98]++;

      var start = function start(event) {
        cov_1usbl39ql6.f[18]++;
        cov_1usbl39ql6.s[99]++;

        if ((cov_1usbl39ql6.b[25][0]++, _this3._pointerEvent) && (cov_1usbl39ql6.b[25][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1usbl39ql6.b[24][0]++;
          cov_1usbl39ql6.s[100]++;
          _this3.touchStartX = event.originalEvent.clientX;
        } else {
          cov_1usbl39ql6.b[24][1]++;
          cov_1usbl39ql6.s[101]++;

          if (!_this3._pointerEvent) {
            cov_1usbl39ql6.b[26][0]++;
            cov_1usbl39ql6.s[102]++;
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          } else {
            cov_1usbl39ql6.b[26][1]++;
          }
        }
      };

      cov_1usbl39ql6.s[103]++;

      var move = function move(event) {
        cov_1usbl39ql6.f[19]++;
        cov_1usbl39ql6.s[104]++;

        // ensure swiping with one touch and not pinching
        if ((cov_1usbl39ql6.b[28][0]++, event.originalEvent.touches) && (cov_1usbl39ql6.b[28][1]++, event.originalEvent.touches.length > 1)) {
          cov_1usbl39ql6.b[27][0]++;
          cov_1usbl39ql6.s[105]++;
          _this3.touchDeltaX = 0;
        } else {
          cov_1usbl39ql6.b[27][1]++;
          cov_1usbl39ql6.s[106]++;
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      cov_1usbl39ql6.s[107]++;

      var end = function end(event) {
        cov_1usbl39ql6.f[20]++;
        cov_1usbl39ql6.s[108]++;

        if ((cov_1usbl39ql6.b[30][0]++, _this3._pointerEvent) && (cov_1usbl39ql6.b[30][1]++, PointerType[event.originalEvent.pointerType.toUpperCase()])) {
          cov_1usbl39ql6.b[29][0]++;
          cov_1usbl39ql6.s[109]++;
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        } else {
          cov_1usbl39ql6.b[29][1]++;
        }

        cov_1usbl39ql6.s[110]++;

        _this3._handleSwipe();

        cov_1usbl39ql6.s[111]++;

        if (_this3._config.pause === 'hover') {
          cov_1usbl39ql6.b[31][0]++;
          cov_1usbl39ql6.s[112]++;

          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          cov_1usbl39ql6.s[113]++;

          if (_this3.touchTimeout) {
            cov_1usbl39ql6.b[32][0]++;
            cov_1usbl39ql6.s[114]++;
            clearTimeout(_this3.touchTimeout);
          } else {
            cov_1usbl39ql6.b[32][1]++;
          }

          cov_1usbl39ql6.s[115]++;
          _this3.touchTimeout = setTimeout(function (event) {
            cov_1usbl39ql6.f[21]++;
            cov_1usbl39ql6.s[116]++;
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        } else {
          cov_1usbl39ql6.b[31][1]++;
        }
      };

      cov_1usbl39ql6.s[117]++;
      $(this._element.querySelectorAll(Selector.ITEM_IMG)).on(Event.DRAG_START, function (e) {
        cov_1usbl39ql6.f[22]++;
        cov_1usbl39ql6.s[118]++;
        return e.preventDefault();
      });
      cov_1usbl39ql6.s[119]++;

      if (this._pointerEvent) {
        cov_1usbl39ql6.b[33][0]++;
        cov_1usbl39ql6.s[120]++;
        $(this._element).on(Event.POINTERDOWN, function (event) {
          cov_1usbl39ql6.f[23]++;
          cov_1usbl39ql6.s[121]++;
          return start(event);
        });
        cov_1usbl39ql6.s[122]++;
        $(this._element).on(Event.POINTERUP, function (event) {
          cov_1usbl39ql6.f[24]++;
          cov_1usbl39ql6.s[123]++;
          return end(event);
        });
        cov_1usbl39ql6.s[124]++;

        this._element.classList.add(ClassName.POINTER_EVENT);
      } else {
        cov_1usbl39ql6.b[33][1]++;
        cov_1usbl39ql6.s[125]++;
        $(this._element).on(Event.TOUCHSTART, function (event) {
          cov_1usbl39ql6.f[25]++;
          cov_1usbl39ql6.s[126]++;
          return start(event);
        });
        cov_1usbl39ql6.s[127]++;
        $(this._element).on(Event.TOUCHMOVE, function (event) {
          cov_1usbl39ql6.f[26]++;
          cov_1usbl39ql6.s[128]++;
          return move(event);
        });
        cov_1usbl39ql6.s[129]++;
        $(this._element).on(Event.TOUCHEND, function (event) {
          cov_1usbl39ql6.f[27]++;
          cov_1usbl39ql6.s[130]++;
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      cov_1usbl39ql6.f[28]++;
      cov_1usbl39ql6.s[131]++;

      if (/input|textarea/i.test(event.target.tagName)) {
        cov_1usbl39ql6.b[34][0]++;
        cov_1usbl39ql6.s[132]++;
        return;
      } else {
        cov_1usbl39ql6.b[34][1]++;
      }

      cov_1usbl39ql6.s[133]++;

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          cov_1usbl39ql6.b[35][0]++;
          cov_1usbl39ql6.s[134]++;
          event.preventDefault();
          cov_1usbl39ql6.s[135]++;
          this.prev();
          cov_1usbl39ql6.s[136]++;
          break;

        case ARROW_RIGHT_KEYCODE:
          cov_1usbl39ql6.b[35][1]++;
          cov_1usbl39ql6.s[137]++;
          event.preventDefault();
          cov_1usbl39ql6.s[138]++;
          this.next();
          cov_1usbl39ql6.s[139]++;
          break;

        default:
          cov_1usbl39ql6.b[35][2]++;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      cov_1usbl39ql6.f[29]++;
      cov_1usbl39ql6.s[140]++;
      this._items = (cov_1usbl39ql6.b[37][0]++, element) && (cov_1usbl39ql6.b[37][1]++, element.parentNode) ? (cov_1usbl39ql6.b[36][0]++, [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM))) : (cov_1usbl39ql6.b[36][1]++, []);
      cov_1usbl39ql6.s[141]++;
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      cov_1usbl39ql6.f[30]++;
      var isNextDirection = (cov_1usbl39ql6.s[142]++, direction === Direction.NEXT);
      var isPrevDirection = (cov_1usbl39ql6.s[143]++, direction === Direction.PREV);
      var activeIndex = (cov_1usbl39ql6.s[144]++, this._getItemIndex(activeElement));
      var lastItemIndex = (cov_1usbl39ql6.s[145]++, this._items.length - 1);
      var isGoingToWrap = (cov_1usbl39ql6.s[146]++, (cov_1usbl39ql6.b[38][0]++, isPrevDirection) && (cov_1usbl39ql6.b[38][1]++, activeIndex === 0) || (cov_1usbl39ql6.b[38][2]++, isNextDirection) && (cov_1usbl39ql6.b[38][3]++, activeIndex === lastItemIndex));
      cov_1usbl39ql6.s[147]++;

      if ((cov_1usbl39ql6.b[40][0]++, isGoingToWrap) && (cov_1usbl39ql6.b[40][1]++, !this._config.wrap)) {
        cov_1usbl39ql6.b[39][0]++;
        cov_1usbl39ql6.s[148]++;
        return activeElement;
      } else {
        cov_1usbl39ql6.b[39][1]++;
      }

      var delta = (cov_1usbl39ql6.s[149]++, direction === Direction.PREV ? (cov_1usbl39ql6.b[41][0]++, -1) : (cov_1usbl39ql6.b[41][1]++, 1));
      var itemIndex = (cov_1usbl39ql6.s[150]++, (activeIndex + delta) % this._items.length);
      cov_1usbl39ql6.s[151]++;
      return itemIndex === -1 ? (cov_1usbl39ql6.b[42][0]++, this._items[this._items.length - 1]) : (cov_1usbl39ql6.b[42][1]++, this._items[itemIndex]);
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      cov_1usbl39ql6.f[31]++;
      var targetIndex = (cov_1usbl39ql6.s[152]++, this._getItemIndex(relatedTarget));
      var fromIndex = (cov_1usbl39ql6.s[153]++, this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM)));
      var slideEvent = (cov_1usbl39ql6.s[154]++, $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      }));
      cov_1usbl39ql6.s[155]++;
      $(this._element).trigger(slideEvent);
      cov_1usbl39ql6.s[156]++;
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      cov_1usbl39ql6.f[32]++;
      cov_1usbl39ql6.s[157]++;

      if (this._indicatorsElement) {
        cov_1usbl39ql6.b[43][0]++;
        var indicators = (cov_1usbl39ql6.s[158]++, [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE)));
        cov_1usbl39ql6.s[159]++;
        $(indicators).removeClass(ClassName.ACTIVE);
        var nextIndicator = (cov_1usbl39ql6.s[160]++, this._indicatorsElement.children[this._getItemIndex(element)]);
        cov_1usbl39ql6.s[161]++;

        if (nextIndicator) {
          cov_1usbl39ql6.b[44][0]++;
          cov_1usbl39ql6.s[162]++;
          $(nextIndicator).addClass(ClassName.ACTIVE);
        } else {
          cov_1usbl39ql6.b[44][1]++;
        }
      } else {
        cov_1usbl39ql6.b[43][1]++;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      cov_1usbl39ql6.f[33]++;
      var activeElement = (cov_1usbl39ql6.s[163]++, this._element.querySelector(Selector.ACTIVE_ITEM));
      var activeElementIndex = (cov_1usbl39ql6.s[164]++, this._getItemIndex(activeElement));
      var nextElement = (cov_1usbl39ql6.s[165]++, (cov_1usbl39ql6.b[45][0]++, element) || (cov_1usbl39ql6.b[45][1]++, activeElement) && (cov_1usbl39ql6.b[45][2]++, this._getItemByDirection(direction, activeElement)));
      var nextElementIndex = (cov_1usbl39ql6.s[166]++, this._getItemIndex(nextElement));
      var isCycling = (cov_1usbl39ql6.s[167]++, Boolean(this._interval));
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      cov_1usbl39ql6.s[168]++;

      if (direction === Direction.NEXT) {
        cov_1usbl39ql6.b[46][0]++;
        cov_1usbl39ql6.s[169]++;
        directionalClassName = ClassName.LEFT;
        cov_1usbl39ql6.s[170]++;
        orderClassName = ClassName.NEXT;
        cov_1usbl39ql6.s[171]++;
        eventDirectionName = Direction.LEFT;
      } else {
        cov_1usbl39ql6.b[46][1]++;
        cov_1usbl39ql6.s[172]++;
        directionalClassName = ClassName.RIGHT;
        cov_1usbl39ql6.s[173]++;
        orderClassName = ClassName.PREV;
        cov_1usbl39ql6.s[174]++;
        eventDirectionName = Direction.RIGHT;
      }

      cov_1usbl39ql6.s[175]++;

      if ((cov_1usbl39ql6.b[48][0]++, nextElement) && (cov_1usbl39ql6.b[48][1]++, $(nextElement).hasClass(ClassName.ACTIVE))) {
        cov_1usbl39ql6.b[47][0]++;
        cov_1usbl39ql6.s[176]++;
        this._isSliding = false;
        cov_1usbl39ql6.s[177]++;
        return;
      } else {
        cov_1usbl39ql6.b[47][1]++;
      }

      var slideEvent = (cov_1usbl39ql6.s[178]++, this._triggerSlideEvent(nextElement, eventDirectionName));
      cov_1usbl39ql6.s[179]++;

      if (slideEvent.isDefaultPrevented()) {
        cov_1usbl39ql6.b[49][0]++;
        cov_1usbl39ql6.s[180]++;
        return;
      } else {
        cov_1usbl39ql6.b[49][1]++;
      }

      cov_1usbl39ql6.s[181]++;

      if ((cov_1usbl39ql6.b[51][0]++, !activeElement) || (cov_1usbl39ql6.b[51][1]++, !nextElement)) {
        cov_1usbl39ql6.b[50][0]++;
        cov_1usbl39ql6.s[182]++;
        // Some weirdness is happening, so we bail
        return;
      } else {
        cov_1usbl39ql6.b[50][1]++;
      }

      cov_1usbl39ql6.s[183]++;
      this._isSliding = true;
      cov_1usbl39ql6.s[184]++;

      if (isCycling) {
        cov_1usbl39ql6.b[52][0]++;
        cov_1usbl39ql6.s[185]++;
        this.pause();
      } else {
        cov_1usbl39ql6.b[52][1]++;
      }

      cov_1usbl39ql6.s[186]++;

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = (cov_1usbl39ql6.s[187]++, $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }));
      cov_1usbl39ql6.s[188]++;

      if ($(this._element).hasClass(ClassName.SLIDE)) {
        cov_1usbl39ql6.b[53][0]++;
        cov_1usbl39ql6.s[189]++;
        $(nextElement).addClass(orderClassName);
        cov_1usbl39ql6.s[190]++;
        Util.reflow(nextElement);
        cov_1usbl39ql6.s[191]++;
        $(activeElement).addClass(directionalClassName);
        cov_1usbl39ql6.s[192]++;
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = (cov_1usbl39ql6.s[193]++, parseInt(nextElement.getAttribute('data-interval'), 10));
        cov_1usbl39ql6.s[194]++;

        if (nextElementInterval) {
          cov_1usbl39ql6.b[54][0]++;
          cov_1usbl39ql6.s[195]++;
          this._config.defaultInterval = (cov_1usbl39ql6.b[55][0]++, this._config.defaultInterval) || (cov_1usbl39ql6.b[55][1]++, this._config.interval);
          cov_1usbl39ql6.s[196]++;
          this._config.interval = nextElementInterval;
        } else {
          cov_1usbl39ql6.b[54][1]++;
          cov_1usbl39ql6.s[197]++;
          this._config.interval = (cov_1usbl39ql6.b[56][0]++, this._config.defaultInterval) || (cov_1usbl39ql6.b[56][1]++, this._config.interval);
        }

        var transitionDuration = (cov_1usbl39ql6.s[198]++, Util.getTransitionDurationFromElement(activeElement));
        cov_1usbl39ql6.s[199]++;
        $(activeElement).one(Util.TRANSITION_END, function () {
          cov_1usbl39ql6.f[34]++;
          cov_1usbl39ql6.s[200]++;
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
          cov_1usbl39ql6.s[201]++;
          $(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
          cov_1usbl39ql6.s[202]++;
          _this4._isSliding = false;
          cov_1usbl39ql6.s[203]++;
          setTimeout(function () {
            cov_1usbl39ql6.f[35]++;
            cov_1usbl39ql6.s[204]++;
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1usbl39ql6.b[53][1]++;
        cov_1usbl39ql6.s[205]++;
        $(activeElement).removeClass(ClassName.ACTIVE);
        cov_1usbl39ql6.s[206]++;
        $(nextElement).addClass(ClassName.ACTIVE);
        cov_1usbl39ql6.s[207]++;
        this._isSliding = false;
        cov_1usbl39ql6.s[208]++;
        $(this._element).trigger(slidEvent);
      }

      cov_1usbl39ql6.s[209]++;

      if (isCycling) {
        cov_1usbl39ql6.b[57][0]++;
        cov_1usbl39ql6.s[210]++;
        this.cycle();
      } else {
        cov_1usbl39ql6.b[57][1]++;
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      cov_1usbl39ql6.f[36]++;
      cov_1usbl39ql6.s[211]++;
      return this.each(function () {
        cov_1usbl39ql6.f[37]++;
        var data = (cov_1usbl39ql6.s[212]++, $(this).data(DATA_KEY));

        var _config = (cov_1usbl39ql6.s[213]++, _objectSpread({}, Default, $(this).data()));

        cov_1usbl39ql6.s[214]++;

        if (typeof config === 'object') {
          cov_1usbl39ql6.b[58][0]++;
          cov_1usbl39ql6.s[215]++;
          _config = _objectSpread({}, _config, config);
        } else {
          cov_1usbl39ql6.b[58][1]++;
        }

        var action = (cov_1usbl39ql6.s[216]++, typeof config === 'string' ? (cov_1usbl39ql6.b[59][0]++, config) : (cov_1usbl39ql6.b[59][1]++, _config.slide));
        cov_1usbl39ql6.s[217]++;

        if (!data) {
          cov_1usbl39ql6.b[60][0]++;
          cov_1usbl39ql6.s[218]++;
          data = new Carousel(this, _config);
          cov_1usbl39ql6.s[219]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_1usbl39ql6.b[60][1]++;
        }

        cov_1usbl39ql6.s[220]++;

        if (typeof config === 'number') {
          cov_1usbl39ql6.b[61][0]++;
          cov_1usbl39ql6.s[221]++;
          data.to(config);
        } else {
          cov_1usbl39ql6.b[61][1]++;
          cov_1usbl39ql6.s[222]++;

          if (typeof action === 'string') {
            cov_1usbl39ql6.b[62][0]++;
            cov_1usbl39ql6.s[223]++;

            if (typeof data[action] === 'undefined') {
              cov_1usbl39ql6.b[63][0]++;
              cov_1usbl39ql6.s[224]++;
              throw new TypeError("No method named \"" + action + "\"");
            } else {
              cov_1usbl39ql6.b[63][1]++;
            }

            cov_1usbl39ql6.s[225]++;
            data[action]();
          } else {
            cov_1usbl39ql6.b[62][1]++;
            cov_1usbl39ql6.s[226]++;

            if (_config.interval) {
              cov_1usbl39ql6.b[64][0]++;
              cov_1usbl39ql6.s[227]++;
              data.pause();
              cov_1usbl39ql6.s[228]++;
              data.cycle();
            } else {
              cov_1usbl39ql6.b[64][1]++;
            }
          }
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      cov_1usbl39ql6.f[38]++;
      var selector = (cov_1usbl39ql6.s[229]++, Util.getSelectorFromElement(this));
      cov_1usbl39ql6.s[230]++;

      if (!selector) {
        cov_1usbl39ql6.b[65][0]++;
        cov_1usbl39ql6.s[231]++;
        return;
      } else {
        cov_1usbl39ql6.b[65][1]++;
      }

      var target = (cov_1usbl39ql6.s[232]++, $(selector)[0]);
      cov_1usbl39ql6.s[233]++;

      if ((cov_1usbl39ql6.b[67][0]++, !target) || (cov_1usbl39ql6.b[67][1]++, !$(target).hasClass(ClassName.CAROUSEL))) {
        cov_1usbl39ql6.b[66][0]++;
        cov_1usbl39ql6.s[234]++;
        return;
      } else {
        cov_1usbl39ql6.b[66][1]++;
      }

      var config = (cov_1usbl39ql6.s[235]++, _objectSpread({}, $(target).data(), $(this).data()));
      var slideIndex = (cov_1usbl39ql6.s[236]++, this.getAttribute('data-slide-to'));
      cov_1usbl39ql6.s[237]++;

      if (slideIndex) {
        cov_1usbl39ql6.b[68][0]++;
        cov_1usbl39ql6.s[238]++;
        config.interval = false;
      } else {
        cov_1usbl39ql6.b[68][1]++;
      }

      cov_1usbl39ql6.s[239]++;

      Carousel._jQueryInterface.call($(target), config);

      cov_1usbl39ql6.s[240]++;

      if (slideIndex) {
        cov_1usbl39ql6.b[69][0]++;
        cov_1usbl39ql6.s[241]++;
        $(target).data(DATA_KEY).to(slideIndex);
      } else {
        cov_1usbl39ql6.b[69][1]++;
      }

      cov_1usbl39ql6.s[242]++;
      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        cov_1usbl39ql6.f[1]++;
        cov_1usbl39ql6.s[31]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_1usbl39ql6.f[2]++;
        cov_1usbl39ql6.s[32]++;
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_1usbl39ql6.s[243]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  cov_1usbl39ql6.s[244]++;
  $(window).on(Event.LOAD_DATA_API, function () {
    cov_1usbl39ql6.f[39]++;
    var carousels = (cov_1usbl39ql6.s[245]++, [].slice.call(document.querySelectorAll(Selector.DATA_RIDE)));
    cov_1usbl39ql6.s[246]++;

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = (cov_1usbl39ql6.s[247]++, $(carousels[i]));
      cov_1usbl39ql6.s[248]++;

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_1usbl39ql6.s[249]++;
  $.fn[NAME] = Carousel._jQueryInterface;
  cov_1usbl39ql6.s[250]++;
  $.fn[NAME].Constructor = Carousel;
  cov_1usbl39ql6.s[251]++;

  $.fn[NAME].noConflict = function () {
    cov_1usbl39ql6.f[40]++;
    cov_1usbl39ql6.s[252]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1usbl39ql6.s[253]++;
    return Carousel._jQueryInterface;
  };

  return Carousel;

}));
//# sourceMappingURL=carousel.js.map
