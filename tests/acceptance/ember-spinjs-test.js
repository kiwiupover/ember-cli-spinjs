import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

let application;

module('Acceptance | Display Spinners', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Six spinners are displayed', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.spinner-display').length, 6);
  });
});
