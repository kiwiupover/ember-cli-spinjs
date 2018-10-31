import { module, test } from 'qunit';
import { findAll, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember spinner', function(hooks) {
  setupApplicationTest(hooks);

  test('The index displays six ember-spinner', async function(assert) {
    await visit('/');

    assert.equal(findAll('.spinner-display').length, 7);
  });
});
