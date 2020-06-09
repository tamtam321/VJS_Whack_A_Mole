const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

// The animal appears in a random square
function randomSquare()
{
    square.forEach(className =>
    {
        className.classList.remove("mole");
    });

    // We have 9 squares, indexes 0-8.
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    // Assign the id of the randomPosition to hitPosition for us  to use later
    // window.variableName -> this is a global variable
    window.hitPosition = randomPosition.id;
}

// If we hit the animal we get a point
square.forEach(id =>
{
    // When the mouse button is up the event will trigger
    id.addEventListener("mouseup", () =>
    {
        if(id.id === window.hitPosition)
        {
            result++;
            score.textContent = result;
        }
    });
});

function moveMole()
{
    let timerId = null;

    // setInterval: After every 1000ms randomSquare will execute.
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown()
{
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0)
    {
        clearInterval(timerId);
        alert("GAME OVER! Your final score is " + result);
    }
}

let timerId = setInterval(countDown, 1000);