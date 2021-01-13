
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
  function cancella() {
    $("#tabella").on('click','.btnDelete',function(){
      $(this).closest('tr').remove();
    });
  }
  function tabella(n1, segno, n2, isco) {
    
    var string = ("<tr><td>"+ n1 +"</td>"+"<td>"+ segno +"</td>"+"<td>"+ n2 +"</td>"+"<td>"+ isco +"</td> <td>"+ '<button class="btnDelete" style="background-color: crimson" onclick="cancella()">cancella</button>' +"</td><tr>");
    var line = $(string);
    
    var operations_array = localStorage.getItem("array);
    //{}--> obj   []--->array
    // operation_array[1]= 6
    // operation_array.push(6)
    operation_array.push(string);
    
    localStorage.setItem("array", operation_array);
    $("#tabella").append(line);

    var last_operation = localStorage.getItem("operazione");
  }
  function calcola(segno) {
    var n1 = parseInt($("#num1").val());
    var n2 = parseInt($("#num2").val());
    var isco;

    switch (segno) {
      case "+":
        isco = n1 + n2;
        tabella(n1, segno, n2, isco);
        break;
      case "-":
        isco = n1 - n2;
        tabella(n1, segno, n2, isco);
        break;
      case "/":
        isco = n1 / n2;
        tabella(n1, segno, n2, isco);
        break;
      case "*":
        isco = n1 * n2;
        tabella(n1, segno, n2, isco);
        break;
    }
    $("#span1").html(isco);
    
   
    
  }
