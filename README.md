![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 03 - Asynchronicity

### Author: Michael George, Code 401d28

### Links and Resources
[![Build Status](https://travis-ci.com/michaelageorge/03-async.svg?branch=master)](https://travis-ci.com/michaelageorge/03-async)

* [repo](https://github.com/michaelageorge/03-async)
* [travis]((https://travis-ci.com/michaelageorge/03-async))

### Modules

#### `reader-fixed.js`
##### Exported Values and Methods
Will export a function that takes in an array of file names and a callback function as arguments.
###### `reader-fixed(files, callback) -> error or [file content]`

#### `reader-callbacks-array.js`
##### Exported Values and Methods
Will export a function that takes an array of file names and a callback function as arguments.
###### `reader-callbacks-array(files, callback) -> error or [file content]`

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.

#### Tests
* Tests can be found in the tests folder
* reader-fixed.test.js
* reader-callbacks-array.test.js

