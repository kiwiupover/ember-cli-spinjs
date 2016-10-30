import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-spinner', 'Integration | Component | ember spinner', {
  integration: true
});

test('renders the default ember-spinner', function(assert) {
  this.render(hbs`{{ember-spinner}}`);

  assert.equal(this.$('.spinner').length, 1, 'Creates a wrapper div with the class "spinner"');
  assert.equal(this.$('.spinner > div').length, 12, 'Default spinner has 12 lines');
});

test('can configure ember-spinner', function(assert) {
  let lines = 11;

  this.set('lines', lines);

  this.render(hbs`{{ember-spinner lines=lines}}`);

  assert.equal(this.$('.spinner').length, 1, 'Creates a wrapper div with the class "spinner"');
  assert.equal(this.$('.spinner:first > div').length, lines, 'can configure number of lines');
});

test('can add multiple spinners', function(assert) {
  this.render(hbs`
    {{ember-spinner}}
    {{ember-spinner}}
  `);

  assert.equal(this.$('.spinner').length, 2, 'Can include multiple ember-spinners');
});
