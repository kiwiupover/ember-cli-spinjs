// import Ember from 'ember';
// import {module, test} from 'qunit';
// import startApp from '../helpers/start-app';
//
// var App, server;
//
// module('Acceptance: Admin', {
//   beforeEach: function() {
//     App = startApp();
//   },
//   afterEach: function() {
//     Ember.run(App, 'destroy');
//   }
// });
//
// asyncTest('three spinners are displayed', function(assert) {
//   assert.expect(1);
//   visit('/');
//   Ember.run.later(this, function() {
//     start();
//     assert.equal(find('.spinner-display').length, 5);
//   }, 0);
// });


import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance | Display Spinners', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Five spinners are displayed', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.spinner-display').length, 5);
  });
});
