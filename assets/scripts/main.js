// CHARACTERS
aragorn = {
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

// MOVE CHARACTER TO PLAYER CHARACTER
function moveButtonC(elem) {
    $(elem).attr("id") == "aragorn"
    $(elem).appendTo("#playerCharacter");
}
function moveButtonC(elem) {
    $(elem).attr("id") == "sauron"
    $(elem).appendTo("#playerCharacter");
}
function moveButtonC(elem) {
    $(elem).attr("id") == "witchKing"
    $(elem).appendTo("#playerCharacter");
}
function moveButtonC(elem) {
    $(elem).attr("id") == "gandalf"
    $(elem).appendTo("#playerCharacter");
}


// MOVE CHARACTER TO OPPONANT CHARACTER
function moveButtonO(elem) {
    $(elem).attr("id") == "aragorn"
    $(elem).appendTo("#opponent");
}
function moveButtonO(elem) {
    $(elem).attr("id") == "sauron"
    $(elem).appendTo("#opponent");
}
function moveButtonO(elem) {
    $(elem).attr("id") == "witchKing"
    $(elem).appendTo("#opponent");
}
function moveButtonO(elem) {
    $(elem).attr("id") == "gandalf"
    $(elem).appendTo("#opponent");
}


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


// TEST AREA
let playTemp = {
    attTemp: 40,      
    healthTemp: 200,
    newHealth: 200, //the new value goes here
    
    att:function() {
        this.newHealth = this.newHealth- this.attTemp;
        document.getElementById("attack").innerHTML = "Health: " + this.newHealth;
        if (this.newHealth > 0 ) {
            return 
        } else {
          alert("deafeated")
        }
    }
};

let newHealthText = document.getElementById("attack")
newHealthText.textContent = "Health: " + playTemp.newHealth





