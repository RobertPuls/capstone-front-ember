import Ember from 'ember';

export function eq(params) {
  let id = params[1];
  let myArr = [];
  for (let i = 0; i < params[0][id].length; i++) {
    myArr.push(params[0][id][i]);
  }
  return myArr;
}

export default Ember.Helper.helper(eq);
