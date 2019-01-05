'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var testData = [{
    test: 'Successful'
}, {
    test: 'Successful'
}];

var router = (0, _express.Router)();

router.get('/', function (req, res) {
    res.json(testData);
});

exports.default = router;