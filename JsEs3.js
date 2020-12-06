$("#btn1").click(function () {
    calcola("+");
  });
  $("#btn2").click(function () {
    calcola("-");
  });
  $("#btn3").click(function () {
    calcola("/");
  });
  $("#btn4").click(function () {
    calcola("*");
  });

  function calcola(segno) {
    var n1 = parseInt($("#num1").val());
    var n2 = parseInt($("#num2").val());
    var isco;
    switch (segno) {
      case "+":
        isco = n1 + n2;
        break;
      case "-":
        isco = n1 - n2;
        break;
      case "/":
        isco = n1 / n2;
        break;
      case "*":
        isco = n1 * n2;
        break;
    }
    $("#span1").html(isco);
  }