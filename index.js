/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-spinjs',
  included() {
    this._super.included.apply(this, arguments);

    this.import('node_modules/spin.js/spin.js', {
      using: [
        { transformation: 'es6', as: 'spin.js' }
      ]
    });
  }

};
