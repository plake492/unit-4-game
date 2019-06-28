//ATTACK CHARACTER & OPPONANT 
let attackCharacter = []

let opponentCharacter = []

// CHARACTERS
let characters =[
    aragorn = {
        name: "Aragorn",
        health: 160,
        attack: 25,
        counterAttack: 15,

        // increaseAttack()  {
        //     this.attack = this.attack * 2;
        // }
    },
    sauron = {
        name: "Sauron",
        health: 200,
        attack: 15,
        counterAttack: 20,

        // increaseAttack()  {
        //     this.attack = this.attack * 2;
        // }
    },
    gandalf = {
        name: "Gandalf",
        health: 140,
        attack: 20,
        counterAttack: 40,

        // increaseAttack()  {
        //     this.attack = this.attack * 2;
        // }
    },
    witchKing = {
        name:"Witch King",
        health: 180,
        attack: 30,
        counterAttack: 10,

        // increaseAttack()  {
        //     this.attack = this.attack * 2;
        // }
    },
]
    console.log(characters)

        function goThereA() {
            if (attackCharacter.length === 0 && opponentCharacter.length === 0) {
                attackCharacter.push(aragorn)
                $("#aragorn").appendTo("#playerCharacter");
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(aragorn)
                $("#aragorn").appendTo("#opponent");

            } else {
                return 
            } 
            console.log("push attacker: ")   
            console.log(attackCharacter)
            console.log("push opponent: ")
            console.log(opponentCharacter)
        }

        function goThereS() {
            if (attackCharacter.length === 0 && opponentCharacter.length === 0) {
                attackCharacter.push(sauron)
                $("#sauron").appendTo("#playerCharacter");
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(sauron)
                $("#sauron").appendTo("#opponent");
            } else {
                return 
            } 
            console.log("push attacker: ")    
            console.log(attackCharacter)
            console.log("push opponent: ")
            console.log(opponentCharacter)
        }

        function goThereW() {
            if (attackCharacter.length === 0 && opponentCharacter.length === 0) {
                attackCharacter.push(witchKing)
                $("#witchKing").appendTo("#playerCharacter");
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(witchKing)
                $("#witchKing").appendTo("#opponent");

            } else {
                
                return 
            } 
            console.log("push attacker: ")    
            console.log(attackCharacter)
            console.log("push opponent: ")
            console.log(opponentCharacter)
        }

        function goThereG() {
            if (attackCharacter.length === 0 && opponentCharacter.length === 0) {
                attackCharacter.push(gandalf)
                $("#gandalf").appendTo("#playerCharacter");
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(gandalf)
                $("#gandalf").appendTo("#opponent");
            } else {
                return 
            } 
            console.log("push attacker: ")    
            console.log(attackCharacter)
            console.log("push opponent: ")
            console.log(opponentCharacter)
        }




function reWriteStats() {
    // console.log(aragorn.attack)
    aHealthDisplay.textContent = "Health: " + aragorn.health + "  " + aragorn.attack
    // console.log(sauron.attack)
    sHealthDisplay.textContent = "Health: " + sauron.health + "  " + sauron.attack
    // console.log(witchKing.attack)
    wHealthDisplay.textContent = "Health: " + witchKing.health + "  " + witchKing.attack
    // console.log(gandalf.attack)
    gHealthDisplay.textContent = "Health: " + gandalf.health + "  " + gandalf.attack
}

// GRAB ID 
let aHealthDisplay = document.getElementById('aHealth')
let sHealthDisplay = document.getElementById('sHealth')
let wHealthDisplay = document.getElementById('wHealth')
let gHealthDisplay = document.getElementById('gHealth')

// DISPLAY HEALTH
aHealthDisplay.textContent = "Health: " + aragorn.health + "  " + aragorn.attack
sHealthDisplay.textContent = "Health: " + sauron.health + "  " + sauron.attack 
wHealthDisplay.textContent = "Health: " + witchKing.health + "  " + witchKing.attack
gHealthDisplay.textContent = "Health: " + gandalf.health + "   " + gandalf.attack

// ATTACK
function fight() {

    opponentCharacter[0].health = opponentCharacter[0].health - attackCharacter[0].attack;
    // document.getElementById("attack").innerHTML = "Health: " + opponentCharacter[0].health;
    reWriteStats();
        console.log(opponentCharacter[0].health)
    attackCharacter[0].health = attackCharacter[0].health - opponentCharacter[0].counterAttack;
    if (opponentCharacter[0].health <= 0) {
        emptyOpponent()
    }
}

// EMPTY OPPONANT
function emptyOpponent () {
    opponentCharacter = []
    $("#opponent").remove();
    $("#return").html('<div id="opponent"></div>')
    increaseAttack()
    reWriteStats()
    return
}

function increaseAttack() {
    attackCharacter[0].attack = attackCharacter[0].attack * 2
}












// ================================================================================================
// TESTING HOW TO EFFECT THE ATTACK VALUE

document.onkeyup = function(event) {
    let keyPress = event.key 

    if (keyPress === 'a') {
       aragorn.increaseAttack()
       reWriteStats()
    }
    if (keyPress === 's') {
        sauron.increaseAttack()
        reWriteStats()
     }
    if (keyPress === 'w') {
        witchKing.increaseAttack()
        reWriteStats()
     }
    if (keyPress === 'g') {
        gandalf.increaseAttack()
        reWriteStats()
     }

}




