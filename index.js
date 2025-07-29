function generateTable() {
    var num = document.getElementById("number").value;
    var end = document.getElementById("end").value;
    var output = "";

    if (num === "" || end === "") {
        output = "Please enter range!";
    } else {
        num = parseInt(num);
        end = parseInt(end);
        for (var i = 1; i <= end; i++) {
            output += num + " × " + i + " = " + (num * i) + "<br>";
        }
    }

    document.getElementById("tableOutput").innerHTML = output;
}