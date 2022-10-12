let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let squares = document.querySelectorAll("td");

let player = ['X', 'O'];
let gameOver = false;

function switchPlayer(){
    if(!gameOver){
        player.reverse();
        player1.classList.toggle("player-active");
        player2.classList.toggle("player-active");
    }
}

function restart(){
    gameOver = false;
    player = ['X', 'O'];
    player1.classList.add("player-active");
    player2.classList.remove("player-active");

    squares.forEach(el => {
        el.innerText = "";
        el.removeAttribute("class");
    });
}

function clicked(squareElement){
    squareElement.innerText = player[0];
    squareElement.classList.add("clicked");
}

function verifyGame(){
    compareSquares(squares[0], squares[1], squares[2]);
    compareSquares(squares[3], squares[4], squares[5]);
    compareSquares(squares[6], squares[7], squares[8]);
    compareSquares(squares[0], squares[3], squares[6]);
    compareSquares(squares[1], squares[4], squares[7]);
    compareSquares(squares[2], squares[5], squares[8]);
    compareSquares(squares[0], squares[4], squares[8]);
    compareSquares(squares[2], squares[4], squares[6]);
}

function compareSquares(s1, s2, s3){
    let square1 = s1.innerText;
    let square2 = s2.innerText;
    let square3 = s3.innerText;

    if(!gameOver && square1 != "" && square1 == square2 && square2 == square3){
        s1.classList.add("td-win");
        s2.classList.add("td-win");
        s3.classList.add("td-win");
        gameOver = true;
    }
}

function verifyIfAllSquareWereClicked(){
    let counter = 0;
    squares.forEach(el => {
        if(el.innerText != ""){
            counter++;
        }
    });

    if(counter == 9){
        gameOver = true;

        squares.forEach(el => {
           el.classList.add("td-draw");
        });
    }
}

squares.forEach(el => {
    el.addEventListener("click", (e) => {
        if(!gameOver && e.target.innerText == ""){
            clicked(e.target);
            verifyGame();
            verifyIfAllSquareWereClicked();
            switchPlayer();
        }
    });
});