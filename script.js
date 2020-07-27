let calculateTip = document.getElementById("calculate");

function calculateTipamount() {
  let numberOfpeople = document.getElementById("people");
  let selectOption = document.getElementById("select");
  let billAmount = document.getElementById("amount");

  if (selectOption.value == 0 || billAmount.value === "") {
    alert("please enter a value");
    return;
  }
  if (numberOfpeople.value == "" || numberOfpeople.value <= 1) {
    numberOfpeople.value = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (billAmount.value * selectOption.value) / numberOfpeople.value;
  //round to two decimal places
  total = Math.round((total * 100) / 100);
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //  var total = (billAmount.value * selectOption.value) / numberOfpeople.value;

  // console.log(total);
  console.log(numberOfpeople.value);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "block";
document.getElementById("each").style.display = "none";

calculateTip.onclick = function () {
  calculateTipamount();
};
