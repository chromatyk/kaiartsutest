$('#circleDrop1').click(function(){
  $('.card-middle1').slideToggle();
  $('.close1').toggleClass('closeRotate');
});

$('#circleDrop').click(function(){
  $('.card-middle').slideToggle();
  $('.close').toggleClass('closeRotate');
});


$(document).ready(function(){
var quotes = ["Pilule bleu vous restez sur le site tel que vous le connaissez.(Chromatyk) Pilule rouge, direction le pays des merveilles.(Lexae)",
"Pencherez vous pour la sobriété de l'Alliance(Chromatyk) où l'originalité de la Horde(Lexae) ?",
"Intégrerez vous Dc et l'élégant Batman(Chromatyk) ou Marvel et l'athyique Deadpool(Lexae) ?",
"Si ils étaient des mondes, Chromatyk serrais celui que l'on connais et Lexae le monde à l'envers"];
var rand = quotes[Math.floor( Math.random() * quotes.length )];
var index;
$('blockquote').text(rand);
$('.quote').click(function(){
$('blockquote').text(quotes[Math.floor( Math.random() * quotes.length )]);
});
});


$(function () {
  $('[data-toggle="popover"]').popover()
})
