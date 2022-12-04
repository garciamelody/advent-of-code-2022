import { readFileSync } from "node:fs";

const input = readFileSync("day4.txt", { encoding: "utf-8" })

function overlapping(){
    let taskpairs = input.split('\n')
    let pairs = taskpairs.map((x) => (x.split('-').join(',').split(',')))
    let containedPairs = 0
    let overlappingPairs = 0
    for(let i =0; i < pairs.length; i++){
        if( +(pairs[i][0]) >= +(pairs[i][2]) && +(pairs[i][1]) <= +(pairs[i][3]) || 
            +(pairs[i][2]) >= +(pairs[i][0]) && +(pairs[i][3]) <= +(pairs[i][1])){
            containedPairs ++
        }else if(+(pairs[i][1]) >= +(pairs[i][2]) && +(pairs[i][3]) >= +(pairs[i][0])){
            overlappingPairs++
        }
    }
    console.log(overlappingPairs + containedPairs)
}
overlapping()

