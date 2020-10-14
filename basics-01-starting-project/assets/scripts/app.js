const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput()
{
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber)
{
    const calcDescription = resultBeforeCalc + operator + calcNumber;
    outputResult(currentResult,calcDescription);
}

function add()
{
    const enteredNumber = getUserNumberInput();
    const intialResult  =currentResult;
    currentResult += enteredNumber;
    //can replace parseInt to + also 
    //currentResult = currentResult + +userInput.value; 
    createAndWriteOutput('+', intialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function subtract()
{
    const enteredNumber = getUserNumberInput();
    const intialResult  =currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', intialResult, enteredNumber); 
}

function multiply()
{
    const enteredNumber = getUserNumberInput();
    const intialResult  =currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('x', intialResult, enteredNumber);
}

function divide()
{
    const enteredNumber = getUserNumberInput();
    const intialResult  =currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', intialResult, enteredNumber);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',divide);

