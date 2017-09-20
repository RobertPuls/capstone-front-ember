import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),
  url: Ember.computed.alias("user.address"),

  makeRequest: function(url, data, method) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": method,
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "5a325911-53eb-6a2c-8838-710eaec7a39f"
      },
      "processData": false,
      "data": JSON.stringify({
        "pattern": data
      })
    }

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  },
  actions: {
    playBeat: function() {
      console.log("this", this.beat);
      $("#circle").addClass("on");

      console.log(this.get("url"));

      this.makeRequest(`${this.get("url")}`, this.beat, "POST");
    },
    stopBeat: function() {
      // console.log(this.beats.responseJSON);
      $("#circle").removeClass("on");
      this.makeRequest(`${this.get("url")}/stop`, {}, "POST");

    },
  }
});
