# Install
## Prerequisites
1. Install Node.js
2. Ensure outbound traffic is allowed in your environment over ports 80/443

## Components
There are several components to the web application:

1. Data - Uses a Talend data transformation routine to aggregate the power plan emissions per state for 2012 and compare that to the CPP targets per state for 2030
2. Node.js - Server-side framework for the application
3. Single page application - Main index.html file that uses Angular to interact with the data and change the current view


## Setup
Clone this repo and install the dependencies via [npm]:

```sh
git clone https://github.com/ICFI/EPA-EDS.git
cd EPA-EDS
npm install
```

## Verify
Next, verify that the test server works by calling `node server.js`. This
fires up an Express server that serves up a page with the entry point of the application. 
You can confirm that it's running by visiting
[http://localhost:3000](http://localhost:3000) in a web browser, or:

```sh
curl -s http://localhost:3000
```





