import Ember from 'ember';

export function eq(params) {
  return (params === "length");
}

export default Ember.Helper.helper(eq);
