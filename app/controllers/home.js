import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    playBeat: function() {
      $("#circle").addClass("on");

      let right = $("#snare>.inline>.box.right");
      let left = $("#snare>.inline>.box.left");
      let bass = $("#bass>.inline>.box");
      let hihat = $("#hihat>.inline>.box");

      console.log("hihat", hihat);
      console.log("snare right", right);
      console.log("snare left", left);
      console.log("bass", bass);

      for (let i = 0; i < bass.length; i++) {
        console.log("times ran", i + 1);
        if (i % 2 === 0) {
          right[i / 2] = right[i / 2].classList.contains("checked");
          left[i / 2] = left[i / 2].classList.contains("checked");
        }
        bass[i] = bass[i].classList.contains("checked");
        hihat[i] = hihat[i].classList.contains("checked");
      }
      var beat = {
        pattern: [
          [right],
          [left],
          [bass],
          [hihat]
        ]
      }
      console.log(beat);
    }
  }
});
