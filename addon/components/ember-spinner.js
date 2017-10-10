/* global Spinner, require */

import { merge } from "@ember/polyfills";
import Component from "@ember/component";
import { on } from "@ember/object/evented";

export default Component.extend({
  classNames: 'spinner-display',
  color: "#333",
  corners: 1,
  direction: 1,
  fps: 20,
  left: '50%',
  length: 7,
  lines: 12,
  opacity: 1/4,
  radius: 10,
  rotate: 0,
  scale: 1.0,
  shadow: false,
  speed: 1,
  top: '50%',
  trail: 100,
  width: 5,
  zIndex: 2000000000,
  spinner: null,
  configArgs: {},

  lookupUpConfig: on('willInsertElement', function() {
    let opts = {
      color:     this.get('color'),
      corners:   this.get('corners'),
      direction: this.get('direction'),
      fps:       this.get('fps'),
      left:      this.get('left'),
      length:    this.get('length'),
      lines:     this.get('lines'),
      opacity:   this.get('opacity'),
      radius:    this.get('radius'),
      rotate:    this.get('rotate'),
      scale:     this.get('scale'),
      shadow:    this.get('shadow'),
      speed:     this.get('speed'),
      top:       this.get('top'),
      trail:     this.get('trail'),
      width:     this.get('width'),
      zIndex:    this.get('zIndex'),
      hwaccel:   true
    };

    var configArgs;

    if(this.get('config')) {
      let configFile = this.emberSpinnerPrefixConfig.modulePrefix + '/config/ember-spinner/' + this.get('config');

      configArgs = require( configFile ).default;
    }

    this.spinnerArgs = merge(opts, configArgs);

  }),


  didInsertElement: function() {
    this.spinner = new Spinner(this.spinnerArgs).spin(this.$()[0]);
  },

  willRemoveElement: function() {
    this.spinner.stop();
  }

});
