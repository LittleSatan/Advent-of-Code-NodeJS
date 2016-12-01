console.log('Advent of code day 1');
var x = 0;
var y = 0;
var steps = 0;
var direction = 0; // 0 north, 1 east, 2 south, 3 west 
var distance = 0;
var path = ["L4", "L1", "R4", "R1", "R1", "L3", "R5", "L5", "L2", "L3", "R2", "R1", "L4", "R5", "R4", "L2", "R1", "R3", "L5", "R1", "L3", "L2", "R5", "L4", "L5", "R1", "R2", "L1", "R5", "L3", "R2", "R2", "L1", "R5", "R2", "L1", "L1", "R2", "L1", "R1", "L2", "L2", "R4", "R3", "R2", "L3", "L188", "L3", "R2", "R54", "R1", "R1", "L2", "L4", "L3", "L2", "R3", "L1", "L1", "R3", "R5", "L1", "R5", "L1", "L1", "R2", "R4", "R4", "L5", "L4", "L1", "R2", "R4", "R5", "L2", "L3", "R5", "L5", "R1", "R5", "L2", "R4", "L2", "L1", "R4", "R3", "R4", "L4", "R3", "L4", "R78", "R2", "L3", "R188", "R2", "R3", "L2", "R2", "R3", "R1", "R5", "R1", "L1", "L1", "R4", "R2", "R1", "R5", "L1", "R4", "L4", "R2", "R5", "L2", "L5", "R4", "L3", "L2", "R1", "R1", "L5", "L4", "R1", "L5", "L1", "L5", "L1", "L4", "L3", "L5", "R4", "R5", "R2", "L5", "R5", "R5", "R4", "R2", "L1", "L2", "R3", "R5", "R5", "R5", "L2", "L1", "R4", "R3", "R1", "L4", "L2", "L3", "R2", "L3", "L5", "L2", "L2", "L1", "L2", "R5", "L2", "L2", "L3", "L1", "R1", "L4", "R2", "L4", "R3", "R5", "R3", "R4", "R1", "R5", "L3", "L5", "L5", "L3", "L2", "L1", "R3", "L4", "R3", "R2", "L1", "R3", "R1", "L2", "R4", "L3", "L3", "L3", "L1", "L2"];
var pathTwice = [];
for (var i = 0; i < path.length; i++) {
    if (path[i].charAt(0) == "L") { // Turn left
        direction--;
        if (direction == -1) direction = 3;
    } else { // Turn right
        direction++;
        if (direction == 4) direction = 0;
    }
    steps = parseInt(path[i].substring(1));
    while (steps > 0) {
        if (direction == 0) y++;
        if (direction == 2) y--;
        if (direction == 1) x++;
        if (direction == 3) x--;
        distance = Math.abs(x) + Math.abs(y)
        pathTwice.push("X:" + x + "Y:" + y);
        steps--;
    }
}
console.log("The distance is " + distance);
for (var i = 0; i < pathTwice.length; i++) {
    for (var j = i + 1; j < pathTwice.length; j++) {
        if (pathTwice[i] == pathTwice[j] && i != j) {
            console.log(pathTwice[i]);
            j = pathTwice.length;
            i = pathTwice.length;
        }
    }
}