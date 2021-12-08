function toggleMenu() {
    // target menu for cleaner code
    const menu = document.getElementById('menu')

    // whether or not #menu has the class hidden
    const menuIsHidden = menu.classList.contains('hidden')

    if (menuIsHidden) menu.classList.remove('hidden')
    else menu.classList.add('hidden') 
}

function rollDice(sides) {
    document.getElementById(`d${sides}`).innerHTML = Math.floor(Math.random() * sides) + 1 
}

// const rollMultipleDice = (sides, quantity) => (Math.floor(Math.random() * sides) + 1 ) * quantity
// console.log(rollMultipleDice(20, 5))
// const onePlusOne = () => 1 + 1

const dice = [
        {
          quantity: 0,
          result: 0,
          rolls: [],
          sides: 4
        },
        {
          quantity: 0,
          result: 0,
          rolls: [],
          sides: 6
        },
        {
          quantity: 0,
          result: 0,
          rolls: [],
          sides: 8
        },
        {
          quantity: 0,
          result: 0,
          rolls: [],
          sides: 10
        },
        {
          quantity: 0,
          result: 0,
          rolls: [],
          sides: 12
        },
        {
          quantity: 0,
          result: 0,
          rolls: [],
          sides: 20
        }
      ];

// function logSides(){
    // for (die in dice) {
    //     console.log(dice[die].sides)
    // }

    // dice.forEach(die => console.log(die.sides))
// }

    const tripleSides = dice.map(die => die.sides * 3)
    console.log(tripleSides)

    const numbers = [1,2,3,4,5,6,7,8,9]

    const totalNumbers = numbers.reduce(num => numbers)
    console.log(totalNumbers)

    const lessThan5 = numbers.filter(num => num <= 5)

    const oldLessThan5 = function() {
    const smallBois = []
        for (num in numbers) {
            if (num <= 5) smallBois.push(num)
        }
        return smallBois
    }

    // console.log(lessThan5)
    console.log(oldLessThan5())