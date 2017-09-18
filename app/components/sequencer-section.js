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
      event.stopPropagation();
      console.log(event);
      this.toggleProperty("isChecked");
    }
  }
});
