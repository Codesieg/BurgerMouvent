var game = {
    init: function() {
        drawGame();
    },
    cellWidth: 50,
    tableau: document.querySelector('.terrain_de_jeu'),
    types: {
        'x': 'classic',
        '*': 'wall',
        'o': 'burger',
        '-': 'goal'
    },
};


document.addEventListener('DOMContentLoaded', game.init);

var model = [
    'xxxxxxxxx**xx',
    'x********-xxx',
    'xxxxxxxx*x**x',
    'xx*****xxx*x*',
    'xxxxxx*x***x*',
    '****xx*x*xxx*',
    'xxx*xx*x*xxxx',
    'x*o*xx**xx*xx',
    'x***xxxxxx*xx',
    'xxxxxx*****xx',
];



function drawGame() {

    for (i = 0; i < model.length; i++) {
        let newSection = document.createElement("section");
        newSection.classList.add("cell" + i);
        document.querySelector("body > div").appendChild(newSection);
    }
    for (y = 0; y < model.length; y++) {
        for (x = 0; x <= 12; x++) {
            if (model[y][x] == "x") {
                let newDiv = document.createElement("div");
                newDiv.classList.add('square');
                document.querySelector("body > div > section.cell" + y).appendChild(newDiv);
                newDiv.setAttribute("id", "" + y + "" + x);
            } else if (model[y][x] == "*") {
                let newDiv = document.createElement("div");
                newDiv.classList.add("wall");
                newDiv.classList.add("square");
                document.querySelector("body > div > section.cell" + y).appendChild(newDiv);
                newDiv.setAttribute("id", "" + y + "" + x);
            } else if (model[y][x] == "o") {
                let newDiv = document.createElement("div");
                newDiv.classList.add("burger");
                newDiv.classList.add("square");
                newDiv.setAttribute("id", "" + y + "" + x);
                document.querySelector("body > div > section.cell" + y).appendChild(newDiv);
            } else if (model[y][x] == "-") {
                let newDiv = document.createElement("div");
                newDiv.classList.add("goal");
                newDiv.classList.add("square");
                newDiv.setAttribute("id", "" + y + "" + x);
                document.querySelector("body > div > section.cell" + y).appendChild(newDiv);
            }
        }
    }

    document.onkeydown = ('onkeydown', handleKeydown);

    function handleKeydown(event) {
        let keyPress = event.keyCode;
        console.log('touche appuyer : ' + keyPress);
        let burger = document.querySelector(".burger");
        switch (keyPress) {
            case 37:
                console.log('vers la gauche');
                console.log(burger.id);
                let valeurId = parseInt(burger.id) - 1;
                console.log(valeurId);
                newPosition(valeurId, burger);
                break;
            case 38:
                if (burger.classList.contains("burger") == true) {
                    console.log(burger.id);
                    let valeurId = parseInt(burger.id) - 10;
                    console.log(valeurId);
                    newPosition(valeurId, burger);
                }
                break;
            case 39:
                if (burger.classList.contains("burger") == true) {
                    console.log(burger.id);
                    let valeurId = parseInt(burger.id) + 1;
                    console.log(valeurId);
                    newPosition(valeurId, burger);
                }
                break;
            case 40:
                if (burger.classList.contains("burger") == true) {
                    console.log(burger.id);
                    let valeurId = parseInt(burger.id) + 10;
                    console.log(valeurId);
                    newPosition(valeurId, burger);
                }
                break;
            default:
                break;
        }
    }

    function newPosition(valeurId, burger) {
        let newPosition = document.getElementById("" + valeurId);
        if (newPosition.classList.contains("wall") == true) {
            document.querySelector('.error').textContent = 'Déplacement impossible';
        } else if (newPosition.classList.contains("goal") == true) {
            document.querySelector('.error').textContent = 'Vous avez gagné !!! ';
            newPosition.classList.add("burger");
            // newPosition.classList.remove("goal");
            burger.classList.remove("burger");
        } else {
            document.querySelector('.error').textContent = '';
            newPosition.classList.add("burger");
            burger.classList.remove("burger");
        }
    }

    // Si le burger ce déplace sur une div avec la class wall, il ne peut pas
    // Sinon
    // je récupére le dataset du burger
    // On récupére le dataset de la div cible pour cela je récupére le dataset lié à la classe burger






}