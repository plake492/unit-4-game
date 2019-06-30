
//ATTACK CHARACTER & OPPONANT 
let attackCharacter = []
let opponentCharacter = []

let characters =[
    aragorn = {
        name: "Aragorn",
        health: 120,
        attack: 8,
        counterAttack: 18,
    },
    sauron = {
        name: "Sauron",
        health: 180,
        attack: 6,
        counterAttack: 25,
    },
    gandalf = {
        name: "Gandalf",
        health: 100,
        attack: 10,
        counterAttack: 25,
    },
    witchKing = {
        name:"Witch King",
        health: 150,
        attack: 12,
        counterAttack: 15,
    },
]


    console.log(characters)

        function goThereA() {
            if (attackCharacter.length === 0 && opponentCharacter.length === 0) {
                attackCharacter.push(aragorn)
                $("#aragorn").appendTo("#playerCharacter");
                $("#yourCharacterText").text("Your Character");
                $("#ar").prop("onclick", null).off("click");
                $("#ar").attr("id", "attacker");
                $('#characterOrOpponent').text("Choose your opponent")
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(aragorn)
                $("#aragorn").appendTo("#opponent");
                $("#ar").attr("id", "defender");
                $("#opponentText").text("Your Opponent");
                $("#display-fight").text("");

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
                $("#yourCharacterText").text("Your Character");
                $("#sa").prop("onclick", null).off("click");
                $("#sa").attr("id", "attacker");
                $('#characterOrOpponent').text("Choose your opponent")
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(sauron)
                $("#sauron").appendTo("#opponent");
                $("#sa").attr("id", "defender");
                $("#opponentText").text("Your Opponent");
                $("#display-fight").text("");
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
                $("#yourCharacterText").text("Your Character");
                $("#wk").prop("onclick", null).off("click");
                $("#wk").attr("id", "attacker");
                $('#characterOrOpponent').text("Choose your opponent")
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(witchKing)
                $("#witchKing").appendTo("#opponent");
                $("#wk").attr("id", "defender");
                $("#opponentText").text("Your Opponent");
                $("#display-fight").text("");
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
                $("#yourCharacterText").text("Your Character");
                $("#ga").prop("onclick", null).off("click");
                $("#ga").attr("id", "attacker");
                $('#characterOrOpponent').text("Choose your opponent")
            } else if (attackCharacter.length === 1 && opponentCharacter.length === 0) { 
                opponentCharacter.push(gandalf)
                $("#gandalf").appendTo("#opponent");
                $("#ga").attr("id", "defender");
                $("#opponentText").text("Your Opponent");
                $("#display-fight").text("");
            } else {
                return 
            } 
            console.log("push attacker: ")    
            console.log(attackCharacter)
            console.log("push opponent: ")
            console.log(opponentCharacter)
        }




function reWriteStats() {
    aHealthDisplay.textContent = "Health: " + aragorn.health 
    sHealthDisplay.textContent = "Health: " + sauron.health
    wHealthDisplay.textContent = "Health: " + witchKing.health
    gHealthDisplay.textContent = "Health: " + gandalf.health 
}

// GRAB ID 
let aHealthDisplay = document.getElementById('aHealth')
let sHealthDisplay = document.getElementById('sHealth')
let wHealthDisplay = document.getElementById('wHealth')
let gHealthDisplay = document.getElementById('gHealth')

// DISPLAY HEALTH
aHealthDisplay.textContent = "Health: " + aragorn.health 
sHealthDisplay.textContent = "Health: " + sauron.health 
wHealthDisplay.textContent = "Health: " + witchKing.health
gHealthDisplay.textContent = "Health: " + gandalf.health 

let newAttack = 0
// ATTACK
function fight() {
    if (opponentCharacter.length === 0 || attackCharacter.length === 0) {
        return
    }
    attackCharacter[0].attack = attackCharacter[0].attack + attackCharacter[0].attack 
    //the fighting
    opponentCharacter[0].health = opponentCharacter[0].health - attackCharacter[0].attack;
    attackCharacter[0].health = attackCharacter[0].health - opponentCharacter[0].counterAttack;

    reWriteStats();

    $("#display-fight").text("You attacked " + opponentCharacter[0].name + " for " + attackCharacter[0].attack + " points");
    $("#display-counter").text(opponentCharacter[0].name + " attacked you for " + opponentCharacter[0].counterAttack + " points")
   
    
    if (opponentCharacter[0].health <= 0) {
        $("#display-fight").text("You defeated " + opponentCharacter[0].name);
        $("#display-counter").text("")
        emptyOpponent()
        changeBackground()
        youWin()
    }
    if (attackCharacter[0].health <= 0) {
        defeat();
    } 
}   

// EMPTY OPPONANT
function emptyOpponent () {
    kills.push(opponentCharacter[0]);
        console.log("kills")
        console.log(kills)
    opponentCharacter = [];
    $("#holdHere").hide();
    $("#opponent").appendTo("#holdHere");
    $("#opponent").removeAttr("id")
    $("#return").html('<div id="opponent"></div>')
    $("#opponentText").text("");
    reWriteStats()
    return
}

let kills = []

function changeBackground() {
    if (kills.length === 0) {
        return
    } else if (kills.length === 1) {
        document.body.style.backgroundImage = "url('assets/images/bg4.jpg')";
    } else if (kills.length === 2) {
        document.body.style.backgroundImage = "url('assets/images/bg5.jpg')";
    }
}

function defeat() {
    $(".attack-button").remove()
    $("#reset-button").html('<button onclick="resetGame()" class="attack-button">Restart</button>')
    alert("YOU HAVE BEEN DESTROYED")
}

function youWin () {
    if (kills.length === 3) {
        $("#display-fight").text("You Are Victorious");
        $("#display-counter").text("");      
        $(".attack-button").remove()
        $("#reset-button").html('<button onclick="resetGame()" class="attack-button">Restart</button>')
    } else {
        return
    }
}


    // function resetGame () {
    //     attackCharacter = []
    //     opponentCharacter = []
    //     characters =[
    //         aragorn = {
    //             name: "Aragorn",
    //             health: 120,
    //             attack: 8,
    //             counterAttack: 5,
    //         },
    //         sauron = {
    //             name: "Sauron",
    //             health: 180,
    //             attack: 20,
    //             counterAttack: 2500,
    //         },
    //         gandalf = {
    //             name: "Gandalf",
    //             health: 100,
    //             attack: 5,
    //             counterAttack: 5,
    //         },
    //         witchKing = {
    //             name:"Witch King",
    //             health: 150,
    //             attack: 20,
    //             counterAttack: 20,
    //         },
    //     ]
    //     kills = []
    //     reWriteStats ()
    //     console.log("attacker: ")    
    //     console.log(attackCharacter)
    //     console.log("opponent: ")
    //     console.log(opponentCharacter)
    //     console.log("kills: ")
    //     console.log(kills)

    //     $("#aragorn").appendTo("#playerChoice");
    //     $("#sauron").appendTo("#playerChoice");
    //     $("#gandalf").appendTo("#playerChoice");
    //     $("#witchKing").appendTo("#playerChoice");

    //     $("#reset-button").hide()
    // }

