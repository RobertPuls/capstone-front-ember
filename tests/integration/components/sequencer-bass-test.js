import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sequencer-bass', 'Integration | Component | sequencer bass', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sequencer-bass}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sequencer-bass}}
      template block text
    {{/sequencer-bass}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
