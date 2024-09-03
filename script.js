function showWorked() {
  // Get a reference to the element where you want to display "worked!"
  var outputElement = document.getElementById("output");

  // Change the text content of the element to "worked!"
  outputElement.textContent = "worked!";
}

var greetingSelector = document.getElementById("diseases");
var output = document.getElementById("output");

// Add an event listener to the select element
greetingSelector.addEventListener("change", function () {
  // Get the selected option value
  var selectedValue = greetingSelector.value;

  // Set the output text based on the selected option
  if (selectedValue == "default") {
    output.textContent = "Select a drug from the dropdown menu.";
  }
  if (selectedValue === "ALECENSA") {
    output.textContent = "Hello";
  } else if (selectedValue === "ARISTADA") {
    output.textContent = "Good";
  }
});

var ctx = document.getElementById("myPieChart").getContext("2d");
var data = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
  datasets: [
    {
      data: [30, 20, 15, 35],
      backgroundColor: ["#FF5733", "#33FF57", "#3366FF", "#FF3366"],
    },
  ],
};

var options = {
  responsive: true,
};
