module.exports = {
  name: 'ember-cli-spinjs',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/spin.js/spin.js');
  }
};
