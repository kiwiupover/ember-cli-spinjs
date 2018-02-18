import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember spinner', function(hooks) {
  setupRenderingTest(hooks);

  test('renders the default ember-spinner', async function(assert) {
    await render(hbs`{{ember-spinner}}`);

    assert.equal(findAll('.spinner').length, 1, 'Creates a wrapper div with the class "spinner"');
    assert.equal(findAll('.spinner > div').length, 12, 'Default spinner has 12 lines');
  });

  test('can configure ember-spinner', async function(assert) {
    let lines = 11;

    this.set('lines', lines);

    await render(hbs`{{ember-spinner lines=lines}}`);

    assert.equal(findAll('.spinner').length, 1, 'Creates a wrapper div with the class "spinner"');
    assert.equal(this.$('.spinner:first > div').length, lines, 'can configure number of lines');
  });

  test('can add multiple spinners', async function(assert) {
    await render(hbs`
      {{ember-spinner}}
      {{ember-spinner}}
    `);

    assert.equal(findAll('.spinner').length, 2, 'Can include multiple ember-spinners');
  });
});
