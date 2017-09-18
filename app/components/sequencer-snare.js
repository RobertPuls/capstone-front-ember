import Ember from 'ember';

export default Ember.Component.extend({
  isCheckedRight: false,
  actions: {
    toggleLightRight: function() {
      this.toggleProperty("isCheckedRight");
    },
    toggleLightLeft: function() {
      this.toggleProperty("isCheckedLeft");
    }
  }
});
