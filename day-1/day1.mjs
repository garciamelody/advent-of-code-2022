import { readFileSync } from "node:fs";

const input = readFileSync("day1.txt", { encoding: "utf-8" })

function mostCalories(){
    // turns the input into an array that is split at each empty line
    let calorieArr = input.split('\n\n')
    // turns each array element from a string to an array splitting at each new line
    let calories = calorieArr.map((x) => x.split('\n'))
    //an array that contains the sum of calories each elf is carrying
    let calorietotals = calories.map((x) => {
        return x.reduce((prev, c) => Number(prev) + Number(c), 0)
    })
    //returns the highest value from the array
    console.log(Math.max(...calorietotals))
    
    //sorts the array from largest to smallest
    let sortedCalorieTotals = calorietotals.sort((a,b) => b - a)
    //makes a shallow copy of the array from index 0 - 2 
    //and reduces the elements to the total value the top three elves are carrying
    console.log(sortedCalorieTotals.slice(0,3).reduce((prev, c) => Number(prev) + Number(c), 0))
}
mostCalories()