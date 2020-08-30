
function superbowlWin(record) {
  let result = record.find(function(object) { return object.result === "W" })
  if (result !== undefined){
    return result.year
  } 
};


