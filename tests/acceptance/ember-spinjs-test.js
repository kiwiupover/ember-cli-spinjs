import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ember spinner');

test('The index displays six ember-spinner', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.spinner-display').length, 6);
  });
});
