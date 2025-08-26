const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enimy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),

    },
    values: {

        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,

    },

    actions: {
        timeid: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }



};

function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;
    if (state.values.curretTime <= 0) {
        clearInterval(state.actions.timeid);
        clearInterval(state.actions.countDownTimerId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
    }
}

function playsond(){
    let audio new Audio(./audios/hit.m4a)

}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;

}



function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.results;
                state.values.hitPosition = null;
            }
        });
    });
}

function initialize() {

    addListenerHitBox();
}

initialize();
