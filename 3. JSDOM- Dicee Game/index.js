function play() {
  var randomnum1 = Math.ceil(Math.random() * 6);
  var player1 = "images/dice" + randomnum1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", player1);
  var randomnum2 = Math.ceil(Math.random() * 6);
  var player2 = "Images/dice" + randomnum2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", player2);

  if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "<em> 🚩Player 1 Won</em>";
  } else {
    document.querySelector("h1").innerHTML = "<em> 🚩 Player 2 Won</em>";
  }
  if (randomnum1 == randomnum2) {
    document.querySelector("h1").innerHTML = "<em> DRAW</em>";
  }
}
