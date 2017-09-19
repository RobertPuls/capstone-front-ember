import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  user: Ember.inject.service(),
  url: Ember.computed.alias("user.address"),
  host: "http://10.6.67.80:3000"
  // host: `http:${this.get("url")}`
});
