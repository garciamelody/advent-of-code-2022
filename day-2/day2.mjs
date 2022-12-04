// --- Day 2: Rock Paper Scissors ---

//input -> strategy guide of two columns
//The first column is what your opponent is going to play: 
//A for Rock, B for Paper, and C for Scissors.

//The second column is what you should play in response: 
//X for Rock, Y for Paper, and Z for Scissors.

//how to keep score:
//Your total score is the sum of your scores for each round.
//The score for a single round is the score for the shape you selected (//1 for Rock, 2 for Paper, and 3 for Scissors)
//plus the score for the outcome of the round (//0 if you lost, 3 if the round was a draw, and 6 if you won).

//calculate the score you would get if you were to follow the strategy guide.
// For example, suppose you were given the following strategy guide:
// A Y -> 8
// B X -> 1
// C Z -> 6
//total score -> 15
// This strategy guide predicts and recommends the following:
// What would your total score be if everything goes exactly according to your strategy guide? 


//rock (A or X) = 1 point
//paper (B or Y) = 2 points
//scissors (C or Z) = 3 points

// instances where we win -> 6 points
// C and X (scissors and rock)
// A and Y (rock and paper)
// B an Z (paper and scissors)

// draws -> 3 points
// A and X (rock and rock)
// B and Y (paper and paper)
// C and Z (scissors and scissors)

//loses are 0 points

import { readFileSync } from "node:fs";

const input = readFileSync("day2.txt", { encoding: "utf-8" })

function strategyGuide (){
    let strategyArr = input.split('\n').map((x) => x.split(' '))
    let score = 0
    for(let i = 0; i < strategyArr.length; i++){
        if(strategyArr[i][1] == 'X'){
            score += 1
        }
        if(strategyArr[i][1] == 'Y'){
            score += 2
        }
        if(strategyArr[i][1] == 'Z'){
            score += 3
        }
        if( strategyArr[i][0] == 'A' && strategyArr[i][1] =='X' ||
            strategyArr[i][0] == 'B' && strategyArr[i][1] =='Y' ||
            strategyArr[i][0] == 'C' && strategyArr[i][1] =='Z'){
            score += 3
        }if(strategyArr[i][0] == 'C' && strategyArr[i][1] =='X' ||
            strategyArr[i][0] == 'A' && strategyArr[i][1] =='Y' ||
            strategyArr[i][0] == 'B' && strategyArr[i][1] =='Z'){
                score += 6
            }
    }
    console.log(score)
}

// part 2
// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

// In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
// In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

// Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?

function actualStrategyGuide (){
    let strategyArr = input.split('\n').map((x) => x.split(' '))
    let score = 0
    for(let i = 0; i < strategyArr.length; i++){
        //need to lose
        if(strategyArr[i][1] == 'X' && strategyArr[i][0] =='A'){
            score += 3
        }
        if(strategyArr[i][1] == 'X' && strategyArr[i][0] =='B'){
            score += 1
        }
        if(strategyArr[i][1] == 'X' && strategyArr[i][0] =='C'){
            score += 2
        }   
        //end in a draw
        if(strategyArr[i][1] == 'Y' && strategyArr[i][0] =='A'){
            score += 4
        }
        if(strategyArr[i][1] == 'Y' && strategyArr[i][0] =='B'){
            score += 5
        }
        if(strategyArr[i][1] == 'Y' && strategyArr[i][0] =='C'){
            score += 6
        }
        //need to win
        if(strategyArr[i][1] == 'Z' && strategyArr[i][0] == 'A'){
            score += 8
        }
        if(strategyArr[i][1] == 'Z' && strategyArr[i][0] == 'B'){
            score += 9
        }
        if(strategyArr[i][1] == 'Z' && strategyArr[i][0] == 'C'){
            score += 7
        }
    }
    console.log(score)
}
strategyGuide()
actualStrategyGuide()