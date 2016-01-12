$(document).ready(function() {
  $(".show-jsdef").click(function() {
    $(".jsdef").slideToggle();
  });

  $(".show-moddef").click(function() {
    $(".moddef").slideToggle();
  });

  $(".show-opdef").click(function() {
    $(".opdef").slideToggle();
  });

  $(".show-nandef").click(function() {
    $(".nandef").fadeToggle();
  });

  $(".show-variablenamingdef").click(function() {
    $(".variablenamingdef").fadeToggle();
  });
});
