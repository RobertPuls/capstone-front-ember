import Ember from 'ember';

export default Ember.Component.extend({
  isCheckedRight: false,
  actions: {
    toggleLightRight: function() {
      console.log(event);
      this.toggleProperty("isCheckedRight");
    },
    toggleLightLeft: function() {
      console.log(event);
      this.toggleProperty("isCheckedLeft");
    }
  }
});
