const form = document.querySelector("form")
const button = document.querySelector("button")
const submitbutton = document.querySelector('.check')
const useroutput = document.querySelector(".user-choice")
const computeroutput = document.querySelector(".computer-choice")
const finaloutput = document.querySelector(".final-result")
const inputbox = document.querySelector("input")
const startgamebutton = document.querySelector('#start')
const resetgame = document.querySelector('#reset')
const chanceleft = document.querySelector('q')
const finalresultdisplay = document.querySelector('.main-result')
const finaldisplay = document.querySelector('.main-result-display')
const startgameagain = document.querySelector('.start-again')
const main = document.querySelector('main')
var usercounter = 0;
var computercounter = 0;
var chance = 3;

startgamebutton.addEventListener('click', function (event) {
    inputbox.style.opacity = "1"
    submitbutton.style.opacity = "1"

    var timeout = setTimeout(function (vanish) {
        startgamebutton.style.opacity = "0"
    }, 1000)

})


button.addEventListener("click", function (event) {
    chance--;
    event.preventDefault();

    chanceleft.style.display = "flex"
    chanceleft.innerHTML = ` ${chance} tries are left `

    if (chance === 0) {
        chanceleft.style.display = "none"
        setTimeout(() => {
            final();
        }, 1000);
    }

    let random = Math.floor(Math.random() * 3) + 1;
    let userinput = parseInt(document.querySelector("input").value)

    //USER CONDITIONS.......
    if (userinput === 1) {
        useroutput.innerHTML = "User Choice Is Stone"
    }
    else if (userinput === 2) {
        useroutput.innerHTML = "User Choice Is Paper"
    } else if (userinput === 3) {
        useroutput.innerHTML = "User Choice Is Scissor"
    }
    else {
        useroutput.innerHTML = "Invalid User Choice"
    }


    //COMPUTER CONDITIONS..........
    if (random === 1) {
        computeroutput.innerHTML = "Computer Choice Is Stone"
    }
    else if (random === 2) {
        computeroutput.innerHTML = "Computer Choice Is Paper"
    } else if (random === 3) {
        computeroutput.innerHTML = "Computer Choice Is Scissor"
    }


    //CHECK CONDITIONS......
    if (random === userinput) {
        finaloutput.innerHTML = "GAME DRAW"
    }
    else if (userinput === 1 && random === 3) {
        finaloutput.innerHTML = "User Win"
        usercounter++;
    }
    else if (userinput === 1 && random === 2) {
        finaloutput.innerHTML = "Computer Win"
        computercounter++;
    }
    else if (userinput === 2 && random === 1) {
        finaloutput.innerHTML = "User Win"
        usercounter++;
    }
    else if (userinput === 2 && random === 3) {
        finaloutput.innerHTML = "Computer Win"
        computercounter++;
    }
    else if (userinput === 3 && random === 2) {
        finaloutput.innerHTML = "User Win"
        usercounter++;
    }
    else if (userinput === 3 && random === 1) {
        finaloutput.innerHTML = "Computer Win"
        computercounter++;
    }
})


resetgame.addEventListener('click', function (event) {
    location.reload()
    resetgame.style.backgroundColor = "red"
})

function final() {
    finalresultdisplay.style.marginTop = "-65vh"
    main.style.opacity = "0.25"

    if (usercounter > computercounter) {
        finaldisplay.innerHTML = "CONGRATULATION, YOU WIN THE GAME 😎"
        // finalresultdisplay.style.marginTop = "-65vh"
    }
    else if (computercounter > usercounter) {
        finaldisplay.innerHTML = "OOPS, YOU LOOSE THE GAME & COMPUTER WIN THE GAME 🤐"
    }
    else if (computercounter === usercounter) {
        finaldisplay.innerHTML = " GAME DRAW 🙄"
    }

    startgameagain.addEventListener('click', function (event) {
        finalresultdisplay.style.marginTop = "65vh"
        main.style.opacity = "1"
        setTimeout(() => {
            location.reload()
        }, 1000);
    })
}