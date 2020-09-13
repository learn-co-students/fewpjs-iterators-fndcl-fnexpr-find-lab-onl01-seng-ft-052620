const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let year;
  record.find( function(bowl){
    if (bowl.result === 'W'){
      year = bowl.year
    }
  })
  return year
}