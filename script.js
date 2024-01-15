//define html elements
const board = document.getElementById('game-board');

//define game variablels
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = 'right';

//draw game map, snake, food
function draw() {
  board.innerHTML = '';
  drawSnake();
  drawFood();
}

//draw snake 
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

//create a snake or food cube/div
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

//set the position of snake or food 
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

//testing draw function 
draw();


//draw food function 
function drawFood() {
  const foodElement = createGameElement('div', 'food');
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}


//Generate Food
function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
}

//moving the snake 
function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case value:

      break;

    default:
      break;
  }
}