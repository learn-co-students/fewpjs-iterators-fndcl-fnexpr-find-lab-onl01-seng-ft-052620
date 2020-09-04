const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record_array){
  let win = record_array.find(function(record){
    return record["result"] === 'W';
  })
  if(win){
    return win["year"];
  }
}
