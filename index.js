const testVar = {}

function superbowlWin(tester) {
  let firstYear = tester.find (function (s) 
  {return  s.result === 'W' }
  )
  return !!firstYear ? firstYear.year : undefined
}
