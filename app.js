let userScore = 0;
let compScore = 0;
let comment;
function playRock() {
    if (converter() === "rock") {
        comment = "It's a draw, try again!";
    } else if (converter() === "paper") {
        compScore++;
        comment = "You lose";
    } else  {
        userScore++;
        comment = "You win";
    }
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = compScore;
    document.getElementById("comment").innerHTML = comment;

    if (userScore === 5 || compScore ===5) {
        userScore -= userScore;
        compScore -= compScore;
    }
};
function playPaper() {
    if (converter() === "paper") {
        comment = "It's a draw, try again!";
    } else if (converter() === "scissor") {
        compScore++;
        comment = "You lose";
    } else  {
        userScore++;
        comment = "You win";
    }
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = compScore;
    document.getElementById("comment").innerHTML = comment;
    if (userScore === 5 || compScore ===5) {
        userScore -= userScore;
        compScore -= compScore;
    }
};
function playScissor() {
    if (converter() === "scissor") {
        comment = "It's a draw, try again!";
    } else if (converter() === "rock") {
        compScore++;
        comment = "You lose";
    } else  {
        userScore++;
        comment = "You win";
    }
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = compScore;
    document.getElementById("comment").innerHTML = comment;
    if (userScore === 5 || compScore ===5) {
        userScore -= userScore;
        compScore -= compScore;
    }
};

function converter() {
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
        return "rock";
        break;
        case 1:
        return "paper";
        break;
        case 2:
        return "scissor";
        break;
    }

    
};