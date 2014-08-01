'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLISpinjs(project) {
  this.project = project;
  this.name    = 'Ember CLI Spinjs';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISpinjs.prototype.treeFor = function treeFor(name) {
  var treePath = path.join('node_modules/spinjs', name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISpinjs.prototype.included = function included(app) {
  var stylePath = 'vendor/foundation/css/';

  // Import css from foundation
  app.import(stylePath + 'normalize.css');
  app.import(stylePath + 'foundation.css');

};

module.exports = EmberCLISpinjs;
