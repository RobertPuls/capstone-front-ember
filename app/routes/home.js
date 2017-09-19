import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('beat');
  },

  actions: {
    playBeat: function() {
      $("#circle").addClass("on");

      let right = $(".snareRight");
      let left = $(".snareLeft");
      let bass = $(".bass");
      let hihat = $(".hihat");

      console.log("right", right);

      for (let i = 0; i < bass.length; i++) {
        if (i % 2 === 0) {
          right[i / 2] = right[i / 2].checked;
          left[i / 2] = left[i / 2].checked;
        }
        bass[i] = bass[i].checked;
        hihat[i] = hihat[i].checked;
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
