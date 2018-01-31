$(document).ready(function() {
  //whatever
  var $actionBtn = $('#actionBtn'),
      $iconBtn = $("#actionBtn .fa"),
      $lockBtn = $("#lockBtn");

  $actionBtn.click(function() {
    $iconBtn.toggleClass("fa-times fa-comment");
    $lockBtn.toggleClass("showingButton");
  });
});

$(window).scroll(function() {
  var $el = $('.header');

  if($(this).scrollTop() >= 20) $el.addClass('shown');
  else $el.removeClass('shown');
})
