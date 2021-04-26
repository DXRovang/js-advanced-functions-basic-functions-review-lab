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
    return `You are ${blah}`
    }
}

