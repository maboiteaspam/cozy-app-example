var cozyStub = require('cozy-stub');

var cozyHandler = require('./cozy');

console.log('<myapp> made cozy..');
var options = {
  port: 8090
};

cozyStub.stub(cozyHandler, options);
