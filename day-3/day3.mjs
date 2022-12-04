
import { readFileSync } from "node:fs";

const input = readFileSync("day3.txt", { encoding: "utf-8" })
function rucksackItems(){
    let rucksacks = input.split('\n')
    let halves = rucksacks.map((line) =>{
        return `${line.slice(0, line.length/2)},${line.slice(line.length/2)}`
    })
    let compartments = halves.map((x) => x.split(','))
    let matches = []
    compartments.forEach((rucksack) => {
        let half1 = rucksack[0].split('')
        let half2 = rucksack[1].split('')
        let test = (half1.filter(value => half2.includes(value)))
        matches.push(test[0])
    })
    let total = 0
    for(let i =0; i < matches.length; i++){
        if(matches[i] == matches[i].toLowerCase()){
            total+=(Number(matches[i].charCodeAt(0) - 96))
        }else{
            total+=(Number(matches[i].charCodeAt(0) - 65 + 27))
        }
    }
    console.log(total)
}
function findTheBadges(){
    let rucksacks = input.split('\n')
    let groups = []
    for(let i =0; i< rucksacks.length; i +=3){
        groups.push([rucksacks[i] ,rucksacks[i + 1], rucksacks[i + 2]])
    }
    let matches = []
    groups.forEach((bag) => {
        let bag1 = bag[0].split('')
        let bag2 = bag[1].split('')
        let bag3 = bag[2].split('')
        let firstFilter = (bag1.filter(value => bag2.includes(value)))
        let secondFilter = (bag3.filter(value => firstFilter.includes(value)))
        matches.push(secondFilter[0])
    })
    let total = 0
    for(let i =0; i < matches.length; i++){
        if(matches[i] == matches[i].toLowerCase()){
            total+=(Number(matches[i].charCodeAt(0) - 96))
        }else{
            total+=(Number(matches[i].charCodeAt(0) - 65 + 27))
        }
    }
    console.log(total)
}
rucksackItems()
findTheBadges()