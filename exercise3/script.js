const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
let game_length = document.getElementById('timer').innerHTML;

// return array of high scores or return an empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

function alien_appear() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) alien_appear();
    }, time);
}



function timer(){
    var sec = game_length;
    var timer = setInterval(function(){
        // for each second interval, take away one from total time
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}



function updatescoreboard(){
    currentscore = scoreBoard.textContent;
    highScores.push(currentscore);
    console.log(Math.max(...highScores));
    document.getElementById('highscoreboard').innerHTML=Math.max(...highScores);
}

function startGame(element){
    scoreBoard.textContent = 0;
    timeUp = false;
    element.disabled = true;
    score = 0;
    timer();
    alien_appear();
    setTimeout(() => {
        timeUp = true;
        element.disabled = false;
        updatescoreboard();
    }, game_length*1000)
  }



function hit(e){
    score ++;
    e.target.classList.add('hit');
    setTimeout(() => {
        e.target.classList.remove('hit');
    }, 100)
    scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', hit));


