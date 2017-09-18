import Ember from 'ember';

export default Ember.Controller.extend({
  isChecked: false,
  actions: {
    toggleLight: function() {
      event.stopPropagation();
      console.log(event);
      this.toggleProperty("isChecked");
    }
  }
});
