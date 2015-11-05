import Ember from 'ember';
import config from '../config/environment';

var emberSpinnerPrefix = {
  modulePrefix: config.modulePrefix
};

export function initialize() {
  const [major, minor] = Ember.VERSION.split('.');
  if (parseInt(major, 10) >= 2 && parseInt(minor, 10) >= 1) {
    var [app] = arguments;
  } else {
    var [container, app] = arguments;
  }
  app.register('ember-spinner:main', emberSpinnerPrefix, {instantiate: false});
  app.inject('component:ember-spinner', 'emberSpinnerPrefixConfig', 'ember-spinner:main');
}

export default {
  name: 'ember-spinner-prefix',

  initialize: initialize
};
