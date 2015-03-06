$('button').on("click",gameRuns);
function gameRuns() {
  var shuffle = function(m) {
    var rand, $rand;

    rand = Math.floor(Math.random() * m--);
    $('li:eq(' + m + ')').
      after($('li:eq(' + rand + ')')).
      insertBefore($('li:eq(' + rand + ')'))

    if(m) {
      setTimeout(shuffle, 125, m);
    }
  };

  shuffle($('.cards').length);
};
$(function()  {
  $('button').on('mouseover', function()  {
    $(this).animate({
      opacity:0.5,
      paddingBottom: '+=5'
    },('fast'), function()  {
      $(this).animate({
        opacity:1.0,
        paddingBottom: '-=5'},('fast'));

      });
    });
  });
