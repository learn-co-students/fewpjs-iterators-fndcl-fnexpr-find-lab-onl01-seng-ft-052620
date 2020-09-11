const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let object = array.find( e => e.result === "W" )
  if (object) {
    return object.year
  }
}