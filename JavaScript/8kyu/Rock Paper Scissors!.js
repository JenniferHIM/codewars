// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    const rules = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }
    
    if(p1 == p2) {
      return `Draw!`
    }
    
    if (rules[p1] === p2) {
      return `Player 1 won!`;
    } else {
      return `Player 2 won!`;
    }
  };


//   const rps = (p1, p2) => {
//     if(p1 === p2) {
//       return 'Draw!'
//     }; 
//     return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
//   }