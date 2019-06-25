let aragorn = {
    health: 160,
    attack: 25,
    counterAttack: 30,

    increaseAttack()  {
        this.attack = this.attack * 2;
    }
};

let sauron = {
    health: 200,
    attack: 15,
    counterAttack: 20,

    increaseAttack()  {
        this.attack = this.attack * 2;
    }
};

let gandalf = {
    health: 140,
    attack: 20,
    counterAttack: 40,

    increaseAttack()  {
        this.attack = this.attack * 2;
    }
};

let witchKing = {
    health: 180,
    attack: 30,
    counterAttack: 10,

    increaseAttack()  {
        this.attack = this.attack * 2;
    }
};

function reWriteStats() {
    console.log(aragorn.attack)
    aHealthDisplay.textContent = "Health: " + aragorn.health + "  " +aragorn.attack
}

// GRAB ID 
let aHealthDisplay = document.getElementById('aHealth')
let sHealthDisplay = document.getElementById('sHealth')
let wHealthDisplay = document.getElementById('wHealth')
let gHealthDisplay = document.getElementById('gHealth')

// DISPLAY HEALTH
aHealthDisplay.textContent = "Health: " + aragorn.health + "  " +aragorn.attack
sHealthDisplay.textContent = "Health: " + sauron.health 
wHealthDisplay.textContent = "Health: " + witchKing.health
gHealthDisplay.textContent = "Health: " + gandalf.health

// MOVE ARAGORN TO PLAYER CHARACTER
function moveButton(elem) {
    $(elem).attr("id") == "aragorn"
    $(elem).appendTo("#playerCharacter");
}

// TEST TEST TEST
document.onkeyup = function(event) {
    let bob = event.key 

    if (bob === 'a') {
       aragorn.increaseAttack()
       reWriteStats()
    }
}

