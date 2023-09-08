document.getElementById('calculate').addEventListener('click', calculateBMI);

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!isNaN(height) && !isNaN(weight)) {
        const bmi = calculateBMIScore(height, weight);
        const category = getBMICategory(bmi);
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Your BMI: ${bmi.toFixed(2)} (${category})`;
    } else {
        alert('Please enter valid height and weight.');
    }
}

function calculateBMIScore(height, weight) {
    return weight / ((height / 100) ** 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
