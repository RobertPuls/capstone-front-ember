import Ember from 'ember';

export function test(params) {
  console.log(params);
  let myArr = [];
  for (let i = 0; i < params[0].length; i++) {
    myArr.push(params[0][i]);
    myArr.push(params[1][i])
  }
  console.log(myArr);
  return myArr;
}

export default Ember.Helper.helper(test);
