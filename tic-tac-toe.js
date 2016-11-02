$(function() {
  var turn = 1;
  var playerO = '0';
  var playerX = '0';
  $('.again').hide();
  $('.square').click(function() {
    var currentSquare = $(this).text();
    var $this = $(this);
    if (currentSquare !== '') {
      return;
    }
    $(this).text(currentSquare);
    if (turn === 1 && currentSquare === '')  {
      $this.text('O');
      turn = 0;
    } else {
      $this.text('X');
      turn = 1;
    }
    var board = [
      [$('#tl').text(), $('#tm').text(), $('#tr').text()],
      [$('#ml').text(), $('#mm').text(), $('#mr').text()],
      [$('#bl').text(), $('#bm').text(), $('#br').text()]
    ];
    // console.log(JSON.stringify(board)); checks the state of the board for debugging
    var winner = tictactoe(board);
    if (winner) {
      $('.again').show().text();
      $('.banner').text(winner + ' wins!');
      $('.playerO').text(playerO);
      $('.playerX').text(playerX);
    } else {
      return;
    }
  });
});

function tictactoe(board) {

 function check(player) {
   var topLeft = board[0][0] === player,
       topMid = board[0][1] === player,
       topRight = board[0][2] === player,
       midLeft = board[1][0] === player,
       mid = board[1][1] === player,
       midRight = board[1][2] === player,
       btmLeft = board[2][0] === player,
       btmMid = board[2][1] === player,
       btmRight = board[2][2] === player;

   if (
     (topLeft && topMid && topRight) ||
     (btmLeft && btmMid && btmRight) ||
     (topLeft && midLeft && btmLeft) ||
     (topRight && midRight && btmRight) ||
     (midLeft && mid && midRight) ||
     (topMid && mid && btmMid) ||
     (topLeft && mid && btmRight) ||
     (btmLeft && mid && topRight)
   ) {
     return player;
   }
   return null;
 }

 var x = check('X'),
     y = check('O');
 return x || y;
}

//
// var comboWin = [
//   ['tl', 'tm', 'tr'],
//   ['ml', 'mm', 'mr'],
//   ['bl', 'bm', 'br'],
//   ['tl', 'ml', 'bl'],
//   ['tm', 'mm', 'bm'],
//   ['tr', 'mr', 'br'],
//   ['tl', 'mm', 'br'],
//   ['tr', 'mm', 'bl']
// ];
//
// var currentBoard = [
//   [$('#tl').text(), $('#tm').text(), $('#tr').text()],
//   [$('#ml').text(), $('#mm').text(), $('#mr').text()],
//   [$('#bl').text(), $('#bm').text(), $('#br').text()]
// ];
