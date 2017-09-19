import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signUp: function() {
      var newUser = this.store.createRecord('user', {
        email: this.get("userEmail"),
        password: this.get("userPassword"),
        address: this.get("userAddress")
      });
      // let newUser = {
      //   email: this.get("userEmail"),
      //   password: this.get("userPassword"),
      //   address: this.get("userAddress")
      // }

      newUser.save();
    }
  }
});
