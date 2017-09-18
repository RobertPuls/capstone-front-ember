import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sequencer-hihat', 'Integration | Component | sequencer hihat', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sequencer-hihat}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sequencer-hihat}}
      template block text
    {{/sequencer-hihat}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
