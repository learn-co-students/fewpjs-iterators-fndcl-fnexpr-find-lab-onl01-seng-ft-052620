const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record) {
  let winningGame = record.find( record => record.result === "W")
  if (winningGame) {
    return winningGame.year
  }
  else {
    return undefined 
  }
}
