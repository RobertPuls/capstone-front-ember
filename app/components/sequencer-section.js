import Ember from 'ember';

export default Ember.Component.extend({
  boxes: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ],
  isChecked: false,
  actions: {
    toggleLight: function() {
      this.toggleProperty("isChecked");
    }
  }
});
