import {input} from "./first"

function calculateWhenBasement(instructions : string) : number {
    let floor = 0
    for (let i=0; i < instructions.length; i++) {
         if (instructions.charAt(i) == '(' ){
            floor++
         } else {
            floor--
         }

         if (floor < 0) {
            return i
         }
    }

    return 0
}

function main_second() {
    let i = input()

    //let floor = calculate(i)
    let floor = calculateWhenBasement(i)

    console.log("result:" + (floor + 1))
}

main_second()
