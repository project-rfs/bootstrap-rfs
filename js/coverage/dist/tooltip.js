/*!
  * Bootstrap tooltip.js v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global.Tooltip = factory(global.jQuery,global.Popper,global.Util));
}(this, (function ($,Popper,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
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

  var cov_255pnydwtb = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/tooltip.js",
        hash = "059d675fb19d96d3aa869f2c99ba870995828e39",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/tooltip.js",
      statementMap: {
        "0": {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 36
          }
        },
        "1": {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 34
          }
        },
        "2": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 39
          }
        },
        "3": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 41
          }
        },
        "4": {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 37
          }
        },
        "5": {
          start: {
            line: 23,
            column: 27
          },
          end: {
            line: 23,
            column: 39
          }
        },
        "6": {
          start: {
            line: 24,
            column: 27
          },
          end: {
            line: 24,
            column: 72
          }
        },
        "7": {
          start: {
            line: 26,
            column: 20
          },
          end: {
            line: 39,
            column: 1
          }
        },
        "8": {
          start: {
            line: 41,
            column: 22
          },
          end: {
            line: 47,
            column: 1
          }
        },
        "9": {
          start: {
            line: 49,
            column: 16
          },
          end: {
            line: 64,
            column: 1
          }
        },
        "10": {
          start: {
            line: 66,
            column: 19
          },
          end: {
            line: 69,
            column: 1
          }
        },
        "11": {
          start: {
            line: 71,
            column: 14
          },
          end: {
            line: 82,
            column: 1
          }
        },
        "12": {
          start: {
            line: 84,
            column: 18
          },
          end: {
            line: 87,
            column: 1
          }
        },
        "13": {
          start: {
            line: 89,
            column: 17
          },
          end: {
            line: 93,
            column: 1
          }
        },
        "14": {
          start: {
            line: 95,
            column: 16
          },
          end: {
            line: 100,
            column: 1
          }
        },
        "15": {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 117,
            column: 5
          }
        },
        "16": {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 116,
            column: 93
          }
        },
        "17": {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 120,
            column: 30
          }
        },
        "18": {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 27
          }
        },
        "19": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 122,
            column: 28
          }
        },
        "20": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 123,
            column: 28
          }
        },
        "21": {
          start: {
            line: 124,
            column: 4
          },
          end: {
            line: 124,
            column: 30
          }
        },
        "22": {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 127,
            column: 26
          }
        },
        "23": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 42
          }
        },
        "24": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 23
          }
        },
        "25": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 24
          }
        },
        "26": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 18
          }
        },
        "27": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 141,
            column: 18
          }
        },
        "28": {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 145,
            column: 15
          }
        },
        "29": {
          start: {
            line: 149,
            column: 4
          },
          end: {
            line: 149,
            column: 19
          }
        },
        "30": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 16
          }
        },
        "31": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 20
          }
        },
        "32": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 161,
            column: 22
          }
        },
        "33": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 167,
            column: 26
          }
        },
        "34": {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 27
          }
        },
        "35": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 175,
            column: 38
          }
        },
        "36": {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 181,
            column: 5
          }
        },
        "37": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 180,
            column: 12
          }
        },
        "38": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 209,
            column: 5
          }
        },
        "39": {
          start: {
            line: 184,
            column: 22
          },
          end: {
            line: 184,
            column: 47
          }
        },
        "40": {
          start: {
            line: 185,
            column: 20
          },
          end: {
            line: 185,
            column: 56
          }
        },
        "41": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 193,
            column: 7
          }
        },
        "42": {
          start: {
            line: 188,
            column: 8
          },
          end: {
            line: 191,
            column: 9
          }
        },
        "43": {
          start: {
            line: 192,
            column: 8
          },
          end: {
            line: 192,
            column: 53
          }
        },
        "44": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 195,
            column: 66
          }
        },
        "45": {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 201,
            column: 7
          }
        },
        "46": {
          start: {
            line: 198,
            column: 8
          },
          end: {
            line: 198,
            column: 37
          }
        },
        "47": {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 200,
            column: 37
          }
        },
        "48": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 206,
            column: 7
          }
        },
        "49": {
          start: {
            line: 204,
            column: 8
          },
          end: {
            line: 204,
            column: 31
          }
        },
        "50": {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 205,
            column: 14
          }
        },
        "51": {
          start: {
            line: 208,
            column: 6
          },
          end: {
            line: 208,
            column: 29
          }
        },
        "52": {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 31
          }
        },
        "53": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 57
          }
        },
        "54": {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 217,
            column: 51
          }
        },
        "55": {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 218,
            column: 58
          }
        },
        "56": {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        },
        "57": {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 221,
            column: 26
          }
        },
        "58": {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 224,
            column: 30
          }
        },
        "59": {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 225,
            column: 30
          }
        },
        "60": {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 226,
            column: 30
          }
        },
        "61": {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 227,
            column: 30
          }
        },
        "62": {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 230,
            column: 5
          }
        },
        "63": {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 229,
            column: 28
          }
        },
        "64": {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 232,
            column: 23
          }
        },
        "65": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 233,
            column: 23
          }
        },
        "66": {
          start: {
            line: 234,
            column: 4
          },
          end: {
            line: 234,
            column: 23
          }
        },
        "67": {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 235,
            column: 23
          }
        },
        "68": {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        },
        "69": {
          start: {
            line: 240,
            column: 6
          },
          end: {
            line: 240,
            column: 60
          }
        },
        "70": {
          start: {
            line: 243,
            column: 22
          },
          end: {
            line: 243,
            column: 58
          }
        },
        "71": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 344,
            column: 5
          }
        },
        "72": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 40
          }
        },
        "73": {
          start: {
            line: 247,
            column: 25
          },
          end: {
            line: 250,
            column: 7
          }
        },
        "74": {
          start: {
            line: 252,
            column: 6
          },
          end: {
            line: 254,
            column: 7
          }
        },
        "75": {
          start: {
            line: 253,
            column: 8
          },
          end: {
            line: 253,
            column: 14
          }
        },
        "76": {
          start: {
            line: 256,
            column: 20
          },
          end: {
            line: 256,
            column: 40
          }
        },
        "77": {
          start: {
            line: 257,
            column: 20
          },
          end: {
            line: 257,
            column: 54
          }
        },
        "78": {
          start: {
            line: 259,
            column: 6
          },
          end: {
            line: 259,
            column: 35
          }
        },
        "79": {
          start: {
            line: 260,
            column: 6
          },
          end: {
            line: 260,
            column: 58
          }
        },
        "80": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 262,
            column: 23
          }
        },
        "81": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 266,
            column: 7
          }
        },
        "82": {
          start: {
            line: 265,
            column: 8
          },
          end: {
            line: 265,
            column: 39
          }
        },
        "83": {
          start: {
            line: 268,
            column: 25
          },
          end: {
            line: 270,
            column: 31
          }
        },
        "84": {
          start: {
            line: 272,
            column: 25
          },
          end: {
            line: 272,
            column: 55
          }
        },
        "85": {
          start: {
            line: 273,
            column: 6
          },
          end: {
            line: 273,
            column: 41
          }
        },
        "86": {
          start: {
            line: 275,
            column: 24
          },
          end: {
            line: 275,
            column: 113
          }
        },
        "87": {
          start: {
            line: 277,
            column: 6
          },
          end: {
            line: 277,
            column: 50
          }
        },
        "88": {
          start: {
            line: 279,
            column: 6
          },
          end: {
            line: 281,
            column: 7
          }
        },
        "89": {
          start: {
            line: 280,
            column: 8
          },
          end: {
            line: 280,
            column: 34
          }
        },
        "90": {
          start: {
            line: 283,
            column: 6
          },
          end: {
            line: 283,
            column: 62
          }
        },
        "91": {
          start: {
            line: 285,
            column: 6
          },
          end: {
            line: 309,
            column: 8
          }
        },
        "92": {
          start: {
            line: 302,
            column: 10
          },
          end: {
            line: 304,
            column: 11
          }
        },
        "93": {
          start: {
            line: 303,
            column: 12
          },
          end: {
            line: 303,
            column: 51
          }
        },
        "94": {
          start: {
            line: 307,
            column: 10
          },
          end: {
            line: 307,
            column: 49
          }
        },
        "95": {
          start: {
            line: 311,
            column: 6
          },
          end: {
            line: 311,
            column: 37
          }
        },
        "96": {
          start: {
            line: 317,
            column: 6
          },
          end: {
            line: 319,
            column: 7
          }
        },
        "97": {
          start: {
            line: 318,
            column: 8
          },
          end: {
            line: 318,
            column: 65
          }
        },
        "98": {
          start: {
            line: 321,
            column: 23
          },
          end: {
            line: 333,
            column: 7
          }
        },
        "99": {
          start: {
            line: 322,
            column: 8
          },
          end: {
            line: 324,
            column: 9
          }
        },
        "100": {
          start: {
            line: 323,
            column: 10
          },
          end: {
            line: 323,
            column: 31
          }
        },
        "101": {
          start: {
            line: 325,
            column: 31
          },
          end: {
            line: 325,
            column: 47
          }
        },
        "102": {
          start: {
            line: 326,
            column: 8
          },
          end: {
            line: 326,
            column: 35
          }
        },
        "103": {
          start: {
            line: 328,
            column: 8
          },
          end: {
            line: 328,
            column: 61
          }
        },
        "104": {
          start: {
            line: 330,
            column: 8
          },
          end: {
            line: 332,
            column: 9
          }
        },
        "105": {
          start: {
            line: 331,
            column: 10
          },
          end: {
            line: 331,
            column: 33
          }
        },
        "106": {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 343,
            column: 7
          }
        },
        "107": {
          start: {
            line: 336,
            column: 35
          },
          end: {
            line: 336,
            column: 82
          }
        },
        "108": {
          start: {
            line: 338,
            column: 8
          },
          end: {
            line: 340,
            column: 51
          }
        },
        "109": {
          start: {
            line: 342,
            column: 8
          },
          end: {
            line: 342,
            column: 18
          }
        },
        "110": {
          start: {
            line: 348,
            column: 22
          },
          end: {
            line: 348,
            column: 42
          }
        },
        "111": {
          start: {
            line: 349,
            column: 22
          },
          end: {
            line: 349,
            column: 58
          }
        },
        "112": {
          start: {
            line: 350,
            column: 21
          },
          end: {
            line: 365,
            column: 5
          }
        },
        "113": {
          start: {
            line: 351,
            column: 6
          },
          end: {
            line: 353,
            column: 7
          }
        },
        "114": {
          start: {
            line: 352,
            column: 8
          },
          end: {
            line: 352,
            column: 39
          }
        },
        "115": {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 355,
            column: 27
          }
        },
        "116": {
          start: {
            line: 356,
            column: 6
          },
          end: {
            line: 356,
            column: 54
          }
        },
        "117": {
          start: {
            line: 357,
            column: 6
          },
          end: {
            line: 357,
            column: 60
          }
        },
        "118": {
          start: {
            line: 358,
            column: 6
          },
          end: {
            line: 360,
            column: 7
          }
        },
        "119": {
          start: {
            line: 359,
            column: 8
          },
          end: {
            line: 359,
            column: 30
          }
        },
        "120": {
          start: {
            line: 362,
            column: 6
          },
          end: {
            line: 364,
            column: 7
          }
        },
        "121": {
          start: {
            line: 363,
            column: 8
          },
          end: {
            line: 363,
            column: 18
          }
        },
        "122": {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 367,
            column: 38
          }
        },
        "123": {
          start: {
            line: 369,
            column: 4
          },
          end: {
            line: 371,
            column: 5
          }
        },
        "124": {
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 370,
            column: 12
          }
        },
        "125": {
          start: {
            line: 373,
            column: 4
          },
          end: {
            line: 373,
            column: 38
          }
        },
        "126": {
          start: {
            line: 377,
            column: 4
          },
          end: {
            line: 379,
            column: 5
          }
        },
        "127": {
          start: {
            line: 378,
            column: 6
          },
          end: {
            line: 378,
            column: 64
          }
        },
        "128": {
          start: {
            line: 381,
            column: 4
          },
          end: {
            line: 381,
            column: 46
          }
        },
        "129": {
          start: {
            line: 382,
            column: 4
          },
          end: {
            line: 382,
            column: 46
          }
        },
        "130": {
          start: {
            line: 383,
            column: 4
          },
          end: {
            line: 383,
            column: 46
          }
        },
        "131": {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 393,
            column: 5
          }
        },
        "132": {
          start: {
            line: 386,
            column: 33
          },
          end: {
            line: 386,
            column: 75
          }
        },
        "133": {
          start: {
            line: 388,
            column: 6
          },
          end: {
            line: 390,
            column: 49
          }
        },
        "134": {
          start: {
            line: 392,
            column: 6
          },
          end: {
            line: 392,
            column: 16
          }
        },
        "135": {
          start: {
            line: 395,
            column: 4
          },
          end: {
            line: 395,
            column: 25
          }
        },
        "136": {
          start: {
            line: 399,
            column: 4
          },
          end: {
            line: 401,
            column: 5
          }
        },
        "137": {
          start: {
            line: 400,
            column: 6
          },
          end: {
            line: 400,
            column: 35
          }
        },
        "138": {
          start: {
            line: 407,
            column: 4
          },
          end: {
            line: 407,
            column: 35
          }
        },
        "139": {
          start: {
            line: 411,
            column: 4
          },
          end: {
            line: 411,
            column: 69
          }
        },
        "140": {
          start: {
            line: 415,
            column: 4
          },
          end: {
            line: 415,
            column: 53
          }
        },
        "141": {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 416,
            column: 19
          }
        },
        "142": {
          start: {
            line: 420,
            column: 16
          },
          end: {
            line: 420,
            column: 36
          }
        },
        "143": {
          start: {
            line: 421,
            column: 4
          },
          end: {
            line: 421,
            column: 92
          }
        },
        "144": {
          start: {
            line: 422,
            column: 4
          },
          end: {
            line: 422,
            column: 61
          }
        },
        "145": {
          start: {
            line: 426,
            column: 17
          },
          end: {
            line: 426,
            column: 33
          }
        },
        "146": {
          start: {
            line: 427,
            column: 4
          },
          end: {
            line: 438,
            column: 5
          }
        },
        "147": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 435,
            column: 7
          }
        },
        "148": {
          start: {
            line: 430,
            column: 8
          },
          end: {
            line: 432,
            column: 9
          }
        },
        "149": {
          start: {
            line: 431,
            column: 10
          },
          end: {
            line: 431,
            column: 42
          }
        },
        "150": {
          start: {
            line: 434,
            column: 8
          },
          end: {
            line: 434,
            column: 40
          }
        },
        "151": {
          start: {
            line: 437,
            column: 6
          },
          end: {
            line: 437,
            column: 47
          }
        },
        "152": {
          start: {
            line: 442,
            column: 16
          },
          end: {
            line: 442,
            column: 64
          }
        },
        "153": {
          start: {
            line: 444,
            column: 4
          },
          end: {
            line: 448,
            column: 5
          }
        },
        "154": {
          start: {
            line: 445,
            column: 6
          },
          end: {
            line: 447,
            column: 27
          }
        },
        "155": {
          start: {
            line: 450,
            column: 4
          },
          end: {
            line: 450,
            column: 16
          }
        },
        "156": {
          start: {
            line: 456,
            column: 4
          },
          end: {
            line: 456,
            column: 49
          }
        },
        "157": {
          start: {
            line: 460,
            column: 21
          },
          end: {
            line: 460,
            column: 51
          }
        },
        "158": {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 489,
            column: 6
          }
        },
        "159": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 488,
            column: 7
          }
        },
        "160": {
          start: {
            line: 464,
            column: 8
          },
          end: {
            line: 468,
            column: 9
          }
        },
        "161": {
          start: {
            line: 467,
            column: 21
          },
          end: {
            line: 467,
            column: 39
          }
        },
        "162": {
          start: {
            line: 469,
            column: 13
          },
          end: {
            line: 488,
            column: 7
          }
        },
        "163": {
          start: {
            line: 470,
            column: 24
          },
          end: {
            line: 472,
            column: 42
          }
        },
        "164": {
          start: {
            line: 473,
            column: 25
          },
          end: {
            line: 475,
            column: 43
          }
        },
        "165": {
          start: {
            line: 477,
            column: 8
          },
          end: {
            line: 487,
            column: 11
          }
        },
        "166": {
          start: {
            line: 481,
            column: 23
          },
          end: {
            line: 481,
            column: 41
          }
        },
        "167": {
          start: {
            line: 486,
            column: 23
          },
          end: {
            line: 486,
            column: 41
          }
        },
        "168": {
          start: {
            line: 491,
            column: 4
          },
          end: {
            line: 498,
            column: 5
          }
        },
        "169": {
          start: {
            line: 494,
            column: 8
          },
          end: {
            line: 496,
            column: 9
          }
        },
        "170": {
          start: {
            line: 495,
            column: 10
          },
          end: {
            line: 495,
            column: 21
          }
        },
        "171": {
          start: {
            line: 500,
            column: 4
          },
          end: {
            line: 508,
            column: 5
          }
        },
        "172": {
          start: {
            line: 501,
            column: 6
          },
          end: {
            line: 505,
            column: 7
          }
        },
        "173": {
          start: {
            line: 507,
            column: 6
          },
          end: {
            line: 507,
            column: 22
          }
        },
        "174": {
          start: {
            line: 512,
            column: 22
          },
          end: {
            line: 512,
            column: 77
          }
        },
        "175": {
          start: {
            line: 513,
            column: 4
          },
          end: {
            line: 520,
            column: 5
          }
        },
        "176": {
          start: {
            line: 515,
            column: 6
          },
          end: {
            line: 518,
            column: 7
          }
        },
        "177": {
          start: {
            line: 519,
            column: 6
          },
          end: {
            line: 519,
            column: 44
          }
        },
        "178": {
          start: {
            line: 524,
            column: 20
          },
          end: {
            line: 524,
            column: 45
          }
        },
        "179": {
          start: {
            line: 526,
            column: 4
          },
          end: {
            line: 526,
            column: 61
          }
        },
        "180": {
          start: {
            line: 528,
            column: 4
          },
          end: {
            line: 534,
            column: 5
          }
        },
        "181": {
          start: {
            line: 529,
            column: 6
          },
          end: {
            line: 532,
            column: 7
          }
        },
        "182": {
          start: {
            line: 533,
            column: 6
          },
          end: {
            line: 533,
            column: 51
          }
        },
        "183": {
          start: {
            line: 536,
            column: 4
          },
          end: {
            line: 540,
            column: 5
          }
        },
        "184": {
          start: {
            line: 537,
            column: 6
          },
          end: {
            line: 539,
            column: 14
          }
        },
        "185": {
          start: {
            line: 542,
            column: 4
          },
          end: {
            line: 546,
            column: 5
          }
        },
        "186": {
          start: {
            line: 544,
            column: 6
          },
          end: {
            line: 544,
            column: 43
          }
        },
        "187": {
          start: {
            line: 545,
            column: 6
          },
          end: {
            line: 545,
            column: 12
          }
        },
        "188": {
          start: {
            line: 548,
            column: 4
          },
          end: {
            line: 548,
            column: 34
          }
        },
        "189": {
          start: {
            line: 550,
            column: 4
          },
          end: {
            line: 550,
            column: 41
          }
        },
        "190": {
          start: {
            line: 552,
            column: 4
          },
          end: {
            line: 555,
            column: 5
          }
        },
        "191": {
          start: {
            line: 553,
            column: 6
          },
          end: {
            line: 553,
            column: 20
          }
        },
        "192": {
          start: {
            line: 554,
            column: 6
          },
          end: {
            line: 554,
            column: 12
          }
        },
        "193": {
          start: {
            line: 557,
            column: 4
          },
          end: {
            line: 561,
            column: 33
          }
        },
        "194": {
          start: {
            line: 558,
            column: 6
          },
          end: {
            line: 560,
            column: 7
          }
        },
        "195": {
          start: {
            line: 559,
            column: 8
          },
          end: {
            line: 559,
            column: 22
          }
        },
        "196": {
          start: {
            line: 565,
            column: 20
          },
          end: {
            line: 565,
            column: 45
          }
        },
        "197": {
          start: {
            line: 567,
            column: 4
          },
          end: {
            line: 567,
            column: 61
          }
        },
        "198": {
          start: {
            line: 569,
            column: 4
          },
          end: {
            line: 575,
            column: 5
          }
        },
        "199": {
          start: {
            line: 570,
            column: 6
          },
          end: {
            line: 573,
            column: 7
          }
        },
        "200": {
          start: {
            line: 574,
            column: 6
          },
          end: {
            line: 574,
            column: 51
          }
        },
        "201": {
          start: {
            line: 577,
            column: 4
          },
          end: {
            line: 581,
            column: 5
          }
        },
        "202": {
          start: {
            line: 578,
            column: 6
          },
          end: {
            line: 580,
            column: 15
          }
        },
        "203": {
          start: {
            line: 583,
            column: 4
          },
          end: {
            line: 585,
            column: 5
          }
        },
        "204": {
          start: {
            line: 584,
            column: 6
          },
          end: {
            line: 584,
            column: 12
          }
        },
        "205": {
          start: {
            line: 587,
            column: 4
          },
          end: {
            line: 587,
            column: 34
          }
        },
        "206": {
          start: {
            line: 589,
            column: 4
          },
          end: {
            line: 589,
            column: 40
          }
        },
        "207": {
          start: {
            line: 591,
            column: 4
          },
          end: {
            line: 594,
            column: 5
          }
        },
        "208": {
          start: {
            line: 592,
            column: 6
          },
          end: {
            line: 592,
            column: 20
          }
        },
        "209": {
          start: {
            line: 593,
            column: 6
          },
          end: {
            line: 593,
            column: 12
          }
        },
        "210": {
          start: {
            line: 596,
            column: 4
          },
          end: {
            line: 600,
            column: 33
          }
        },
        "211": {
          start: {
            line: 597,
            column: 6
          },
          end: {
            line: 599,
            column: 7
          }
        },
        "212": {
          start: {
            line: 598,
            column: 8
          },
          end: {
            line: 598,
            column: 22
          }
        },
        "213": {
          start: {
            line: 604,
            column: 4
          },
          end: {
            line: 608,
            column: 5
          }
        },
        "214": {
          start: {
            line: 605,
            column: 6
          },
          end: {
            line: 607,
            column: 7
          }
        },
        "215": {
          start: {
            line: 606,
            column: 8
          },
          end: {
            line: 606,
            column: 19
          }
        },
        "216": {
          start: {
            line: 610,
            column: 4
          },
          end: {
            line: 610,
            column: 16
          }
        },
        "217": {
          start: {
            line: 614,
            column: 4
          },
          end: {
            line: 618,
            column: 5
          }
        },
        "218": {
          start: {
            line: 620,
            column: 4
          },
          end: {
            line: 625,
            column: 5
          }
        },
        "219": {
          start: {
            line: 621,
            column: 6
          },
          end: {
            line: 624,
            column: 7
          }
        },
        "220": {
          start: {
            line: 627,
            column: 4
          },
          end: {
            line: 629,
            column: 5
          }
        },
        "221": {
          start: {
            line: 628,
            column: 6
          },
          end: {
            line: 628,
            column: 44
          }
        },
        "222": {
          start: {
            line: 631,
            column: 4
          },
          end: {
            line: 633,
            column: 5
          }
        },
        "223": {
          start: {
            line: 632,
            column: 6
          },
          end: {
            line: 632,
            column: 48
          }
        },
        "224": {
          start: {
            line: 635,
            column: 4
          },
          end: {
            line: 639,
            column: 5
          }
        },
        "225": {
          start: {
            line: 641,
            column: 4
          },
          end: {
            line: 641,
            column: 17
          }
        },
        "226": {
          start: {
            line: 645,
            column: 19
          },
          end: {
            line: 645,
            column: 21
          }
        },
        "227": {
          start: {
            line: 647,
            column: 4
          },
          end: {
            line: 653,
            column: 5
          }
        },
        "228": {
          start: {
            line: 648,
            column: 6
          },
          end: {
            line: 652,
            column: 7
          }
        },
        "229": {
          start: {
            line: 649,
            column: 8
          },
          end: {
            line: 651,
            column: 9
          }
        },
        "230": {
          start: {
            line: 650,
            column: 10
          },
          end: {
            line: 650,
            column: 40
          }
        },
        "231": {
          start: {
            line: 655,
            column: 4
          },
          end: {
            line: 655,
            column: 17
          }
        },
        "232": {
          start: {
            line: 659,
            column: 17
          },
          end: {
            line: 659,
            column: 40
          }
        },
        "233": {
          start: {
            line: 660,
            column: 21
          },
          end: {
            line: 660,
            column: 65
          }
        },
        "234": {
          start: {
            line: 661,
            column: 4
          },
          end: {
            line: 663,
            column: 5
          }
        },
        "235": {
          start: {
            line: 662,
            column: 6
          },
          end: {
            line: 662,
            column: 41
          }
        },
        "236": {
          start: {
            line: 667,
            column: 27
          },
          end: {
            line: 667,
            column: 46
          }
        },
        "237": {
          start: {
            line: 668,
            column: 4
          },
          end: {
            line: 668,
            column: 36
          }
        },
        "238": {
          start: {
            line: 669,
            column: 4
          },
          end: {
            line: 669,
            column: 25
          }
        },
        "239": {
          start: {
            line: 670,
            column: 4
          },
          end: {
            line: 670,
            column: 70
          }
        },
        "240": {
          start: {
            line: 674,
            column: 16
          },
          end: {
            line: 674,
            column: 36
          }
        },
        "241": {
          start: {
            line: 675,
            column: 32
          },
          end: {
            line: 675,
            column: 53
          }
        },
        "242": {
          start: {
            line: 676,
            column: 4
          },
          end: {
            line: 678,
            column: 5
          }
        },
        "243": {
          start: {
            line: 677,
            column: 6
          },
          end: {
            line: 677,
            column: 12
          }
        },
        "244": {
          start: {
            line: 679,
            column: 4
          },
          end: {
            line: 679,
            column: 38
          }
        },
        "245": {
          start: {
            line: 680,
            column: 4
          },
          end: {
            line: 680,
            column: 33
          }
        },
        "246": {
          start: {
            line: 681,
            column: 4
          },
          end: {
            line: 681,
            column: 15
          }
        },
        "247": {
          start: {
            line: 682,
            column: 4
          },
          end: {
            line: 682,
            column: 15
          }
        },
        "248": {
          start: {
            line: 683,
            column: 4
          },
          end: {
            line: 683,
            column: 47
          }
        },
        "249": {
          start: {
            line: 689,
            column: 4
          },
          end: {
            line: 708,
            column: 6
          }
        },
        "250": {
          start: {
            line: 690,
            column: 17
          },
          end: {
            line: 690,
            column: 39
          }
        },
        "251": {
          start: {
            line: 691,
            column: 22
          },
          end: {
            line: 691,
            column: 58
          }
        },
        "252": {
          start: {
            line: 693,
            column: 6
          },
          end: {
            line: 695,
            column: 7
          }
        },
        "253": {
          start: {
            line: 694,
            column: 8
          },
          end: {
            line: 694,
            column: 14
          }
        },
        "254": {
          start: {
            line: 697,
            column: 6
          },
          end: {
            line: 700,
            column: 7
          }
        },
        "255": {
          start: {
            line: 698,
            column: 8
          },
          end: {
            line: 698,
            column: 41
          }
        },
        "256": {
          start: {
            line: 699,
            column: 8
          },
          end: {
            line: 699,
            column: 36
          }
        },
        "257": {
          start: {
            line: 702,
            column: 6
          },
          end: {
            line: 707,
            column: 7
          }
        },
        "258": {
          start: {
            line: 703,
            column: 8
          },
          end: {
            line: 705,
            column: 9
          }
        },
        "259": {
          start: {
            line: 704,
            column: 10
          },
          end: {
            line: 704,
            column: 60
          }
        },
        "260": {
          start: {
            line: 706,
            column: 8
          },
          end: {
            line: 706,
            column: 22
          }
        },
        "261": {
          start: {
            line: 718,
            column: 0
          },
          end: {
            line: 718,
            column: 37
          }
        },
        "262": {
          start: {
            line: 719,
            column: 0
          },
          end: {
            line: 719,
            column: 32
          }
        },
        "263": {
          start: {
            line: 720,
            column: 0
          },
          end: {
            line: 723,
            column: 1
          }
        },
        "264": {
          start: {
            line: 721,
            column: 2
          },
          end: {
            line: 721,
            column: 33
          }
        },
        "265": {
          start: {
            line: 722,
            column: 2
          },
          end: {
            line: 722,
            column: 33
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
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
              column: 31
            },
            end: {
              line: 132,
              column: 3
            }
          },
          line: 110
        },
        "1": {
          name: "(anonymous_1)",
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
              column: 23
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 136
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 142,
              column: 3
            }
          },
          line: 140
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 144,
              column: 2
            },
            end: {
              line: 144,
              column: 3
            }
          },
          loc: {
            start: {
              line: 144,
              column: 20
            },
            end: {
              line: 146,
              column: 3
            }
          },
          line: 144
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 148,
              column: 2
            },
            end: {
              line: 148,
              column: 3
            }
          },
          loc: {
            start: {
              line: 148,
              column: 24
            },
            end: {
              line: 150,
              column: 3
            }
          },
          line: 148
        },
        "5": {
          name: "(anonymous_5)",
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
              column: 21
            },
            end: {
              line: 154,
              column: 3
            }
          },
          line: 152
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 156,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          },
          loc: {
            start: {
              line: 156,
              column: 25
            },
            end: {
              line: 158,
              column: 3
            }
          },
          line: 156
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 160,
              column: 2
            },
            end: {
              line: 160,
              column: 3
            }
          },
          loc: {
            start: {
              line: 160,
              column: 27
            },
            end: {
              line: 162,
              column: 3
            }
          },
          line: 160
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 166,
              column: 2
            },
            end: {
              line: 166,
              column: 3
            }
          },
          loc: {
            start: {
              line: 166,
              column: 11
            },
            end: {
              line: 168,
              column: 3
            }
          },
          line: 166
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 170,
              column: 2
            },
            end: {
              line: 170,
              column: 3
            }
          },
          loc: {
            start: {
              line: 170,
              column: 12
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 170
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 174,
              column: 2
            },
            end: {
              line: 174,
              column: 3
            }
          },
          loc: {
            start: {
              line: 174,
              column: 18
            },
            end: {
              line: 176,
              column: 3
            }
          },
          line: 174
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 178,
              column: 2
            },
            end: {
              line: 178,
              column: 3
            }
          },
          loc: {
            start: {
              line: 178,
              column: 16
            },
            end: {
              line: 210,
              column: 3
            }
          },
          line: 178
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 12
            },
            end: {
              line: 236,
              column: 3
            }
          },
          line: 212
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 238,
              column: 2
            },
            end: {
              line: 238,
              column: 3
            }
          },
          loc: {
            start: {
              line: 238,
              column: 9
            },
            end: {
              line: 345,
              column: 3
            }
          },
          line: 238
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 301,
              column: 18
            },
            end: {
              line: 301,
              column: 19
            }
          },
          loc: {
            start: {
              line: 301,
              column: 28
            },
            end: {
              line: 305,
              column: 9
            }
          },
          line: 301
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 306,
              column: 18
            },
            end: {
              line: 306,
              column: 19
            }
          },
          loc: {
            start: {
              line: 306,
              column: 28
            },
            end: {
              line: 308,
              column: 9
            }
          },
          line: 306
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 321,
              column: 23
            },
            end: {
              line: 321,
              column: 24
            }
          },
          loc: {
            start: {
              line: 321,
              column: 29
            },
            end: {
              line: 333,
              column: 7
            }
          },
          line: 321
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 347,
              column: 2
            },
            end: {
              line: 347,
              column: 3
            }
          },
          loc: {
            start: {
              line: 347,
              column: 17
            },
            end: {
              line: 396,
              column: 3
            }
          },
          line: 347
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 350,
              column: 21
            },
            end: {
              line: 350,
              column: 22
            }
          },
          loc: {
            start: {
              line: 350,
              column: 27
            },
            end: {
              line: 365,
              column: 5
            }
          },
          line: 350
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 398,
              column: 2
            },
            end: {
              line: 398,
              column: 3
            }
          },
          loc: {
            start: {
              line: 398,
              column: 11
            },
            end: {
              line: 402,
              column: 3
            }
          },
          line: 398
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 406,
              column: 2
            },
            end: {
              line: 406,
              column: 3
            }
          },
          loc: {
            start: {
              line: 406,
              column: 18
            },
            end: {
              line: 408,
              column: 3
            }
          },
          line: 406
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 410,
              column: 2
            },
            end: {
              line: 410,
              column: 3
            }
          },
          loc: {
            start: {
              line: 410,
              column: 33
            },
            end: {
              line: 412,
              column: 3
            }
          },
          line: 410
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 414,
              column: 2
            },
            end: {
              line: 414,
              column: 3
            }
          },
          loc: {
            start: {
              line: 414,
              column: 18
            },
            end: {
              line: 417,
              column: 3
            }
          },
          line: 414
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 419,
              column: 2
            },
            end: {
              line: 419,
              column: 3
            }
          },
          loc: {
            start: {
              line: 419,
              column: 15
            },
            end: {
              line: 423,
              column: 3
            }
          },
          line: 419
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 425,
              column: 2
            },
            end: {
              line: 425,
              column: 3
            }
          },
          loc: {
            start: {
              line: 425,
              column: 39
            },
            end: {
              line: 439,
              column: 3
            }
          },
          line: 425
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 441,
              column: 2
            },
            end: {
              line: 441,
              column: 3
            }
          },
          loc: {
            start: {
              line: 441,
              column: 13
            },
            end: {
              line: 451,
              column: 3
            }
          },
          line: 441
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 455,
              column: 2
            },
            end: {
              line: 455,
              column: 3
            }
          },
          loc: {
            start: {
              line: 455,
              column: 28
            },
            end: {
              line: 457,
              column: 3
            }
          },
          line: 455
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 459,
              column: 2
            },
            end: {
              line: 459,
              column: 3
            }
          },
          loc: {
            start: {
              line: 459,
              column: 18
            },
            end: {
              line: 509,
              column: 3
            }
          },
          line: 459
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 462,
              column: 21
            },
            end: {
              line: 462,
              column: 22
            }
          },
          loc: {
            start: {
              line: 462,
              column: 34
            },
            end: {
              line: 489,
              column: 5
            }
          },
          line: 462
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 467,
              column: 10
            },
            end: {
              line: 467,
              column: 11
            }
          },
          loc: {
            start: {
              line: 467,
              column: 21
            },
            end: {
              line: 467,
              column: 39
            }
          },
          line: 467
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 481,
              column: 12
            },
            end: {
              line: 481,
              column: 13
            }
          },
          loc: {
            start: {
              line: 481,
              column: 23
            },
            end: {
              line: 481,
              column: 41
            }
          },
          line: 481
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 486,
              column: 12
            },
            end: {
              line: 486,
              column: 13
            }
          },
          loc: {
            start: {
              line: 486,
              column: 23
            },
            end: {
              line: 486,
              column: 41
            }
          },
          line: 486
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 493,
              column: 6
            },
            end: {
              line: 493,
              column: 7
            }
          },
          loc: {
            start: {
              line: 493,
              column: 12
            },
            end: {
              line: 497,
              column: 7
            }
          },
          line: 493
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 511,
              column: 2
            },
            end: {
              line: 511,
              column: 3
            }
          },
          loc: {
            start: {
              line: 511,
              column: 14
            },
            end: {
              line: 521,
              column: 3
            }
          },
          line: 511
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 523,
              column: 2
            },
            end: {
              line: 523,
              column: 3
            }
          },
          loc: {
            start: {
              line: 523,
              column: 25
            },
            end: {
              line: 562,
              column: 3
            }
          },
          line: 523
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 557,
              column: 34
            },
            end: {
              line: 557,
              column: 35
            }
          },
          loc: {
            start: {
              line: 557,
              column: 40
            },
            end: {
              line: 561,
              column: 5
            }
          },
          line: 557
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 564,
              column: 2
            },
            end: {
              line: 564,
              column: 3
            }
          },
          loc: {
            start: {
              line: 564,
              column: 25
            },
            end: {
              line: 601,
              column: 3
            }
          },
          line: 564
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 596,
              column: 34
            },
            end: {
              line: 596,
              column: 35
            }
          },
          loc: {
            start: {
              line: 596,
              column: 40
            },
            end: {
              line: 600,
              column: 5
            }
          },
          line: 596
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 603,
              column: 2
            },
            end: {
              line: 603,
              column: 3
            }
          },
          loc: {
            start: {
              line: 603,
              column: 25
            },
            end: {
              line: 611,
              column: 3
            }
          },
          line: 603
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 613,
              column: 2
            },
            end: {
              line: 613,
              column: 3
            }
          },
          loc: {
            start: {
              line: 613,
              column: 21
            },
            end: {
              line: 642,
              column: 3
            }
          },
          line: 613
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 644,
              column: 2
            },
            end: {
              line: 644,
              column: 3
            }
          },
          loc: {
            start: {
              line: 644,
              column: 23
            },
            end: {
              line: 656,
              column: 3
            }
          },
          line: 644
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 658,
              column: 2
            },
            end: {
              line: 658,
              column: 3
            }
          },
          loc: {
            start: {
              line: 658,
              column: 19
            },
            end: {
              line: 664,
              column: 3
            }
          },
          line: 658
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 666,
              column: 2
            },
            end: {
              line: 666,
              column: 3
            }
          },
          loc: {
            start: {
              line: 666,
              column: 43
            },
            end: {
              line: 671,
              column: 3
            }
          },
          line: 666
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 673,
              column: 2
            },
            end: {
              line: 673,
              column: 3
            }
          },
          loc: {
            start: {
              line: 673,
              column: 19
            },
            end: {
              line: 684,
              column: 3
            }
          },
          line: 673
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 688,
              column: 2
            },
            end: {
              line: 688,
              column: 3
            }
          },
          loc: {
            start: {
              line: 688,
              column: 34
            },
            end: {
              line: 709,
              column: 3
            }
          },
          line: 688
        },
        "45": {
          name: "(anonymous_45)",
          decl: {
            start: {
              line: 689,
              column: 21
            },
            end: {
              line: 689,
              column: 22
            }
          },
          loc: {
            start: {
              line: 689,
              column: 33
            },
            end: {
              line: 708,
              column: 5
            }
          },
          line: 689
        },
        "46": {
          name: "(anonymous_46)",
          decl: {
            start: {
              line: 720,
              column: 24
            },
            end: {
              line: 720,
              column: 25
            }
          },
          loc: {
            start: {
              line: 720,
              column: 30
            },
            end: {
              line: 723,
              column: 1
            }
          },
          line: 720
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 115,
              column: 4
            },
            end: {
              line: 117,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 115,
              column: 4
            },
            end: {
              line: 117,
              column: 5
            }
          }, {
            start: {
              line: 115,
              column: 4
            },
            end: {
              line: 117,
              column: 5
            }
          }],
          line: 115
        },
        "1": {
          loc: {
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 181,
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
              line: 181,
              column: 5
            }
          }, {
            start: {
              line: 179,
              column: 4
            },
            end: {
              line: 181,
              column: 5
            }
          }],
          line: 179
        },
        "2": {
          loc: {
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 209,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 209,
              column: 5
            }
          }, {
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 209,
              column: 5
            }
          }],
          line: 183
        },
        "3": {
          loc: {
            start: {
              line: 187,
              column: 6
            },
            end: {
              line: 193,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 187,
              column: 6
            },
            end: {
              line: 193,
              column: 7
            }
          }, {
            start: {
              line: 187,
              column: 6
            },
            end: {
              line: 193,
              column: 7
            }
          }],
          line: 187
        },
        "4": {
          loc: {
            start: {
              line: 197,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 197,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          }, {
            start: {
              line: 197,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          }],
          line: 197
        },
        "5": {
          loc: {
            start: {
              line: 203,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 203,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }, {
            start: {
              line: 203,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }],
          line: 203
        },
        "6": {
          loc: {
            start: {
              line: 220,
              column: 4
            },
            end: {
              line: 222,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 220,
              column: 4
            },
            end: {
              line: 222,
              column: 5
            }
          }, {
            start: {
              line: 220,
              column: 4
            },
            end: {
              line: 222,
              column: 5
            }
          }],
          line: 220
        },
        "7": {
          loc: {
            start: {
              line: 228,
              column: 4
            },
            end: {
              line: 230,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 228,
              column: 4
            },
            end: {
              line: 230,
              column: 5
            }
          }, {
            start: {
              line: 228,
              column: 4
            },
            end: {
              line: 230,
              column: 5
            }
          }],
          line: 228
        },
        "8": {
          loc: {
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 241,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 241,
              column: 5
            }
          }, {
            start: {
              line: 239,
              column: 4
            },
            end: {
              line: 241,
              column: 5
            }
          }],
          line: 239
        },
        "9": {
          loc: {
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          }, {
            start: {
              line: 244,
              column: 4
            },
            end: {
              line: 344,
              column: 5
            }
          }],
          line: 244
        },
        "10": {
          loc: {
            start: {
              line: 244,
              column: 8
            },
            end: {
              line: 244,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 244,
              column: 8
            },
            end: {
              line: 244,
              column: 28
            }
          }, {
            start: {
              line: 244,
              column: 32
            },
            end: {
              line: 244,
              column: 47
            }
          }],
          line: 244
        },
        "11": {
          loc: {
            start: {
              line: 252,
              column: 6
            },
            end: {
              line: 254,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 252,
              column: 6
            },
            end: {
              line: 254,
              column: 7
            }
          }, {
            start: {
              line: 252,
              column: 6
            },
            end: {
              line: 254,
              column: 7
            }
          }],
          line: 252
        },
        "12": {
          loc: {
            start: {
              line: 252,
              column: 10
            },
            end: {
              line: 252,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 252,
              column: 10
            },
            end: {
              line: 252,
              column: 40
            }
          }, {
            start: {
              line: 252,
              column: 44
            },
            end: {
              line: 252,
              column: 55
            }
          }],
          line: 252
        },
        "13": {
          loc: {
            start: {
              line: 264,
              column: 6
            },
            end: {
              line: 266,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 264,
              column: 6
            },
            end: {
              line: 266,
              column: 7
            }
          }, {
            start: {
              line: 264,
              column: 6
            },
            end: {
              line: 266,
              column: 7
            }
          }],
          line: 264
        },
        "14": {
          loc: {
            start: {
              line: 268,
              column: 25
            },
            end: {
              line: 270,
              column: 31
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 269,
              column: 10
            },
            end: {
              line: 269,
              column: 61
            }
          }, {
            start: {
              line: 270,
              column: 10
            },
            end: {
              line: 270,
              column: 31
            }
          }],
          line: 268
        },
        "15": {
          loc: {
            start: {
              line: 275,
              column: 24
            },
            end: {
              line: 275,
              column: 113
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 275,
              column: 58
            },
            end: {
              line: 275,
              column: 71
            }
          }, {
            start: {
              line: 275,
              column: 74
            },
            end: {
              line: 275,
              column: 113
            }
          }],
          line: 275
        },
        "16": {
          loc: {
            start: {
              line: 279,
              column: 6
            },
            end: {
              line: 281,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 279,
              column: 6
            },
            end: {
              line: 281,
              column: 7
            }
          }, {
            start: {
              line: 279,
              column: 6
            },
            end: {
              line: 281,
              column: 7
            }
          }],
          line: 279
        },
        "17": {
          loc: {
            start: {
              line: 302,
              column: 10
            },
            end: {
              line: 304,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 302,
              column: 10
            },
            end: {
              line: 304,
              column: 11
            }
          }, {
            start: {
              line: 302,
              column: 10
            },
            end: {
              line: 304,
              column: 11
            }
          }],
          line: 302
        },
        "18": {
          loc: {
            start: {
              line: 317,
              column: 6
            },
            end: {
              line: 319,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 317,
              column: 6
            },
            end: {
              line: 319,
              column: 7
            }
          }, {
            start: {
              line: 317,
              column: 6
            },
            end: {
              line: 319,
              column: 7
            }
          }],
          line: 317
        },
        "19": {
          loc: {
            start: {
              line: 322,
              column: 8
            },
            end: {
              line: 324,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 322,
              column: 8
            },
            end: {
              line: 324,
              column: 9
            }
          }, {
            start: {
              line: 322,
              column: 8
            },
            end: {
              line: 324,
              column: 9
            }
          }],
          line: 322
        },
        "20": {
          loc: {
            start: {
              line: 330,
              column: 8
            },
            end: {
              line: 332,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 330,
              column: 8
            },
            end: {
              line: 332,
              column: 9
            }
          }, {
            start: {
              line: 330,
              column: 8
            },
            end: {
              line: 332,
              column: 9
            }
          }],
          line: 330
        },
        "21": {
          loc: {
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 343,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 343,
              column: 7
            }
          }, {
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 343,
              column: 7
            }
          }],
          line: 335
        },
        "22": {
          loc: {
            start: {
              line: 351,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 351,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          }, {
            start: {
              line: 351,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          }],
          line: 351
        },
        "23": {
          loc: {
            start: {
              line: 351,
              column: 10
            },
            end: {
              line: 351,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 351,
              column: 10
            },
            end: {
              line: 351,
              column: 46
            }
          }, {
            start: {
              line: 351,
              column: 50
            },
            end: {
              line: 351,
              column: 64
            }
          }],
          line: 351
        },
        "24": {
          loc: {
            start: {
              line: 358,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 358,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          }, {
            start: {
              line: 358,
              column: 6
            },
            end: {
              line: 360,
              column: 7
            }
          }],
          line: 358
        },
        "25": {
          loc: {
            start: {
              line: 362,
              column: 6
            },
            end: {
              line: 364,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 362,
              column: 6
            },
            end: {
              line: 364,
              column: 7
            }
          }, {
            start: {
              line: 362,
              column: 6
            },
            end: {
              line: 364,
              column: 7
            }
          }],
          line: 362
        },
        "26": {
          loc: {
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 371,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 371,
              column: 5
            }
          }, {
            start: {
              line: 369,
              column: 4
            },
            end: {
              line: 371,
              column: 5
            }
          }],
          line: 369
        },
        "27": {
          loc: {
            start: {
              line: 377,
              column: 4
            },
            end: {
              line: 379,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 377,
              column: 4
            },
            end: {
              line: 379,
              column: 5
            }
          }, {
            start: {
              line: 377,
              column: 4
            },
            end: {
              line: 379,
              column: 5
            }
          }],
          line: 377
        },
        "28": {
          loc: {
            start: {
              line: 385,
              column: 4
            },
            end: {
              line: 393,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 385,
              column: 4
            },
            end: {
              line: 393,
              column: 5
            }
          }, {
            start: {
              line: 385,
              column: 4
            },
            end: {
              line: 393,
              column: 5
            }
          }],
          line: 385
        },
        "29": {
          loc: {
            start: {
              line: 399,
              column: 4
            },
            end: {
              line: 401,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 399,
              column: 4
            },
            end: {
              line: 401,
              column: 5
            }
          }, {
            start: {
              line: 399,
              column: 4
            },
            end: {
              line: 401,
              column: 5
            }
          }],
          line: 399
        },
        "30": {
          loc: {
            start: {
              line: 415,
              column: 15
            },
            end: {
              line: 415,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 415,
              column: 15
            },
            end: {
              line: 415,
              column: 23
            }
          }, {
            start: {
              line: 415,
              column: 27
            },
            end: {
              line: 415,
              column: 53
            }
          }],
          line: 415
        },
        "31": {
          loc: {
            start: {
              line: 427,
              column: 4
            },
            end: {
              line: 438,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 427,
              column: 4
            },
            end: {
              line: 438,
              column: 5
            }
          }, {
            start: {
              line: 427,
              column: 4
            },
            end: {
              line: 438,
              column: 5
            }
          }],
          line: 427
        },
        "32": {
          loc: {
            start: {
              line: 427,
              column: 8
            },
            end: {
              line: 427,
              column: 75
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 427,
              column: 8
            },
            end: {
              line: 427,
              column: 35
            }
          }, {
            start: {
              line: 427,
              column: 40
            },
            end: {
              line: 427,
              column: 56
            }
          }, {
            start: {
              line: 427,
              column: 60
            },
            end: {
              line: 427,
              column: 74
            }
          }],
          line: 427
        },
        "33": {
          loc: {
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 435,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 435,
              column: 7
            }
          }, {
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 435,
              column: 7
            }
          }],
          line: 429
        },
        "34": {
          loc: {
            start: {
              line: 430,
              column: 8
            },
            end: {
              line: 432,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 430,
              column: 8
            },
            end: {
              line: 432,
              column: 9
            }
          }, {
            start: {
              line: 430,
              column: 8
            },
            end: {
              line: 432,
              column: 9
            }
          }],
          line: 430
        },
        "35": {
          loc: {
            start: {
              line: 437,
              column: 15
            },
            end: {
              line: 437,
              column: 37
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 437,
              column: 22
            },
            end: {
              line: 437,
              column: 28
            }
          }, {
            start: {
              line: 437,
              column: 31
            },
            end: {
              line: 437,
              column: 37
            }
          }],
          line: 437
        },
        "36": {
          loc: {
            start: {
              line: 444,
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
              line: 444,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }, {
            start: {
              line: 444,
              column: 4
            },
            end: {
              line: 448,
              column: 5
            }
          }],
          line: 444
        },
        "37": {
          loc: {
            start: {
              line: 445,
              column: 14
            },
            end: {
              line: 447,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 446,
              column: 10
            },
            end: {
              line: 446,
              column: 46
            }
          }, {
            start: {
              line: 447,
              column: 10
            },
            end: {
              line: 447,
              column: 27
            }
          }],
          line: 445
        },
        "38": {
          loc: {
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 488,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 488,
              column: 7
            }
          }, {
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 488,
              column: 7
            }
          }],
          line: 463
        },
        "39": {
          loc: {
            start: {
              line: 469,
              column: 13
            },
            end: {
              line: 488,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 469,
              column: 13
            },
            end: {
              line: 488,
              column: 7
            }
          }, {
            start: {
              line: 469,
              column: 13
            },
            end: {
              line: 488,
              column: 7
            }
          }],
          line: 469
        },
        "40": {
          loc: {
            start: {
              line: 470,
              column: 24
            },
            end: {
              line: 472,
              column: 42
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 471,
              column: 12
            },
            end: {
              line: 471,
              column: 45
            }
          }, {
            start: {
              line: 472,
              column: 12
            },
            end: {
              line: 472,
              column: 42
            }
          }],
          line: 470
        },
        "41": {
          loc: {
            start: {
              line: 473,
              column: 25
            },
            end: {
              line: 475,
              column: 43
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 474,
              column: 12
            },
            end: {
              line: 474,
              column: 45
            }
          }, {
            start: {
              line: 475,
              column: 12
            },
            end: {
              line: 475,
              column: 43
            }
          }],
          line: 473
        },
        "42": {
          loc: {
            start: {
              line: 494,
              column: 8
            },
            end: {
              line: 496,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 494,
              column: 8
            },
            end: {
              line: 496,
              column: 9
            }
          }, {
            start: {
              line: 494,
              column: 8
            },
            end: {
              line: 496,
              column: 9
            }
          }],
          line: 494
        },
        "43": {
          loc: {
            start: {
              line: 500,
              column: 4
            },
            end: {
              line: 508,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 500,
              column: 4
            },
            end: {
              line: 508,
              column: 5
            }
          }, {
            start: {
              line: 500,
              column: 4
            },
            end: {
              line: 508,
              column: 5
            }
          }],
          line: 500
        },
        "44": {
          loc: {
            start: {
              line: 513,
              column: 4
            },
            end: {
              line: 520,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 513,
              column: 4
            },
            end: {
              line: 520,
              column: 5
            }
          }, {
            start: {
              line: 513,
              column: 4
            },
            end: {
              line: 520,
              column: 5
            }
          }],
          line: 513
        },
        "45": {
          loc: {
            start: {
              line: 513,
              column: 8
            },
            end: {
              line: 514,
              column: 30
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 513,
              column: 8
            },
            end: {
              line: 513,
              column: 42
            }
          }, {
            start: {
              line: 514,
              column: 8
            },
            end: {
              line: 514,
              column: 30
            }
          }],
          line: 513
        },
        "46": {
          loc: {
            start: {
              line: 517,
              column: 8
            },
            end: {
              line: 517,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 517,
              column: 8
            },
            end: {
              line: 517,
              column: 42
            }
          }, {
            start: {
              line: 517,
              column: 46
            },
            end: {
              line: 517,
              column: 48
            }
          }],
          line: 517
        },
        "47": {
          loc: {
            start: {
              line: 526,
              column: 14
            },
            end: {
              line: 526,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 526,
              column: 14
            },
            end: {
              line: 526,
              column: 21
            }
          }, {
            start: {
              line: 526,
              column: 25
            },
            end: {
              line: 526,
              column: 61
            }
          }],
          line: 526
        },
        "48": {
          loc: {
            start: {
              line: 528,
              column: 4
            },
            end: {
              line: 534,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 528,
              column: 4
            },
            end: {
              line: 534,
              column: 5
            }
          }, {
            start: {
              line: 528,
              column: 4
            },
            end: {
              line: 534,
              column: 5
            }
          }],
          line: 528
        },
        "49": {
          loc: {
            start: {
              line: 536,
              column: 4
            },
            end: {
              line: 540,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 536,
              column: 4
            },
            end: {
              line: 540,
              column: 5
            }
          }, {
            start: {
              line: 536,
              column: 4
            },
            end: {
              line: 540,
              column: 5
            }
          }],
          line: 536
        },
        "50": {
          loc: {
            start: {
              line: 538,
              column: 8
            },
            end: {
              line: 538,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 538,
              column: 35
            },
            end: {
              line: 538,
              column: 48
            }
          }, {
            start: {
              line: 538,
              column: 51
            },
            end: {
              line: 538,
              column: 64
            }
          }],
          line: 538
        },
        "51": {
          loc: {
            start: {
              line: 542,
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
              line: 542,
              column: 4
            },
            end: {
              line: 546,
              column: 5
            }
          }, {
            start: {
              line: 542,
              column: 4
            },
            end: {
              line: 546,
              column: 5
            }
          }],
          line: 542
        },
        "52": {
          loc: {
            start: {
              line: 542,
              column: 8
            },
            end: {
              line: 543,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 542,
              column: 8
            },
            end: {
              line: 542,
              column: 59
            }
          }, {
            start: {
              line: 543,
              column: 8
            },
            end: {
              line: 543,
              column: 47
            }
          }],
          line: 542
        },
        "53": {
          loc: {
            start: {
              line: 552,
              column: 4
            },
            end: {
              line: 555,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 552,
              column: 4
            },
            end: {
              line: 555,
              column: 5
            }
          }, {
            start: {
              line: 552,
              column: 4
            },
            end: {
              line: 555,
              column: 5
            }
          }],
          line: 552
        },
        "54": {
          loc: {
            start: {
              line: 552,
              column: 8
            },
            end: {
              line: 552,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 552,
              column: 8
            },
            end: {
              line: 552,
              column: 29
            }
          }, {
            start: {
              line: 552,
              column: 33
            },
            end: {
              line: 552,
              column: 59
            }
          }],
          line: 552
        },
        "55": {
          loc: {
            start: {
              line: 558,
              column: 6
            },
            end: {
              line: 560,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 558,
              column: 6
            },
            end: {
              line: 560,
              column: 7
            }
          }, {
            start: {
              line: 558,
              column: 6
            },
            end: {
              line: 560,
              column: 7
            }
          }],
          line: 558
        },
        "56": {
          loc: {
            start: {
              line: 567,
              column: 14
            },
            end: {
              line: 567,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 567,
              column: 14
            },
            end: {
              line: 567,
              column: 21
            }
          }, {
            start: {
              line: 567,
              column: 25
            },
            end: {
              line: 567,
              column: 61
            }
          }],
          line: 567
        },
        "57": {
          loc: {
            start: {
              line: 569,
              column: 4
            },
            end: {
              line: 575,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 569,
              column: 4
            },
            end: {
              line: 575,
              column: 5
            }
          }, {
            start: {
              line: 569,
              column: 4
            },
            end: {
              line: 575,
              column: 5
            }
          }],
          line: 569
        },
        "58": {
          loc: {
            start: {
              line: 577,
              column: 4
            },
            end: {
              line: 581,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 577,
              column: 4
            },
            end: {
              line: 581,
              column: 5
            }
          }, {
            start: {
              line: 577,
              column: 4
            },
            end: {
              line: 581,
              column: 5
            }
          }],
          line: 577
        },
        "59": {
          loc: {
            start: {
              line: 579,
              column: 8
            },
            end: {
              line: 579,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 579,
              column: 36
            },
            end: {
              line: 579,
              column: 49
            }
          }, {
            start: {
              line: 579,
              column: 52
            },
            end: {
              line: 579,
              column: 65
            }
          }],
          line: 579
        },
        "60": {
          loc: {
            start: {
              line: 583,
              column: 4
            },
            end: {
              line: 585,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 583,
              column: 4
            },
            end: {
              line: 585,
              column: 5
            }
          }, {
            start: {
              line: 583,
              column: 4
            },
            end: {
              line: 585,
              column: 5
            }
          }],
          line: 583
        },
        "61": {
          loc: {
            start: {
              line: 591,
              column: 4
            },
            end: {
              line: 594,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 591,
              column: 4
            },
            end: {
              line: 594,
              column: 5
            }
          }, {
            start: {
              line: 591,
              column: 4
            },
            end: {
              line: 594,
              column: 5
            }
          }],
          line: 591
        },
        "62": {
          loc: {
            start: {
              line: 591,
              column: 8
            },
            end: {
              line: 591,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 591,
              column: 8
            },
            end: {
              line: 591,
              column: 29
            }
          }, {
            start: {
              line: 591,
              column: 33
            },
            end: {
              line: 591,
              column: 59
            }
          }],
          line: 591
        },
        "63": {
          loc: {
            start: {
              line: 597,
              column: 6
            },
            end: {
              line: 599,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 597,
              column: 6
            },
            end: {
              line: 599,
              column: 7
            }
          }, {
            start: {
              line: 597,
              column: 6
            },
            end: {
              line: 599,
              column: 7
            }
          }],
          line: 597
        },
        "64": {
          loc: {
            start: {
              line: 605,
              column: 6
            },
            end: {
              line: 607,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 605,
              column: 6
            },
            end: {
              line: 607,
              column: 7
            }
          }, {
            start: {
              line: 605,
              column: 6
            },
            end: {
              line: 607,
              column: 7
            }
          }],
          line: 605
        },
        "65": {
          loc: {
            start: {
              line: 617,
              column: 9
            },
            end: {
              line: 617,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 617,
              column: 48
            },
            end: {
              line: 617,
              column: 54
            }
          }, {
            start: {
              line: 617,
              column: 57
            },
            end: {
              line: 617,
              column: 59
            }
          }],
          line: 617
        },
        "66": {
          loc: {
            start: {
              line: 617,
              column: 9
            },
            end: {
              line: 617,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 617,
              column: 9
            },
            end: {
              line: 617,
              column: 35
            }
          }, {
            start: {
              line: 617,
              column: 39
            },
            end: {
              line: 617,
              column: 45
            }
          }],
          line: 617
        },
        "67": {
          loc: {
            start: {
              line: 620,
              column: 4
            },
            end: {
              line: 625,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 620,
              column: 4
            },
            end: {
              line: 625,
              column: 5
            }
          }, {
            start: {
              line: 620,
              column: 4
            },
            end: {
              line: 625,
              column: 5
            }
          }],
          line: 620
        },
        "68": {
          loc: {
            start: {
              line: 627,
              column: 4
            },
            end: {
              line: 629,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 627,
              column: 4
            },
            end: {
              line: 629,
              column: 5
            }
          }, {
            start: {
              line: 627,
              column: 4
            },
            end: {
              line: 629,
              column: 5
            }
          }],
          line: 627
        },
        "69": {
          loc: {
            start: {
              line: 631,
              column: 4
            },
            end: {
              line: 633,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 631,
              column: 4
            },
            end: {
              line: 633,
              column: 5
            }
          }, {
            start: {
              line: 631,
              column: 4
            },
            end: {
              line: 633,
              column: 5
            }
          }],
          line: 631
        },
        "70": {
          loc: {
            start: {
              line: 647,
              column: 4
            },
            end: {
              line: 653,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 647,
              column: 4
            },
            end: {
              line: 653,
              column: 5
            }
          }, {
            start: {
              line: 647,
              column: 4
            },
            end: {
              line: 653,
              column: 5
            }
          }],
          line: 647
        },
        "71": {
          loc: {
            start: {
              line: 649,
              column: 8
            },
            end: {
              line: 651,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 649,
              column: 8
            },
            end: {
              line: 651,
              column: 9
            }
          }, {
            start: {
              line: 649,
              column: 8
            },
            end: {
              line: 651,
              column: 9
            }
          }],
          line: 649
        },
        "72": {
          loc: {
            start: {
              line: 661,
              column: 4
            },
            end: {
              line: 663,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 661,
              column: 4
            },
            end: {
              line: 663,
              column: 5
            }
          }, {
            start: {
              line: 661,
              column: 4
            },
            end: {
              line: 663,
              column: 5
            }
          }],
          line: 661
        },
        "73": {
          loc: {
            start: {
              line: 661,
              column: 8
            },
            end: {
              line: 661,
              column: 44
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 661,
              column: 8
            },
            end: {
              line: 661,
              column: 25
            }
          }, {
            start: {
              line: 661,
              column: 29
            },
            end: {
              line: 661,
              column: 44
            }
          }],
          line: 661
        },
        "74": {
          loc: {
            start: {
              line: 676,
              column: 4
            },
            end: {
              line: 678,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 676,
              column: 4
            },
            end: {
              line: 678,
              column: 5
            }
          }, {
            start: {
              line: 676,
              column: 4
            },
            end: {
              line: 678,
              column: 5
            }
          }],
          line: 676
        },
        "75": {
          loc: {
            start: {
              line: 691,
              column: 22
            },
            end: {
              line: 691,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 691,
              column: 22
            },
            end: {
              line: 691,
              column: 48
            }
          }, {
            start: {
              line: 691,
              column: 52
            },
            end: {
              line: 691,
              column: 58
            }
          }],
          line: 691
        },
        "76": {
          loc: {
            start: {
              line: 693,
              column: 6
            },
            end: {
              line: 695,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 693,
              column: 6
            },
            end: {
              line: 695,
              column: 7
            }
          }, {
            start: {
              line: 693,
              column: 6
            },
            end: {
              line: 695,
              column: 7
            }
          }],
          line: 693
        },
        "77": {
          loc: {
            start: {
              line: 693,
              column: 10
            },
            end: {
              line: 693,
              column: 46
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 693,
              column: 10
            },
            end: {
              line: 693,
              column: 15
            }
          }, {
            start: {
              line: 693,
              column: 19
            },
            end: {
              line: 693,
              column: 46
            }
          }],
          line: 693
        },
        "78": {
          loc: {
            start: {
              line: 697,
              column: 6
            },
            end: {
              line: 700,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 697,
              column: 6
            },
            end: {
              line: 700,
              column: 7
            }
          }, {
            start: {
              line: 697,
              column: 6
            },
            end: {
              line: 700,
              column: 7
            }
          }],
          line: 697
        },
        "79": {
          loc: {
            start: {
              line: 702,
              column: 6
            },
            end: {
              line: 707,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 702,
              column: 6
            },
            end: {
              line: 707,
              column: 7
            }
          }, {
            start: {
              line: 702,
              column: 6
            },
            end: {
              line: 707,
              column: 7
            }
          }],
          line: 702
        },
        "80": {
          loc: {
            start: {
              line: 703,
              column: 8
            },
            end: {
              line: 705,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 703,
              column: 8
            },
            end: {
              line: 705,
              column: 9
            }
          }, {
            start: {
              line: 703,
              column: 8
            },
            end: {
              line: 705,
              column: 9
            }
          }],
          line: 703
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
        "253": 0,
        "254": 0,
        "255": 0,
        "256": 0,
        "257": 0,
        "258": 0,
        "259": 0,
        "260": 0,
        "261": 0,
        "262": 0,
        "263": 0,
        "264": 0,
        "265": 0
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
        "44": 0,
        "45": 0,
        "46": 0
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
        "62": [0, 0],
        "63": [0, 0],
        "64": [0, 0],
        "65": [0, 0],
        "66": [0, 0],
        "67": [0, 0],
        "68": [0, 0],
        "69": [0, 0],
        "70": [0, 0],
        "71": [0, 0],
        "72": [0, 0],
        "73": [0, 0],
        "74": [0, 0],
        "75": [0, 0],
        "76": [0, 0],
        "77": [0, 0],
        "78": [0, 0],
        "79": [0, 0],
        "80": [0, 0]
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
   * Bootstrap (v4.1.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_255pnydwtb.s[0]++, 'tooltip');
  var VERSION = (cov_255pnydwtb.s[1]++, '4.1.3');
  var DATA_KEY = (cov_255pnydwtb.s[2]++, 'bs.tooltip');
  var EVENT_KEY = (cov_255pnydwtb.s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_255pnydwtb.s[4]++, $.fn[NAME]);
  var CLASS_PREFIX = (cov_255pnydwtb.s[5]++, 'bs-tooltip');
  var BSCLS_PREFIX_REGEX = (cov_255pnydwtb.s[6]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
  var DefaultType = (cov_255pnydwtb.s[7]++, {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)'
  });
  var AttachmentMap = (cov_255pnydwtb.s[8]++, {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  });
  var Default = (cov_255pnydwtb.s[9]++, {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent'
  });
  var HoverState = (cov_255pnydwtb.s[10]++, {
    SHOW: 'show',
    OUT: 'out'
  });
  var Event = (cov_255pnydwtb.s[11]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  });
  var ClassName = (cov_255pnydwtb.s[12]++, {
    FADE: 'fade',
    SHOW: 'show'
  });
  var Selector = (cov_255pnydwtb.s[13]++, {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  });
  var Trigger = (cov_255pnydwtb.s[14]++, {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      cov_255pnydwtb.f[0]++;
      cov_255pnydwtb.s[15]++;

      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        cov_255pnydwtb.b[0][0]++;
        cov_255pnydwtb.s[16]++;
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } else {
        cov_255pnydwtb.b[0][1]++;
      } // private


      cov_255pnydwtb.s[17]++;
      this._isEnabled = true;
      cov_255pnydwtb.s[18]++;
      this._timeout = 0;
      cov_255pnydwtb.s[19]++;
      this._hoverState = '';
      cov_255pnydwtb.s[20]++;
      this._activeTrigger = {};
      cov_255pnydwtb.s[21]++;
      this._popper = null; // Protected

      cov_255pnydwtb.s[22]++;
      this.element = element;
      cov_255pnydwtb.s[23]++;
      this.config = this._getConfig(config);
      cov_255pnydwtb.s[24]++;
      this.tip = null;
      cov_255pnydwtb.s[25]++;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      cov_255pnydwtb.f[8]++;
      cov_255pnydwtb.s[33]++;
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      cov_255pnydwtb.f[9]++;
      cov_255pnydwtb.s[34]++;
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      cov_255pnydwtb.f[10]++;
      cov_255pnydwtb.s[35]++;
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      cov_255pnydwtb.f[11]++;
      cov_255pnydwtb.s[36]++;

      if (!this._isEnabled) {
        cov_255pnydwtb.b[1][0]++;
        cov_255pnydwtb.s[37]++;
        return;
      } else {
        cov_255pnydwtb.b[1][1]++;
      }

      cov_255pnydwtb.s[38]++;

      if (event) {
        cov_255pnydwtb.b[2][0]++;
        var dataKey = (cov_255pnydwtb.s[39]++, this.constructor.DATA_KEY);
        var context = (cov_255pnydwtb.s[40]++, $(event.currentTarget).data(dataKey));
        cov_255pnydwtb.s[41]++;

        if (!context) {
          cov_255pnydwtb.b[3][0]++;
          cov_255pnydwtb.s[42]++;
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          cov_255pnydwtb.s[43]++;
          $(event.currentTarget).data(dataKey, context);
        } else {
          cov_255pnydwtb.b[3][1]++;
        }

        cov_255pnydwtb.s[44]++;
        context._activeTrigger.click = !context._activeTrigger.click;
        cov_255pnydwtb.s[45]++;

        if (context._isWithActiveTrigger()) {
          cov_255pnydwtb.b[4][0]++;
          cov_255pnydwtb.s[46]++;

          context._enter(null, context);
        } else {
          cov_255pnydwtb.b[4][1]++;
          cov_255pnydwtb.s[47]++;

          context._leave(null, context);
        }
      } else {
        cov_255pnydwtb.b[2][1]++;
        cov_255pnydwtb.s[48]++;

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          cov_255pnydwtb.b[5][0]++;
          cov_255pnydwtb.s[49]++;

          this._leave(null, this);

          cov_255pnydwtb.s[50]++;
          return;
        } else {
          cov_255pnydwtb.b[5][1]++;
        }

        cov_255pnydwtb.s[51]++;

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      cov_255pnydwtb.f[12]++;
      cov_255pnydwtb.s[52]++;
      clearTimeout(this._timeout);
      cov_255pnydwtb.s[53]++;
      $.removeData(this.element, this.constructor.DATA_KEY);
      cov_255pnydwtb.s[54]++;
      $(this.element).off(this.constructor.EVENT_KEY);
      cov_255pnydwtb.s[55]++;
      $(this.element).closest('.modal').off('hide.bs.modal');
      cov_255pnydwtb.s[56]++;

      if (this.tip) {
        cov_255pnydwtb.b[6][0]++;
        cov_255pnydwtb.s[57]++;
        $(this.tip).remove();
      } else {
        cov_255pnydwtb.b[6][1]++;
      }

      cov_255pnydwtb.s[58]++;
      this._isEnabled = null;
      cov_255pnydwtb.s[59]++;
      this._timeout = null;
      cov_255pnydwtb.s[60]++;
      this._hoverState = null;
      cov_255pnydwtb.s[61]++;
      this._activeTrigger = null;
      cov_255pnydwtb.s[62]++;

      if (this._popper !== null) {
        cov_255pnydwtb.b[7][0]++;
        cov_255pnydwtb.s[63]++;

        this._popper.destroy();
      } else {
        cov_255pnydwtb.b[7][1]++;
      }

      cov_255pnydwtb.s[64]++;
      this._popper = null;
      cov_255pnydwtb.s[65]++;
      this.element = null;
      cov_255pnydwtb.s[66]++;
      this.config = null;
      cov_255pnydwtb.s[67]++;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      cov_255pnydwtb.f[13]++;
      cov_255pnydwtb.s[68]++;

      if ($(this.element).css('display') === 'none') {
        cov_255pnydwtb.b[8][0]++;
        cov_255pnydwtb.s[69]++;
        throw new Error('Please use show on visible elements');
      } else {
        cov_255pnydwtb.b[8][1]++;
      }

      var showEvent = (cov_255pnydwtb.s[70]++, $.Event(this.constructor.Event.SHOW));
      cov_255pnydwtb.s[71]++;

      if ((cov_255pnydwtb.b[10][0]++, this.isWithContent()) && (cov_255pnydwtb.b[10][1]++, this._isEnabled)) {
        cov_255pnydwtb.b[9][0]++;
        cov_255pnydwtb.s[72]++;
        $(this.element).trigger(showEvent);
        var isInTheDom = (cov_255pnydwtb.s[73]++, $.contains(this.element.ownerDocument.documentElement, this.element));
        cov_255pnydwtb.s[74]++;

        if ((cov_255pnydwtb.b[12][0]++, showEvent.isDefaultPrevented()) || (cov_255pnydwtb.b[12][1]++, !isInTheDom)) {
          cov_255pnydwtb.b[11][0]++;
          cov_255pnydwtb.s[75]++;
          return;
        } else {
          cov_255pnydwtb.b[11][1]++;
        }

        var tip = (cov_255pnydwtb.s[76]++, this.getTipElement());
        var tipId = (cov_255pnydwtb.s[77]++, Util.getUID(this.constructor.NAME));
        cov_255pnydwtb.s[78]++;
        tip.setAttribute('id', tipId);
        cov_255pnydwtb.s[79]++;
        this.element.setAttribute('aria-describedby', tipId);
        cov_255pnydwtb.s[80]++;
        this.setContent();
        cov_255pnydwtb.s[81]++;

        if (this.config.animation) {
          cov_255pnydwtb.b[13][0]++;
          cov_255pnydwtb.s[82]++;
          $(tip).addClass(ClassName.FADE);
        } else {
          cov_255pnydwtb.b[13][1]++;
        }

        var placement = (cov_255pnydwtb.s[83]++, typeof this.config.placement === 'function' ? (cov_255pnydwtb.b[14][0]++, this.config.placement.call(this, tip, this.element)) : (cov_255pnydwtb.b[14][1]++, this.config.placement));
        var attachment = (cov_255pnydwtb.s[84]++, this._getAttachment(placement));
        cov_255pnydwtb.s[85]++;
        this.addAttachmentClass(attachment);
        var container = (cov_255pnydwtb.s[86]++, this.config.container === false ? (cov_255pnydwtb.b[15][0]++, document.body) : (cov_255pnydwtb.b[15][1]++, $(document).find(this.config.container)));
        cov_255pnydwtb.s[87]++;
        $(tip).data(this.constructor.DATA_KEY, this);
        cov_255pnydwtb.s[88]++;

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          cov_255pnydwtb.b[16][0]++;
          cov_255pnydwtb.s[89]++;
          $(tip).appendTo(container);
        } else {
          cov_255pnydwtb.b[16][1]++;
        }

        cov_255pnydwtb.s[90]++;
        $(this.element).trigger(this.constructor.Event.INSERTED);
        cov_255pnydwtb.s[91]++;
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            cov_255pnydwtb.f[14]++;
            cov_255pnydwtb.s[92]++;

            if (data.originalPlacement !== data.placement) {
              cov_255pnydwtb.b[17][0]++;
              cov_255pnydwtb.s[93]++;

              _this._handlePopperPlacementChange(data);
            } else {
              cov_255pnydwtb.b[17][1]++;
            }
          },
          onUpdate: function onUpdate(data) {
            cov_255pnydwtb.f[15]++;
            cov_255pnydwtb.s[94]++;

            _this._handlePopperPlacementChange(data);
          }
        });
        cov_255pnydwtb.s[95]++;
        $(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        cov_255pnydwtb.s[96]++;

        if ('ontouchstart' in document.documentElement) {
          cov_255pnydwtb.b[18][0]++;
          cov_255pnydwtb.s[97]++;
          $(document.body).children().on('mouseover', null, $.noop);
        } else {
          cov_255pnydwtb.b[18][1]++;
        }

        cov_255pnydwtb.s[98]++;

        var complete = function complete() {
          cov_255pnydwtb.f[16]++;
          cov_255pnydwtb.s[99]++;

          if (_this.config.animation) {
            cov_255pnydwtb.b[19][0]++;
            cov_255pnydwtb.s[100]++;

            _this._fixTransition();
          } else {
            cov_255pnydwtb.b[19][1]++;
          }

          var prevHoverState = (cov_255pnydwtb.s[101]++, _this._hoverState);
          cov_255pnydwtb.s[102]++;
          _this._hoverState = null;
          cov_255pnydwtb.s[103]++;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);
          cov_255pnydwtb.s[104]++;

          if (prevHoverState === HoverState.OUT) {
            cov_255pnydwtb.b[20][0]++;
            cov_255pnydwtb.s[105]++;

            _this._leave(null, _this);
          } else {
            cov_255pnydwtb.b[20][1]++;
          }
        };

        cov_255pnydwtb.s[106]++;

        if ($(this.tip).hasClass(ClassName.FADE)) {
          cov_255pnydwtb.b[21][0]++;
          var transitionDuration = (cov_255pnydwtb.s[107]++, Util.getTransitionDurationFromElement(this.tip));
          cov_255pnydwtb.s[108]++;
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_255pnydwtb.b[21][1]++;
          cov_255pnydwtb.s[109]++;
          complete();
        }
      } else {
        cov_255pnydwtb.b[9][1]++;
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      cov_255pnydwtb.f[17]++;
      var tip = (cov_255pnydwtb.s[110]++, this.getTipElement());
      var hideEvent = (cov_255pnydwtb.s[111]++, $.Event(this.constructor.Event.HIDE));
      cov_255pnydwtb.s[112]++;

      var complete = function complete() {
        cov_255pnydwtb.f[18]++;
        cov_255pnydwtb.s[113]++;

        if ((cov_255pnydwtb.b[23][0]++, _this2._hoverState !== HoverState.SHOW) && (cov_255pnydwtb.b[23][1]++, tip.parentNode)) {
          cov_255pnydwtb.b[22][0]++;
          cov_255pnydwtb.s[114]++;
          tip.parentNode.removeChild(tip);
        } else {
          cov_255pnydwtb.b[22][1]++;
        }

        cov_255pnydwtb.s[115]++;

        _this2._cleanTipClass();

        cov_255pnydwtb.s[116]++;

        _this2.element.removeAttribute('aria-describedby');

        cov_255pnydwtb.s[117]++;
        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
        cov_255pnydwtb.s[118]++;

        if (_this2._popper !== null) {
          cov_255pnydwtb.b[24][0]++;
          cov_255pnydwtb.s[119]++;

          _this2._popper.destroy();
        } else {
          cov_255pnydwtb.b[24][1]++;
        }

        cov_255pnydwtb.s[120]++;

        if (callback) {
          cov_255pnydwtb.b[25][0]++;
          cov_255pnydwtb.s[121]++;
          callback();
        } else {
          cov_255pnydwtb.b[25][1]++;
        }
      };

      cov_255pnydwtb.s[122]++;
      $(this.element).trigger(hideEvent);
      cov_255pnydwtb.s[123]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_255pnydwtb.b[26][0]++;
        cov_255pnydwtb.s[124]++;
        return;
      } else {
        cov_255pnydwtb.b[26][1]++;
      }

      cov_255pnydwtb.s[125]++;
      $(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      cov_255pnydwtb.s[126]++;

      if ('ontouchstart' in document.documentElement) {
        cov_255pnydwtb.b[27][0]++;
        cov_255pnydwtb.s[127]++;
        $(document.body).children().off('mouseover', null, $.noop);
      } else {
        cov_255pnydwtb.b[27][1]++;
      }

      cov_255pnydwtb.s[128]++;
      this._activeTrigger[Trigger.CLICK] = false;
      cov_255pnydwtb.s[129]++;
      this._activeTrigger[Trigger.FOCUS] = false;
      cov_255pnydwtb.s[130]++;
      this._activeTrigger[Trigger.HOVER] = false;
      cov_255pnydwtb.s[131]++;

      if ($(this.tip).hasClass(ClassName.FADE)) {
        cov_255pnydwtb.b[28][0]++;
        var transitionDuration = (cov_255pnydwtb.s[132]++, Util.getTransitionDurationFromElement(tip));
        cov_255pnydwtb.s[133]++;
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_255pnydwtb.b[28][1]++;
        cov_255pnydwtb.s[134]++;
        complete();
      }

      cov_255pnydwtb.s[135]++;
      this._hoverState = '';
    };

    _proto.update = function update() {
      cov_255pnydwtb.f[19]++;
      cov_255pnydwtb.s[136]++;

      if (this._popper !== null) {
        cov_255pnydwtb.b[29][0]++;
        cov_255pnydwtb.s[137]++;

        this._popper.scheduleUpdate();
      } else {
        cov_255pnydwtb.b[29][1]++;
      }
    }; // Protected


    _proto.isWithContent = function isWithContent() {
      cov_255pnydwtb.f[20]++;
      cov_255pnydwtb.s[138]++;
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      cov_255pnydwtb.f[21]++;
      cov_255pnydwtb.s[139]++;
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      cov_255pnydwtb.f[22]++;
      cov_255pnydwtb.s[140]++;
      this.tip = (cov_255pnydwtb.b[30][0]++, this.tip) || (cov_255pnydwtb.b[30][1]++, $(this.config.template)[0]);
      cov_255pnydwtb.s[141]++;
      return this.tip;
    };

    _proto.setContent = function setContent() {
      cov_255pnydwtb.f[23]++;
      var tip = (cov_255pnydwtb.s[142]++, this.getTipElement());
      cov_255pnydwtb.s[143]++;
      this.setElementContent($(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
      cov_255pnydwtb.s[144]++;
      $(tip).removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      cov_255pnydwtb.f[24]++;
      var html = (cov_255pnydwtb.s[145]++, this.config.html);
      cov_255pnydwtb.s[146]++;

      if ((cov_255pnydwtb.b[32][0]++, typeof content === 'object') && ((cov_255pnydwtb.b[32][1]++, content.nodeType) || (cov_255pnydwtb.b[32][2]++, content.jquery))) {
        cov_255pnydwtb.b[31][0]++;
        cov_255pnydwtb.s[147]++;

        // Content is a DOM node or a jQuery
        if (html) {
          cov_255pnydwtb.b[33][0]++;
          cov_255pnydwtb.s[148]++;

          if (!$(content).parent().is($element)) {
            cov_255pnydwtb.b[34][0]++;
            cov_255pnydwtb.s[149]++;
            $element.empty().append(content);
          } else {
            cov_255pnydwtb.b[34][1]++;
          }
        } else {
          cov_255pnydwtb.b[33][1]++;
          cov_255pnydwtb.s[150]++;
          $element.text($(content).text());
        }
      } else {
        cov_255pnydwtb.b[31][1]++;
        cov_255pnydwtb.s[151]++;
        $element[html ? (cov_255pnydwtb.b[35][0]++, 'html') : (cov_255pnydwtb.b[35][1]++, 'text')](content);
      }
    };

    _proto.getTitle = function getTitle() {
      cov_255pnydwtb.f[25]++;
      var title = (cov_255pnydwtb.s[152]++, this.element.getAttribute('data-original-title'));
      cov_255pnydwtb.s[153]++;

      if (!title) {
        cov_255pnydwtb.b[36][0]++;
        cov_255pnydwtb.s[154]++;
        title = typeof this.config.title === 'function' ? (cov_255pnydwtb.b[37][0]++, this.config.title.call(this.element)) : (cov_255pnydwtb.b[37][1]++, this.config.title);
      } else {
        cov_255pnydwtb.b[36][1]++;
      }

      cov_255pnydwtb.s[155]++;
      return title;
    }; // Private


    _proto._getAttachment = function _getAttachment(placement) {
      cov_255pnydwtb.f[26]++;
      cov_255pnydwtb.s[156]++;
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      cov_255pnydwtb.f[27]++;
      var triggers = (cov_255pnydwtb.s[157]++, this.config.trigger.split(' '));
      cov_255pnydwtb.s[158]++;
      triggers.forEach(function (trigger) {
        cov_255pnydwtb.f[28]++;
        cov_255pnydwtb.s[159]++;

        if (trigger === 'click') {
          cov_255pnydwtb.b[38][0]++;
          cov_255pnydwtb.s[160]++;
          $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            cov_255pnydwtb.f[29]++;
            cov_255pnydwtb.s[161]++;
            return _this3.toggle(event);
          });
        } else {
          cov_255pnydwtb.b[38][1]++;
          cov_255pnydwtb.s[162]++;

          if (trigger !== Trigger.MANUAL) {
            cov_255pnydwtb.b[39][0]++;
            var eventIn = (cov_255pnydwtb.s[163]++, trigger === Trigger.HOVER ? (cov_255pnydwtb.b[40][0]++, _this3.constructor.Event.MOUSEENTER) : (cov_255pnydwtb.b[40][1]++, _this3.constructor.Event.FOCUSIN));
            var eventOut = (cov_255pnydwtb.s[164]++, trigger === Trigger.HOVER ? (cov_255pnydwtb.b[41][0]++, _this3.constructor.Event.MOUSELEAVE) : (cov_255pnydwtb.b[41][1]++, _this3.constructor.Event.FOCUSOUT));
            cov_255pnydwtb.s[165]++;
            $(_this3.element).on(eventIn, _this3.config.selector, function (event) {
              cov_255pnydwtb.f[30]++;
              cov_255pnydwtb.s[166]++;
              return _this3._enter(event);
            }).on(eventOut, _this3.config.selector, function (event) {
              cov_255pnydwtb.f[31]++;
              cov_255pnydwtb.s[167]++;
              return _this3._leave(event);
            });
          } else {
            cov_255pnydwtb.b[39][1]++;
          }
        }
      });
      cov_255pnydwtb.s[168]++;
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        cov_255pnydwtb.f[32]++;
        cov_255pnydwtb.s[169]++;

        if (_this3.element) {
          cov_255pnydwtb.b[42][0]++;
          cov_255pnydwtb.s[170]++;

          _this3.hide();
        } else {
          cov_255pnydwtb.b[42][1]++;
        }
      });
      cov_255pnydwtb.s[171]++;

      if (this.config.selector) {
        cov_255pnydwtb.b[43][0]++;
        cov_255pnydwtb.s[172]++;
        this.config = _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        cov_255pnydwtb.b[43][1]++;
        cov_255pnydwtb.s[173]++;

        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      cov_255pnydwtb.f[33]++;
      var titleType = (cov_255pnydwtb.s[174]++, typeof this.element.getAttribute('data-original-title'));
      cov_255pnydwtb.s[175]++;

      if ((cov_255pnydwtb.b[45][0]++, this.element.getAttribute('title')) || (cov_255pnydwtb.b[45][1]++, titleType !== 'string')) {
        cov_255pnydwtb.b[44][0]++;
        cov_255pnydwtb.s[176]++;
        this.element.setAttribute('data-original-title', (cov_255pnydwtb.b[46][0]++, this.element.getAttribute('title')) || (cov_255pnydwtb.b[46][1]++, ''));
        cov_255pnydwtb.s[177]++;
        this.element.setAttribute('title', '');
      } else {
        cov_255pnydwtb.b[44][1]++;
      }
    };

    _proto._enter = function _enter(event, context) {
      cov_255pnydwtb.f[34]++;
      var dataKey = (cov_255pnydwtb.s[178]++, this.constructor.DATA_KEY);
      cov_255pnydwtb.s[179]++;
      context = (cov_255pnydwtb.b[47][0]++, context) || (cov_255pnydwtb.b[47][1]++, $(event.currentTarget).data(dataKey));
      cov_255pnydwtb.s[180]++;

      if (!context) {
        cov_255pnydwtb.b[48][0]++;
        cov_255pnydwtb.s[181]++;
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        cov_255pnydwtb.s[182]++;
        $(event.currentTarget).data(dataKey, context);
      } else {
        cov_255pnydwtb.b[48][1]++;
      }

      cov_255pnydwtb.s[183]++;

      if (event) {
        cov_255pnydwtb.b[49][0]++;
        cov_255pnydwtb.s[184]++;
        context._activeTrigger[event.type === 'focusin' ? (cov_255pnydwtb.b[50][0]++, Trigger.FOCUS) : (cov_255pnydwtb.b[50][1]++, Trigger.HOVER)] = true;
      } else {
        cov_255pnydwtb.b[49][1]++;
      }

      cov_255pnydwtb.s[185]++;

      if ((cov_255pnydwtb.b[52][0]++, $(context.getTipElement()).hasClass(ClassName.SHOW)) || (cov_255pnydwtb.b[52][1]++, context._hoverState === HoverState.SHOW)) {
        cov_255pnydwtb.b[51][0]++;
        cov_255pnydwtb.s[186]++;
        context._hoverState = HoverState.SHOW;
        cov_255pnydwtb.s[187]++;
        return;
      } else {
        cov_255pnydwtb.b[51][1]++;
      }

      cov_255pnydwtb.s[188]++;
      clearTimeout(context._timeout);
      cov_255pnydwtb.s[189]++;
      context._hoverState = HoverState.SHOW;
      cov_255pnydwtb.s[190]++;

      if ((cov_255pnydwtb.b[54][0]++, !context.config.delay) || (cov_255pnydwtb.b[54][1]++, !context.config.delay.show)) {
        cov_255pnydwtb.b[53][0]++;
        cov_255pnydwtb.s[191]++;
        context.show();
        cov_255pnydwtb.s[192]++;
        return;
      } else {
        cov_255pnydwtb.b[53][1]++;
      }

      cov_255pnydwtb.s[193]++;
      context._timeout = setTimeout(function () {
        cov_255pnydwtb.f[35]++;
        cov_255pnydwtb.s[194]++;

        if (context._hoverState === HoverState.SHOW) {
          cov_255pnydwtb.b[55][0]++;
          cov_255pnydwtb.s[195]++;
          context.show();
        } else {
          cov_255pnydwtb.b[55][1]++;
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      cov_255pnydwtb.f[36]++;
      var dataKey = (cov_255pnydwtb.s[196]++, this.constructor.DATA_KEY);
      cov_255pnydwtb.s[197]++;
      context = (cov_255pnydwtb.b[56][0]++, context) || (cov_255pnydwtb.b[56][1]++, $(event.currentTarget).data(dataKey));
      cov_255pnydwtb.s[198]++;

      if (!context) {
        cov_255pnydwtb.b[57][0]++;
        cov_255pnydwtb.s[199]++;
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        cov_255pnydwtb.s[200]++;
        $(event.currentTarget).data(dataKey, context);
      } else {
        cov_255pnydwtb.b[57][1]++;
      }

      cov_255pnydwtb.s[201]++;

      if (event) {
        cov_255pnydwtb.b[58][0]++;
        cov_255pnydwtb.s[202]++;
        context._activeTrigger[event.type === 'focusout' ? (cov_255pnydwtb.b[59][0]++, Trigger.FOCUS) : (cov_255pnydwtb.b[59][1]++, Trigger.HOVER)] = false;
      } else {
        cov_255pnydwtb.b[58][1]++;
      }

      cov_255pnydwtb.s[203]++;

      if (context._isWithActiveTrigger()) {
        cov_255pnydwtb.b[60][0]++;
        cov_255pnydwtb.s[204]++;
        return;
      } else {
        cov_255pnydwtb.b[60][1]++;
      }

      cov_255pnydwtb.s[205]++;
      clearTimeout(context._timeout);
      cov_255pnydwtb.s[206]++;
      context._hoverState = HoverState.OUT;
      cov_255pnydwtb.s[207]++;

      if ((cov_255pnydwtb.b[62][0]++, !context.config.delay) || (cov_255pnydwtb.b[62][1]++, !context.config.delay.hide)) {
        cov_255pnydwtb.b[61][0]++;
        cov_255pnydwtb.s[208]++;
        context.hide();
        cov_255pnydwtb.s[209]++;
        return;
      } else {
        cov_255pnydwtb.b[61][1]++;
      }

      cov_255pnydwtb.s[210]++;
      context._timeout = setTimeout(function () {
        cov_255pnydwtb.f[37]++;
        cov_255pnydwtb.s[211]++;

        if (context._hoverState === HoverState.OUT) {
          cov_255pnydwtb.b[63][0]++;
          cov_255pnydwtb.s[212]++;
          context.hide();
        } else {
          cov_255pnydwtb.b[63][1]++;
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      cov_255pnydwtb.f[38]++;
      cov_255pnydwtb.s[213]++;

      for (var trigger in this._activeTrigger) {
        cov_255pnydwtb.s[214]++;

        if (this._activeTrigger[trigger]) {
          cov_255pnydwtb.b[64][0]++;
          cov_255pnydwtb.s[215]++;
          return true;
        } else {
          cov_255pnydwtb.b[64][1]++;
        }
      }

      cov_255pnydwtb.s[216]++;
      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      cov_255pnydwtb.f[39]++;
      cov_255pnydwtb.s[217]++;
      config = _objectSpread({}, this.constructor.Default, $(this.element).data(), (cov_255pnydwtb.b[66][0]++, typeof config === 'object') && (cov_255pnydwtb.b[66][1]++, config) ? (cov_255pnydwtb.b[65][0]++, config) : (cov_255pnydwtb.b[65][1]++, {}));
      cov_255pnydwtb.s[218]++;

      if (typeof config.delay === 'number') {
        cov_255pnydwtb.b[67][0]++;
        cov_255pnydwtb.s[219]++;
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      } else {
        cov_255pnydwtb.b[67][1]++;
      }

      cov_255pnydwtb.s[220]++;

      if (typeof config.title === 'number') {
        cov_255pnydwtb.b[68][0]++;
        cov_255pnydwtb.s[221]++;
        config.title = config.title.toString();
      } else {
        cov_255pnydwtb.b[68][1]++;
      }

      cov_255pnydwtb.s[222]++;

      if (typeof config.content === 'number') {
        cov_255pnydwtb.b[69][0]++;
        cov_255pnydwtb.s[223]++;
        config.content = config.content.toString();
      } else {
        cov_255pnydwtb.b[69][1]++;
      }

      cov_255pnydwtb.s[224]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_255pnydwtb.s[225]++;
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      cov_255pnydwtb.f[40]++;
      var config = (cov_255pnydwtb.s[226]++, {});
      cov_255pnydwtb.s[227]++;

      if (this.config) {
        cov_255pnydwtb.b[70][0]++;
        cov_255pnydwtb.s[228]++;

        for (var key in this.config) {
          cov_255pnydwtb.s[229]++;

          if (this.constructor.Default[key] !== this.config[key]) {
            cov_255pnydwtb.b[71][0]++;
            cov_255pnydwtb.s[230]++;
            config[key] = this.config[key];
          } else {
            cov_255pnydwtb.b[71][1]++;
          }
        }
      } else {
        cov_255pnydwtb.b[70][1]++;
      }

      cov_255pnydwtb.s[231]++;
      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      cov_255pnydwtb.f[41]++;
      var $tip = (cov_255pnydwtb.s[232]++, $(this.getTipElement()));
      var tabClass = (cov_255pnydwtb.s[233]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
      cov_255pnydwtb.s[234]++;

      if ((cov_255pnydwtb.b[73][0]++, tabClass !== null) && (cov_255pnydwtb.b[73][1]++, tabClass.length)) {
        cov_255pnydwtb.b[72][0]++;
        cov_255pnydwtb.s[235]++;
        $tip.removeClass(tabClass.join(''));
      } else {
        cov_255pnydwtb.b[72][1]++;
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      cov_255pnydwtb.f[42]++;
      var popperInstance = (cov_255pnydwtb.s[236]++, popperData.instance);
      cov_255pnydwtb.s[237]++;
      this.tip = popperInstance.popper;
      cov_255pnydwtb.s[238]++;

      this._cleanTipClass();

      cov_255pnydwtb.s[239]++;
      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      cov_255pnydwtb.f[43]++;
      var tip = (cov_255pnydwtb.s[240]++, this.getTipElement());
      var initConfigAnimation = (cov_255pnydwtb.s[241]++, this.config.animation);
      cov_255pnydwtb.s[242]++;

      if (tip.getAttribute('x-placement') !== null) {
        cov_255pnydwtb.b[74][0]++;
        cov_255pnydwtb.s[243]++;
        return;
      } else {
        cov_255pnydwtb.b[74][1]++;
      }

      cov_255pnydwtb.s[244]++;
      $(tip).removeClass(ClassName.FADE);
      cov_255pnydwtb.s[245]++;
      this.config.animation = false;
      cov_255pnydwtb.s[246]++;
      this.hide();
      cov_255pnydwtb.s[247]++;
      this.show();
      cov_255pnydwtb.s[248]++;
      this.config.animation = initConfigAnimation;
    }; // Static


    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      cov_255pnydwtb.f[44]++;
      cov_255pnydwtb.s[249]++;
      return this.each(function () {
        cov_255pnydwtb.f[45]++;
        var data = (cov_255pnydwtb.s[250]++, $(this).data(DATA_KEY));

        var _config = (cov_255pnydwtb.s[251]++, (cov_255pnydwtb.b[75][0]++, typeof config === 'object') && (cov_255pnydwtb.b[75][1]++, config));

        cov_255pnydwtb.s[252]++;

        if ((cov_255pnydwtb.b[77][0]++, !data) && (cov_255pnydwtb.b[77][1]++, /dispose|hide/.test(config))) {
          cov_255pnydwtb.b[76][0]++;
          cov_255pnydwtb.s[253]++;
          return;
        } else {
          cov_255pnydwtb.b[76][1]++;
        }

        cov_255pnydwtb.s[254]++;

        if (!data) {
          cov_255pnydwtb.b[78][0]++;
          cov_255pnydwtb.s[255]++;
          data = new Tooltip(this, _config);
          cov_255pnydwtb.s[256]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_255pnydwtb.b[78][1]++;
        }

        cov_255pnydwtb.s[257]++;

        if (typeof config === 'string') {
          cov_255pnydwtb.b[79][0]++;
          cov_255pnydwtb.s[258]++;

          if (typeof data[config] === 'undefined') {
            cov_255pnydwtb.b[80][0]++;
            cov_255pnydwtb.s[259]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_255pnydwtb.b[80][1]++;
          }

          cov_255pnydwtb.s[260]++;
          data[config]();
        } else {
          cov_255pnydwtb.b[79][1]++;
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        cov_255pnydwtb.f[1]++;
        cov_255pnydwtb.s[26]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_255pnydwtb.f[2]++;
        cov_255pnydwtb.s[27]++;
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        cov_255pnydwtb.f[3]++;
        cov_255pnydwtb.s[28]++;
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        cov_255pnydwtb.f[4]++;
        cov_255pnydwtb.s[29]++;
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        cov_255pnydwtb.f[5]++;
        cov_255pnydwtb.s[30]++;
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        cov_255pnydwtb.f[6]++;
        cov_255pnydwtb.s[31]++;
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_255pnydwtb.f[7]++;
        cov_255pnydwtb.s[32]++;
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  cov_255pnydwtb.s[261]++;
  $.fn[NAME] = Tooltip._jQueryInterface;
  cov_255pnydwtb.s[262]++;
  $.fn[NAME].Constructor = Tooltip;
  cov_255pnydwtb.s[263]++;

  $.fn[NAME].noConflict = function () {
    cov_255pnydwtb.f[46]++;
    cov_255pnydwtb.s[264]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_255pnydwtb.s[265]++;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;

})));
//# sourceMappingURL=tooltip.js.map
