$(document).ready(function() {
  $("form#submit_info").submit(function(event) {
    event.preventDefault();
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());
    // if (age) {
      if (side1 === side2 && side2 === side3 && side3 === side1) {
        $('#notTriangle').hide();
        $('#isosceles').hide();
        $('#scalene').hide();
        $('#equilateral').show();
      }
      else if (side1 === side2 || side2 === side3 || side3 === side1) {
        $('#notTriangle').hide();
        $('#scalene').hide();
        $('#equilateral').hide();
        $('#isosceles').show();
      }
      else if (!(side1+side2<=side3) || (side1+side3<=side2) || (side2+side3<=side1)) {
      $('#notTriangle').hide();
      $('#isosceles').hide();
      $('#equilateral').hide();
      $('#scalene').show();

      }
      else  {
        $('#scalene').hide();
        $('#isosceles').hide();
        $('#equilateral').hide();
        $('#notTriangle').show();
      }
  });
});
