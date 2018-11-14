/*!
  * Bootstrap modal.js v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Modal = factory(global.jQuery,global.Util));
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

  var cov_zxs9qrnzr = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/modal.js",
        hash = "3df524a17389ec3c6b776be86b40b39b197c2d56",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/modal.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 34
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
            column: 37
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
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 29
          }
        },
        "7": {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 30,
            column: 1
          }
        },
        "8": {
          start: {
            line: 32,
            column: 20
          },
          end: {
            line: 37,
            column: 1
          }
        },
        "9": {
          start: {
            line: 39,
            column: 14
          },
          end: {
            line: 51,
            column: 1
          }
        },
        "10": {
          start: {
            line: 53,
            column: 18
          },
          end: {
            line: 59,
            column: 1
          }
        },
        "11": {
          start: {
            line: 61,
            column: 17
          },
          end: {
            line: 67,
            column: 1
          }
        },
        "12": {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 55
          }
        },
        "13": {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 39
          }
        },
        "14": {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 70
          }
        },
        "15": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 36
          }
        },
        "16": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 37
          }
        },
        "17": {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 37
          }
        },
        "18": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 83,
            column: 37
          }
        },
        "19": {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 37
          }
        },
        "20": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 33
          }
        },
        "21": {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 91,
            column: 18
          }
        },
        "22": {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 95,
            column: 18
          }
        },
        "23": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 65
          }
        },
        "24": {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        },
        "25": {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 106,
            column: 12
          }
        },
        "26": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        "27": {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 34
          }
        },
        "28": {
          start: {
            line: 113,
            column: 22
          },
          end: {
            line: 115,
            column: 6
          }
        },
        "29": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 39
          }
        },
        "30": {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 121,
            column: 5
          }
        },
        "31": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 120,
            column: 12
          }
        },
        "32": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 24
          }
        },
        "33": {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 26
          }
        },
        "34": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 24
          }
        },
        "35": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 24
          }
        },
        "36": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 45
          }
        },
        "37": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 26
          }
        },
        "38": {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 133,
            column: 26
          }
        },
        "39": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 139,
            column: 5
          }
        },
        "40": {
          start: {
            line: 138,
            column: 17
          },
          end: {
            line: 138,
            column: 33
          }
        },
        "41": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 147,
            column: 6
          }
        },
        "42": {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 146,
            column: 8
          }
        },
        "43": {
          start: {
            line: 143,
            column: 8
          },
          end: {
            line: 145,
            column: 9
          }
        },
        "44": {
          start: {
            line: 144,
            column: 10
          },
          end: {
            line: 144,
            column: 42
          }
        },
        "45": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 149,
            column: 62
          }
        },
        "46": {
          start: {
            line: 149,
            column: 29
          },
          end: {
            line: 149,
            column: 61
          }
        },
        "47": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "48": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 28
          }
        },
        "49": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 159,
            column: 5
          }
        },
        "50": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 158,
            column: 12
          }
        },
        "51": {
          start: {
            line: 161,
            column: 22
          },
          end: {
            line: 161,
            column: 41
          }
        },
        "52": {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 163,
            column: 39
          }
        },
        "53": {
          start: {
            line: 165,
            column: 4
          },
          end: {
            line: 167,
            column: 5
          }
        },
        "54": {
          start: {
            line: 166,
            column: 6
          },
          end: {
            line: 166,
            column: 12
          }
        },
        "55": {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 169,
            column: 25
          }
        },
        "56": {
          start: {
            line: 170,
            column: 23
          },
          end: {
            line: 170,
            column: 64
          }
        },
        "57": {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 174,
            column: 5
          }
        },
        "58": {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 173,
            column: 34
          }
        },
        "59": {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 176,
            column: 26
          }
        },
        "60": {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 26
          }
        },
        "61": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 179,
            column: 34
          }
        },
        "62": {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 181,
            column: 48
          }
        },
        "63": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 183,
            column: 45
          }
        },
        "64": {
          start: {
            line: 184,
            column: 4
          },
          end: {
            line: 184,
            column: 48
          }
        },
        "65": {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 195,
            column: 5
          }
        },
        "66": {
          start: {
            line: 188,
            column: 34
          },
          end: {
            line: 188,
            column: 86
          }
        },
        "67": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 192,
            column: 49
          }
        },
        "68": {
          start: {
            line: 191,
            column: 45
          },
          end: {
            line: 191,
            column: 67
          }
        },
        "69": {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 194,
            column: 23
          }
        },
        "70": {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 200,
            column: 62
          }
        },
        "71": {
          start: {
            line: 200,
            column: 32
          },
          end: {
            line: 200,
            column: 61
          }
        },
        "72": {
          start: {
            line: 207,
            column: 4
          },
          end: {
            line: 207,
            column: 34
          }
        },
        "73": {
          start: {
            line: 209,
            column: 4
          },
          end: {
            line: 209,
            column: 41
          }
        },
        "74": {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 36
          }
        },
        "75": {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 36
          }
        },
        "76": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 36
          }
        },
        "77": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 36
          }
        },
        "78": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 36
          }
        },
        "79": {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 36
          }
        },
        "80": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 36
          }
        },
        "81": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 36
          }
        },
        "82": {
          start: {
            line: 219,
            column: 4
          },
          end: {
            line: 219,
            column: 36
          }
        },
        "83": {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 223,
            column: 24
          }
        },
        "84": {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 232,
            column: 5
          }
        },
        "85": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 233,
            column: 51
          }
        },
        "86": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 234,
            column: 17
          }
        },
        "87": {
          start: {
            line: 238,
            column: 23
          },
          end: {
            line: 238,
            column: 64
          }
        },
        "88": {
          start: {
            line: 240,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        },
        "89": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 243,
            column: 46
          }
        },
        "90": {
          start: {
            line: 246,
            column: 4
          },
          end: {
            line: 246,
            column: 41
          }
        },
        "91": {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 247,
            column: 48
          }
        },
        "92": {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 248,
            column: 31
          }
        },
        "93": {
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 252,
            column: 5
          }
        },
        "94": {
          start: {
            line: 251,
            column: 6
          },
          end: {
            line: 251,
            column: 32
          }
        },
        "95": {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 254,
            column: 45
          }
        },
        "96": {
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 258,
            column: 5
          }
        },
        "97": {
          start: {
            line: 257,
            column: 6
          },
          end: {
            line: 257,
            column: 26
          }
        },
        "98": {
          start: {
            line: 260,
            column: 23
          },
          end: {
            line: 262,
            column: 6
          }
        },
        "99": {
          start: {
            line: 264,
            column: 31
          },
          end: {
            line: 270,
            column: 5
          }
        },
        "100": {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 267,
            column: 7
          }
        },
        "101": {
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 266,
            column: 29
          }
        },
        "102": {
          start: {
            line: 268,
            column: 6
          },
          end: {
            line: 268,
            column: 35
          }
        },
        "103": {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 269,
            column: 42
          }
        },
        "104": {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 280,
            column: 5
          }
        },
        "105": {
          start: {
            line: 273,
            column: 34
          },
          end: {
            line: 273,
            column: 85
          }
        },
        "106": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 277,
            column: 49
          }
        },
        "107": {
          start: {
            line: 279,
            column: 6
          },
          end: {
            line: 279,
            column: 26
          }
        },
        "108": {
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 292,
            column: 8
          }
        },
        "109": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 291,
            column: 9
          }
        },
        "110": {
          start: {
            line: 290,
            column: 10
          },
          end: {
            line: 290,
            column: 31
          }
        },
        "111": {
          start: {
            line: 296,
            column: 4
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "112": {
          start: {
            line: 297,
            column: 6
          },
          end: {
            line: 302,
            column: 8
          }
        },
        "113": {
          start: {
            line: 298,
            column: 8
          },
          end: {
            line: 301,
            column: 9
          }
        },
        "114": {
          start: {
            line: 299,
            column: 10
          },
          end: {
            line: 299,
            column: 32
          }
        },
        "115": {
          start: {
            line: 300,
            column: 10
          },
          end: {
            line: 300,
            column: 21
          }
        },
        "116": {
          start: {
            line: 303,
            column: 11
          },
          end: {
            line: 305,
            column: 5
          }
        },
        "117": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 304,
            column: 49
          }
        },
        "118": {
          start: {
            line: 309,
            column: 4
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "119": {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 310,
            column: 69
          }
        },
        "120": {
          start: {
            line: 310,
            column: 44
          },
          end: {
            line: 310,
            column: 68
          }
        },
        "121": {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 312,
            column: 33
          }
        },
        "122": {
          start: {
            line: 317,
            column: 4
          },
          end: {
            line: 317,
            column: 40
          }
        },
        "123": {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 318,
            column: 51
          }
        },
        "124": {
          start: {
            line: 319,
            column: 4
          },
          end: {
            line: 319,
            column: 33
          }
        },
        "125": {
          start: {
            line: 320,
            column: 4
          },
          end: {
            line: 325,
            column: 6
          }
        },
        "126": {
          start: {
            line: 321,
            column: 6
          },
          end: {
            line: 321,
            column: 50
          }
        },
        "127": {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 30
          }
        },
        "128": {
          start: {
            line: 323,
            column: 6
          },
          end: {
            line: 323,
            column: 28
          }
        },
        "129": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 324,
            column: 44
          }
        },
        "130": {
          start: {
            line: 329,
            column: 4
          },
          end: {
            line: 332,
            column: 5
          }
        },
        "131": {
          start: {
            line: 330,
            column: 6
          },
          end: {
            line: 330,
            column: 32
          }
        },
        "132": {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 331,
            column: 27
          }
        },
        "133": {
          start: {
            line: 336,
            column: 20
          },
          end: {
            line: 337,
            column: 27
          }
        },
        "134": {
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 405,
            column: 5
          }
        },
        "135": {
          start: {
            line: 340,
            column: 6
          },
          end: {
            line: 340,
            column: 52
          }
        },
        "136": {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 341,
            column: 51
          }
        },
        "137": {
          start: {
            line: 343,
            column: 6
          },
          end: {
            line: 345,
            column: 7
          }
        },
        "138": {
          start: {
            line: 344,
            column: 8
          },
          end: {
            line: 344,
            column: 45
          }
        },
        "139": {
          start: {
            line: 347,
            column: 6
          },
          end: {
            line: 347,
            column: 47
          }
        },
        "140": {
          start: {
            line: 349,
            column: 6
          },
          end: {
            line: 362,
            column: 8
          }
        },
        "141": {
          start: {
            line: 350,
            column: 8
          },
          end: {
            line: 353,
            column: 9
          }
        },
        "142": {
          start: {
            line: 351,
            column: 10
          },
          end: {
            line: 351,
            column: 43
          }
        },
        "143": {
          start: {
            line: 352,
            column: 10
          },
          end: {
            line: 352,
            column: 16
          }
        },
        "144": {
          start: {
            line: 354,
            column: 8
          },
          end: {
            line: 356,
            column: 9
          }
        },
        "145": {
          start: {
            line: 355,
            column: 10
          },
          end: {
            line: 355,
            column: 16
          }
        },
        "146": {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 361,
            column: 9
          }
        },
        "147": {
          start: {
            line: 358,
            column: 10
          },
          end: {
            line: 358,
            column: 31
          }
        },
        "148": {
          start: {
            line: 360,
            column: 10
          },
          end: {
            line: 360,
            column: 21
          }
        },
        "149": {
          start: {
            line: 364,
            column: 6
          },
          end: {
            line: 366,
            column: 7
          }
        },
        "150": {
          start: {
            line: 365,
            column: 8
          },
          end: {
            line: 365,
            column: 35
          }
        },
        "151": {
          start: {
            line: 368,
            column: 6
          },
          end: {
            line: 368,
            column: 48
          }
        },
        "152": {
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 372,
            column: 7
          }
        },
        "153": {
          start: {
            line: 371,
            column: 8
          },
          end: {
            line: 371,
            column: 14
          }
        },
        "154": {
          start: {
            line: 374,
            column: 6
          },
          end: {
            line: 377,
            column: 7
          }
        },
        "155": {
          start: {
            line: 375,
            column: 8
          },
          end: {
            line: 375,
            column: 18
          }
        },
        "156": {
          start: {
            line: 376,
            column: 8
          },
          end: {
            line: 376,
            column: 14
          }
        },
        "157": {
          start: {
            line: 379,
            column: 41
          },
          end: {
            line: 379,
            column: 94
          }
        },
        "158": {
          start: {
            line: 381,
            column: 6
          },
          end: {
            line: 383,
            column: 57
          }
        },
        "159": {
          start: {
            line: 384,
            column: 11
          },
          end: {
            line: 405,
            column: 5
          }
        },
        "160": {
          start: {
            line: 385,
            column: 6
          },
          end: {
            line: 385,
            column: 51
          }
        },
        "161": {
          start: {
            line: 387,
            column: 29
          },
          end: {
            line: 392,
            column: 7
          }
        },
        "162": {
          start: {
            line: 388,
            column: 8
          },
          end: {
            line: 388,
            column: 30
          }
        },
        "163": {
          start: {
            line: 389,
            column: 8
          },
          end: {
            line: 391,
            column: 9
          }
        },
        "164": {
          start: {
            line: 390,
            column: 10
          },
          end: {
            line: 390,
            column: 20
          }
        },
        "165": {
          start: {
            line: 394,
            column: 6
          },
          end: {
            line: 402,
            column: 7
          }
        },
        "166": {
          start: {
            line: 395,
            column: 43
          },
          end: {
            line: 395,
            column: 96
          }
        },
        "167": {
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 399,
            column: 59
          }
        },
        "168": {
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 401,
            column: 24
          }
        },
        "169": {
          start: {
            line: 403,
            column: 11
          },
          end: {
            line: 405,
            column: 5
          }
        },
        "170": {
          start: {
            line: 404,
            column: 6
          },
          end: {
            line: 404,
            column: 16
          }
        },
        "171": {
          start: {
            line: 415,
            column: 6
          },
          end: {
            line: 415,
            column: 72
          }
        },
        "172": {
          start: {
            line: 417,
            column: 4
          },
          end: {
            line: 419,
            column: 5
          }
        },
        "173": {
          start: {
            line: 418,
            column: 6
          },
          end: {
            line: 418,
            column: 67
          }
        },
        "174": {
          start: {
            line: 421,
            column: 4
          },
          end: {
            line: 423,
            column: 5
          }
        },
        "175": {
          start: {
            line: 422,
            column: 6
          },
          end: {
            line: 422,
            column: 68
          }
        },
        "176": {
          start: {
            line: 427,
            column: 4
          },
          end: {
            line: 427,
            column: 40
          }
        },
        "177": {
          start: {
            line: 428,
            column: 4
          },
          end: {
            line: 428,
            column: 41
          }
        },
        "178": {
          start: {
            line: 432,
            column: 17
          },
          end: {
            line: 432,
            column: 54
          }
        },
        "179": {
          start: {
            line: 433,
            column: 4
          },
          end: {
            line: 433,
            column: 72
          }
        },
        "180": {
          start: {
            line: 434,
            column: 4
          },
          end: {
            line: 434,
            column: 52
          }
        },
        "181": {
          start: {
            line: 438,
            column: 4
          },
          end: {
            line: 468,
            column: 5
          }
        },
        "182": {
          start: {
            line: 441,
            column: 27
          },
          end: {
            line: 441,
            column: 91
          }
        },
        "183": {
          start: {
            line: 442,
            column: 28
          },
          end: {
            line: 442,
            column: 93
          }
        },
        "184": {
          start: {
            line: 445,
            column: 6
          },
          end: {
            line: 451,
            column: 8
          }
        },
        "185": {
          start: {
            line: 446,
            column: 30
          },
          end: {
            line: 446,
            column: 56
          }
        },
        "186": {
          start: {
            line: 447,
            column: 34
          },
          end: {
            line: 447,
            column: 65
          }
        },
        "187": {
          start: {
            line: 448,
            column: 8
          },
          end: {
            line: 450,
            column: 92
          }
        },
        "188": {
          start: {
            line: 454,
            column: 6
          },
          end: {
            line: 460,
            column: 8
          }
        },
        "189": {
          start: {
            line: 455,
            column: 29
          },
          end: {
            line: 455,
            column: 54
          }
        },
        "190": {
          start: {
            line: 456,
            column: 33
          },
          end: {
            line: 456,
            column: 63
          }
        },
        "191": {
          start: {
            line: 457,
            column: 8
          },
          end: {
            line: 459,
            column: 90
          }
        },
        "192": {
          start: {
            line: 463,
            column: 28
          },
          end: {
            line: 463,
            column: 60
          }
        },
        "193": {
          start: {
            line: 464,
            column: 32
          },
          end: {
            line: 464,
            column: 69
          }
        },
        "194": {
          start: {
            line: 465,
            column: 6
          },
          end: {
            line: 467,
            column: 90
          }
        },
        "195": {
          start: {
            line: 473,
            column: 25
          },
          end: {
            line: 473,
            column: 89
          }
        },
        "196": {
          start: {
            line: 474,
            column: 4
          },
          end: {
            line: 478,
            column: 6
          }
        },
        "197": {
          start: {
            line: 475,
            column: 22
          },
          end: {
            line: 475,
            column: 54
          }
        },
        "198": {
          start: {
            line: 476,
            column: 6
          },
          end: {
            line: 476,
            column: 44
          }
        },
        "199": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 477,
            column: 57
          }
        },
        "200": {
          start: {
            line: 481,
            column: 21
          },
          end: {
            line: 481,
            column: 91
          }
        },
        "201": {
          start: {
            line: 482,
            column: 4
          },
          end: {
            line: 487,
            column: 6
          }
        },
        "202": {
          start: {
            line: 483,
            column: 21
          },
          end: {
            line: 483,
            column: 52
          }
        },
        "203": {
          start: {
            line: 484,
            column: 6
          },
          end: {
            line: 486,
            column: 7
          }
        },
        "204": {
          start: {
            line: 485,
            column: 8
          },
          end: {
            line: 485,
            column: 73
          }
        },
        "205": {
          start: {
            line: 490,
            column: 20
          },
          end: {
            line: 490,
            column: 58
          }
        },
        "206": {
          start: {
            line: 491,
            column: 4
          },
          end: {
            line: 491,
            column: 48
          }
        },
        "207": {
          start: {
            line: 492,
            column: 4
          },
          end: {
            line: 492,
            column: 61
          }
        },
        "208": {
          start: {
            line: 496,
            column: 22
          },
          end: {
            line: 496,
            column: 51
          }
        },
        "209": {
          start: {
            line: 497,
            column: 4
          },
          end: {
            line: 497,
            column: 54
          }
        },
        "210": {
          start: {
            line: 498,
            column: 4
          },
          end: {
            line: 498,
            column: 40
          }
        },
        "211": {
          start: {
            line: 499,
            column: 27
          },
          end: {
            line: 499,
            column: 90
          }
        },
        "212": {
          start: {
            line: 500,
            column: 4
          },
          end: {
            line: 500,
            column: 40
          }
        },
        "213": {
          start: {
            line: 501,
            column: 4
          },
          end: {
            line: 501,
            column: 25
          }
        },
        "214": {
          start: {
            line: 507,
            column: 4
          },
          end: {
            line: 528,
            column: 6
          }
        },
        "215": {
          start: {
            line: 508,
            column: 17
          },
          end: {
            line: 508,
            column: 39
          }
        },
        "216": {
          start: {
            line: 509,
            column: 22
          },
          end: {
            line: 513,
            column: 7
          }
        },
        "217": {
          start: {
            line: 515,
            column: 6
          },
          end: {
            line: 518,
            column: 7
          }
        },
        "218": {
          start: {
            line: 516,
            column: 8
          },
          end: {
            line: 516,
            column: 39
          }
        },
        "219": {
          start: {
            line: 517,
            column: 8
          },
          end: {
            line: 517,
            column: 36
          }
        },
        "220": {
          start: {
            line: 520,
            column: 6
          },
          end: {
            line: 527,
            column: 7
          }
        },
        "221": {
          start: {
            line: 521,
            column: 8
          },
          end: {
            line: 523,
            column: 9
          }
        },
        "222": {
          start: {
            line: 522,
            column: 10
          },
          end: {
            line: 522,
            column: 60
          }
        },
        "223": {
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 524,
            column: 35
          }
        },
        "224": {
          start: {
            line: 525,
            column: 13
          },
          end: {
            line: 527,
            column: 7
          }
        },
        "225": {
          start: {
            line: 526,
            column: 8
          },
          end: {
            line: 526,
            column: 32
          }
        },
        "226": {
          start: {
            line: 538,
            column: 0
          },
          end: {
            line: 570,
            column: 2
          }
        },
        "227": {
          start: {
            line: 540,
            column: 19
          },
          end: {
            line: 540,
            column: 52
          }
        },
        "228": {
          start: {
            line: 542,
            column: 2
          },
          end: {
            line: 544,
            column: 3
          }
        },
        "229": {
          start: {
            line: 543,
            column: 4
          },
          end: {
            line: 543,
            column: 45
          }
        },
        "230": {
          start: {
            line: 546,
            column: 17
          },
          end: {
            line: 550,
            column: 5
          }
        },
        "231": {
          start: {
            line: 552,
            column: 2
          },
          end: {
            line: 554,
            column: 3
          }
        },
        "232": {
          start: {
            line: 553,
            column: 4
          },
          end: {
            line: 553,
            column: 26
          }
        },
        "233": {
          start: {
            line: 556,
            column: 18
          },
          end: {
            line: 567,
            column: 4
          }
        },
        "234": {
          start: {
            line: 557,
            column: 4
          },
          end: {
            line: 560,
            column: 5
          }
        },
        "235": {
          start: {
            line: 559,
            column: 6
          },
          end: {
            line: 559,
            column: 12
          }
        },
        "236": {
          start: {
            line: 562,
            column: 4
          },
          end: {
            line: 566,
            column: 6
          }
        },
        "237": {
          start: {
            line: 563,
            column: 6
          },
          end: {
            line: 565,
            column: 7
          }
        },
        "238": {
          start: {
            line: 564,
            column: 8
          },
          end: {
            line: 564,
            column: 20
          }
        },
        "239": {
          start: {
            line: 569,
            column: 2
          },
          end: {
            line: 569,
            column: 54
          }
        },
        "240": {
          start: {
            line: 578,
            column: 0
          },
          end: {
            line: 578,
            column: 35
          }
        },
        "241": {
          start: {
            line: 579,
            column: 0
          },
          end: {
            line: 579,
            column: 30
          }
        },
        "242": {
          start: {
            line: 580,
            column: 0
          },
          end: {
            line: 583,
            column: 1
          }
        },
        "243": {
          start: {
            line: 581,
            column: 2
          },
          end: {
            line: 581,
            column: 33
          }
        },
        "244": {
          start: {
            line: 582,
            column: 2
          },
          end: {
            line: 582,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 76,
              column: 2
            },
            end: {
              line: 76,
              column: 3
            }
          },
          loc: {
            start: {
              line: 76,
              column: 31
            },
            end: {
              line: 86,
              column: 3
            }
          },
          line: 76
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 90,
              column: 2
            },
            end: {
              line: 90,
              column: 3
            }
          },
          loc: {
            start: {
              line: 90,
              column: 23
            },
            end: {
              line: 92,
              column: 3
            }
          },
          line: 90
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 94,
              column: 2
            },
            end: {
              line: 94,
              column: 3
            }
          },
          loc: {
            start: {
              line: 94,
              column: 23
            },
            end: {
              line: 96,
              column: 3
            }
          },
          line: 94
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 24
            },
            end: {
              line: 102,
              column: 3
            }
          },
          line: 100
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 22
            },
            end: {
              line: 150,
              column: 3
            }
          },
          line: 104
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 138,
              column: 6
            },
            end: {
              line: 138,
              column: 7
            }
          },
          loc: {
            start: {
              line: 138,
              column: 17
            },
            end: {
              line: 138,
              column: 33
            }
          },
          line: 138
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 141,
              column: 48
            },
            end: {
              line: 141,
              column: 49
            }
          },
          loc: {
            start: {
              line: 141,
              column: 54
            },
            end: {
              line: 147,
              column: 5
            }
          },
          line: 141
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 142,
              column: 50
            },
            end: {
              line: 142,
              column: 51
            }
          },
          loc: {
            start: {
              line: 142,
              column: 61
            },
            end: {
              line: 146,
              column: 7
            }
          },
          line: 142
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 149,
              column: 23
            },
            end: {
              line: 149,
              column: 24
            }
          },
          loc: {
            start: {
              line: 149,
              column: 29
            },
            end: {
              line: 149,
              column: 61
            }
          },
          line: 149
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 152,
              column: 3
            }
          },
          loc: {
            start: {
              line: 152,
              column: 14
            },
            end: {
              line: 196,
              column: 3
            }
          },
          line: 152
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 191,
              column: 34
            },
            end: {
              line: 191,
              column: 35
            }
          },
          loc: {
            start: {
              line: 191,
              column: 45
            },
            end: {
              line: 191,
              column: 67
            }
          },
          line: 191
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 198,
              column: 2
            },
            end: {
              line: 198,
              column: 3
            }
          },
          loc: {
            start: {
              line: 198,
              column: 12
            },
            end: {
              line: 220,
              column: 3
            }
          },
          line: 198
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 200,
              column: 15
            },
            end: {
              line: 200,
              column: 16
            }
          },
          loc: {
            start: {
              line: 200,
              column: 32
            },
            end: {
              line: 200,
              column: 61
            }
          },
          line: 200
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 222,
              column: 2
            },
            end: {
              line: 222,
              column: 3
            }
          },
          loc: {
            start: {
              line: 222,
              column: 17
            },
            end: {
              line: 224,
              column: 3
            }
          },
          line: 222
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 228,
              column: 2
            },
            end: {
              line: 228,
              column: 3
            }
          },
          loc: {
            start: {
              line: 228,
              column: 21
            },
            end: {
              line: 235,
              column: 3
            }
          },
          line: 228
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 237,
              column: 2
            },
            end: {
              line: 237,
              column: 3
            }
          },
          loc: {
            start: {
              line: 237,
              column: 30
            },
            end: {
              line: 281,
              column: 3
            }
          },
          line: 237
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 264,
              column: 31
            },
            end: {
              line: 264,
              column: 32
            }
          },
          loc: {
            start: {
              line: 264,
              column: 37
            },
            end: {
              line: 270,
              column: 5
            }
          },
          line: 264
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 283,
              column: 2
            },
            end: {
              line: 283,
              column: 3
            }
          },
          loc: {
            start: {
              line: 283,
              column: 18
            },
            end: {
              line: 293,
              column: 3
            }
          },
          line: 283
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 286,
              column: 25
            },
            end: {
              line: 286,
              column: 26
            }
          },
          loc: {
            start: {
              line: 286,
              column: 36
            },
            end: {
              line: 292,
              column: 7
            }
          },
          line: 286
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 295,
              column: 2
            },
            end: {
              line: 295,
              column: 3
            }
          },
          loc: {
            start: {
              line: 295,
              column: 20
            },
            end: {
              line: 306,
              column: 3
            }
          },
          line: 295
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 297,
              column: 49
            },
            end: {
              line: 297,
              column: 50
            }
          },
          loc: {
            start: {
              line: 297,
              column: 60
            },
            end: {
              line: 302,
              column: 7
            }
          },
          line: 297
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 308,
              column: 2
            },
            end: {
              line: 308,
              column: 3
            }
          },
          loc: {
            start: {
              line: 308,
              column: 20
            },
            end: {
              line: 314,
              column: 3
            }
          },
          line: 308
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 310,
              column: 33
            },
            end: {
              line: 310,
              column: 34
            }
          },
          loc: {
            start: {
              line: 310,
              column: 44
            },
            end: {
              line: 310,
              column: 68
            }
          },
          line: 310
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 316,
              column: 2
            },
            end: {
              line: 316,
              column: 3
            }
          },
          loc: {
            start: {
              line: 316,
              column: 15
            },
            end: {
              line: 326,
              column: 3
            }
          },
          line: 316
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 320,
              column: 23
            },
            end: {
              line: 320,
              column: 24
            }
          },
          loc: {
            start: {
              line: 320,
              column: 29
            },
            end: {
              line: 325,
              column: 5
            }
          },
          line: 320
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 328,
              column: 2
            },
            end: {
              line: 328,
              column: 3
            }
          },
          loc: {
            start: {
              line: 328,
              column: 20
            },
            end: {
              line: 333,
              column: 3
            }
          },
          line: 328
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 335,
              column: 2
            },
            end: {
              line: 335,
              column: 3
            }
          },
          loc: {
            start: {
              line: 335,
              column: 26
            },
            end: {
              line: 406,
              column: 3
            }
          },
          line: 335
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 349,
              column: 47
            },
            end: {
              line: 349,
              column: 48
            }
          },
          loc: {
            start: {
              line: 349,
              column: 58
            },
            end: {
              line: 362,
              column: 7
            }
          },
          line: 349
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 387,
              column: 29
            },
            end: {
              line: 387,
              column: 30
            }
          },
          loc: {
            start: {
              line: 387,
              column: 35
            },
            end: {
              line: 392,
              column: 7
            }
          },
          line: 387
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 413,
              column: 2
            },
            end: {
              line: 413,
              column: 3
            }
          },
          loc: {
            start: {
              line: 413,
              column: 18
            },
            end: {
              line: 424,
              column: 3
            }
          },
          line: 413
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 426,
              column: 2
            },
            end: {
              line: 426,
              column: 3
            }
          },
          loc: {
            start: {
              line: 426,
              column: 22
            },
            end: {
              line: 429,
              column: 3
            }
          },
          line: 426
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 431,
              column: 2
            },
            end: {
              line: 431,
              column: 3
            }
          },
          loc: {
            start: {
              line: 431,
              column: 20
            },
            end: {
              line: 435,
              column: 3
            }
          },
          line: 431
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 437,
              column: 2
            },
            end: {
              line: 437,
              column: 3
            }
          },
          loc: {
            start: {
              line: 437,
              column: 18
            },
            end: {
              line: 469,
              column: 3
            }
          },
          line: 437
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 445,
              column: 27
            },
            end: {
              line: 445,
              column: 28
            }
          },
          loc: {
            start: {
              line: 445,
              column: 47
            },
            end: {
              line: 451,
              column: 7
            }
          },
          line: 445
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 454,
              column: 28
            },
            end: {
              line: 454,
              column: 29
            }
          },
          loc: {
            start: {
              line: 454,
              column: 48
            },
            end: {
              line: 460,
              column: 7
            }
          },
          line: 454
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 471,
              column: 2
            },
            end: {
              line: 471,
              column: 3
            }
          },
          loc: {
            start: {
              line: 471,
              column: 20
            },
            end: {
              line: 493,
              column: 3
            }
          },
          line: 471
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 474,
              column: 25
            },
            end: {
              line: 474,
              column: 26
            }
          },
          loc: {
            start: {
              line: 474,
              column: 45
            },
            end: {
              line: 478,
              column: 5
            }
          },
          line: 474
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 482,
              column: 21
            },
            end: {
              line: 482,
              column: 22
            }
          },
          loc: {
            start: {
              line: 482,
              column: 41
            },
            end: {
              line: 487,
              column: 5
            }
          },
          line: 482
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 495,
              column: 2
            },
            end: {
              line: 495,
              column: 3
            }
          },
          loc: {
            start: {
              line: 495,
              column: 23
            },
            end: {
              line: 502,
              column: 3
            }
          },
          line: 495
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 506,
              column: 2
            },
            end: {
              line: 506,
              column: 3
            }
          },
          loc: {
            start: {
              line: 506,
              column: 49
            },
            end: {
              line: 529,
              column: 3
            }
          },
          line: 506
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 507,
              column: 21
            },
            end: {
              line: 507,
              column: 22
            }
          },
          loc: {
            start: {
              line: 507,
              column: 33
            },
            end: {
              line: 528,
              column: 5
            }
          },
          line: 507
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 538,
              column: 59
            },
            end: {
              line: 538,
              column: 60
            }
          },
          loc: {
            start: {
              line: 538,
              column: 76
            },
            end: {
              line: 570,
              column: 1
            }
          },
          line: 538
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 556,
              column: 44
            },
            end: {
              line: 556,
              column: 45
            }
          },
          loc: {
            start: {
              line: 556,
              column: 59
            },
            end: {
              line: 567,
              column: 3
            }
          },
          line: 556
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 562,
              column: 30
            },
            end: {
              line: 562,
              column: 31
            }
          },
          loc: {
            start: {
              line: 562,
              column: 36
            },
            end: {
              line: 566,
              column: 5
            }
          },
          line: 562
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 580,
              column: 24
            },
            end: {
              line: 580,
              column: 25
            }
          },
          loc: {
            start: {
              line: 580,
              column: 30
            },
            end: {
              line: 583,
              column: 1
            }
          },
          line: 580
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 101,
              column: 11
            },
            end: {
              line: 101,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 101,
              column: 27
            },
            end: {
              line: 101,
              column: 38
            }
          }, {
            start: {
              line: 101,
              column: 41
            },
            end: {
              line: 101,
              column: 65
            }
          }],
          line: 101
        },
        "1": {
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
        "2": {
          loc: {
            start: {
              line: 105,
              column: 8
            },
            end: {
              line: 105,
              column: 46
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
              column: 21
            }
          }, {
            start: {
              line: 105,
              column: 25
            },
            end: {
              line: 105,
              column: 46
            }
          }],
          line: 105
        },
        "3": {
          loc: {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }, {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }],
          line: 109
        },
        "4": {
          loc: {
            start: {
              line: 119,
              column: 4
            },
            end: {
              line: 121,
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
              line: 121,
              column: 5
            }
          }, {
            start: {
              line: 119,
              column: 4
            },
            end: {
              line: 121,
              column: 5
            }
          }],
          line: 119
        },
        "5": {
          loc: {
            start: {
              line: 119,
              column: 8
            },
            end: {
              line: 119,
              column: 55
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
              column: 21
            }
          }, {
            start: {
              line: 119,
              column: 25
            },
            end: {
              line: 119,
              column: 55
            }
          }],
          line: 119
        },
        "6": {
          loc: {
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 145,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 145,
              column: 9
            }
          }, {
            start: {
              line: 143,
              column: 8
            },
            end: {
              line: 145,
              column: 9
            }
          }],
          line: 143
        },
        "7": {
          loc: {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }, {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 155,
              column: 5
            }
          }],
          line: 153
        },
        "8": {
          loc: {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 159,
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
              line: 159,
              column: 5
            }
          }, {
            start: {
              line: 157,
              column: 4
            },
            end: {
              line: 159,
              column: 5
            }
          }],
          line: 157
        },
        "9": {
          loc: {
            start: {
              line: 157,
              column: 8
            },
            end: {
              line: 157,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 157,
              column: 8
            },
            end: {
              line: 157,
              column: 22
            }
          }, {
            start: {
              line: 157,
              column: 26
            },
            end: {
              line: 157,
              column: 47
            }
          }],
          line: 157
        },
        "10": {
          loc: {
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          }, {
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 167,
              column: 5
            }
          }],
          line: 165
        },
        "11": {
          loc: {
            start: {
              line: 165,
              column: 8
            },
            end: {
              line: 165,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 165,
              column: 8
            },
            end: {
              line: 165,
              column: 22
            }
          }, {
            start: {
              line: 165,
              column: 26
            },
            end: {
              line: 165,
              column: 56
            }
          }],
          line: 165
        },
        "12": {
          loc: {
            start: {
              line: 172,
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
              line: 172,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          }, {
            start: {
              line: 172,
              column: 4
            },
            end: {
              line: 174,
              column: 5
            }
          }],
          line: 172
        },
        "13": {
          loc: {
            start: {
              line: 187,
              column: 4
            },
            end: {
              line: 195,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 187,
              column: 4
            },
            end: {
              line: 195,
              column: 5
            }
          }, {
            start: {
              line: 187,
              column: 4
            },
            end: {
              line: 195,
              column: 5
            }
          }],
          line: 187
        },
        "14": {
          loc: {
            start: {
              line: 240,
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
              line: 240,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }, {
            start: {
              line: 240,
              column: 4
            },
            end: {
              line: 244,
              column: 5
            }
          }],
          line: 240
        },
        "15": {
          loc: {
            start: {
              line: 240,
              column: 8
            },
            end: {
              line: 241,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 240,
              column: 8
            },
            end: {
              line: 240,
              column: 33
            }
          }, {
            start: {
              line: 241,
              column: 8
            },
            end: {
              line: 241,
              column: 63
            }
          }],
          line: 240
        },
        "16": {
          loc: {
            start: {
              line: 250,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 250,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }, {
            start: {
              line: 250,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          }],
          line: 250
        },
        "17": {
          loc: {
            start: {
              line: 256,
              column: 4
            },
            end: {
              line: 258,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 256,
              column: 4
            },
            end: {
              line: 258,
              column: 5
            }
          }, {
            start: {
              line: 256,
              column: 4
            },
            end: {
              line: 258,
              column: 5
            }
          }],
          line: 256
        },
        "18": {
          loc: {
            start: {
              line: 265,
              column: 6
            },
            end: {
              line: 267,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 265,
              column: 6
            },
            end: {
              line: 267,
              column: 7
            }
          }, {
            start: {
              line: 265,
              column: 6
            },
            end: {
              line: 267,
              column: 7
            }
          }],
          line: 265
        },
        "19": {
          loc: {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          }, {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          }],
          line: 272
        },
        "20": {
          loc: {
            start: {
              line: 287,
              column: 8
            },
            end: {
              line: 291,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 287,
              column: 8
            },
            end: {
              line: 291,
              column: 9
            }
          }, {
            start: {
              line: 287,
              column: 8
            },
            end: {
              line: 291,
              column: 9
            }
          }],
          line: 287
        },
        "21": {
          loc: {
            start: {
              line: 287,
              column: 12
            },
            end: {
              line: 289,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 287,
              column: 12
            },
            end: {
              line: 287,
              column: 37
            }
          }, {
            start: {
              line: 288,
              column: 12
            },
            end: {
              line: 288,
              column: 42
            }
          }, {
            start: {
              line: 289,
              column: 12
            },
            end: {
              line: 289,
              column: 59
            }
          }],
          line: 287
        },
        "22": {
          loc: {
            start: {
              line: 296,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 296,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 296,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 296
        },
        "23": {
          loc: {
            start: {
              line: 296,
              column: 8
            },
            end: {
              line: 296,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 296,
              column: 8
            },
            end: {
              line: 296,
              column: 21
            }
          }, {
            start: {
              line: 296,
              column: 25
            },
            end: {
              line: 296,
              column: 46
            }
          }],
          line: 296
        },
        "24": {
          loc: {
            start: {
              line: 298,
              column: 8
            },
            end: {
              line: 301,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 298,
              column: 8
            },
            end: {
              line: 301,
              column: 9
            }
          }, {
            start: {
              line: 298,
              column: 8
            },
            end: {
              line: 301,
              column: 9
            }
          }],
          line: 298
        },
        "25": {
          loc: {
            start: {
              line: 303,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 303,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 303,
              column: 11
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 303
        },
        "26": {
          loc: {
            start: {
              line: 309,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 309,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          }, {
            start: {
              line: 309,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          }],
          line: 309
        },
        "27": {
          loc: {
            start: {
              line: 329,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 329,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          }, {
            start: {
              line: 329,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          }],
          line: 329
        },
        "28": {
          loc: {
            start: {
              line: 336,
              column: 20
            },
            end: {
              line: 337,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 337,
              column: 8
            },
            end: {
              line: 337,
              column: 22
            }
          }, {
            start: {
              line: 337,
              column: 25
            },
            end: {
              line: 337,
              column: 27
            }
          }],
          line: 336
        },
        "29": {
          loc: {
            start: {
              line: 339,
              column: 4
            },
            end: {
              line: 405,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 339,
              column: 4
            },
            end: {
              line: 405,
              column: 5
            }
          }, {
            start: {
              line: 339,
              column: 4
            },
            end: {
              line: 405,
              column: 5
            }
          }],
          line: 339
        },
        "30": {
          loc: {
            start: {
              line: 339,
              column: 8
            },
            end: {
              line: 339,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 339,
              column: 8
            },
            end: {
              line: 339,
              column: 21
            }
          }, {
            start: {
              line: 339,
              column: 25
            },
            end: {
              line: 339,
              column: 46
            }
          }],
          line: 339
        },
        "31": {
          loc: {
            start: {
              line: 343,
              column: 6
            },
            end: {
              line: 345,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 343,
              column: 6
            },
            end: {
              line: 345,
              column: 7
            }
          }, {
            start: {
              line: 343,
              column: 6
            },
            end: {
              line: 345,
              column: 7
            }
          }],
          line: 343
        },
        "32": {
          loc: {
            start: {
              line: 350,
              column: 8
            },
            end: {
              line: 353,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 350,
              column: 8
            },
            end: {
              line: 353,
              column: 9
            }
          }, {
            start: {
              line: 350,
              column: 8
            },
            end: {
              line: 353,
              column: 9
            }
          }],
          line: 350
        },
        "33": {
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
        "34": {
          loc: {
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 361,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 361,
              column: 9
            }
          }, {
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 361,
              column: 9
            }
          }],
          line: 357
        },
        "35": {
          loc: {
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 366,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 366,
              column: 7
            }
          }, {
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 366,
              column: 7
            }
          }],
          line: 364
        },
        "36": {
          loc: {
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 372,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 372,
              column: 7
            }
          }, {
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 372,
              column: 7
            }
          }],
          line: 370
        },
        "37": {
          loc: {
            start: {
              line: 374,
              column: 6
            },
            end: {
              line: 377,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 374,
              column: 6
            },
            end: {
              line: 377,
              column: 7
            }
          }, {
            start: {
              line: 374,
              column: 6
            },
            end: {
              line: 377,
              column: 7
            }
          }],
          line: 374
        },
        "38": {
          loc: {
            start: {
              line: 384,
              column: 11
            },
            end: {
              line: 405,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 384,
              column: 11
            },
            end: {
              line: 405,
              column: 5
            }
          }, {
            start: {
              line: 384,
              column: 11
            },
            end: {
              line: 405,
              column: 5
            }
          }],
          line: 384
        },
        "39": {
          loc: {
            start: {
              line: 384,
              column: 15
            },
            end: {
              line: 384,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 384,
              column: 15
            },
            end: {
              line: 384,
              column: 29
            }
          }, {
            start: {
              line: 384,
              column: 33
            },
            end: {
              line: 384,
              column: 47
            }
          }],
          line: 384
        },
        "40": {
          loc: {
            start: {
              line: 389,
              column: 8
            },
            end: {
              line: 391,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 389,
              column: 8
            },
            end: {
              line: 391,
              column: 9
            }
          }, {
            start: {
              line: 389,
              column: 8
            },
            end: {
              line: 391,
              column: 9
            }
          }],
          line: 389
        },
        "41": {
          loc: {
            start: {
              line: 394,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 394,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          }, {
            start: {
              line: 394,
              column: 6
            },
            end: {
              line: 402,
              column: 7
            }
          }],
          line: 394
        },
        "42": {
          loc: {
            start: {
              line: 403,
              column: 11
            },
            end: {
              line: 405,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 403,
              column: 11
            },
            end: {
              line: 405,
              column: 5
            }
          }, {
            start: {
              line: 403,
              column: 11
            },
            end: {
              line: 405,
              column: 5
            }
          }],
          line: 403
        },
        "43": {
          loc: {
            start: {
              line: 417,
              column: 4
            },
            end: {
              line: 419,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 417,
              column: 4
            },
            end: {
              line: 419,
              column: 5
            }
          }, {
            start: {
              line: 417,
              column: 4
            },
            end: {
              line: 419,
              column: 5
            }
          }],
          line: 417
        },
        "44": {
          loc: {
            start: {
              line: 417,
              column: 8
            },
            end: {
              line: 417,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 417,
              column: 8
            },
            end: {
              line: 417,
              column: 32
            }
          }, {
            start: {
              line: 417,
              column: 36
            },
            end: {
              line: 417,
              column: 54
            }
          }],
          line: 417
        },
        "45": {
          loc: {
            start: {
              line: 421,
              column: 4
            },
            end: {
              line: 423,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 421,
              column: 4
            },
            end: {
              line: 423,
              column: 5
            }
          }, {
            start: {
              line: 421,
              column: 4
            },
            end: {
              line: 423,
              column: 5
            }
          }],
          line: 421
        },
        "46": {
          loc: {
            start: {
              line: 421,
              column: 8
            },
            end: {
              line: 421,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 421,
              column: 8
            },
            end: {
              line: 421,
              column: 31
            }
          }, {
            start: {
              line: 421,
              column: 35
            },
            end: {
              line: 421,
              column: 54
            }
          }],
          line: 421
        },
        "47": {
          loc: {
            start: {
              line: 438,
              column: 4
            },
            end: {
              line: 468,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 438,
              column: 4
            },
            end: {
              line: 468,
              column: 5
            }
          }, {
            start: {
              line: 438,
              column: 4
            },
            end: {
              line: 468,
              column: 5
            }
          }],
          line: 438
        },
        "48": {
          loc: {
            start: {
              line: 477,
              column: 35
            },
            end: {
              line: 477,
              column: 57
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 477,
              column: 45
            },
            end: {
              line: 477,
              column: 52
            }
          }, {
            start: {
              line: 477,
              column: 55
            },
            end: {
              line: 477,
              column: 57
            }
          }],
          line: 477
        },
        "49": {
          loc: {
            start: {
              line: 484,
              column: 6
            },
            end: {
              line: 486,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 484,
              column: 6
            },
            end: {
              line: 486,
              column: 7
            }
          }, {
            start: {
              line: 484,
              column: 6
            },
            end: {
              line: 486,
              column: 7
            }
          }],
          line: 484
        },
        "50": {
          loc: {
            start: {
              line: 492,
              column: 39
            },
            end: {
              line: 492,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 492,
              column: 49
            },
            end: {
              line: 492,
              column: 56
            }
          }, {
            start: {
              line: 492,
              column: 59
            },
            end: {
              line: 492,
              column: 61
            }
          }],
          line: 492
        },
        "51": {
          loc: {
            start: {
              line: 512,
              column: 11
            },
            end: {
              line: 512,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 512,
              column: 50
            },
            end: {
              line: 512,
              column: 56
            }
          }, {
            start: {
              line: 512,
              column: 59
            },
            end: {
              line: 512,
              column: 61
            }
          }],
          line: 512
        },
        "52": {
          loc: {
            start: {
              line: 512,
              column: 11
            },
            end: {
              line: 512,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 512,
              column: 11
            },
            end: {
              line: 512,
              column: 37
            }
          }, {
            start: {
              line: 512,
              column: 41
            },
            end: {
              line: 512,
              column: 47
            }
          }],
          line: 512
        },
        "53": {
          loc: {
            start: {
              line: 515,
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
              line: 515,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          }, {
            start: {
              line: 515,
              column: 6
            },
            end: {
              line: 518,
              column: 7
            }
          }],
          line: 515
        },
        "54": {
          loc: {
            start: {
              line: 520,
              column: 6
            },
            end: {
              line: 527,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 520,
              column: 6
            },
            end: {
              line: 527,
              column: 7
            }
          }, {
            start: {
              line: 520,
              column: 6
            },
            end: {
              line: 527,
              column: 7
            }
          }],
          line: 520
        },
        "55": {
          loc: {
            start: {
              line: 521,
              column: 8
            },
            end: {
              line: 523,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 521,
              column: 8
            },
            end: {
              line: 523,
              column: 9
            }
          }, {
            start: {
              line: 521,
              column: 8
            },
            end: {
              line: 523,
              column: 9
            }
          }],
          line: 521
        },
        "56": {
          loc: {
            start: {
              line: 525,
              column: 13
            },
            end: {
              line: 527,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 525,
              column: 13
            },
            end: {
              line: 527,
              column: 7
            }
          }, {
            start: {
              line: 525,
              column: 13
            },
            end: {
              line: 527,
              column: 7
            }
          }],
          line: 525
        },
        "57": {
          loc: {
            start: {
              line: 542,
              column: 2
            },
            end: {
              line: 544,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 542,
              column: 2
            },
            end: {
              line: 544,
              column: 3
            }
          }, {
            start: {
              line: 542,
              column: 2
            },
            end: {
              line: 544,
              column: 3
            }
          }],
          line: 542
        },
        "58": {
          loc: {
            start: {
              line: 546,
              column: 17
            },
            end: {
              line: 550,
              column: 5
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 547,
              column: 6
            },
            end: {
              line: 547,
              column: 14
            }
          }, {
            start: {
              line: 547,
              column: 17
            },
            end: {
              line: 550,
              column: 5
            }
          }],
          line: 546
        },
        "59": {
          loc: {
            start: {
              line: 552,
              column: 2
            },
            end: {
              line: 554,
              column: 3
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 552,
              column: 2
            },
            end: {
              line: 554,
              column: 3
            }
          }, {
            start: {
              line: 552,
              column: 2
            },
            end: {
              line: 554,
              column: 3
            }
          }],
          line: 552
        },
        "60": {
          loc: {
            start: {
              line: 552,
              column: 6
            },
            end: {
              line: 552,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 552,
              column: 6
            },
            end: {
              line: 552,
              column: 26
            }
          }, {
            start: {
              line: 552,
              column: 30
            },
            end: {
              line: 552,
              column: 53
            }
          }],
          line: 552
        },
        "61": {
          loc: {
            start: {
              line: 557,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 557,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          }, {
            start: {
              line: 557,
              column: 4
            },
            end: {
              line: 560,
              column: 5
            }
          }],
          line: 557
        },
        "62": {
          loc: {
            start: {
              line: 563,
              column: 6
            },
            end: {
              line: 565,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 563,
              column: 6
            },
            end: {
              line: 565,
              column: 7
            }
          }, {
            start: {
              line: 563,
              column: 6
            },
            end: {
              line: 565,
              column: 7
            }
          }],
          line: 563
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
        "244": 0
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
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0
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
        "21": [0, 0, 0],
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
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
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
        "62": [0, 0]
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
   * Bootstrap (v4.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_zxs9qrnzr.s[0]++, 'modal');
  var VERSION = (cov_zxs9qrnzr.s[1]++, '4.1.3');
  var DATA_KEY = (cov_zxs9qrnzr.s[2]++, 'bs.modal');
  var EVENT_KEY = (cov_zxs9qrnzr.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_zxs9qrnzr.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_zxs9qrnzr.s[5]++, $.fn[NAME]);
  var ESCAPE_KEYCODE = (cov_zxs9qrnzr.s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var Default = (cov_zxs9qrnzr.s[7]++, {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  });
  var DefaultType = (cov_zxs9qrnzr.s[8]++, {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  });
  var Event = (cov_zxs9qrnzr.s[9]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_zxs9qrnzr.s[10]++, {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_zxs9qrnzr.s[11]++, {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      cov_zxs9qrnzr.f[0]++;
      cov_zxs9qrnzr.s[12]++;
      this._config = this._getConfig(config);
      cov_zxs9qrnzr.s[13]++;
      this._element = element;
      cov_zxs9qrnzr.s[14]++;
      this._dialog = element.querySelector(Selector.DIALOG);
      cov_zxs9qrnzr.s[15]++;
      this._backdrop = null;
      cov_zxs9qrnzr.s[16]++;
      this._isShown = false;
      cov_zxs9qrnzr.s[17]++;
      this._isBodyOverflowing = false;
      cov_zxs9qrnzr.s[18]++;
      this._ignoreBackdropClick = false;
      cov_zxs9qrnzr.s[19]++;
      this._isTransitioning = false;
      cov_zxs9qrnzr.s[20]++;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      cov_zxs9qrnzr.f[3]++;
      cov_zxs9qrnzr.s[23]++;
      return this._isShown ? (cov_zxs9qrnzr.b[0][0]++, this.hide()) : (cov_zxs9qrnzr.b[0][1]++, this.show(relatedTarget));
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      cov_zxs9qrnzr.f[4]++;
      cov_zxs9qrnzr.s[24]++;

      if ((cov_zxs9qrnzr.b[2][0]++, this._isShown) || (cov_zxs9qrnzr.b[2][1]++, this._isTransitioning)) {
        cov_zxs9qrnzr.b[1][0]++;
        cov_zxs9qrnzr.s[25]++;
        return;
      } else {
        cov_zxs9qrnzr.b[1][1]++;
      }

      cov_zxs9qrnzr.s[26]++;

      if ($(this._element).hasClass(ClassName.FADE)) {
        cov_zxs9qrnzr.b[3][0]++;
        cov_zxs9qrnzr.s[27]++;
        this._isTransitioning = true;
      } else {
        cov_zxs9qrnzr.b[3][1]++;
      }

      var showEvent = (cov_zxs9qrnzr.s[28]++, $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      }));
      cov_zxs9qrnzr.s[29]++;
      $(this._element).trigger(showEvent);
      cov_zxs9qrnzr.s[30]++;

      if ((cov_zxs9qrnzr.b[5][0]++, this._isShown) || (cov_zxs9qrnzr.b[5][1]++, showEvent.isDefaultPrevented())) {
        cov_zxs9qrnzr.b[4][0]++;
        cov_zxs9qrnzr.s[31]++;
        return;
      } else {
        cov_zxs9qrnzr.b[4][1]++;
      }

      cov_zxs9qrnzr.s[32]++;
      this._isShown = true;
      cov_zxs9qrnzr.s[33]++;

      this._checkScrollbar();

      cov_zxs9qrnzr.s[34]++;

      this._setScrollbar();

      cov_zxs9qrnzr.s[35]++;

      this._adjustDialog();

      cov_zxs9qrnzr.s[36]++;
      $(document.body).addClass(ClassName.OPEN);
      cov_zxs9qrnzr.s[37]++;

      this._setEscapeEvent();

      cov_zxs9qrnzr.s[38]++;

      this._setResizeEvent();

      cov_zxs9qrnzr.s[39]++;
      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        cov_zxs9qrnzr.f[5]++;
        cov_zxs9qrnzr.s[40]++;
        return _this.hide(event);
      });
      cov_zxs9qrnzr.s[41]++;
      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        cov_zxs9qrnzr.f[6]++;
        cov_zxs9qrnzr.s[42]++;
        $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          cov_zxs9qrnzr.f[7]++;
          cov_zxs9qrnzr.s[43]++;

          if ($(event.target).is(_this._element)) {
            cov_zxs9qrnzr.b[6][0]++;
            cov_zxs9qrnzr.s[44]++;
            _this._ignoreBackdropClick = true;
          } else {
            cov_zxs9qrnzr.b[6][1]++;
          }
        });
      });
      cov_zxs9qrnzr.s[45]++;

      this._showBackdrop(function () {
        cov_zxs9qrnzr.f[8]++;
        cov_zxs9qrnzr.s[46]++;
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      cov_zxs9qrnzr.f[9]++;
      cov_zxs9qrnzr.s[47]++;

      if (event) {
        cov_zxs9qrnzr.b[7][0]++;
        cov_zxs9qrnzr.s[48]++;
        event.preventDefault();
      } else {
        cov_zxs9qrnzr.b[7][1]++;
      }

      cov_zxs9qrnzr.s[49]++;

      if ((cov_zxs9qrnzr.b[9][0]++, !this._isShown) || (cov_zxs9qrnzr.b[9][1]++, this._isTransitioning)) {
        cov_zxs9qrnzr.b[8][0]++;
        cov_zxs9qrnzr.s[50]++;
        return;
      } else {
        cov_zxs9qrnzr.b[8][1]++;
      }

      var hideEvent = (cov_zxs9qrnzr.s[51]++, $.Event(Event.HIDE));
      cov_zxs9qrnzr.s[52]++;
      $(this._element).trigger(hideEvent);
      cov_zxs9qrnzr.s[53]++;

      if ((cov_zxs9qrnzr.b[11][0]++, !this._isShown) || (cov_zxs9qrnzr.b[11][1]++, hideEvent.isDefaultPrevented())) {
        cov_zxs9qrnzr.b[10][0]++;
        cov_zxs9qrnzr.s[54]++;
        return;
      } else {
        cov_zxs9qrnzr.b[10][1]++;
      }

      cov_zxs9qrnzr.s[55]++;
      this._isShown = false;
      var transition = (cov_zxs9qrnzr.s[56]++, $(this._element).hasClass(ClassName.FADE));
      cov_zxs9qrnzr.s[57]++;

      if (transition) {
        cov_zxs9qrnzr.b[12][0]++;
        cov_zxs9qrnzr.s[58]++;
        this._isTransitioning = true;
      } else {
        cov_zxs9qrnzr.b[12][1]++;
      }

      cov_zxs9qrnzr.s[59]++;

      this._setEscapeEvent();

      cov_zxs9qrnzr.s[60]++;

      this._setResizeEvent();

      cov_zxs9qrnzr.s[61]++;
      $(document).off(Event.FOCUSIN);
      cov_zxs9qrnzr.s[62]++;
      $(this._element).removeClass(ClassName.SHOW);
      cov_zxs9qrnzr.s[63]++;
      $(this._element).off(Event.CLICK_DISMISS);
      cov_zxs9qrnzr.s[64]++;
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
      cov_zxs9qrnzr.s[65]++;

      if (transition) {
        cov_zxs9qrnzr.b[13][0]++;
        var transitionDuration = (cov_zxs9qrnzr.s[66]++, Util.getTransitionDurationFromElement(this._element));
        cov_zxs9qrnzr.s[67]++;
        $(this._element).one(Util.TRANSITION_END, function (event) {
          cov_zxs9qrnzr.f[10]++;
          cov_zxs9qrnzr.s[68]++;
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        cov_zxs9qrnzr.b[13][1]++;
        cov_zxs9qrnzr.s[69]++;

        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      cov_zxs9qrnzr.f[11]++;
      cov_zxs9qrnzr.s[70]++;
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        cov_zxs9qrnzr.f[12]++;
        cov_zxs9qrnzr.s[71]++;
        return $(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      cov_zxs9qrnzr.s[72]++;
      $(document).off(Event.FOCUSIN);
      cov_zxs9qrnzr.s[73]++;
      $.removeData(this._element, DATA_KEY);
      cov_zxs9qrnzr.s[74]++;
      this._config = null;
      cov_zxs9qrnzr.s[75]++;
      this._element = null;
      cov_zxs9qrnzr.s[76]++;
      this._dialog = null;
      cov_zxs9qrnzr.s[77]++;
      this._backdrop = null;
      cov_zxs9qrnzr.s[78]++;
      this._isShown = null;
      cov_zxs9qrnzr.s[79]++;
      this._isBodyOverflowing = null;
      cov_zxs9qrnzr.s[80]++;
      this._ignoreBackdropClick = null;
      cov_zxs9qrnzr.s[81]++;
      this._isTransitioning = null;
      cov_zxs9qrnzr.s[82]++;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      cov_zxs9qrnzr.f[13]++;
      cov_zxs9qrnzr.s[83]++;

      this._adjustDialog();
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      cov_zxs9qrnzr.f[14]++;
      cov_zxs9qrnzr.s[84]++;
      config = _objectSpread({}, Default, config);
      cov_zxs9qrnzr.s[85]++;
      Util.typeCheckConfig(NAME, config, DefaultType);
      cov_zxs9qrnzr.s[86]++;
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      cov_zxs9qrnzr.f[15]++;
      var transition = (cov_zxs9qrnzr.s[87]++, $(this._element).hasClass(ClassName.FADE));
      cov_zxs9qrnzr.s[88]++;

      if ((cov_zxs9qrnzr.b[15][0]++, !this._element.parentNode) || (cov_zxs9qrnzr.b[15][1]++, this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
        cov_zxs9qrnzr.b[14][0]++;
        cov_zxs9qrnzr.s[89]++;
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      } else {
        cov_zxs9qrnzr.b[14][1]++;
      }

      cov_zxs9qrnzr.s[90]++;
      this._element.style.display = 'block';
      cov_zxs9qrnzr.s[91]++;

      this._element.removeAttribute('aria-hidden');

      cov_zxs9qrnzr.s[92]++;
      this._element.scrollTop = 0;
      cov_zxs9qrnzr.s[93]++;

      if (transition) {
        cov_zxs9qrnzr.b[16][0]++;
        cov_zxs9qrnzr.s[94]++;
        Util.reflow(this._element);
      } else {
        cov_zxs9qrnzr.b[16][1]++;
      }

      cov_zxs9qrnzr.s[95]++;
      $(this._element).addClass(ClassName.SHOW);
      cov_zxs9qrnzr.s[96]++;

      if (this._config.focus) {
        cov_zxs9qrnzr.b[17][0]++;
        cov_zxs9qrnzr.s[97]++;

        this._enforceFocus();
      } else {
        cov_zxs9qrnzr.b[17][1]++;
      }

      var shownEvent = (cov_zxs9qrnzr.s[98]++, $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      }));
      cov_zxs9qrnzr.s[99]++;

      var transitionComplete = function transitionComplete() {
        cov_zxs9qrnzr.f[16]++;
        cov_zxs9qrnzr.s[100]++;

        if (_this3._config.focus) {
          cov_zxs9qrnzr.b[18][0]++;
          cov_zxs9qrnzr.s[101]++;

          _this3._element.focus();
        } else {
          cov_zxs9qrnzr.b[18][1]++;
        }

        cov_zxs9qrnzr.s[102]++;
        _this3._isTransitioning = false;
        cov_zxs9qrnzr.s[103]++;
        $(_this3._element).trigger(shownEvent);
      };

      cov_zxs9qrnzr.s[104]++;

      if (transition) {
        cov_zxs9qrnzr.b[19][0]++;
        var transitionDuration = (cov_zxs9qrnzr.s[105]++, Util.getTransitionDurationFromElement(this._dialog));
        cov_zxs9qrnzr.s[106]++;
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_zxs9qrnzr.b[19][1]++;
        cov_zxs9qrnzr.s[107]++;
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      cov_zxs9qrnzr.f[17]++;
      cov_zxs9qrnzr.s[108]++;
      $(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        cov_zxs9qrnzr.f[18]++;
        cov_zxs9qrnzr.s[109]++;

        if ((cov_zxs9qrnzr.b[21][0]++, document !== event.target) && (cov_zxs9qrnzr.b[21][1]++, _this4._element !== event.target) && (cov_zxs9qrnzr.b[21][2]++, $(_this4._element).has(event.target).length === 0)) {
          cov_zxs9qrnzr.b[20][0]++;
          cov_zxs9qrnzr.s[110]++;

          _this4._element.focus();
        } else {
          cov_zxs9qrnzr.b[20][1]++;
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      cov_zxs9qrnzr.f[19]++;
      cov_zxs9qrnzr.s[111]++;

      if ((cov_zxs9qrnzr.b[23][0]++, this._isShown) && (cov_zxs9qrnzr.b[23][1]++, this._config.keyboard)) {
        cov_zxs9qrnzr.b[22][0]++;
        cov_zxs9qrnzr.s[112]++;
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          cov_zxs9qrnzr.f[20]++;
          cov_zxs9qrnzr.s[113]++;

          if (event.which === ESCAPE_KEYCODE) {
            cov_zxs9qrnzr.b[24][0]++;
            cov_zxs9qrnzr.s[114]++;
            event.preventDefault();
            cov_zxs9qrnzr.s[115]++;

            _this5.hide();
          } else {
            cov_zxs9qrnzr.b[24][1]++;
          }
        });
      } else {
        cov_zxs9qrnzr.b[22][1]++;
        cov_zxs9qrnzr.s[116]++;

        if (!this._isShown) {
          cov_zxs9qrnzr.b[25][0]++;
          cov_zxs9qrnzr.s[117]++;
          $(this._element).off(Event.KEYDOWN_DISMISS);
        } else {
          cov_zxs9qrnzr.b[25][1]++;
        }
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      cov_zxs9qrnzr.f[21]++;
      cov_zxs9qrnzr.s[118]++;

      if (this._isShown) {
        cov_zxs9qrnzr.b[26][0]++;
        cov_zxs9qrnzr.s[119]++;
        $(window).on(Event.RESIZE, function (event) {
          cov_zxs9qrnzr.f[22]++;
          cov_zxs9qrnzr.s[120]++;
          return _this6.handleUpdate(event);
        });
      } else {
        cov_zxs9qrnzr.b[26][1]++;
        cov_zxs9qrnzr.s[121]++;
        $(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      cov_zxs9qrnzr.f[23]++;
      cov_zxs9qrnzr.s[122]++;
      this._element.style.display = 'none';
      cov_zxs9qrnzr.s[123]++;

      this._element.setAttribute('aria-hidden', true);

      cov_zxs9qrnzr.s[124]++;
      this._isTransitioning = false;
      cov_zxs9qrnzr.s[125]++;

      this._showBackdrop(function () {
        cov_zxs9qrnzr.f[24]++;
        cov_zxs9qrnzr.s[126]++;
        $(document.body).removeClass(ClassName.OPEN);
        cov_zxs9qrnzr.s[127]++;

        _this7._resetAdjustments();

        cov_zxs9qrnzr.s[128]++;

        _this7._resetScrollbar();

        cov_zxs9qrnzr.s[129]++;
        $(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      cov_zxs9qrnzr.f[25]++;
      cov_zxs9qrnzr.s[130]++;

      if (this._backdrop) {
        cov_zxs9qrnzr.b[27][0]++;
        cov_zxs9qrnzr.s[131]++;
        $(this._backdrop).remove();
        cov_zxs9qrnzr.s[132]++;
        this._backdrop = null;
      } else {
        cov_zxs9qrnzr.b[27][1]++;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      cov_zxs9qrnzr.f[26]++;
      var animate = (cov_zxs9qrnzr.s[133]++, $(this._element).hasClass(ClassName.FADE) ? (cov_zxs9qrnzr.b[28][0]++, ClassName.FADE) : (cov_zxs9qrnzr.b[28][1]++, ''));
      cov_zxs9qrnzr.s[134]++;

      if ((cov_zxs9qrnzr.b[30][0]++, this._isShown) && (cov_zxs9qrnzr.b[30][1]++, this._config.backdrop)) {
        cov_zxs9qrnzr.b[29][0]++;
        cov_zxs9qrnzr.s[135]++;
        this._backdrop = document.createElement('div');
        cov_zxs9qrnzr.s[136]++;
        this._backdrop.className = ClassName.BACKDROP;
        cov_zxs9qrnzr.s[137]++;

        if (animate) {
          cov_zxs9qrnzr.b[31][0]++;
          cov_zxs9qrnzr.s[138]++;

          this._backdrop.classList.add(animate);
        } else {
          cov_zxs9qrnzr.b[31][1]++;
        }

        cov_zxs9qrnzr.s[139]++;
        $(this._backdrop).appendTo(document.body);
        cov_zxs9qrnzr.s[140]++;
        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          cov_zxs9qrnzr.f[27]++;
          cov_zxs9qrnzr.s[141]++;

          if (_this8._ignoreBackdropClick) {
            cov_zxs9qrnzr.b[32][0]++;
            cov_zxs9qrnzr.s[142]++;
            _this8._ignoreBackdropClick = false;
            cov_zxs9qrnzr.s[143]++;
            return;
          } else {
            cov_zxs9qrnzr.b[32][1]++;
          }

          cov_zxs9qrnzr.s[144]++;

          if (event.target !== event.currentTarget) {
            cov_zxs9qrnzr.b[33][0]++;
            cov_zxs9qrnzr.s[145]++;
            return;
          } else {
            cov_zxs9qrnzr.b[33][1]++;
          }

          cov_zxs9qrnzr.s[146]++;

          if (_this8._config.backdrop === 'static') {
            cov_zxs9qrnzr.b[34][0]++;
            cov_zxs9qrnzr.s[147]++;

            _this8._element.focus();
          } else {
            cov_zxs9qrnzr.b[34][1]++;
            cov_zxs9qrnzr.s[148]++;

            _this8.hide();
          }
        });
        cov_zxs9qrnzr.s[149]++;

        if (animate) {
          cov_zxs9qrnzr.b[35][0]++;
          cov_zxs9qrnzr.s[150]++;
          Util.reflow(this._backdrop);
        } else {
          cov_zxs9qrnzr.b[35][1]++;
        }

        cov_zxs9qrnzr.s[151]++;
        $(this._backdrop).addClass(ClassName.SHOW);
        cov_zxs9qrnzr.s[152]++;

        if (!callback) {
          cov_zxs9qrnzr.b[36][0]++;
          cov_zxs9qrnzr.s[153]++;
          return;
        } else {
          cov_zxs9qrnzr.b[36][1]++;
        }

        cov_zxs9qrnzr.s[154]++;

        if (!animate) {
          cov_zxs9qrnzr.b[37][0]++;
          cov_zxs9qrnzr.s[155]++;
          callback();
          cov_zxs9qrnzr.s[156]++;
          return;
        } else {
          cov_zxs9qrnzr.b[37][1]++;
        }

        var backdropTransitionDuration = (cov_zxs9qrnzr.s[157]++, Util.getTransitionDurationFromElement(this._backdrop));
        cov_zxs9qrnzr.s[158]++;
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else {
        cov_zxs9qrnzr.b[29][1]++;
        cov_zxs9qrnzr.s[159]++;

        if ((cov_zxs9qrnzr.b[39][0]++, !this._isShown) && (cov_zxs9qrnzr.b[39][1]++, this._backdrop)) {
          cov_zxs9qrnzr.b[38][0]++;
          cov_zxs9qrnzr.s[160]++;
          $(this._backdrop).removeClass(ClassName.SHOW);
          cov_zxs9qrnzr.s[161]++;

          var callbackRemove = function callbackRemove() {
            cov_zxs9qrnzr.f[28]++;
            cov_zxs9qrnzr.s[162]++;

            _this8._removeBackdrop();

            cov_zxs9qrnzr.s[163]++;

            if (callback) {
              cov_zxs9qrnzr.b[40][0]++;
              cov_zxs9qrnzr.s[164]++;
              callback();
            } else {
              cov_zxs9qrnzr.b[40][1]++;
            }
          };

          cov_zxs9qrnzr.s[165]++;

          if ($(this._element).hasClass(ClassName.FADE)) {
            cov_zxs9qrnzr.b[41][0]++;

            var _backdropTransitionDuration = (cov_zxs9qrnzr.s[166]++, Util.getTransitionDurationFromElement(this._backdrop));

            cov_zxs9qrnzr.s[167]++;
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            cov_zxs9qrnzr.b[41][1]++;
            cov_zxs9qrnzr.s[168]++;
            callbackRemove();
          }
        } else {
          cov_zxs9qrnzr.b[38][1]++;
          cov_zxs9qrnzr.s[169]++;

          if (callback) {
            cov_zxs9qrnzr.b[42][0]++;
            cov_zxs9qrnzr.s[170]++;
            callback();
          } else {
            cov_zxs9qrnzr.b[42][1]++;
          }
        }
      }
    }; // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------


    _proto._adjustDialog = function _adjustDialog() {
      cov_zxs9qrnzr.f[29]++;
      var isModalOverflowing = (cov_zxs9qrnzr.s[171]++, this._element.scrollHeight > document.documentElement.clientHeight);
      cov_zxs9qrnzr.s[172]++;

      if ((cov_zxs9qrnzr.b[44][0]++, !this._isBodyOverflowing) && (cov_zxs9qrnzr.b[44][1]++, isModalOverflowing)) {
        cov_zxs9qrnzr.b[43][0]++;
        cov_zxs9qrnzr.s[173]++;
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      } else {
        cov_zxs9qrnzr.b[43][1]++;
      }

      cov_zxs9qrnzr.s[174]++;

      if ((cov_zxs9qrnzr.b[46][0]++, this._isBodyOverflowing) && (cov_zxs9qrnzr.b[46][1]++, !isModalOverflowing)) {
        cov_zxs9qrnzr.b[45][0]++;
        cov_zxs9qrnzr.s[175]++;
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      } else {
        cov_zxs9qrnzr.b[45][1]++;
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      cov_zxs9qrnzr.f[30]++;
      cov_zxs9qrnzr.s[176]++;
      this._element.style.paddingLeft = '';
      cov_zxs9qrnzr.s[177]++;
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      cov_zxs9qrnzr.f[31]++;
      var rect = (cov_zxs9qrnzr.s[178]++, document.body.getBoundingClientRect());
      cov_zxs9qrnzr.s[179]++;
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      cov_zxs9qrnzr.s[180]++;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      cov_zxs9qrnzr.f[32]++;
      cov_zxs9qrnzr.s[181]++;

      if (this._isBodyOverflowing) {
        cov_zxs9qrnzr.b[47][0]++;
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = (cov_zxs9qrnzr.s[182]++, [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT)));
        var stickyContent = (cov_zxs9qrnzr.s[183]++, [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT))); // Adjust fixed content padding

        cov_zxs9qrnzr.s[184]++;
        $(fixedContent).each(function (index, element) {
          cov_zxs9qrnzr.f[33]++;
          var actualPadding = (cov_zxs9qrnzr.s[185]++, element.style.paddingRight);
          var calculatedPadding = (cov_zxs9qrnzr.s[186]++, $(element).css('padding-right'));
          cov_zxs9qrnzr.s[187]++;
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        cov_zxs9qrnzr.s[188]++;
        $(stickyContent).each(function (index, element) {
          cov_zxs9qrnzr.f[34]++;
          var actualMargin = (cov_zxs9qrnzr.s[189]++, element.style.marginRight);
          var calculatedMargin = (cov_zxs9qrnzr.s[190]++, $(element).css('margin-right'));
          cov_zxs9qrnzr.s[191]++;
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = (cov_zxs9qrnzr.s[192]++, document.body.style.paddingRight);
        var calculatedPadding = (cov_zxs9qrnzr.s[193]++, $(document.body).css('padding-right'));
        cov_zxs9qrnzr.s[194]++;
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      } else {
        cov_zxs9qrnzr.b[47][1]++;
      }
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      cov_zxs9qrnzr.f[35]++;
      // Restore fixed content padding
      var fixedContent = (cov_zxs9qrnzr.s[195]++, [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT)));
      cov_zxs9qrnzr.s[196]++;
      $(fixedContent).each(function (index, element) {
        cov_zxs9qrnzr.f[36]++;
        var padding = (cov_zxs9qrnzr.s[197]++, $(element).data('padding-right'));
        cov_zxs9qrnzr.s[198]++;
        $(element).removeData('padding-right');
        cov_zxs9qrnzr.s[199]++;
        element.style.paddingRight = padding ? (cov_zxs9qrnzr.b[48][0]++, padding) : (cov_zxs9qrnzr.b[48][1]++, '');
      }); // Restore sticky content

      var elements = (cov_zxs9qrnzr.s[200]++, [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT)));
      cov_zxs9qrnzr.s[201]++;
      $(elements).each(function (index, element) {
        cov_zxs9qrnzr.f[37]++;
        var margin = (cov_zxs9qrnzr.s[202]++, $(element).data('margin-right'));
        cov_zxs9qrnzr.s[203]++;

        if (typeof margin !== 'undefined') {
          cov_zxs9qrnzr.b[49][0]++;
          cov_zxs9qrnzr.s[204]++;
          $(element).css('margin-right', margin).removeData('margin-right');
        } else {
          cov_zxs9qrnzr.b[49][1]++;
        }
      }); // Restore body padding

      var padding = (cov_zxs9qrnzr.s[205]++, $(document.body).data('padding-right'));
      cov_zxs9qrnzr.s[206]++;
      $(document.body).removeData('padding-right');
      cov_zxs9qrnzr.s[207]++;
      document.body.style.paddingRight = padding ? (cov_zxs9qrnzr.b[50][0]++, padding) : (cov_zxs9qrnzr.b[50][1]++, '');
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      cov_zxs9qrnzr.f[38]++;
      // thx d.walsh
      var scrollDiv = (cov_zxs9qrnzr.s[208]++, document.createElement('div'));
      cov_zxs9qrnzr.s[209]++;
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      cov_zxs9qrnzr.s[210]++;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = (cov_zxs9qrnzr.s[211]++, scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
      cov_zxs9qrnzr.s[212]++;
      document.body.removeChild(scrollDiv);
      cov_zxs9qrnzr.s[213]++;
      return scrollbarWidth;
    }; // Static


    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      cov_zxs9qrnzr.f[39]++;
      cov_zxs9qrnzr.s[214]++;
      return this.each(function () {
        cov_zxs9qrnzr.f[40]++;
        var data = (cov_zxs9qrnzr.s[215]++, $(this).data(DATA_KEY));

        var _config = (cov_zxs9qrnzr.s[216]++, _objectSpread({}, Default, $(this).data(), (cov_zxs9qrnzr.b[52][0]++, typeof config === 'object') && (cov_zxs9qrnzr.b[52][1]++, config) ? (cov_zxs9qrnzr.b[51][0]++, config) : (cov_zxs9qrnzr.b[51][1]++, {})));

        cov_zxs9qrnzr.s[217]++;

        if (!data) {
          cov_zxs9qrnzr.b[53][0]++;
          cov_zxs9qrnzr.s[218]++;
          data = new Modal(this, _config);
          cov_zxs9qrnzr.s[219]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_zxs9qrnzr.b[53][1]++;
        }

        cov_zxs9qrnzr.s[220]++;

        if (typeof config === 'string') {
          cov_zxs9qrnzr.b[54][0]++;
          cov_zxs9qrnzr.s[221]++;

          if (typeof data[config] === 'undefined') {
            cov_zxs9qrnzr.b[55][0]++;
            cov_zxs9qrnzr.s[222]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_zxs9qrnzr.b[55][1]++;
          }

          cov_zxs9qrnzr.s[223]++;
          data[config](relatedTarget);
        } else {
          cov_zxs9qrnzr.b[54][1]++;
          cov_zxs9qrnzr.s[224]++;

          if (_config.show) {
            cov_zxs9qrnzr.b[56][0]++;
            cov_zxs9qrnzr.s[225]++;
            data.show(relatedTarget);
          } else {
            cov_zxs9qrnzr.b[56][1]++;
          }
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        cov_zxs9qrnzr.f[1]++;
        cov_zxs9qrnzr.s[21]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_zxs9qrnzr.f[2]++;
        cov_zxs9qrnzr.s[22]++;
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_zxs9qrnzr.s[226]++;
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    cov_zxs9qrnzr.f[41]++;
    var target;
    var selector = (cov_zxs9qrnzr.s[227]++, Util.getSelectorFromElement(this));
    cov_zxs9qrnzr.s[228]++;

    if (selector) {
      cov_zxs9qrnzr.b[57][0]++;
      cov_zxs9qrnzr.s[229]++;
      target = document.querySelector(selector);
    } else {
      cov_zxs9qrnzr.b[57][1]++;
    }

    var config = (cov_zxs9qrnzr.s[230]++, $(target).data(DATA_KEY) ? (cov_zxs9qrnzr.b[58][0]++, 'toggle') : (cov_zxs9qrnzr.b[58][1]++, _objectSpread({}, $(target).data(), $(this).data())));
    cov_zxs9qrnzr.s[231]++;

    if ((cov_zxs9qrnzr.b[60][0]++, this.tagName === 'A') || (cov_zxs9qrnzr.b[60][1]++, this.tagName === 'AREA')) {
      cov_zxs9qrnzr.b[59][0]++;
      cov_zxs9qrnzr.s[232]++;
      event.preventDefault();
    } else {
      cov_zxs9qrnzr.b[59][1]++;
    }

    var $target = (cov_zxs9qrnzr.s[233]++, $(target).one(Event.SHOW, function (showEvent) {
      cov_zxs9qrnzr.f[42]++;
      cov_zxs9qrnzr.s[234]++;

      if (showEvent.isDefaultPrevented()) {
        cov_zxs9qrnzr.b[61][0]++;
        cov_zxs9qrnzr.s[235]++;
        // Only register focus restorer if modal will actually get shown
        return;
      } else {
        cov_zxs9qrnzr.b[61][1]++;
      }

      cov_zxs9qrnzr.s[236]++;
      $target.one(Event.HIDDEN, function () {
        cov_zxs9qrnzr.f[43]++;
        cov_zxs9qrnzr.s[237]++;

        if ($(_this10).is(':visible')) {
          cov_zxs9qrnzr.b[62][0]++;
          cov_zxs9qrnzr.s[238]++;

          _this10.focus();
        } else {
          cov_zxs9qrnzr.b[62][1]++;
        }
      });
    }));
    cov_zxs9qrnzr.s[239]++;

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_zxs9qrnzr.s[240]++;
  $.fn[NAME] = Modal._jQueryInterface;
  cov_zxs9qrnzr.s[241]++;
  $.fn[NAME].Constructor = Modal;
  cov_zxs9qrnzr.s[242]++;

  $.fn[NAME].noConflict = function () {
    cov_zxs9qrnzr.f[44]++;
    cov_zxs9qrnzr.s[243]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_zxs9qrnzr.s[244]++;
    return Modal._jQueryInterface;
  };

  return Modal;

})));
//# sourceMappingURL=modal.js.map
