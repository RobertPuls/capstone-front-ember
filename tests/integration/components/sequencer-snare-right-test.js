import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sequencer-snare-right', 'Integration | Component | sequencer snare right', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sequencer-snare-right}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sequencer-snare-right}}
      template block text
    {{/sequencer-snare-right}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
