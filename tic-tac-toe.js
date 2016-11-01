$(function() {
  $('.square').click(function() {
    var changeSquare = $(this).text();
    var $this = $(this);
    if (changeSquare === '') {
      $this.text('O');
    } else if (changeSquare === 'O') {
      $this.text('X');
    } else {
      $this.text('');
    }

    // $(this).text('O');
    // if ($(this).text === 'O') {
    //   changeIt.text('X');
    // }

  });
});
