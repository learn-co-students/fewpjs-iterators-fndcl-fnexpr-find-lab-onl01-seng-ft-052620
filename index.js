const testVar = {}

function superbowlWin(games) {
  let winYear = games.find (function (g) {
    return g.result === 'W' }
  )
    return winYear ? winYear.year : undefined 
}
