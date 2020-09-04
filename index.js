const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find (function(s) {return s.result === "W" })
  if (win != undefined) {
    return win.year
  } else {
    undefined
  }
}
