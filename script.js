// Get elements
const scoreElement = document.getElementById("current-score");
const exerciseButton = document.getElementById("exercise-button");
const preparationButton = document.getElementById("preparation-button");
const sleepButton = document.getElementById("sleep-button");
const socialButton = document.getElementById("social-button");

let currentProgress = document.getElementById("progression-bar");

const resetButton = document.getElementById("reset");

// Initial score value
let score = 0;

let currentProgressWidth = 0;
const maxWidthProgress = document.getElementById("bg-bar").getAttribute("width")

let maxExerciseDays = 6;
let maxPreparationDays = 5;
let maxSleepDays = 7;
let maxSocialDays = 4;

let counterExerciseDays = 0;
let counterPreparationDays = 0;
let counterSleepDays = 0;
let counterSocialDays = 0;


// Update score display
function updateScore() {
    scoreElement.textContent = score;
}


function addAllButtonsListeners(button, counter, maxDays, increment) {
    button.addEventListener("click", () => {
        if (counter+1 == maxDays) { 
            button.disabled = true;
            button.style.backgroundColor = "red";
        }
        score+=increment;
        console.log(currentProgress.getAttribute(innerWidth));
        // currentProgressWidth = currentProgress.getAttribute("width");
        // currentProgress.setAttribute("width") = currentProgressWidth+
        counter++;
        updateScore();
    });
}

addAllButtonsListeners(exerciseButton, counterExerciseDays, maxExerciseDays, 5);
addAllButtonsListeners(preparationButton, counterPreparationDays, maxPreparationDays, 10);
addAllButtonsListeners(sleepButton, counterSleepDays, maxSleepDays, 10/7);
addAllButtonsListeners(socialButton, counterSocialDays, maxSocialDays, 10/4);



// Reset score
resetButton.addEventListener("click", () => {
    score = 0;
    updateScore();
});

// Initial update
updateScore();

let n = 50; //Current week
const xValues = ["Week "+n-4, "Week "+n-3, "Week "+n-2, "Week "+n-1, "Week "+n]
