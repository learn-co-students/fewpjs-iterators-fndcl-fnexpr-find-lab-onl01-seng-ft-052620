const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(obj) {
  const winYear = obj.find( y => y.result === "W")
  return winYear ? winYear.year : undefined
}