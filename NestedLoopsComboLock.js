var combination = "777";

var attemptCount = 0;
for (var a = 0; a < 10; a++) {
    for(var b = 0; b < 10; b++ ) {
        for(var c = 0; c < 10; c++) {
            var comboAttempt = `${a}${b}${c}`;
            attemptCount++;
            // console.log(comboAttempt);
            if(comboAttempt == combination) {
                console.log("Combination cracked!", comboAttempt);
            }
        }
    }
}

console.log("Attempt Count", attemptCount);