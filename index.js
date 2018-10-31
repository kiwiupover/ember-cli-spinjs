/* eslint-env node */
'use strict';

const path = require('path');
const resolve = require('resolve');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-spinjs',

  treeForAddonStyles: function (tree) {
    const spinJsPath = path.join(resolve.sync('spin.js'), '..');

    let spinJsCSSTree = new Funnel(spinJsPath, {
      include: ['spin.css']
    });

    let allCSSTrees = [spinJsCSSTree];

    if (tree) {
      allCSSTrees.push(tree);
    }

    return mergeTrees(allCSSTrees);
  }
};
