const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const winYear = array.find( y => y.result === "W")
  return winYear ? winYear.year :undefined
}