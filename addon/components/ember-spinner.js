/* global require */

import { Spinner } from 'spin.js';
import { assign } from '@ember/polyfills';
import Component from '@ember/component';

export default Component.extend({
  classNames: 'spinner-display',
  animation: 'spinner-line-fade-quick',
  position: 'absolute',
  color: '#333',
  left: '50%',
  top: '50%',
  shadow: false,
  corners: 1,
  direction: 1,
  fps: 20,
  length: 7,
  lines: 12,
  radius: 10,
  rotate: 0,
  scale: 1.0,
  speed: 1,
  width: 5,
  zIndex: 2000000000,
  spinner: null,

  init() {
    this._super(...arguments);
    this.configArgs = {};
  },

  willInsertElement() {
    this._super(...arguments);
    let opts = {
      animation: this.get('animation'),
      color:     this.get('color'),
      left:      this.get('left'),
      top:       this.get('top'),
      shadow:    this.get('shadow'),
      position:  this.get('position'),
      corners:   +this.get('corners'),
      direction: +this.get('direction'),
      fps:       +this.get('fps'),
      length:    +this.get('length'),
      lines:     +this.get('lines'),
      radius:    +this.get('radius'),
      rotate:    +this.get('rotate'),
      scale:     +this.get('scale'),
      speed:     +this.get('speed'),
      width:     +this.get('width'),
      zIndex:    +this.get('zIndex'),
      hwaccel:   true
    };

    let configArgs;

    if(this.get('config')) {
      let modulePrefix = this.emberSpinnerPrefixConfig.modulePrefix;
      let configFile = `${modulePrefix}/config/ember-spinner/${this.get('config')}`;

      configArgs = require(configFile).default;
    }

    this.spinnerArgs = assign(opts, configArgs);
  },

  didInsertElement() {
    this.spinner = new Spinner(this.spinnerArgs).spin(this.element);
  },

  willRemoveElement() {
    this.spinner.stop();
  }

});
