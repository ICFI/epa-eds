# Title
This is a Node.js application [...] he primary stack consists of Node, Express and Angular.  Other 
libraries are used for security handling and utility functions

## Prerequisites
1. Install Node.js
2. Install MongoDb

## Components
There are a couple of moving parts in this repository that you should
know about before proceding:

1. The server in `server.js` is an [Express] app that renders an
   HTML page which serves as entry point for the application.
2. The server also contains a series of accessible APIs which service the application
   but can also service other modes of multichannel communication
3. The test suite is a [Mocha] test script that uses the PhantomJS [WebDriver] API 
   to test APIs and supporting domain functions.


## Setup
Clone this repo and install the dependencies via [npm]:

```sh
git clone https://github.com/ICFI/epa-eds.git
cd epa-eds
npm install
```

### Verify
Next up, you can verify that the test server works by calling `node server.js`. This
fires up an [Express] server that serves up a page with the entry point of the application. 
You can confirm that it's running by visiting
[http://localhost:3000](http://localhost:3000) in a web browser, or:

```sh
curl -s http://localhost:3000
```
For productioninstallations, it is recommended to use a process service such as PM2.


### Run the Tests
If code modifications are made, you should re-run the unit tests.
In a shell, cd to the root application directory run the tests:

```sh
mocha test/server
```
