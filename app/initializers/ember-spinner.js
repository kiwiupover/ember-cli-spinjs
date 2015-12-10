import config from '../config/environment';

var emberSpinnerPrefix = {
  modulePrefix: config.modulePrefix
};

export default {
  name: 'ember-spinner-prefix',

  initialize: function() {
    let application = arguments[1] || arguments[0];
    application.register('ember-spinner:main', emberSpinnerPrefix, {instantiate: false});
    application.inject('component:ember-spinner', 'emberSpinnerPrefixConfig', 'ember-spinner:main');
  }
};
