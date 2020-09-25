const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(team_seasons){
  let wins = team_seasons.find( function(s) { return s['result'] === "W" })
  return !wins ? wins : wins['year']
}