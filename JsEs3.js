  var idd;

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
  function cancella(idd) {
    $('#idd').remove();
  }
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
    idd=""+n1+segno+n2;
    $("#tabella").append("<tr id=idd><td>"+ n1 +"</td>"+"<td>"+ segno +"</td>"+"<td>"+ n2 +"</td>"+"<td>"+ isco +"</td>"+"<td>"+ '<button id="btn5" style="background-color: crimson" onclick="cancella(idd)">cancella</button>' +"</td><tr>");
   
    
  }