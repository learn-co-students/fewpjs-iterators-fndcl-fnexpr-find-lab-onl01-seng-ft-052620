const testVar = {}


function superbowlWin(year) {
  let winningYear = year.find(function(s) {
    return s.result === "W"
  })
  return !!winningYear ? winningYear.year : undefined
}