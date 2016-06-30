base64no
========

A library for encoding and decoding base64 with base64.no service. Why would you ever do this locally?

## Installation

    npm install base64no --save

## Usage

    var base64 = require('base64no');

    // encode
    base64.encode('string', function(error, encoded_string){

        console.log(encoded_string);

    });

    // decode
    base64.encode('base64_string', function(error, decoded_string){

        console.log(decoded_string);

    });

## Release History

* 0.1.0 Initial test release
