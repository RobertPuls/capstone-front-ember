import Ember from 'ember';

export default Ember.Controller.extend({
  model() {
    return this.store.findAll('beat');
  },
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
      $("#circle").addClass("on");

      let right = $("#snare>.inline>.box.right");
      let left = $("#snare>.inline>.box.left");
      let bass = $("#bass>.inline>.box");
      let hihat = $("#hihat>.inline>.box");

      for (let i = 0; i < bass.length; i++) {
        console.log("times ran", i + 1);
        if (i % 2 === 0) {
          right[i / 2] = right[i / 2].classList.contains("checked");
          left[i / 2] = left[i / 2].classList.contains("checked");
        }
        bass[i] = bass[i].classList.contains("checked");
        hihat[i] = hihat[i].classList.contains("checked");
      }
      let pattern = [
        right,
        left,
        bass,
        hihat
      ]

      this.makeRequest(`${this.get("url")}`, pattern, "POST");
    },
    stopBeat: function() {
      // console.log(this.beats.responseJSON);
      $("#circle").removeClass("on");
      this.makeRequest(`${this.get("url")}/stop`, {}, "POST");

    },
    saveBeat: function() {
      let right = $(".main>#snare>.inline>.box.right");
      let left = $(".main>#snare>.inline>.box.left");
      let bass = $(".main>#bass>.inline>.box");
      let hihat = $(".main>#hihat>.inline>.box");

      for (let i = 0; i < bass.length; i++) {
        console.log("times ran", i + 1);
        if (i % 2 === 0) {
          right[i / 2] = right[i / 2].classList.contains("checked");
          left[i / 2] = left[i / 2].classList.contains("checked");
        }
        bass[i] = bass[i].classList.contains("checked");
        hihat[i] = hihat[i].classList.contains("checked");
      }

      var beat = this.store.createRecord('beat', {
        pattern: [right, left, bass, hihat]
      })

      beat.save();

      // this.makeRequest("http://10.6.67.80:3000/beats", pattern);

    }
  }
});
