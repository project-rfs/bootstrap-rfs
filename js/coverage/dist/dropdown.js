/*!
  * Bootstrap dropdown.js v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global.Dropdown = factory(global.jQuery,global.Popper,global.Util));
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

  var cov_l3h0gbc2i = function () {
    var path = "/Users/martijn.cuppens/workspace/bootstrap/js/src/dropdown.js",
        hash = "97f2efadd762d4507a1875f3711538248ab015e8",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/martijn.cuppens/workspace/bootstrap/js/src/dropdown.js",
      statementMap: {
        "0": {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 18,
            column: 43
          }
        },
        "1": {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 19,
            column: 40
          }
        },
        "2": {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 46
          }
        },
        "3": {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 47
          }
        },
        "4": {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 22,
            column: 44
          }
        },
        "5": {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 43
          }
        },
        "6": {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 24,
            column: 35
          }
        },
        "7": {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 35
          }
        },
        "8": {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 34
          }
        },
        "9": {
          start: {
            line: 27,
            column: 33
          },
          end: {
            line: 27,
            column: 35
          }
        },
        "10": {
          start: {
            line: 28,
            column: 33
          },
          end: {
            line: 28,
            column: 35
          }
        },
        "11": {
          start: {
            line: 29,
            column: 33
          },
          end: {
            line: 29,
            column: 34
          }
        },
        "12": {
          start: {
            line: 30,
            column: 33
          },
          end: {
            line: 30,
            column: 106
          }
        },
        "13": {
          start: {
            line: 32,
            column: 14
          },
          end: {
            line: 41,
            column: 1
          }
        },
        "14": {
          start: {
            line: 43,
            column: 18
          },
          end: {
            line: 52,
            column: 1
          }
        },
        "15": {
          start: {
            line: 54,
            column: 17
          },
          end: {
            line: 60,
            column: 1
          }
        },
        "16": {
          start: {
            line: 62,
            column: 22
          },
          end: {
            line: 71,
            column: 1
          }
        },
        "17": {
          start: {
            line: 73,
            column: 16
          },
          end: {
            line: 79,
            column: 1
          }
        },
        "18": {
          start: {
            line: 81,
            column: 20
          },
          end: {
            line: 87,
            column: 1
          }
        },
        "19": {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 28
          }
        },
        "20": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 25
          }
        },
        "21": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 44
          }
        },
        "22": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 100,
            column: 43
          }
        },
        "23": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 41
          }
        },
        "24": {
          start: {
            line: 103,
            column: 4
          },
          end: {
            line: 103,
            column: 29
          }
        },
        "25": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 18
          }
        },
        "26": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 18
          }
        },
        "27": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 22
          }
        },
        "28": {
          start: {
            line: 123,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        },
        "29": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 124,
            column: 12
          }
        },
        "30": {
          start: {
            line: 127,
            column: 21
          },
          end: {
            line: 127,
            column: 66
          }
        },
        "31": {
          start: {
            line: 128,
            column: 21
          },
          end: {
            line: 128,
            column: 59
          }
        },
        "32": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 26
          }
        },
        "33": {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 134,
            column: 5
          }
        },
        "34": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 133,
            column: 12
          }
        },
        "35": {
          start: {
            line: 136,
            column: 26
          },
          end: {
            line: 138,
            column: 5
          }
        },
        "36": {
          start: {
            line: 139,
            column: 22
          },
          end: {
            line: 139,
            column: 56
          }
        },
        "37": {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 141,
            column: 32
          }
        },
        "38": {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 145,
            column: 5
          }
        },
        "39": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 144,
            column: 12
          }
        },
        "40": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 177,
            column: 5
          }
        },
        "41": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 155,
            column: 7
          }
        },
        "42": {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 96
          }
        },
        "43": {
          start: {
            line: 157,
            column: 29
          },
          end: {
            line: 157,
            column: 42
          }
        },
        "44": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 168,
            column: 7
          }
        },
        "45": {
          start: {
            line: 160,
            column: 8
          },
          end: {
            line: 160,
            column: 33
          }
        },
        "46": {
          start: {
            line: 161,
            column: 13
          },
          end: {
            line: 168,
            column: 7
          }
        },
        "47": {
          start: {
            line: 162,
            column: 8
          },
          end: {
            line: 162,
            column: 49
          }
        },
        "48": {
          start: {
            line: 165,
            column: 8
          },
          end: {
            line: 167,
            column: 9
          }
        },
        "49": {
          start: {
            line: 166,
            column: 10
          },
          end: {
            line: 166,
            column: 54
          }
        },
        "50": {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 175,
            column: 7
          }
        },
        "51": {
          start: {
            line: 174,
            column: 8
          },
          end: {
            line: 174,
            column: 53
          }
        },
        "52": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 86
          }
        },
        "53": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        "54": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 185,
            column: 63
          }
        },
        "55": {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 188,
            column: 25
          }
        },
        "56": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 189,
            column: 53
          }
        },
        "57": {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 45
          }
        },
        "58": {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 194,
            column: 51
          }
        },
        "59": {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 200,
            column: 5
          }
        },
        "60": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 12
          }
        },
        "61": {
          start: {
            line: 202,
            column: 26
          },
          end: {
            line: 204,
            column: 5
          }
        },
        "62": {
          start: {
            line: 205,
            column: 22
          },
          end: {
            line: 205,
            column: 56
          }
        },
        "63": {
          start: {
            line: 207,
            column: 19
          },
          end: {
            line: 207,
            column: 64
          }
        },
        "64": {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 208,
            column: 32
          }
        },
        "65": {
          start: {
            line: 210,
            column: 4
          },
          end: {
            line: 212,
            column: 5
          }
        },
        "66": {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 211,
            column: 12
          }
        },
        "67": {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 45
          }
        },
        "68": {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 217,
            column: 51
          }
        },
        "69": {
          start: {
            line: 221,
            column: 4
          },
          end: {
            line: 223,
            column: 5
          }
        },
        "70": {
          start: {
            line: 222,
            column: 6
          },
          end: {
            line: 222,
            column: 12
          }
        },
        "71": {
          start: {
            line: 225,
            column: 26
          },
          end: {
            line: 227,
            column: 5
          }
        },
        "72": {
          start: {
            line: 228,
            column: 22
          },
          end: {
            line: 228,
            column: 56
          }
        },
        "73": {
          start: {
            line: 230,
            column: 19
          },
          end: {
            line: 230,
            column: 64
          }
        },
        "74": {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 32
          }
        },
        "75": {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        },
        "76": {
          start: {
            line: 234,
            column: 6
          },
          end: {
            line: 234,
            column: 12
          }
        },
        "77": {
          start: {
            line: 237,
            column: 4
          },
          end: {
            line: 237,
            column: 45
          }
        },
        "78": {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 240,
            column: 52
          }
        },
        "79": {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 244,
            column: 41
          }
        },
        "80": {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 245,
            column: 35
          }
        },
        "81": {
          start: {
            line: 246,
            column: 4
          },
          end: {
            line: 246,
            column: 24
          }
        },
        "82": {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 247,
            column: 21
          }
        },
        "83": {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 251,
            column: 5
          }
        },
        "84": {
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 249,
            column: 28
          }
        },
        "85": {
          start: {
            line: 250,
            column: 6
          },
          end: {
            line: 250,
            column: 25
          }
        },
        "86": {
          start: {
            line: 255,
            column: 4
          },
          end: {
            line: 255,
            column: 41
          }
        },
        "87": {
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 258,
            column: 5
          }
        },
        "88": {
          start: {
            line: 257,
            column: 6
          },
          end: {
            line: 257,
            column: 35
          }
        },
        "89": {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 268,
            column: 6
          }
        },
        "90": {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 265,
            column: 28
          }
        },
        "91": {
          start: {
            line: 266,
            column: 6
          },
          end: {
            line: 266,
            column: 29
          }
        },
        "92": {
          start: {
            line: 267,
            column: 6
          },
          end: {
            line: 267,
            column: 19
          }
        },
        "93": {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        "94": {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 282,
            column: 5
          }
        },
        "95": {
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 284,
            column: 17
          }
        },
        "96": {
          start: {
            line: 288,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        },
        "97": {
          start: {
            line: 289,
            column: 21
          },
          end: {
            line: 289,
            column: 66
          }
        },
        "98": {
          start: {
            line: 290,
            column: 6
          },
          end: {
            line: 292,
            column: 7
          }
        },
        "99": {
          start: {
            line: 291,
            column: 8
          },
          end: {
            line: 291,
            column: 56
          }
        },
        "100": {
          start: {
            line: 294,
            column: 4
          },
          end: {
            line: 294,
            column: 21
          }
        },
        "101": {
          start: {
            line: 298,
            column: 28
          },
          end: {
            line: 298,
            column: 55
          }
        },
        "102": {
          start: {
            line: 299,
            column: 20
          },
          end: {
            line: 299,
            column: 40
          }
        },
        "103": {
          start: {
            line: 302,
            column: 4
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "104": {
          start: {
            line: 303,
            column: 6
          },
          end: {
            line: 303,
            column: 35
          }
        },
        "105": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 306,
            column: 7
          }
        },
        "106": {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 305,
            column: 40
          }
        },
        "107": {
          start: {
            line: 307,
            column: 11
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "108": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 308,
            column: 37
          }
        },
        "109": {
          start: {
            line: 309,
            column: 11
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "110": {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 310,
            column: 36
          }
        },
        "111": {
          start: {
            line: 311,
            column: 11
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "112": {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 312,
            column: 41
          }
        },
        "113": {
          start: {
            line: 314,
            column: 4
          },
          end: {
            line: 314,
            column: 20
          }
        },
        "114": {
          start: {
            line: 318,
            column: 4
          },
          end: {
            line: 318,
            column: 57
          }
        },
        "115": {
          start: {
            line: 322,
            column: 23
          },
          end: {
            line: 322,
            column: 25
          }
        },
        "116": {
          start: {
            line: 323,
            column: 4
          },
          end: {
            line: 333,
            column: 5
          }
        },
        "117": {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 330,
            column: 7
          }
        },
        "118": {
          start: {
            line: 325,
            column: 8
          },
          end: {
            line: 328,
            column: 9
          }
        },
        "119": {
          start: {
            line: 329,
            column: 8
          },
          end: {
            line: 329,
            column: 19
          }
        },
        "120": {
          start: {
            line: 332,
            column: 6
          },
          end: {
            line: 332,
            column: 45
          }
        },
        "121": {
          start: {
            line: 335,
            column: 25
          },
          end: {
            line: 346,
            column: 5
          }
        },
        "122": {
          start: {
            line: 349,
            column: 4
          },
          end: {
            line: 353,
            column: 5
          }
        },
        "123": {
          start: {
            line: 350,
            column: 6
          },
          end: {
            line: 352,
            column: 7
          }
        },
        "124": {
          start: {
            line: 354,
            column: 4
          },
          end: {
            line: 354,
            column: 23
          }
        },
        "125": {
          start: {
            line: 360,
            column: 4
          },
          end: {
            line: 375,
            column: 6
          }
        },
        "126": {
          start: {
            line: 361,
            column: 17
          },
          end: {
            line: 361,
            column: 39
          }
        },
        "127": {
          start: {
            line: 362,
            column: 22
          },
          end: {
            line: 362,
            column: 64
          }
        },
        "128": {
          start: {
            line: 364,
            column: 6
          },
          end: {
            line: 367,
            column: 7
          }
        },
        "129": {
          start: {
            line: 365,
            column: 8
          },
          end: {
            line: 365,
            column: 42
          }
        },
        "130": {
          start: {
            line: 366,
            column: 8
          },
          end: {
            line: 366,
            column: 36
          }
        },
        "131": {
          start: {
            line: 369,
            column: 6
          },
          end: {
            line: 374,
            column: 7
          }
        },
        "132": {
          start: {
            line: 370,
            column: 8
          },
          end: {
            line: 372,
            column: 9
          }
        },
        "133": {
          start: {
            line: 371,
            column: 10
          },
          end: {
            line: 371,
            column: 60
          }
        },
        "134": {
          start: {
            line: 373,
            column: 8
          },
          end: {
            line: 373,
            column: 22
          }
        },
        "135": {
          start: {
            line: 379,
            column: 4
          },
          end: {
            line: 382,
            column: 5
          }
        },
        "136": {
          start: {
            line: 381,
            column: 6
          },
          end: {
            line: 381,
            column: 12
          }
        },
        "137": {
          start: {
            line: 384,
            column: 20
          },
          end: {
            line: 384,
            column: 82
          }
        },
        "138": {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 429,
            column: 5
          }
        },
        "139": {
          start: {
            line: 386,
            column: 21
          },
          end: {
            line: 386,
            column: 63
          }
        },
        "140": {
          start: {
            line: 387,
            column: 22
          },
          end: {
            line: 387,
            column: 50
          }
        },
        "141": {
          start: {
            line: 388,
            column: 28
          },
          end: {
            line: 390,
            column: 7
          }
        },
        "142": {
          start: {
            line: 392,
            column: 6
          },
          end: {
            line: 394,
            column: 7
          }
        },
        "143": {
          start: {
            line: 393,
            column: 8
          },
          end: {
            line: 393,
            column: 40
          }
        },
        "144": {
          start: {
            line: 396,
            column: 6
          },
          end: {
            line: 398,
            column: 7
          }
        },
        "145": {
          start: {
            line: 397,
            column: 8
          },
          end: {
            line: 397,
            column: 16
          }
        },
        "146": {
          start: {
            line: 400,
            column: 27
          },
          end: {
            line: 400,
            column: 40
          }
        },
        "147": {
          start: {
            line: 401,
            column: 6
          },
          end: {
            line: 403,
            column: 7
          }
        },
        "148": {
          start: {
            line: 402,
            column: 8
          },
          end: {
            line: 402,
            column: 16
          }
        },
        "149": {
          start: {
            line: 405,
            column: 6
          },
          end: {
            line: 409,
            column: 7
          }
        },
        "150": {
          start: {
            line: 408,
            column: 8
          },
          end: {
            line: 408,
            column: 16
          }
        },
        "151": {
          start: {
            line: 411,
            column: 24
          },
          end: {
            line: 411,
            column: 58
          }
        },
        "152": {
          start: {
            line: 412,
            column: 6
          },
          end: {
            line: 412,
            column: 34
          }
        },
        "153": {
          start: {
            line: 413,
            column: 6
          },
          end: {
            line: 415,
            column: 7
          }
        },
        "154": {
          start: {
            line: 414,
            column: 8
          },
          end: {
            line: 414,
            column: 16
          }
        },
        "155": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 421,
            column: 7
          }
        },
        "156": {
          start: {
            line: 420,
            column: 8
          },
          end: {
            line: 420,
            column: 66
          }
        },
        "157": {
          start: {
            line: 423,
            column: 6
          },
          end: {
            line: 423,
            column: 55
          }
        },
        "158": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 425,
            column: 49
          }
        },
        "159": {
          start: {
            line: 426,
            column: 6
          },
          end: {
            line: 428,
            column: 54
          }
        },
        "160": {
          start: {
            line: 434,
            column: 21
          },
          end: {
            line: 434,
            column: 57
          }
        },
        "161": {
          start: {
            line: 436,
            column: 4
          },
          end: {
            line: 438,
            column: 5
          }
        },
        "162": {
          start: {
            line: 437,
            column: 6
          },
          end: {
            line: 437,
            column: 47
          }
        },
        "163": {
          start: {
            line: 440,
            column: 4
          },
          end: {
            line: 440,
            column: 39
          }
        },
        "164": {
          start: {
            line: 452,
            column: 4
          },
          end: {
            line: 457,
            column: 5
          }
        },
        "165": {
          start: {
            line: 456,
            column: 6
          },
          end: {
            line: 456,
            column: 12
          }
        },
        "166": {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 459,
            column: 26
          }
        },
        "167": {
          start: {
            line: 460,
            column: 4
          },
          end: {
            line: 460,
            column: 27
          }
        },
        "168": {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 464,
            column: 5
          }
        },
        "169": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 463,
            column: 12
          }
        },
        "170": {
          start: {
            line: 466,
            column: 21
          },
          end: {
            line: 466,
            column: 57
          }
        },
        "171": {
          start: {
            line: 467,
            column: 21
          },
          end: {
            line: 467,
            column: 55
          }
        },
        "172": {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 478,
            column: 5
          }
        },
        "173": {
          start: {
            line: 471,
            column: 6
          },
          end: {
            line: 474,
            column: 7
          }
        },
        "174": {
          start: {
            line: 472,
            column: 23
          },
          end: {
            line: 472,
            column: 65
          }
        },
        "175": {
          start: {
            line: 473,
            column: 8
          },
          end: {
            line: 473,
            column: 34
          }
        },
        "176": {
          start: {
            line: 476,
            column: 6
          },
          end: {
            line: 476,
            column: 30
          }
        },
        "177": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 477,
            column: 12
          }
        },
        "178": {
          start: {
            line: 480,
            column: 18
          },
          end: {
            line: 480,
            column: 80
          }
        },
        "179": {
          start: {
            line: 482,
            column: 4
          },
          end: {
            line: 484,
            column: 5
          }
        },
        "180": {
          start: {
            line: 483,
            column: 6
          },
          end: {
            line: 483,
            column: 12
          }
        },
        "181": {
          start: {
            line: 486,
            column: 16
          },
          end: {
            line: 486,
            column: 43
          }
        },
        "182": {
          start: {
            line: 488,
            column: 4
          },
          end: {
            line: 490,
            column: 5
          }
        },
        "183": {
          start: {
            line: 489,
            column: 6
          },
          end: {
            line: 489,
            column: 13
          }
        },
        "184": {
          start: {
            line: 492,
            column: 4
          },
          end: {
            line: 494,
            column: 5
          }
        },
        "185": {
          start: {
            line: 493,
            column: 6
          },
          end: {
            line: 493,
            column: 13
          }
        },
        "186": {
          start: {
            line: 496,
            column: 4
          },
          end: {
            line: 498,
            column: 5
          }
        },
        "187": {
          start: {
            line: 497,
            column: 6
          },
          end: {
            line: 497,
            column: 15
          }
        },
        "188": {
          start: {
            line: 500,
            column: 4
          },
          end: {
            line: 500,
            column: 24
          }
        },
        "189": {
          start: {
            line: 510,
            column: 0
          },
          end: {
            line: 521,
            column: 4
          }
        },
        "190": {
          start: {
            line: 515,
            column: 4
          },
          end: {
            line: 515,
            column: 26
          }
        },
        "191": {
          start: {
            line: 516,
            column: 4
          },
          end: {
            line: 516,
            column: 27
          }
        },
        "192": {
          start: {
            line: 517,
            column: 4
          },
          end: {
            line: 517,
            column: 53
          }
        },
        "193": {
          start: {
            line: 520,
            column: 4
          },
          end: {
            line: 520,
            column: 23
          }
        },
        "194": {
          start: {
            line: 529,
            column: 0
          },
          end: {
            line: 529,
            column: 38
          }
        },
        "195": {
          start: {
            line: 530,
            column: 0
          },
          end: {
            line: 530,
            column: 33
          }
        },
        "196": {
          start: {
            line: 531,
            column: 0
          },
          end: {
            line: 534,
            column: 1
          }
        },
        "197": {
          start: {
            line: 532,
            column: 2
          },
          end: {
            line: 532,
            column: 33
          }
        },
        "198": {
          start: {
            line: 533,
            column: 2
          },
          end: {
            line: 533,
            column: 34
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 96,
              column: 2
            },
            end: {
              line: 96,
              column: 3
            }
          },
          loc: {
            start: {
              line: 96,
              column: 31
            },
            end: {
              line: 104,
              column: 3
            }
          },
          line: 96
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 108,
              column: 2
            },
            end: {
              line: 108,
              column: 3
            }
          },
          loc: {
            start: {
              line: 108,
              column: 23
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 108
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 23
            },
            end: {
              line: 114,
              column: 3
            }
          },
          line: 112
        },
        "3": {
          name: "(anonymous_3)",
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
              column: 27
            },
            end: {
              line: 118,
              column: 3
            }
          },
          line: 116
        },
        "4": {
          name: "(anonymous_4)",
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
              column: 11
            },
            end: {
              line: 195,
              column: 3
            }
          },
          line: 122
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 197,
              column: 2
            },
            end: {
              line: 197,
              column: 3
            }
          },
          loc: {
            start: {
              line: 197,
              column: 9
            },
            end: {
              line: 218,
              column: 3
            }
          },
          line: 197
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 220,
              column: 2
            },
            end: {
              line: 220,
              column: 3
            }
          },
          loc: {
            start: {
              line: 220,
              column: 9
            },
            end: {
              line: 241,
              column: 3
            }
          },
          line: 220
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 243,
              column: 2
            },
            end: {
              line: 243,
              column: 3
            }
          },
          loc: {
            start: {
              line: 243,
              column: 12
            },
            end: {
              line: 252,
              column: 3
            }
          },
          line: 243
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 254,
              column: 2
            },
            end: {
              line: 254,
              column: 3
            }
          },
          loc: {
            start: {
              line: 254,
              column: 11
            },
            end: {
              line: 259,
              column: 3
            }
          },
          line: 254
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 263,
              column: 2
            },
            end: {
              line: 263,
              column: 3
            }
          },
          loc: {
            start: {
              line: 263,
              column: 23
            },
            end: {
              line: 269,
              column: 3
            }
          },
          line: 263
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 264,
              column: 37
            },
            end: {
              line: 264,
              column: 38
            }
          },
          loc: {
            start: {
              line: 264,
              column: 48
            },
            end: {
              line: 268,
              column: 5
            }
          },
          line: 264
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 271,
              column: 2
            },
            end: {
              line: 271,
              column: 3
            }
          },
          loc: {
            start: {
              line: 271,
              column: 21
            },
            end: {
              line: 285,
              column: 3
            }
          },
          line: 271
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 287,
              column: 2
            },
            end: {
              line: 287,
              column: 3
            }
          },
          loc: {
            start: {
              line: 287,
              column: 20
            },
            end: {
              line: 295,
              column: 3
            }
          },
          line: 287
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 297,
              column: 2
            },
            end: {
              line: 297,
              column: 3
            }
          },
          loc: {
            start: {
              line: 297,
              column: 18
            },
            end: {
              line: 315,
              column: 3
            }
          },
          line: 297
        },
        "14": {
          name: "(anonymous_14)",
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
              column: 18
            },
            end: {
              line: 319,
              column: 3
            }
          },
          line: 317
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 321,
              column: 2
            },
            end: {
              line: 321,
              column: 3
            }
          },
          loc: {
            start: {
              line: 321,
              column: 21
            },
            end: {
              line: 355,
              column: 3
            }
          },
          line: 321
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 324,
              column: 22
            },
            end: {
              line: 324,
              column: 23
            }
          },
          loc: {
            start: {
              line: 324,
              column: 32
            },
            end: {
              line: 330,
              column: 7
            }
          },
          line: 324
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 359,
              column: 2
            },
            end: {
              line: 359,
              column: 3
            }
          },
          loc: {
            start: {
              line: 359,
              column: 34
            },
            end: {
              line: 376,
              column: 3
            }
          },
          line: 359
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 360,
              column: 21
            },
            end: {
              line: 360,
              column: 22
            }
          },
          loc: {
            start: {
              line: 360,
              column: 33
            },
            end: {
              line: 375,
              column: 5
            }
          },
          line: 360
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 378,
              column: 2
            },
            end: {
              line: 378,
              column: 3
            }
          },
          loc: {
            start: {
              line: 378,
              column: 28
            },
            end: {
              line: 430,
              column: 3
            }
          },
          line: 378
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 432,
              column: 2
            },
            end: {
              line: 432,
              column: 3
            }
          },
          loc: {
            start: {
              line: 432,
              column: 40
            },
            end: {
              line: 441,
              column: 3
            }
          },
          line: 432
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 444,
              column: 2
            },
            end: {
              line: 444,
              column: 3
            }
          },
          loc: {
            start: {
              line: 444,
              column: 39
            },
            end: {
              line: 501,
              column: 3
            }
          },
          line: 444
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 514,
              column: 50
            },
            end: {
              line: 514,
              column: 51
            }
          },
          loc: {
            start: {
              line: 514,
              column: 67
            },
            end: {
              line: 518,
              column: 3
            }
          },
          line: 514
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 519,
              column: 49
            },
            end: {
              line: 519,
              column: 50
            }
          },
          loc: {
            start: {
              line: 519,
              column: 56
            },
            end: {
              line: 521,
              column: 3
            }
          },
          line: 519
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 531,
              column: 24
            },
            end: {
              line: 531,
              column: 25
            }
          },
          loc: {
            start: {
              line: 531,
              column: 30
            },
            end: {
              line: 534,
              column: 1
            }
          },
          line: 531
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 125,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 125,
              column: 5
            }
          }, {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 125,
              column: 5
            }
          }],
          line: 123
        },
        "1": {
          loc: {
            start: {
              line: 123,
              column: 8
            },
            end: {
              line: 123,
              column: 79
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 123,
              column: 8
            },
            end: {
              line: 123,
              column: 30
            }
          }, {
            start: {
              line: 123,
              column: 34
            },
            end: {
              line: 123,
              column: 79
            }
          }],
          line: 123
        },
        "2": {
          loc: {
            start: {
              line: 132,
              column: 4
            },
            end: {
              line: 134,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 132,
              column: 4
            },
            end: {
              line: 134,
              column: 5
            }
          }, {
            start: {
              line: 132,
              column: 4
            },
            end: {
              line: 134,
              column: 5
            }
          }],
          line: 132
        },
        "3": {
          loc: {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 145,
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
              line: 145,
              column: 5
            }
          }, {
            start: {
              line: 143,
              column: 4
            },
            end: {
              line: 145,
              column: 5
            }
          }],
          line: 143
        },
        "4": {
          loc: {
            start: {
              line: 148,
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
              line: 148,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }, {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 177,
              column: 5
            }
          }],
          line: 148
        },
        "5": {
          loc: {
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          }, {
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          }],
          line: 153
        },
        "6": {
          loc: {
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 168,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 168,
              column: 7
            }
          }, {
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 168,
              column: 7
            }
          }],
          line: 159
        },
        "7": {
          loc: {
            start: {
              line: 161,
              column: 13
            },
            end: {
              line: 168,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 161,
              column: 13
            },
            end: {
              line: 168,
              column: 7
            }
          }, {
            start: {
              line: 161,
              column: 13
            },
            end: {
              line: 168,
              column: 7
            }
          }],
          line: 161
        },
        "8": {
          loc: {
            start: {
              line: 165,
              column: 8
            },
            end: {
              line: 167,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 165,
              column: 8
            },
            end: {
              line: 167,
              column: 9
            }
          }, {
            start: {
              line: 165,
              column: 8
            },
            end: {
              line: 167,
              column: 9
            }
          }],
          line: 165
        },
        "9": {
          loc: {
            start: {
              line: 173,
              column: 6
            },
            end: {
              line: 175,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 173,
              column: 6
            },
            end: {
              line: 175,
              column: 7
            }
          }, {
            start: {
              line: 173,
              column: 6
            },
            end: {
              line: 175,
              column: 7
            }
          }],
          line: 173
        },
        "10": {
          loc: {
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 186,
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
              line: 186,
              column: 5
            }
          }, {
            start: {
              line: 183,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }],
          line: 183
        },
        "11": {
          loc: {
            start: {
              line: 183,
              column: 8
            },
            end: {
              line: 184,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 183,
              column: 8
            },
            end: {
              line: 183,
              column: 50
            }
          }, {
            start: {
              line: 184,
              column: 8
            },
            end: {
              line: 184,
              column: 59
            }
          }],
          line: 183
        },
        "12": {
          loc: {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }, {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 200,
              column: 5
            }
          }],
          line: 198
        },
        "13": {
          loc: {
            start: {
              line: 198,
              column: 8
            },
            end: {
              line: 198,
              column: 121
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 198,
              column: 8
            },
            end: {
              line: 198,
              column: 30
            }
          }, {
            start: {
              line: 198,
              column: 34
            },
            end: {
              line: 198,
              column: 79
            }
          }, {
            start: {
              line: 198,
              column: 83
            },
            end: {
              line: 198,
              column: 121
            }
          }],
          line: 198
        },
        "14": {
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
        "15": {
          loc: {
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 223,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 223,
              column: 5
            }
          }, {
            start: {
              line: 221,
              column: 4
            },
            end: {
              line: 223,
              column: 5
            }
          }],
          line: 221
        },
        "16": {
          loc: {
            start: {
              line: 221,
              column: 8
            },
            end: {
              line: 221,
              column: 122
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 221,
              column: 8
            },
            end: {
              line: 221,
              column: 30
            }
          }, {
            start: {
              line: 221,
              column: 34
            },
            end: {
              line: 221,
              column: 79
            }
          }, {
            start: {
              line: 221,
              column: 83
            },
            end: {
              line: 221,
              column: 122
            }
          }],
          line: 221
        },
        "17": {
          loc: {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 235,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 235,
              column: 5
            }
          }, {
            start: {
              line: 233,
              column: 4
            },
            end: {
              line: 235,
              column: 5
            }
          }],
          line: 233
        },
        "18": {
          loc: {
            start: {
              line: 248,
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
              line: 248,
              column: 4
            },
            end: {
              line: 251,
              column: 5
            }
          }, {
            start: {
              line: 248,
              column: 4
            },
            end: {
              line: 251,
              column: 5
            }
          }],
          line: 248
        },
        "19": {
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
        "20": {
          loc: {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          }, {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 293,
              column: 5
            }
          }],
          line: 288
        },
        "21": {
          loc: {
            start: {
              line: 290,
              column: 6
            },
            end: {
              line: 292,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 290,
              column: 6
            },
            end: {
              line: 292,
              column: 7
            }
          }, {
            start: {
              line: 290,
              column: 6
            },
            end: {
              line: 292,
              column: 7
            }
          }],
          line: 290
        },
        "22": {
          loc: {
            start: {
              line: 302,
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
              line: 302,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          }, {
            start: {
              line: 302,
              column: 4
            },
            end: {
              line: 313,
              column: 5
            }
          }],
          line: 302
        },
        "23": {
          loc: {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }, {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }],
          line: 304
        },
        "24": {
          loc: {
            start: {
              line: 307,
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 307,
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          }, {
            start: {
              line: 307,
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          }],
          line: 307
        },
        "25": {
          loc: {
            start: {
              line: 309,
              column: 11
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
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          }, {
            start: {
              line: 309,
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          }],
          line: 309
        },
        "26": {
          loc: {
            start: {
              line: 311,
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 311,
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          }, {
            start: {
              line: 311,
              column: 11
            },
            end: {
              line: 313,
              column: 5
            }
          }],
          line: 311
        },
        "27": {
          loc: {
            start: {
              line: 323,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 323,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }, {
            start: {
              line: 323,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          }],
          line: 323
        },
        "28": {
          loc: {
            start: {
              line: 327,
              column: 13
            },
            end: {
              line: 327,
              column: 52
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 327,
              column: 13
            },
            end: {
              line: 327,
              column: 46
            }
          }, {
            start: {
              line: 327,
              column: 50
            },
            end: {
              line: 327,
              column: 52
            }
          }],
          line: 327
        },
        "29": {
          loc: {
            start: {
              line: 349,
              column: 4
            },
            end: {
              line: 353,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 349,
              column: 4
            },
            end: {
              line: 353,
              column: 5
            }
          }, {
            start: {
              line: 349,
              column: 4
            },
            end: {
              line: 353,
              column: 5
            }
          }],
          line: 349
        },
        "30": {
          loc: {
            start: {
              line: 362,
              column: 22
            },
            end: {
              line: 362,
              column: 64
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 362,
              column: 51
            },
            end: {
              line: 362,
              column: 57
            }
          }, {
            start: {
              line: 362,
              column: 60
            },
            end: {
              line: 362,
              column: 64
            }
          }],
          line: 362
        },
        "31": {
          loc: {
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 367,
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
              line: 367,
              column: 7
            }
          }, {
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 367,
              column: 7
            }
          }],
          line: 364
        },
        "32": {
          loc: {
            start: {
              line: 369,
              column: 6
            },
            end: {
              line: 374,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 369,
              column: 6
            },
            end: {
              line: 374,
              column: 7
            }
          }, {
            start: {
              line: 369,
              column: 6
            },
            end: {
              line: 374,
              column: 7
            }
          }],
          line: 369
        },
        "33": {
          loc: {
            start: {
              line: 370,
              column: 8
            },
            end: {
              line: 372,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 370,
              column: 8
            },
            end: {
              line: 372,
              column: 9
            }
          }, {
            start: {
              line: 370,
              column: 8
            },
            end: {
              line: 372,
              column: 9
            }
          }],
          line: 370
        },
        "34": {
          loc: {
            start: {
              line: 379,
              column: 4
            },
            end: {
              line: 382,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 379,
              column: 4
            },
            end: {
              line: 382,
              column: 5
            }
          }, {
            start: {
              line: 379,
              column: 4
            },
            end: {
              line: 382,
              column: 5
            }
          }],
          line: 379
        },
        "35": {
          loc: {
            start: {
              line: 379,
              column: 8
            },
            end: {
              line: 380,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 379,
              column: 8
            },
            end: {
              line: 379,
              column: 13
            }
          }, {
            start: {
              line: 379,
              column: 18
            },
            end: {
              line: 379,
              column: 58
            }
          }, {
            start: {
              line: 380,
              column: 6
            },
            end: {
              line: 380,
              column: 28
            }
          }, {
            start: {
              line: 380,
              column: 32
            },
            end: {
              line: 380,
              column: 59
            }
          }],
          line: 379
        },
        "36": {
          loc: {
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          }, {
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          }],
          line: 392
        },
        "37": {
          loc: {
            start: {
              line: 392,
              column: 10
            },
            end: {
              line: 392,
              column: 41
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 392,
              column: 10
            },
            end: {
              line: 392,
              column: 15
            }
          }, {
            start: {
              line: 392,
              column: 19
            },
            end: {
              line: 392,
              column: 41
            }
          }],
          line: 392
        },
        "38": {
          loc: {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
              column: 7
            }
          }, {
            start: {
              line: 396,
              column: 6
            },
            end: {
              line: 398,
              column: 7
            }
          }],
          line: 396
        },
        "39": {
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
        "40": {
          loc: {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          }, {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          }],
          line: 405
        },
        "41": {
          loc: {
            start: {
              line: 405,
              column: 10
            },
            end: {
              line: 407,
              column: 42
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 405,
              column: 10
            },
            end: {
              line: 405,
              column: 15
            }
          }, {
            start: {
              line: 405,
              column: 20
            },
            end: {
              line: 405,
              column: 42
            }
          }, {
            start: {
              line: 406,
              column: 10
            },
            end: {
              line: 406,
              column: 54
            }
          }, {
            start: {
              line: 406,
              column: 58
            },
            end: {
              line: 406,
              column: 80
            }
          }, {
            start: {
              line: 406,
              column: 84
            },
            end: {
              line: 406,
              column: 111
            }
          }, {
            start: {
              line: 407,
              column: 10
            },
            end: {
              line: 407,
              column: 42
            }
          }],
          line: 405
        },
        "42": {
          loc: {
            start: {
              line: 413,
              column: 6
            },
            end: {
              line: 415,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 413,
              column: 6
            },
            end: {
              line: 415,
              column: 7
            }
          }, {
            start: {
              line: 413,
              column: 6
            },
            end: {
              line: 415,
              column: 7
            }
          }],
          line: 413
        },
        "43": {
          loc: {
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 421,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 421,
              column: 7
            }
          }, {
            start: {
              line: 419,
              column: 6
            },
            end: {
              line: 421,
              column: 7
            }
          }],
          line: 419
        },
        "44": {
          loc: {
            start: {
              line: 436,
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
              line: 436,
              column: 4
            },
            end: {
              line: 438,
              column: 5
            }
          }, {
            start: {
              line: 436,
              column: 4
            },
            end: {
              line: 438,
              column: 5
            }
          }],
          line: 436
        },
        "45": {
          loc: {
            start: {
              line: 440,
              column: 11
            },
            end: {
              line: 440,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 440,
              column: 11
            },
            end: {
              line: 440,
              column: 17
            }
          }, {
            start: {
              line: 440,
              column: 21
            },
            end: {
              line: 440,
              column: 39
            }
          }],
          line: 440
        },
        "46": {
          loc: {
            start: {
              line: 452,
              column: 4
            },
            end: {
              line: 457,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 452,
              column: 4
            },
            end: {
              line: 457,
              column: 5
            }
          }, {
            start: {
              line: 452,
              column: 4
            },
            end: {
              line: 457,
              column: 5
            }
          }],
          line: 452
        },
        "47": {
          loc: {
            start: {
              line: 452,
              column: 8
            },
            end: {
              line: 455,
              column: 90
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 453,
              column: 8
            },
            end: {
              line: 455,
              column: 54
            }
          }, {
            start: {
              line: 455,
              column: 57
            },
            end: {
              line: 455,
              column: 90
            }
          }],
          line: 452
        },
        "48": {
          loc: {
            start: {
              line: 453,
              column: 8
            },
            end: {
              line: 455,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 453,
              column: 8
            },
            end: {
              line: 453,
              column: 37
            }
          }, {
            start: {
              line: 453,
              column: 41
            },
            end: {
              line: 453,
              column: 71
            }
          }, {
            start: {
              line: 454,
              column: 7
            },
            end: {
              line: 454,
              column: 41
            }
          }, {
            start: {
              line: 454,
              column: 45
            },
            end: {
              line: 454,
              column: 77
            }
          }, {
            start: {
              line: 455,
              column: 8
            },
            end: {
              line: 455,
              column: 53
            }
          }],
          line: 453
        },
        "49": {
          loc: {
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }, {
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 464,
              column: 5
            }
          }],
          line: 462
        },
        "50": {
          loc: {
            start: {
              line: 462,
              column: 8
            },
            end: {
              line: 462,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 462,
              column: 8
            },
            end: {
              line: 462,
              column: 21
            }
          }, {
            start: {
              line: 462,
              column: 25
            },
            end: {
              line: 462,
              column: 61
            }
          }],
          line: 462
        },
        "51": {
          loc: {
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 478,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 478,
              column: 5
            }
          }, {
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 478,
              column: 5
            }
          }],
          line: 469
        },
        "52": {
          loc: {
            start: {
              line: 469,
              column: 8
            },
            end: {
              line: 470,
              column: 87
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 469,
              column: 8
            },
            end: {
              line: 469,
              column: 17
            }
          }, {
            start: {
              line: 469,
              column: 22
            },
            end: {
              line: 469,
              column: 52
            }
          }, {
            start: {
              line: 469,
              column: 56
            },
            end: {
              line: 469,
              column: 85
            }
          }, {
            start: {
              line: 470,
              column: 10
            },
            end: {
              line: 470,
              column: 18
            }
          }, {
            start: {
              line: 470,
              column: 23
            },
            end: {
              line: 470,
              column: 53
            }
          }, {
            start: {
              line: 470,
              column: 57
            },
            end: {
              line: 470,
              column: 86
            }
          }],
          line: 469
        },
        "53": {
          loc: {
            start: {
              line: 471,
              column: 6
            },
            end: {
              line: 474,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 471,
              column: 6
            },
            end: {
              line: 474,
              column: 7
            }
          }, {
            start: {
              line: 471,
              column: 6
            },
            end: {
              line: 474,
              column: 7
            }
          }],
          line: 471
        },
        "54": {
          loc: {
            start: {
              line: 482,
              column: 4
            },
            end: {
              line: 484,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 482,
              column: 4
            },
            end: {
              line: 484,
              column: 5
            }
          }, {
            start: {
              line: 482,
              column: 4
            },
            end: {
              line: 484,
              column: 5
            }
          }],
          line: 482
        },
        "55": {
          loc: {
            start: {
              line: 488,
              column: 4
            },
            end: {
              line: 490,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 488,
              column: 4
            },
            end: {
              line: 490,
              column: 5
            }
          }, {
            start: {
              line: 488,
              column: 4
            },
            end: {
              line: 490,
              column: 5
            }
          }],
          line: 488
        },
        "56": {
          loc: {
            start: {
              line: 488,
              column: 8
            },
            end: {
              line: 488,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 488,
              column: 8
            },
            end: {
              line: 488,
              column: 40
            }
          }, {
            start: {
              line: 488,
              column: 44
            },
            end: {
              line: 488,
              column: 53
            }
          }],
          line: 488
        },
        "57": {
          loc: {
            start: {
              line: 492,
              column: 4
            },
            end: {
              line: 494,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 492,
              column: 4
            },
            end: {
              line: 494,
              column: 5
            }
          }, {
            start: {
              line: 492,
              column: 4
            },
            end: {
              line: 494,
              column: 5
            }
          }],
          line: 492
        },
        "58": {
          loc: {
            start: {
              line: 492,
              column: 8
            },
            end: {
              line: 492,
              column: 70
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 492,
              column: 8
            },
            end: {
              line: 492,
              column: 42
            }
          }, {
            start: {
              line: 492,
              column: 46
            },
            end: {
              line: 492,
              column: 70
            }
          }],
          line: 492
        },
        "59": {
          loc: {
            start: {
              line: 496,
              column: 4
            },
            end: {
              line: 498,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 496,
              column: 4
            },
            end: {
              line: 498,
              column: 5
            }
          }, {
            start: {
              line: 496,
              column: 4
            },
            end: {
              line: 498,
              column: 5
            }
          }],
          line: 496
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
        "198": 0
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
        "24": 0
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
        "13": [0, 0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0, 0],
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
        "35": [0, 0, 0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0, 0, 0, 0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0, 0, 0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0, 0, 0, 0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0]
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
   * Bootstrap (v4.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_l3h0gbc2i.s[0]++, 'dropdown');
  var VERSION = (cov_l3h0gbc2i.s[1]++, '4.1.3');
  var DATA_KEY = (cov_l3h0gbc2i.s[2]++, 'bs.dropdown');
  var EVENT_KEY = (cov_l3h0gbc2i.s[3]++, "." + DATA_KEY);
  var DATA_API_KEY = (cov_l3h0gbc2i.s[4]++, '.data-api');
  var JQUERY_NO_CONFLICT = (cov_l3h0gbc2i.s[5]++, $.fn[NAME]);
  var ESCAPE_KEYCODE = (cov_l3h0gbc2i.s[6]++, 27); // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = (cov_l3h0gbc2i.s[7]++, 32); // KeyboardEvent.which value for space key

  var TAB_KEYCODE = (cov_l3h0gbc2i.s[8]++, 9); // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = (cov_l3h0gbc2i.s[9]++, 38); // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = (cov_l3h0gbc2i.s[10]++, 40); // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = (cov_l3h0gbc2i.s[11]++, 3); // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = (cov_l3h0gbc2i.s[12]++, new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));
  var Event = (cov_l3h0gbc2i.s[13]++, {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  });
  var ClassName = (cov_l3h0gbc2i.s[14]++, {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  });
  var Selector = (cov_l3h0gbc2i.s[15]++, {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  });
  var AttachmentMap = (cov_l3h0gbc2i.s[16]++, {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  });
  var Default = (cov_l3h0gbc2i.s[17]++, {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  });
  var DefaultType = (cov_l3h0gbc2i.s[18]++, {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      cov_l3h0gbc2i.f[0]++;
      cov_l3h0gbc2i.s[19]++;
      this._element = element;
      cov_l3h0gbc2i.s[20]++;
      this._popper = null;
      cov_l3h0gbc2i.s[21]++;
      this._config = this._getConfig(config);
      cov_l3h0gbc2i.s[22]++;
      this._menu = this._getMenuElement();
      cov_l3h0gbc2i.s[23]++;
      this._inNavbar = this._detectNavbar();
      cov_l3h0gbc2i.s[24]++;

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      cov_l3h0gbc2i.f[4]++;
      cov_l3h0gbc2i.s[28]++;

      if ((cov_l3h0gbc2i.b[1][0]++, this._element.disabled) || (cov_l3h0gbc2i.b[1][1]++, $(this._element).hasClass(ClassName.DISABLED))) {
        cov_l3h0gbc2i.b[0][0]++;
        cov_l3h0gbc2i.s[29]++;
        return;
      } else {
        cov_l3h0gbc2i.b[0][1]++;
      }

      var parent = (cov_l3h0gbc2i.s[30]++, Dropdown._getParentFromElement(this._element));
      var isActive = (cov_l3h0gbc2i.s[31]++, $(this._menu).hasClass(ClassName.SHOW));
      cov_l3h0gbc2i.s[32]++;

      Dropdown._clearMenus();

      cov_l3h0gbc2i.s[33]++;

      if (isActive) {
        cov_l3h0gbc2i.b[2][0]++;
        cov_l3h0gbc2i.s[34]++;
        return;
      } else {
        cov_l3h0gbc2i.b[2][1]++;
      }

      var relatedTarget = (cov_l3h0gbc2i.s[35]++, {
        relatedTarget: this._element
      });
      var showEvent = (cov_l3h0gbc2i.s[36]++, $.Event(Event.SHOW, relatedTarget));
      cov_l3h0gbc2i.s[37]++;
      $(parent).trigger(showEvent);
      cov_l3h0gbc2i.s[38]++;

      if (showEvent.isDefaultPrevented()) {
        cov_l3h0gbc2i.b[3][0]++;
        cov_l3h0gbc2i.s[39]++;
        return;
      } else {
        cov_l3h0gbc2i.b[3][1]++;
      } // Disable totally Popper.js for Dropdown in Navbar


      cov_l3h0gbc2i.s[40]++;

      if (!this._inNavbar) {
        cov_l3h0gbc2i.b[4][0]++;
        cov_l3h0gbc2i.s[41]++;

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          cov_l3h0gbc2i.b[5][0]++;
          cov_l3h0gbc2i.s[42]++;
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        } else {
          cov_l3h0gbc2i.b[5][1]++;
        }

        var referenceElement = (cov_l3h0gbc2i.s[43]++, this._element);
        cov_l3h0gbc2i.s[44]++;

        if (this._config.reference === 'parent') {
          cov_l3h0gbc2i.b[6][0]++;
          cov_l3h0gbc2i.s[45]++;
          referenceElement = parent;
        } else {
          cov_l3h0gbc2i.b[6][1]++;
          cov_l3h0gbc2i.s[46]++;

          if (Util.isElement(this._config.reference)) {
            cov_l3h0gbc2i.b[7][0]++;
            cov_l3h0gbc2i.s[47]++;
            referenceElement = this._config.reference; // Check if it's jQuery element

            cov_l3h0gbc2i.s[48]++;

            if (typeof this._config.reference.jquery !== 'undefined') {
              cov_l3h0gbc2i.b[8][0]++;
              cov_l3h0gbc2i.s[49]++;
              referenceElement = this._config.reference[0];
            } else {
              cov_l3h0gbc2i.b[8][1]++;
            }
          } else {
            cov_l3h0gbc2i.b[7][1]++;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        cov_l3h0gbc2i.s[50]++;

        if (this._config.boundary !== 'scrollParent') {
          cov_l3h0gbc2i.b[9][0]++;
          cov_l3h0gbc2i.s[51]++;
          $(parent).addClass(ClassName.POSITION_STATIC);
        } else {
          cov_l3h0gbc2i.b[9][1]++;
        }

        cov_l3h0gbc2i.s[52]++;
        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } else {
        cov_l3h0gbc2i.b[4][1]++;
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      cov_l3h0gbc2i.s[53]++;

      if ((cov_l3h0gbc2i.b[11][0]++, 'ontouchstart' in document.documentElement) && (cov_l3h0gbc2i.b[11][1]++, $(parent).closest(Selector.NAVBAR_NAV).length === 0)) {
        cov_l3h0gbc2i.b[10][0]++;
        cov_l3h0gbc2i.s[54]++;
        $(document.body).children().on('mouseover', null, $.noop);
      } else {
        cov_l3h0gbc2i.b[10][1]++;
      }

      cov_l3h0gbc2i.s[55]++;

      this._element.focus();

      cov_l3h0gbc2i.s[56]++;

      this._element.setAttribute('aria-expanded', true);

      cov_l3h0gbc2i.s[57]++;
      $(this._menu).toggleClass(ClassName.SHOW);
      cov_l3h0gbc2i.s[58]++;
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    _proto.show = function show() {
      cov_l3h0gbc2i.f[5]++;
      cov_l3h0gbc2i.s[59]++;

      if ((cov_l3h0gbc2i.b[13][0]++, this._element.disabled) || (cov_l3h0gbc2i.b[13][1]++, $(this._element).hasClass(ClassName.DISABLED)) || (cov_l3h0gbc2i.b[13][2]++, $(this._menu).hasClass(ClassName.SHOW))) {
        cov_l3h0gbc2i.b[12][0]++;
        cov_l3h0gbc2i.s[60]++;
        return;
      } else {
        cov_l3h0gbc2i.b[12][1]++;
      }

      var relatedTarget = (cov_l3h0gbc2i.s[61]++, {
        relatedTarget: this._element
      });
      var showEvent = (cov_l3h0gbc2i.s[62]++, $.Event(Event.SHOW, relatedTarget));
      var parent = (cov_l3h0gbc2i.s[63]++, Dropdown._getParentFromElement(this._element));
      cov_l3h0gbc2i.s[64]++;
      $(parent).trigger(showEvent);
      cov_l3h0gbc2i.s[65]++;

      if (showEvent.isDefaultPrevented()) {
        cov_l3h0gbc2i.b[14][0]++;
        cov_l3h0gbc2i.s[66]++;
        return;
      } else {
        cov_l3h0gbc2i.b[14][1]++;
      }

      cov_l3h0gbc2i.s[67]++;
      $(this._menu).toggleClass(ClassName.SHOW);
      cov_l3h0gbc2i.s[68]++;
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      cov_l3h0gbc2i.f[6]++;
      cov_l3h0gbc2i.s[69]++;

      if ((cov_l3h0gbc2i.b[16][0]++, this._element.disabled) || (cov_l3h0gbc2i.b[16][1]++, $(this._element).hasClass(ClassName.DISABLED)) || (cov_l3h0gbc2i.b[16][2]++, !$(this._menu).hasClass(ClassName.SHOW))) {
        cov_l3h0gbc2i.b[15][0]++;
        cov_l3h0gbc2i.s[70]++;
        return;
      } else {
        cov_l3h0gbc2i.b[15][1]++;
      }

      var relatedTarget = (cov_l3h0gbc2i.s[71]++, {
        relatedTarget: this._element
      });
      var hideEvent = (cov_l3h0gbc2i.s[72]++, $.Event(Event.HIDE, relatedTarget));
      var parent = (cov_l3h0gbc2i.s[73]++, Dropdown._getParentFromElement(this._element));
      cov_l3h0gbc2i.s[74]++;
      $(parent).trigger(hideEvent);
      cov_l3h0gbc2i.s[75]++;

      if (hideEvent.isDefaultPrevented()) {
        cov_l3h0gbc2i.b[17][0]++;
        cov_l3h0gbc2i.s[76]++;
        return;
      } else {
        cov_l3h0gbc2i.b[17][1]++;
      }

      cov_l3h0gbc2i.s[77]++;
      $(this._menu).toggleClass(ClassName.SHOW);
      cov_l3h0gbc2i.s[78]++;
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      cov_l3h0gbc2i.f[7]++;
      cov_l3h0gbc2i.s[79]++;
      $.removeData(this._element, DATA_KEY);
      cov_l3h0gbc2i.s[80]++;
      $(this._element).off(EVENT_KEY);
      cov_l3h0gbc2i.s[81]++;
      this._element = null;
      cov_l3h0gbc2i.s[82]++;
      this._menu = null;
      cov_l3h0gbc2i.s[83]++;

      if (this._popper !== null) {
        cov_l3h0gbc2i.b[18][0]++;
        cov_l3h0gbc2i.s[84]++;

        this._popper.destroy();

        cov_l3h0gbc2i.s[85]++;
        this._popper = null;
      } else {
        cov_l3h0gbc2i.b[18][1]++;
      }
    };

    _proto.update = function update() {
      cov_l3h0gbc2i.f[8]++;
      cov_l3h0gbc2i.s[86]++;
      this._inNavbar = this._detectNavbar();
      cov_l3h0gbc2i.s[87]++;

      if (this._popper !== null) {
        cov_l3h0gbc2i.b[19][0]++;
        cov_l3h0gbc2i.s[88]++;

        this._popper.scheduleUpdate();
      } else {
        cov_l3h0gbc2i.b[19][1]++;
      }
    }; // Private


    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      cov_l3h0gbc2i.f[9]++;
      cov_l3h0gbc2i.s[89]++;
      $(this._element).on(Event.CLICK, function (event) {
        cov_l3h0gbc2i.f[10]++;
        cov_l3h0gbc2i.s[90]++;
        event.preventDefault();
        cov_l3h0gbc2i.s[91]++;
        event.stopPropagation();
        cov_l3h0gbc2i.s[92]++;

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      cov_l3h0gbc2i.f[11]++;
      cov_l3h0gbc2i.s[93]++;
      config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      cov_l3h0gbc2i.s[94]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_l3h0gbc2i.s[95]++;
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      cov_l3h0gbc2i.f[12]++;
      cov_l3h0gbc2i.s[96]++;

      if (!this._menu) {
        cov_l3h0gbc2i.b[20][0]++;
        var parent = (cov_l3h0gbc2i.s[97]++, Dropdown._getParentFromElement(this._element));
        cov_l3h0gbc2i.s[98]++;

        if (parent) {
          cov_l3h0gbc2i.b[21][0]++;
          cov_l3h0gbc2i.s[99]++;
          this._menu = parent.querySelector(Selector.MENU);
        } else {
          cov_l3h0gbc2i.b[21][1]++;
        }
      } else {
        cov_l3h0gbc2i.b[20][1]++;
      }

      cov_l3h0gbc2i.s[100]++;
      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      cov_l3h0gbc2i.f[13]++;
      var $parentDropdown = (cov_l3h0gbc2i.s[101]++, $(this._element.parentNode));
      var placement = (cov_l3h0gbc2i.s[102]++, AttachmentMap.BOTTOM); // Handle dropup

      cov_l3h0gbc2i.s[103]++;

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        cov_l3h0gbc2i.b[22][0]++;
        cov_l3h0gbc2i.s[104]++;
        placement = AttachmentMap.TOP;
        cov_l3h0gbc2i.s[105]++;

        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          cov_l3h0gbc2i.b[23][0]++;
          cov_l3h0gbc2i.s[106]++;
          placement = AttachmentMap.TOPEND;
        } else {
          cov_l3h0gbc2i.b[23][1]++;
        }
      } else {
        cov_l3h0gbc2i.b[22][1]++;
        cov_l3h0gbc2i.s[107]++;

        if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
          cov_l3h0gbc2i.b[24][0]++;
          cov_l3h0gbc2i.s[108]++;
          placement = AttachmentMap.RIGHT;
        } else {
          cov_l3h0gbc2i.b[24][1]++;
          cov_l3h0gbc2i.s[109]++;

          if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
            cov_l3h0gbc2i.b[25][0]++;
            cov_l3h0gbc2i.s[110]++;
            placement = AttachmentMap.LEFT;
          } else {
            cov_l3h0gbc2i.b[25][1]++;
            cov_l3h0gbc2i.s[111]++;

            if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
              cov_l3h0gbc2i.b[26][0]++;
              cov_l3h0gbc2i.s[112]++;
              placement = AttachmentMap.BOTTOMEND;
            } else {
              cov_l3h0gbc2i.b[26][1]++;
            }
          }
        }
      }

      cov_l3h0gbc2i.s[113]++;
      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      cov_l3h0gbc2i.f[14]++;
      cov_l3h0gbc2i.s[114]++;
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var _this2 = this;

      cov_l3h0gbc2i.f[15]++;
      var offsetConf = (cov_l3h0gbc2i.s[115]++, {});
      cov_l3h0gbc2i.s[116]++;

      if (typeof this._config.offset === 'function') {
        cov_l3h0gbc2i.b[27][0]++;
        cov_l3h0gbc2i.s[117]++;

        offsetConf.fn = function (data) {
          cov_l3h0gbc2i.f[16]++;
          cov_l3h0gbc2i.s[118]++;
          data.offsets = _objectSpread({}, data.offsets, (cov_l3h0gbc2i.b[28][0]++, _this2._config.offset(data.offsets)) || (cov_l3h0gbc2i.b[28][1]++, {}));
          cov_l3h0gbc2i.s[119]++;
          return data;
        };
      } else {
        cov_l3h0gbc2i.b[27][1]++;
        cov_l3h0gbc2i.s[120]++;
        offsetConf.offset = this._config.offset;
      }

      var popperConfig = (cov_l3h0gbc2i.s[121]++, {
        placement: this._getPlacement(),
        modifiers: {
          offset: offsetConf,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      });
      cov_l3h0gbc2i.s[122]++;

      if (this._config.display === 'static') {
        cov_l3h0gbc2i.b[29][0]++;
        cov_l3h0gbc2i.s[123]++;
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      } else {
        cov_l3h0gbc2i.b[29][1]++;
      }

      cov_l3h0gbc2i.s[124]++;
      return popperConfig;
    }; // Static


    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      cov_l3h0gbc2i.f[17]++;
      cov_l3h0gbc2i.s[125]++;
      return this.each(function () {
        cov_l3h0gbc2i.f[18]++;
        var data = (cov_l3h0gbc2i.s[126]++, $(this).data(DATA_KEY));

        var _config = (cov_l3h0gbc2i.s[127]++, typeof config === 'object' ? (cov_l3h0gbc2i.b[30][0]++, config) : (cov_l3h0gbc2i.b[30][1]++, null));

        cov_l3h0gbc2i.s[128]++;

        if (!data) {
          cov_l3h0gbc2i.b[31][0]++;
          cov_l3h0gbc2i.s[129]++;
          data = new Dropdown(this, _config);
          cov_l3h0gbc2i.s[130]++;
          $(this).data(DATA_KEY, data);
        } else {
          cov_l3h0gbc2i.b[31][1]++;
        }

        cov_l3h0gbc2i.s[131]++;

        if (typeof config === 'string') {
          cov_l3h0gbc2i.b[32][0]++;
          cov_l3h0gbc2i.s[132]++;

          if (typeof data[config] === 'undefined') {
            cov_l3h0gbc2i.b[33][0]++;
            cov_l3h0gbc2i.s[133]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_l3h0gbc2i.b[33][1]++;
          }

          cov_l3h0gbc2i.s[134]++;
          data[config]();
        } else {
          cov_l3h0gbc2i.b[32][1]++;
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      cov_l3h0gbc2i.f[19]++;
      cov_l3h0gbc2i.s[135]++;

      if ((cov_l3h0gbc2i.b[35][0]++, event) && ((cov_l3h0gbc2i.b[35][1]++, event.which === RIGHT_MOUSE_BUTTON_WHICH) || (cov_l3h0gbc2i.b[35][2]++, event.type === 'keyup') && (cov_l3h0gbc2i.b[35][3]++, event.which !== TAB_KEYCODE))) {
        cov_l3h0gbc2i.b[34][0]++;
        cov_l3h0gbc2i.s[136]++;
        return;
      } else {
        cov_l3h0gbc2i.b[34][1]++;
      }

      var toggles = (cov_l3h0gbc2i.s[137]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE)));
      cov_l3h0gbc2i.s[138]++;

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = (cov_l3h0gbc2i.s[139]++, Dropdown._getParentFromElement(toggles[i]));
        var context = (cov_l3h0gbc2i.s[140]++, $(toggles[i]).data(DATA_KEY));
        var relatedTarget = (cov_l3h0gbc2i.s[141]++, {
          relatedTarget: toggles[i]
        });
        cov_l3h0gbc2i.s[142]++;

        if ((cov_l3h0gbc2i.b[37][0]++, event) && (cov_l3h0gbc2i.b[37][1]++, event.type === 'click')) {
          cov_l3h0gbc2i.b[36][0]++;
          cov_l3h0gbc2i.s[143]++;
          relatedTarget.clickEvent = event;
        } else {
          cov_l3h0gbc2i.b[36][1]++;
        }

        cov_l3h0gbc2i.s[144]++;

        if (!context) {
          cov_l3h0gbc2i.b[38][0]++;
          cov_l3h0gbc2i.s[145]++;
          continue;
        } else {
          cov_l3h0gbc2i.b[38][1]++;
        }

        var dropdownMenu = (cov_l3h0gbc2i.s[146]++, context._menu);
        cov_l3h0gbc2i.s[147]++;

        if (!$(parent).hasClass(ClassName.SHOW)) {
          cov_l3h0gbc2i.b[39][0]++;
          cov_l3h0gbc2i.s[148]++;
          continue;
        } else {
          cov_l3h0gbc2i.b[39][1]++;
        }

        cov_l3h0gbc2i.s[149]++;

        if ((cov_l3h0gbc2i.b[41][0]++, event) && ((cov_l3h0gbc2i.b[41][1]++, event.type === 'click') && (cov_l3h0gbc2i.b[41][2]++, /input|textarea/i.test(event.target.tagName)) || (cov_l3h0gbc2i.b[41][3]++, event.type === 'keyup') && (cov_l3h0gbc2i.b[41][4]++, event.which === TAB_KEYCODE)) && (cov_l3h0gbc2i.b[41][5]++, $.contains(parent, event.target))) {
          cov_l3h0gbc2i.b[40][0]++;
          cov_l3h0gbc2i.s[150]++;
          continue;
        } else {
          cov_l3h0gbc2i.b[40][1]++;
        }

        var hideEvent = (cov_l3h0gbc2i.s[151]++, $.Event(Event.HIDE, relatedTarget));
        cov_l3h0gbc2i.s[152]++;
        $(parent).trigger(hideEvent);
        cov_l3h0gbc2i.s[153]++;

        if (hideEvent.isDefaultPrevented()) {
          cov_l3h0gbc2i.b[42][0]++;
          cov_l3h0gbc2i.s[154]++;
          continue;
        } else {
          cov_l3h0gbc2i.b[42][1]++;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        cov_l3h0gbc2i.s[155]++;

        if ('ontouchstart' in document.documentElement) {
          cov_l3h0gbc2i.b[43][0]++;
          cov_l3h0gbc2i.s[156]++;
          $(document.body).children().off('mouseover', null, $.noop);
        } else {
          cov_l3h0gbc2i.b[43][1]++;
        }

        cov_l3h0gbc2i.s[157]++;
        toggles[i].setAttribute('aria-expanded', 'false');
        cov_l3h0gbc2i.s[158]++;
        $(dropdownMenu).removeClass(ClassName.SHOW);
        cov_l3h0gbc2i.s[159]++;
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      cov_l3h0gbc2i.f[20]++;
      var parent;
      var selector = (cov_l3h0gbc2i.s[160]++, Util.getSelectorFromElement(element));
      cov_l3h0gbc2i.s[161]++;

      if (selector) {
        cov_l3h0gbc2i.b[44][0]++;
        cov_l3h0gbc2i.s[162]++;
        parent = document.querySelector(selector);
      } else {
        cov_l3h0gbc2i.b[44][1]++;
      }

      cov_l3h0gbc2i.s[163]++;
      return (cov_l3h0gbc2i.b[45][0]++, parent) || (cov_l3h0gbc2i.b[45][1]++, element.parentNode);
    }; // eslint-disable-next-line complexity


    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      cov_l3h0gbc2i.f[21]++;
      cov_l3h0gbc2i.s[164]++;

      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? (cov_l3h0gbc2i.b[47][0]++, (cov_l3h0gbc2i.b[48][0]++, event.which === SPACE_KEYCODE) || (cov_l3h0gbc2i.b[48][1]++, event.which !== ESCAPE_KEYCODE) && ((cov_l3h0gbc2i.b[48][2]++, event.which !== ARROW_DOWN_KEYCODE) && (cov_l3h0gbc2i.b[48][3]++, event.which !== ARROW_UP_KEYCODE) || (cov_l3h0gbc2i.b[48][4]++, $(event.target).closest(Selector.MENU).length))) : (cov_l3h0gbc2i.b[47][1]++, !REGEXP_KEYDOWN.test(event.which))) {
        cov_l3h0gbc2i.b[46][0]++;
        cov_l3h0gbc2i.s[165]++;
        return;
      } else {
        cov_l3h0gbc2i.b[46][1]++;
      }

      cov_l3h0gbc2i.s[166]++;
      event.preventDefault();
      cov_l3h0gbc2i.s[167]++;
      event.stopPropagation();
      cov_l3h0gbc2i.s[168]++;

      if ((cov_l3h0gbc2i.b[50][0]++, this.disabled) || (cov_l3h0gbc2i.b[50][1]++, $(this).hasClass(ClassName.DISABLED))) {
        cov_l3h0gbc2i.b[49][0]++;
        cov_l3h0gbc2i.s[169]++;
        return;
      } else {
        cov_l3h0gbc2i.b[49][1]++;
      }

      var parent = (cov_l3h0gbc2i.s[170]++, Dropdown._getParentFromElement(this));
      var isActive = (cov_l3h0gbc2i.s[171]++, $(parent).hasClass(ClassName.SHOW));
      cov_l3h0gbc2i.s[172]++;

      if ((cov_l3h0gbc2i.b[52][0]++, !isActive) && ((cov_l3h0gbc2i.b[52][1]++, event.which !== ESCAPE_KEYCODE) || (cov_l3h0gbc2i.b[52][2]++, event.which !== SPACE_KEYCODE)) || (cov_l3h0gbc2i.b[52][3]++, isActive) && ((cov_l3h0gbc2i.b[52][4]++, event.which === ESCAPE_KEYCODE) || (cov_l3h0gbc2i.b[52][5]++, event.which === SPACE_KEYCODE))) {
        cov_l3h0gbc2i.b[51][0]++;
        cov_l3h0gbc2i.s[173]++;

        if (event.which === ESCAPE_KEYCODE) {
          cov_l3h0gbc2i.b[53][0]++;
          var toggle = (cov_l3h0gbc2i.s[174]++, parent.querySelector(Selector.DATA_TOGGLE));
          cov_l3h0gbc2i.s[175]++;
          $(toggle).trigger('focus');
        } else {
          cov_l3h0gbc2i.b[53][1]++;
        }

        cov_l3h0gbc2i.s[176]++;
        $(this).trigger('click');
        cov_l3h0gbc2i.s[177]++;
        return;
      } else {
        cov_l3h0gbc2i.b[51][1]++;
      }

      var items = (cov_l3h0gbc2i.s[178]++, [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS)));
      cov_l3h0gbc2i.s[179]++;

      if (items.length === 0) {
        cov_l3h0gbc2i.b[54][0]++;
        cov_l3h0gbc2i.s[180]++;
        return;
      } else {
        cov_l3h0gbc2i.b[54][1]++;
      }

      var index = (cov_l3h0gbc2i.s[181]++, items.indexOf(event.target));
      cov_l3h0gbc2i.s[182]++;

      if ((cov_l3h0gbc2i.b[56][0]++, event.which === ARROW_UP_KEYCODE) && (cov_l3h0gbc2i.b[56][1]++, index > 0)) {
        cov_l3h0gbc2i.b[55][0]++;
        cov_l3h0gbc2i.s[183]++;
        // Up
        index--;
      } else {
        cov_l3h0gbc2i.b[55][1]++;
      }

      cov_l3h0gbc2i.s[184]++;

      if ((cov_l3h0gbc2i.b[58][0]++, event.which === ARROW_DOWN_KEYCODE) && (cov_l3h0gbc2i.b[58][1]++, index < items.length - 1)) {
        cov_l3h0gbc2i.b[57][0]++;
        cov_l3h0gbc2i.s[185]++;
        // Down
        index++;
      } else {
        cov_l3h0gbc2i.b[57][1]++;
      }

      cov_l3h0gbc2i.s[186]++;

      if (index < 0) {
        cov_l3h0gbc2i.b[59][0]++;
        cov_l3h0gbc2i.s[187]++;
        index = 0;
      } else {
        cov_l3h0gbc2i.b[59][1]++;
      }

      cov_l3h0gbc2i.s[188]++;
      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        cov_l3h0gbc2i.f[1]++;
        cov_l3h0gbc2i.s[25]++;
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        cov_l3h0gbc2i.f[2]++;
        cov_l3h0gbc2i.s[26]++;
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_l3h0gbc2i.f[3]++;
        cov_l3h0gbc2i.s[27]++;
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  cov_l3h0gbc2i.s[189]++;
  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    cov_l3h0gbc2i.f[22]++;
    cov_l3h0gbc2i.s[190]++;
    event.preventDefault();
    cov_l3h0gbc2i.s[191]++;
    event.stopPropagation();
    cov_l3h0gbc2i.s[192]++;

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    cov_l3h0gbc2i.f[23]++;
    cov_l3h0gbc2i.s[193]++;
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  cov_l3h0gbc2i.s[194]++;
  $.fn[NAME] = Dropdown._jQueryInterface;
  cov_l3h0gbc2i.s[195]++;
  $.fn[NAME].Constructor = Dropdown;
  cov_l3h0gbc2i.s[196]++;

  $.fn[NAME].noConflict = function () {
    cov_l3h0gbc2i.f[24]++;
    cov_l3h0gbc2i.s[197]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_l3h0gbc2i.s[198]++;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;

})));
//# sourceMappingURL=dropdown.js.map
