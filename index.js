const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin(record) {
    let answer = record.find(function (game) {
        return game.result ==="W";
    });
    if (answer){
    return answer.year;
    }
}