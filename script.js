function createTable() {
    //Write your code here
 var rn = parseInt(prompt("Enter the number of rows:"));
  var cn = parseInt(prompt("Enter the number of columns:"));

  var table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  for (var i = 0; i < rn; i++) {
    var newRow = table.insertRow(i);

    for (var j = 0; j < cn; j++) {
      var newCell = newRow.insertCell(j);
      newCell.innerHTML = "Row-" + i + " Column-" + j;
    }
  }
}
