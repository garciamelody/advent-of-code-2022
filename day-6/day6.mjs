import { readFileSync } from "node:fs";

const input = readFileSync("day6.txt", { encoding: "utf-8" })

function findFour(){
    let buffer = input
    let answer = 0
    for(let i =0; i < buffer.length; i++){
        let substring = buffer.slice(i, i + 4)
        if(new Set(substring).size == substring.length){
            answer = i + 4
            break
        }
    }
    console.log(answer)
}
function findFourteen(){
    let buffer = input
    let answer = 0
    for(let i =0; i < buffer.length; i++){
        let substring = buffer.slice(i, i + 14)
        if(new Set(substring).size == substring.length){
            answer = i + 14
            break
        }
    }
    console.log(answer)
}
findFour()
findFourteen()