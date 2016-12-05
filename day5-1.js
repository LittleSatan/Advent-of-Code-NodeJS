const crypto = require('crypto');
var name = '05ace8e3';
var hash = "";
var result = "";

for (var i = 0; i < i + 1; i++) {
    var string = name + i;
    hash = crypto.createHash('md5').update(string).digest('hex');
    if (hash.substring(0, 5) == "00000") {
        console.log(string);
        console.log(hash);
        console.log("letter: " + hash.charAt(5));
        result = result + hash.charAt(5);
        if (result.length == 8) break;
    }
}
console.log(result);