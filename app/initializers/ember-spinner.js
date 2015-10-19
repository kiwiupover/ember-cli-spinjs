import config from '../config/environment';

var emberSpinnerPrefix = {
  modulePrefix: config.modulePrefix
};

export default {
  name: 'ember-spinner-prefix',

  initialize: function(app) {
    app.register('ember-spinner:main', emberSpinnerPrefix, {instantiate: false});
    app.inject('component:ember-spinner', 'emberSpinnerPrefixConfig', 'ember-spinner:main');
  }
};
