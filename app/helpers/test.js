import Ember from 'ember';

export function test(params) {
  let myArr = [];
  console.log("params", params);

  // for (let i = 0; i < params.length; i++) {
  //   console.log("i", i);
  //   console.log("params[i]", params[i]);
  //   for (let j = 0; j < params[0].length; j++) {
  //     console.log("params[i][j]", params[i][j]);
  //     myArr.push(params[i][j]);
  //   }
  // }
  return params;
  // console.log(myArr);
  // return myArr;
}

export default Ember.Helper.helper(test);
