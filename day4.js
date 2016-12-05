var sumSectorIDs = 0;
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input-04-1.txt')
});

lineReader.on('line', function(line) {
    console.log(line)
    var linearray = line.split("-")
    linearray.push(linearray[linearray.length - 1].substring(linearray[linearray.length - 1].lastIndexOf("[") + 1, linearray[linearray.length - 1].lastIndexOf("]")))
    linearray[linearray.length - 2] = linearray[linearray.length - 2].substring(0, linearray[linearray.length - 2].indexOf("["))
    var lineString = ""
    for (var i = 0; i < linearray.length - 2; i++) {
        var lineString = lineString + linearray[i]
    }
    console.log(lineString)
    if (true) {
        sumSectorIDs += parseInt(linearray[linearray.length - 2])
    }
    console.log()
});
console.log(sumSectorIDs)