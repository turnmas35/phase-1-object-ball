function gameObject(homeTeamName, awayTeamName) {
    const gameObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        } 
    }
return gameObject;
}

//console.log(gameObject());

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }

//console.log(homeTeamName());

function numPointsScored(playerName) {
    // Access the home and away teams in the gameObject
  const homeTeam = gameObject().home;
  const awayTeam = gameObject().away;

  // Check if the player is in the home team
  if (homeTeam.players[playerName]) {
    return homeTeam.players[playerName].points;
  }

  // Check if the player is in the away team
  if (awayTeam.players[playerName]) {
    return awayTeam.players[playerName].points;
  }

  // If the player is not found in either team, return an error message or handle accordingly
  return `${playerName} not found`;
}

//console.log(numPointsScored("Brook Lopez"));

function shoeSize(playerName) {
    const homeTeam = gameObject().home;
    const awayTeam = gameObject().away;

    if (homeTeam.players[playerName]) {
        return homeTeam.players[playerName].shoe;
      }
    
    if (awayTeam.players[playerName]) {
        return awayTeam.players[playerName].shoe;
      }
    
    return `${playerName} not found`;
}

//console.log(shoeSize("Brook Lopez"));

function teamColors(teamName) {
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return `${teamName} is not a valid team name`;
    }
}

//console.log(teamColors("Brooklyn Nets"));

function teamNames() {
    const game = gameObject();
    const homeTeamName = game.home.teamName;
    const awayTeamName = game.away.teamName;
  
    return [homeTeamName, awayTeamName];
  }

//console.log(teamNames());

function playerNumbers(teamName) {
    const game = gameObject();
    const homeTeam = game.home;
    const awayTeam = game.away;
  
    if (homeTeam.teamName === teamName) {
      return Object.values(homeTeam.players).map(player => player.number);
    } else if (awayTeam.teamName === teamName) {
      return Object.values(awayTeam.players).map(player => player.number);
    } else {
      return [];
    }
  }

//console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    const game = gameObject();
    const homeTeam = game.home;
    const awayTeam = game.away;
  
    // Check if the player is in the home team
    if (homeTeam.players.hasOwnProperty(playerName)) {
      return homeTeam.players[playerName];
    }
    
    // Check if the player is in the away team
    if (awayTeam.players.hasOwnProperty(playerName)) {
      return awayTeam.players[playerName];
    }
  
    // If the player is not found in either team, return an empty object or handle it as needed
    return `${playerName} not found`;
  }

  //console.log(playerStats("Alan jones"));

  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    // Iterate through the home team's players
    for (const playerName in game.home.players) {
      const player = game.home.players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = playerName;
      }
    }
  
    // Iterate through the away team's players
    for (const playerName in game.away.players) {
      const player = game.away.players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = playerName;
      }
    }
  
    // Return the number of rebounds for the player with the largest shoe size
    if (playerWithLargestShoe) {
      return game.home.players[playerWithLargestShoe].rebounds || game.away.players[playerWithLargestShoe].rebounds;
    } else {
      return "No player found";
    }
  }
  
//console.log(bigShoeRebounds());

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = null;
  
    for (const playerName in game.home.players) {
      const player = game.home.players[playerName];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMostPoints = playerName;
      }
    }
  
    for (const playerName in game.away.players) {
      const player = game.away.players[playerName];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMostPoints = playerName;
      }
    }
  
    return playerWithMostPoints || "No player found";
  }
  
//console.log(mostPointsScored());

function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (const playerName in game.home.players) {
      homeTeamPoints += game.home.players[playerName].points;
    }
  
    for (const playerName in game.away.players) {
      awayTeamPoints += game.away.players[playerName].points;
    }
  
    if (homeTeamPoints > awayTeamPoints) {
      return game.home.teamName;
    } else if (homeTeamPoints < awayTeamPoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }
  
//console.log(winningTeam());

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;
  
    for (const playerName in game.home.players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
      }
    }
  
    for (const playerName in game.away.players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
      }
    }
  
    return playerWithLongestName || "No player found";
  }
  
//console.log(playerWithLongestName());

function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;
  
    for (const playerName in game.home.players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
      }
    }
  
    for (const playerName in game.away.players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
      }
    }
  
    let mostStealsPlayer = null;
    let mostSteals = 0;
  
    for (const playerName in game.home.players) {
      const player = game.home.players[playerName];
      if (player.steals > mostSteals) {
        mostSteals = player.steals;
        mostStealsPlayer = playerName;
      }
    }
  
    for (const playerName in game.away.players) {
      const player = game.away.players[playerName];
      if (player.steals > mostSteals) {
        mostSteals = player.steals;
        mostStealsPlayer = playerName;
      }
    }
  
    return playerWithLongestName === mostStealsPlayer;
  }
  
console.log(doesLongNameStealATon());