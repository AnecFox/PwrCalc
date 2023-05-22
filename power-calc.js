const voltageInput = document.getElementById("voltage-input");
const currentInput = document.getElementById("current-input");
const powerInput = document.getElementById("power-input")

function calculate() {
    if ((voltageInput.value === "" && currentInput.value === "" && powerInput.value === "") ||
        (voltageInput.value !== "" && currentInput.value !== "" && powerInput.value !== "")
    )
        return alert("Мяу! Тут нужно ввести два параметра, и рассчитается третий");

    if (voltageInput.value === "") {
        voltageInput.value = calculateVoltage(powerInput.value, currentInput.value).toFixed(2);
    } else if (currentInput.value === "") {
        currentInput.value = calculateCurrent(powerInput.value, voltageInput.value).toFixed(2);
    } else if (powerInput.value === "") {
        powerInput.value = calculatePower(voltageInput.value, currentInput.value).toFixed(2);
    }
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
