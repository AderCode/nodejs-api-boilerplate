'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var testData = [{
    name: 'Jackson',
    age: 25
}, {
    name: 'Matt',
    age: 40
}];

var router = (0, _express.Router)();

router.get('/', function (req, res) {
    res.json(testData);
});

exports.default = router;