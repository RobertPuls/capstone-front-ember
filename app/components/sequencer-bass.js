import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,
  actions: {
    toggleLight: function() {
      this.toggleProperty("isChecked");
    }
  }
});
