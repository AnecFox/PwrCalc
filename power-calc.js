const voltageInput = document.getElementById("voltage-input");
const currentInput = document.getElementById("current-input");
const powerInput = document.getElementById("power-input");

function calculate() {
    let values = [voltageInput.value, currentInput.value, powerInput.value];
    let emptyValuesCount = values.filter(isEmpty).length;

    if (emptyValuesCount !== 1) return alert("Тут нужно ввести только два параметра и рассчитается третий, тот, который не введён");

    if (voltageInput.value === "") {
        voltageInput.value = +(calculateVoltage(powerInput.value, currentInput.value).toFixed(2));
    } else if (currentInput.value === "") {
        currentInput.value = +(calculateCurrent(powerInput.value, voltageInput.value).toFixed(2));
    } else if (powerInput.value === "") {
        powerInput.value = +(calculatePower(voltageInput.value, currentInput.value).toFixed(2));
    }
}

function isEmpty(value) {
    return value === "";
}

function calculateVoltage(power, current) {
    return power / current;
}

function calculateCurrent(power, voltage) {
    return power / voltage;
}

function calculatePower(voltage, current) {
    return voltage * current;
}

function clearAll() {
    voltageInput.value = "";
    currentInput.value = "";
    powerInput.value = "";
}
