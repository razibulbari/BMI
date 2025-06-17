const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100 // Convert cm to m
    const weightValue = document.getElementById("weight").value
    const bmiValue = weightValue / (heightValue * heightValue);
    console.log(bmiValue);
    bmiInputEl.value = bmiValue;
    if (bmiValue < 18.5) {
        weightConditionEl.textContent = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        weightConditionEl.textContent = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        weightConditionEl.textContent = "Overweight";
    } else {
        weightConditionEl.textContent = "Obesity";
    }
}

btnEl.addEventListener("click", calculateBMI);