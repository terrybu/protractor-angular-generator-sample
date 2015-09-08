# protractor-angular-generator-sample
Running protractor tests for AngularJS apps with scaffolding from DaftMonk's Fullstack Generator 

1) Setup
Use npm to install Protractor globally with:
npm install -g protractor

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update
Now start up a server with:
webdriver-manager start

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at http://localhost:4444/wd/hub.

2) Run the app normally (grunt serve) with mongod in the background
  * If you get any errors, make sure you've run bower install and npm install 

3) configure your protractor config file at protractor.conf.js in the root folder

4) All your specs are in e2e/main/main.spec.js 

5) run protractor protractor.conf.js
