var i = 0;

//Using 'break' to stop a loop, (Good for breaking loop for meeting certain conditions)
while (i < 15) {
    console.log(i);
    if (i == 5) break;
    i++;
}

for (var i = 0; i < 20; i++) {
    console.log("Number:", i);
    if (i == 8) {
        break;
    }
}

var numbers = [54, 35, 21, 98, 23, 101, 45, 67];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log("Number:", number);

    if (number > 90) {
        break;
    }
}

//Using 'continue' to move to next iteration without going through the next lines in the loop
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 90) {
        continue;
    }
    console.log(number);
}