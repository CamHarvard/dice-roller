function toggleMenu() {
    // target menu for cleaner code
    const menu = document.getElementById('menu')

    // whether or not #menu has the class hidden
    const menuIsHidden = menu.classList.contains('hidden')

    if (menuIsHidden) menu.classList.remove('hidden')
    else menu.classList.add('hidden') 
}

const dieMarkup = () => {
  const dice = [2,4,6,8,10,12,20,100]
  let dieToAppend = ''
  dice.forEach( die => {
  const diceRow = `<div class="row"><input id="d${die}Quantity" type="number"/><button onclick="rollDice(${die})" class="dice-button">roll a d${die}</button><div id="d${die}"></div></div>`
  dieToAppend += diceRow
  })

return dieToAppend
}
// console.log(dieMarkup())

function rollDice(sides) {
    document.getElementById(`d${sides}`).innerHTML = Math.floor(Math.random() * sides) + 1 
}

// const rollMultipleDice = (sides, quantity) => (Math.floor(Math.random() * sides) + 1 ) * quantity
// console.log(rollMultipleDice(20, 5))
// const onePlusOne = () => 1 + 1


// function logSides(){
    // for (die in dice) {
    //     console.log(dice[die].sides)
    // }

    // dice.forEach(die => console.log(die.sides))
// }

    // const tripleSides = dice.map(die => die.sides * 3)
    // console.log(tripleSides)

    // const numbers = [1,2,3,4,5,6,7,8,9]

    // const totalNumbers = numbers.reduce(num => numbers)
    // console.log(totalNumbers)

    // const lessThan5 = numbers.filter(num => num <= 5)

    // const oldLessThan5 = function() {
    // const smallBois = []
    //     for (num in numbers) {
    //         if (num <= 5) smallBois.push(num)
    //     }
    //     return smallBois
    // }

    // console.log(lessThan5)
    // console.log(oldLessThan5())