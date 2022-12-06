
import { readFileSync } from "node:fs";

const input = readFileSync("day5.txt", { encoding: "utf-8" })

function crateOrganization(){
    let crates = input.split('\n').slice(0,8)
    let instructions = input.split('\n').slice(10)

    let numberInstructions = instructions.map( x => x.split(' ').filter(x => Number(x)))
    let crateStacks = crates.map((x) => x.split('').filter((value,index) => index % 4 == 1))
    let stacks = crateStacks[0].map((_, c) => crateStacks.map((_, r) => crateStacks[r][c]).filter(v => v != ' ').reverse())

    // part one
    numberInstructions.forEach((a) => {
        const [times, from, to] = a
        for (let i = 0; i < times; i++) {
            stacks[to - 1].push(stacks[from - 1].pop())
        }
    })
    console.log(stacks.map((x) => x[x.length - 1]).join(''))

    // part two
    let secondStacks = crateStacks[0].map((_, c) => crateStacks.map((_, r) => crateStacks[r][c]).filter(v => v != ' ').reverse())
    numberInstructions.forEach((a) => {
        const [times, from, to] = a
        const wholeStacks = []
        for (let i = 0; i < times; i++) {
            wholeStacks.push(secondStacks[from - 1].pop())
        }
        wholeStacks.reverse().forEach((x) => secondStacks[to - 1].push(x))
    })
    console.log(secondStacks.map((x) => x[x.length - 1]).join(''))
}
crateOrganization()