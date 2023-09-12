// Function to calculate BMI
let calculateBMI = (weight, height) => {
    return weight / (height ** 2);
}

// Function to compare BMIs and return a message
let compareBMIs = (name1, bmi1, name2, bmi2) => {
    if (bmi1 > bmi2) {
        return `${name1}'s BMI (${bmi1}) is higher than ${name2}'s (${bmi2})!`;
    } else if (bmi2 > bmi1) {
        return `${name2}'s BMI (${bmi2}) is higher than ${name1}'s (${bmi1})!`;
    } else {
        return `${name1} and ${name2} have the same BMI (${bmi1})!`;
    }
}

// Data 1
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = calculateBMI(markWeight1, markHeight1);
let johnBMI1 = calculateBMI(johnWeight1, johnHeight1);

let result1 = compareBMIs("Mark", markBMI1, "John", johnBMI1);

// Data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = calculateBMI(markWeight2, markHeight2);
let johnBMI2 = calculateBMI(johnWeight2, johnHeight2);

let result2 = compareBMIs("Mark", markBMI2, "John", johnBMI2);

// Print the results with template literals
console.log("Coding Challenge #2");
console.log("Data 1:");
console.log(result1);

console.log("\nData 2:");
console.log(result2);
// Coding Challenge #3
// Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Data Bonus 1
let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];

// Data Bonus 2
let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];

// Function to calculate the average score
let calculateAverage = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Function to determine the winner
let determineWinner = (dolphinsScores, koalasScores) => {
    let dolphinsAverage = calculateAverage(dolphinsScores);
    let koalasAverage = calculateAverage(koalasScores);

    if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
        return `Dolphins win with an average score of ${dolphinsAverage.toFixed()} > Koalas with ${koalasAverage.toFixed()} !`;
    } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
        return `Koalas win with an average score of ${koalasAverage.toFixed()} > Dolphins with ${dolphinsAverage.toFixed()} !`;
    } else if (dolphinsAverage >= 100 && koalasAverage >= 100 && dolphinsAverage === koalasAverage) {
        return `It's a draw with an average score of ${dolphinsAverage.toFixed()}!`;
    } else {
        return `they have the same average score of ${dolphinsAverage.toFixed()}!`;
    }
}
console.log("Coding Challenge #3");
// Test with Data 1
let result3 = determineWinner(dolphinsScores1, koalasScores1);
console.log("Data 1:");
console.log(result3);

// Test with Data Bonus 1
let result4 = determineWinner(dolphinsScores2, koalasScores2);
console.log("\nData Bonus 1:");
console.log(result4);

// Test with Data Bonus 2
let result5 = determineWinner(dolphinsScores3, koalasScores3);
console.log("\nData Bonus 2:");
console.log(result5);

//Coding Challenge #4
console.log("Coding Challenge #4");
// Test data
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

// Calculate the tip using the ternary operator
let tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
let tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
let tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// Calculate the total value
let total1 = bill1 + tip1;
let total2 = bill2 + tip2;
let total3 = bill3 + tip3;

// Print the results
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${total1}`);
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${total2}`);
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${total3}`);
//Coding Challenge #5
console.log("Coding Challenge #5");
// Data 1
let dolphinsScores4 = [44, 23, 71];
let koalasScores4 = [65, 54, 49];

// Data 2
let dolphinsScores5 = [85, 54, 41];
let koalasScores5 = [23, 34, 27];

// Function to calculate the average score
let calcAverage = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Function to check the winner
let checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
}

// Calculate average scores
let avgDolphins1 = calcAverage(dolphinsScores4);
let avgKoalas1 = calcAverage(koalasScores4);

let avgDolphins2 = calcAverage(dolphinsScores5);
let avgKoalas2 = calcAverage(koalasScores5);

// Check the winner for Data 1 and Data 2
console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("\nData 2:");
checkWinner(avgDolphins2, avgKoalas2);

//Coding Challenge #6
console.log("Coding Challenge #6");
// Function to calculate the tip
let calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test the function with a bill value of 100
let testBill = 100;
let tipAmount = calcTip(testBill);
console.log(`The tip for a bill of $${testBill} is $${tipAmount}`);

// Create an array 'bills' containing test data
let bills = [125, 555, 44];

// Create an array 'tips' containing tip values for each bill
let tips = bills.map(calcTip);

// Create an array 'totals' containing total values (bill + tip)
let totals = bills.map((bill, index) => bill + tips[index]);

console.log("\nTest data:");
for (let i = 0; i < bills.length; i++) {
    console.log(`Bill: $${bills[i]}, Tip: $${tips[i]}, Total: $${totals[i]}`);
}

//Coding Challenge #7
console.log("Coding Challenge #7");

// Đối tượng cho Mark
let mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // meters
    // Phương thức tính BMI
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

// Đối tượng cho John
let john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // meters
    // Phương thức tính BMI
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

// Tính chỉ số BMI cho cả Mark và John
mark.calcBMI();
john.calcBMI();

// So sánh BMI và in kết quả
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}

//Coding Challenge #8
console.log("Coding Challenge #8");
// Function to calculate the tip
let calcTip1 = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Create an array 'bills' containing test bill values
let bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays 'tips' and 'totals'
let tips1 = [];
let totals1 = [];

// Calculate tips and totals for each bill using a for loop
for (let i = 0; i < bills1.length; i++) {
    let tip = calcTip1(bills1[i]);
    tips1.push(tip);
    totals1.push(bills1[i] + tip);
}

// Log the results
console.log("Bills:", bills1);
console.log("Tips:", tips1);
console.log("Totals:", totals1);

// Bonus: Function to calculate the average of an array
let calcAverage1 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Calculate the average of the 'totals' array
let averageTotal = calcAverage1(totals1);
console.log("Average Total:", averageTotal.toFixed(2));


//Coding Challenge #9
console.log("Coding Challenge #9");
// Function to print the forecast
let printForecast = (arr) => {
    let forecastString = '';
    for (let i = 0; i < arr.length; i++) {
        forecastString += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(forecastString);
}

// Test data 1
let data1 = [17, 21, 23];
console.log("Data 1:");
printForecast(data1);

// Test data 2
let data2 = [12, 5, -5, 0, 4];
console.log("\nData 2:");
printForecast(data2);