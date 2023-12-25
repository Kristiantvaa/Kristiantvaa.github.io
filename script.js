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
const bg_bar = document.getElementById("bg-bar");
const maxWidthProgress = parseFloat(window.getComputedStyle(bg_bar).width); 

let maxExerciseDays = 6;
let maxPreparationDays = 5;
let maxSleepDays = 7;
let maxSocialDays = 4;


// Update score display
function updateScore() {
    scoreElement.textContent = score;
    currentProgressWidth = score/100 * maxWidthProgress;
    currentProgress.style.width = ""+currentProgressWidth+"px";
    scoreElement.dispatchEvent(new Event("input"));

}

// function addAllButtonsListeners(button, maxDays, increment, textField) {
//     button.addEventListener("click", () => {
//         let typeOfButton = button.id.split("-")[0];
//         let progressElement = window[typeOfButton + "-progress"];
//         let progressValue = parseInt(progressElement.textContent, 10);

//         console.log(window[typeOfButton + "-progress"]);
//         if (progressValue + 1 >= maxDays) {
//             button.style.opacity = 0.5;
//             button.disabled = true;
//             button.style.backgroundColor = "red";
//         }

//         score += increment;
//         progressElement.textContent++;
//         textField.textContent = progressElement.textContent;
//         updateScore();
//         console.log(window[typeOfButton + "-progress"]);
//         console.log("CLICK:", window["exercise-progress"].textContent, window["preparation-progress"].textContent, window["sleep-progress"].textContent, window["social-progress"].textContent);
//     });
// }

// function addAllButtonsListeners(button, counter, maxDays, increment, textField) {
//     button.addEventListener("click", () => {
//         if (counter+1 >= maxDays) { 
//             button.style.opacity = 0.5
//             button.disabled = true;
//             button.style.backgroundColor = "red";
//         }
//         score += increment;
//         counter++;
//         // console.log(counter, textField.textContent)
//         textField.textContent = ""+counter;
//         updateScore();
//         console.log("CLICK:",counter, counterExerciseDays, counterPreparationDays, counterSleepDays, counterSocialDays)
//     });
// }


function addAllButtonsListeners(button, maxDays, increment) {
    button.addEventListener("click", () => {
        let typeOfButton = button.id.split("-")[0];
        let counterID = typeOfButton+"-progress"; 

        let counterField = document.getElementById(counterID).textContent;  
        let counterNumber = parseInt(counterField);     

        if (counterNumber+1 >= maxDays) { 
            button.style.opacity = 0.5
            button.disabled = true;
            button.style.backgroundColor = "red";
        }
        score += increment;
        counterNumber++;
        console.log(counterNumber, counterField);
        document.getElementById(counterID).textContent = ""+counterNumber;
        updateScore();

        // console.log("CLICK:",counter, counterExerciseDays, counterPreparationDays, counterSleepDays, counterSocialDays)
    });
}


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
    resetButtons(exerciseButton, document.getElementById("exercise-progress"));
    resetButtons(preparationButton, document.getElementById("preparation-progress"));
    resetButtons(sleepButton, document.getElementById("sleep-progress"));
    resetButtons(socialButton, document.getElementById("social-progress"));
    // console.log(counterExerciseDays, counterPreparationDays, counterSleepDays, counterSocialDays);
    updateScore();
});

function resetButtons(button, textField) {
    button.disabled = false;
    button.style.opacity = 1;
    button.style.backgroundColor = "blue";
    
    textField.textContent = 0;
}

console.log("FØR KALL")
addAllButtonsListeners(exerciseButton, maxExerciseDays, 5);
addAllButtonsListeners(preparationButton, maxPreparationDays, 10);
addAllButtonsListeners(sleepButton, maxSleepDays, 10/7);
addAllButtonsListeners(socialButton, maxSocialDays, 10/4);
console.log("ETTER KALL");

// Initial update
updateScore();
