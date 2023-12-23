// Get elements
const scoreElement = document.getElementById("current-score");

const exerciseButton = document.getElementById("exercise-button");
const preparationButton = document.getElementById("preparation-button");
const sleepButton = document.getElementById("sleep-button");
const socialButton = document.getElementById("social-button");


let currentProgress = document.getElementById("progression-bar");

const resetButton = document.getElementById("reset-button");

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
    currentProgressWidth = score/100 * 500;
    // currentProgress.style.width = ""+currentProgressWidth;
    scoreElement.dispatchEvent(new Event("input"));

}


function addAllButtonsListeners(button, counter, maxDays, increment, textField) {
    button.addEventListener("click", () => {
        if (counter+1 >= maxDays) { 
            button.style.opacity = 0.5
            button.disabled = true;
            button.style.backgroundColor = "red";
        }
        score+=increment;
        // console.log(currentProgress.getAttribute(innerWidth));
        // currentProgressWidth = currentProgress.getAttribute("width");
        // currentProgress.setAttribute("width") = currentProgressWidth+10
        counter++;
        console.log(counter, textField.textContent)
        textField.textContent = ""+counter;
        updateScore();
    });
}

addAllButtonsListeners(exerciseButton, counterExerciseDays, maxExerciseDays, 5, document.getElementById("exercise-progress"));
addAllButtonsListeners(preparationButton, counterPreparationDays, maxPreparationDays, 10, document.getElementById("preparation-progress"));
addAllButtonsListeners(sleepButton, counterSleepDays, maxSleepDays, 10/7, document.getElementById("sleep-progress"));
addAllButtonsListeners(socialButton, counterSocialDays, maxSocialDays, 10/4, document.getElementById("social-progress"));


scoreElement.addEventListener("input", () =>{
    console.log("SJekker")
    resetButton.disabled = true;
    resetButton.style.opacity = 0.5;
    resetButton.style.width = 300;
    if (parseFloat(scoreElement.textContent) >= 100){
        resetButton.disabled = false;
        resetButton.style.opacity = 1
    }
});


// Reset score
resetButton.addEventListener("click", () => {
    score = 0;
    resetButtons(exerciseButton, counterExerciseDays, document.getElementById("exercise-progress"));
    resetButtons(preparationButton, counterPreparationDays, document.getElementById("preparation-progress"))
    resetButtons(sleepButton, counterSleepDays, document.getElementById("sleep-progress"))
    resetButtons(socialButton, counterSocialDays, document.getElementById("social-progress"))
    updateScore();
});

function resetButtons(button, counter, textField) {
    button.disabled = false;
    button.style.opacity = 1;
    button.style.backgroundColor = "blue";

    counter = 0;
    textField.textContent = 0;
    console.log(counter)
}

// Initial update
updateScore();

// let n = 50; //Current week
// const xValues = ["Week "+n-4, "Week "+n-3, "Week "+n-2, "Week "+n-1, "Week "+n]
