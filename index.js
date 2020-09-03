const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let search = record.find( s => s.result === "W" )
  return search ? search.year : undefined
}

