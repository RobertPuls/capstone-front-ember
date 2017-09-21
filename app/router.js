import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('signup');
  this.route('login');
  this.route('beats', function() {
    this.route('cloud');
  });
  this.route('tutorial');
});

export default Router;
