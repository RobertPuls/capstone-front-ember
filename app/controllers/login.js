import Ember from 'ember';

export default Ember.Controller.extend({
  makeRequest: function(url, data, method) {
    let res;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://capstone-back.herokuapp.com/user/signup/users",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "2a3de3b4-f884-db83-83bb-2cdce0c03adb"
      },
      "processData": false,
      "data": JSON.stringify(data)
    }

    $.ajax(settings).done(function(response) {
      res = response;
      console.log(response);
      return res;
    });
    console.log(res);
    return res;
  },

  user: Ember.inject.service(),

  actions: {
    login: function() {
      let address = "";
      var newUser = {
        email: this.get("userEmail"),
        password: this.get("userPassword"),
      }
      console.log(this.user);
      // let newUser = {
      //   email: this.get("userEmail"),
      //   password: this.get("userPassword"),
      //   address: this.get("userAddress")
      // }
      $.post("https://capstone-back.herokuapp.com/user/login/users", newUser, function(res) {
        address = res.address;
        console.log(res);
        // console.log("address", address);
      }).fail(console.log).then(() => {
        this.get("user").set("address", address);
      }).then(() => {
        this.transitionToRoute("home");
      });
    }
  }
});
