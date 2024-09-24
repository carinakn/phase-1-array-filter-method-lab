function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  const drivers = [
    { name: "Alice", hometown: "Seattle" },
    { name: "Bob", hometown: "New York" },
    { name: "Charlie", hometown: "Los Angeles" },
    { name: "alice", hometown: "Chicago" },
    { name: "Bobby", hometown: "Miami" }
  ];
  
  const driverNames = ["Alice", "Bob", "Charlie", "alice", "Bobby"];