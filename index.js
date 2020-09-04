function superbowlWin(record) {
  let result = record.find(year => year.result == "W");
  return result ? result.year : undefined;
} 

