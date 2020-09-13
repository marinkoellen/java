// return array of high scores or return an empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const canvas = document.querySelector('.canvas');
const scoreBoard = document.querySelector('.score');
const ctx = canvas.getContext("2d"); // method returns a drawing context on the canvas
//The CanvasRenderingContext2D interface, part of the Canvas API, 
//provides the 2D rendering context for the drawing surface of a <canvas> element. 
//It is used for drawing shapes, text, images, and other objects.
const scale = 10; //each square 10 px
const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake;

function updatescoreboard(){
  currentscore = scoreBoard.textContent;
  highScores.push(currentscore);
  console.log(Math.max(...highScores));
  document.getElementById('highscoreboard').innerHTML=Math.max(...highScores);
}



function startGame(element) {
  element.disabled = true;
  snake = new Snake(); //The new operator lets developers create an instance of a user-defined object type
  fruit = new Fruit();

  fruit.pickLocation();
  console.log(fruit)

  myVar =  window.setInterval(()=> {
    ctx.clearRect(0,0, canvas.width, canvas.height); // clears the canvas and then the snake is redrawn in new position
    fruit.draw();
    snake.update();
    snake.draw();
    

    if(snake.collision()){
      alert("Collision - GAME OVER! \n Your Score is: " + snake.total);
      updatescoreboard();
      window.clearInterval(myVar);
      ctx.clearRect(0,0, canvas.width, canvas.height);
      scoreBoard.textContent = 0
      element.disabled = false;

    }

    if(snake.eat(fruit)){ // if this function evaluates to true
      fruit.pickLocation(); 
      scoreBoard.textContent = snake.total
    }

  },250); // executes functions ever 250 milliseconds
};


// setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. 
//There can only be one setup() function for each program 


window.addEventListener('keydown', ((e) => {
  console.log(e);
  const direction = e.key.replace('Arrow','') //removing arrow from the key name 
  console.log(direction)
  snake.changeDirection(direction);
}))


