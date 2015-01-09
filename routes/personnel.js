/* This file caters to the /personnel route on the server */

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Contact = mongoose.model('Contact', {
    name: String,
    email: {
        type: String,
        required: true
    }
});

router.get('/', function(req, res) {
    res.status(200).json({ message: 'You have hit the personnel end point ... ' });
});

router.post('/', function (req, res) {
    var contact = new Contact(req.body);
    contact.save(function (err, result) {
        if (err)
            res.status(500).json(err);
        else
           res.status(200).json(result);
    });
});

module.exports = router;