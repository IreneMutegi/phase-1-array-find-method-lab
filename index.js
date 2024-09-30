function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined; // Return the year if found, otherwise undefined
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  const winningYear = superbowlWin(record);
  console.log(winningYear); // Logs: "2015"
  