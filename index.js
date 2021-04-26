function saturdayFun(word = "roller-skate"){
  // console.log(`This Saturday, I want to ${word}!`)
  return `This Saturday, I want to ${word}!`
}
// saturdayFun("eat")

let mondayWork = function(word = 'go to the office'){
  // console.log(`Monday, I will ${word}.`)
  return `This Monday, I will ${word}.`
}
// mondayWork("eat")

function wrapAdjective(string="*"){
  return function(blah="special"){
    return `You are ${string}${blah}${string}!`
    }
}

let Calculator = {
  add: function(a, b){
    return a + b
  },
  subtract: function(a, b){
    return a - b
  },
  multiply: function(a, b){
    return a * b
  },
  divide: function(a, b){
    return a / b
  }, 
};

function actionApplyer(int, arr){

  let start = int 

  for (let i= 0; i < arr.length; i++){
    start = arr[i](start)
  }

  return start
}