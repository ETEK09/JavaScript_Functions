console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; 1 <= Math.abs(count); i++) {
        if (i % 2 != 0) 
        {
            console.log(i * Math.sign(count));
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!` ;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${16 = age}
    year(s) until you can drive.`
}

if (age < 16) {
    console.log(tooYoungMsg);
} else {
    console.log(oldEnoughMsg);
}

checkAge("Ben", 123);
checkAge("Seth", 16);
checkAge("Cameron", 21);

// Exercise 3 Section

function checkQuadranrt(x, y) {
    switch (true) {
        case x > 0 && y > 0:
            return "Quadrant 1";
        case x < 0 && y > 0:
            return "Quadrant 2";
        case x > 0 && y < 0:
            return "Quadrant 3";
        case x > 0 && y < 0:
            return "Quadrant 4";
        case x == 0 && y != 0:
            return "X Axis";
        case x != 0 && y == 0:
            return "Y Axis";
        default:
            return "Origin";

    }
}

// Exercise 4 Section
function isValidTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c,);
    if(isValid) {
        if (a == b && b == c) {
            return `Equailareral`;
        } else if (a == b || b == c || a == c) {
            return `iscosceles`;
        } else {
            return `Scalene`;
        }
    }   else {
        return `Not a valid triangle. `;
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

// Exercise 5 Section
function dataUsageFeedback(planLimit, day, usage) {
    let periodLenth = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLenth;
    let remainingDays = periodLenth - day;
    let remainingData = planLimit - usage;
    let projectUsage = remainingDays * currentAvg;
    let statusMsg;


console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);

console.log(`Average producted use: ${projectedAvg} GB/day`);

if (currentAvg > projectedAvg) {
    statusMsg = "EXCEEDING";
} else if (currentAvg < projectedAvg) 
{
    statusMsg = "UNDER";
} else {
    statusMsg = "ATT";
}

console.log(`You are ${statusMSG} your average daily use (${currentAvg} GB/day), continuing this usage, you'll end up using ${planLimit - (usage + projectUsage)
} GB from your data limit. 
To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)}
GB/day. `);
}

dataUsageFeedback(50, 10, 25);


