$(function() {
  var turn = 1;
  $('.square').click(function() {
    var currentSquare = $(this).text();
    var $this = $(this);
    if (currentSquare === '') {
    if (turn === 1 && currentSquare === '')  {
      $this.text('O');
      turn = 0;
    } else {
      $this.text('X');
      turn = 1;
    }
  }
  });
});
