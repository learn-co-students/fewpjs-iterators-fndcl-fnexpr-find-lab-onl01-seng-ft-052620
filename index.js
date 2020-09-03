const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const winningGame = array.find( object => object.result === "W" )
  if (winningGame) {
    return winningGame.year
  } else {
    return undefined
  }
}