import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sequencer-snare-left', 'Integration | Component | sequencer snare left', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sequencer-snare-left}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sequencer-snare-left}}
      template block text
    {{/sequencer-snare-left}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
