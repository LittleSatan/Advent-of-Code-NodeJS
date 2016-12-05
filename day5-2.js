const crypto = require('crypto');
var name = 'ugkcyxxp';
var hash = "";
var result = ["", "", "", "", "", "", "", ""];
var lettersFound = 0;

for (var i = 0; i < i + 1; i++) {
    var string = name + i;
    hash = crypto.createHash('md5').update(string).digest('hex');
    if (hash.substring(0, 5) == "00000") {
        console.log("\n" + string);
        console.log(hash);
        console.log("position: " + hash.charAt(5));
        console.log("password: " + hash.charAt(6));
        if (!isNaN(parseInt(hash.charAt(5)))) {
            if (parseInt(hash.charAt(5)) >= 0 && parseInt(hash.charAt(5)) <= 7 && result[parseInt(hash.charAt(5))] == "") {
                console.log("Found a number");
                result[parseInt(hash.charAt(5))] = hash.charAt(6);
                lettersFound++;
                if (lettersFound == 8) break;
            }
        }
    }
}
console.log("\n" + result.toString().replace(/,/g, ""));