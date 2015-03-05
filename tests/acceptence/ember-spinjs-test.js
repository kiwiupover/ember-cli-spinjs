import Ember from 'ember';
import startApp from '../helpers/start-app';

var App, server;

module('Acceptance: Admin', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

asyncTest('three spinners are displayed', function() {
  expect(1);
  visit('/');
  Ember.run.later(this, function() {
    start();
    equal(find('.spinner-display').length, 5);
  }, 0);
});
