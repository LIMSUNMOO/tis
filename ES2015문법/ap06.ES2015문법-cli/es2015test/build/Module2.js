"use strict";

var _Module = _interopRequireDefault(require("./Module1.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*
  CommonJS 모듈 방식 : require 사용
    var module = require('./MyModule');


  ES2015 모듈 방식 : import/export 사용
    import React from "redux";
    import {Component} from "redux";
    import React, {Component} from "redux";
    import React as rd from "redux";
    import * as rd from "redux";
*/

// Module2.js

console.log(_Module["default"]); //2
debugger;