$('#circleDrop1').click(function(){
  $('.card-middle1').slideToggle();
  $('.close1').toggleClass('closeRotate');
});

$('#circleDrop').click(function(){
  $('.card-middle').slideToggle();
  $('.close').toggleClass('closeRotate');
});


$(document).ready(function(){
var quotes = ["Ne pleures pas car c'est fini mais ris car c'est arrivé. - Dr. Seuss", "Sois toi -même; les autres sont déjà tous pris. - Oscar Wilde", "Deux choses sont infinies: l'univers et la stupidité humaine; et je ne suis pas sûr pour l'univers. - Albert Einstein", "Tu sais que tu es amoureux quand tu ne peux pas dormir car la réalité est plus agréable que les rêves. - Dr. Seuss", "En trois mots je peux résumer tout ce que j'ai appris dans la vie: Ca continue toujours. - Robert Frost", "Un ami est quelqu'un qui connais tout de toi mais t'aime toujours. - Elbert Hubbard", "Pardonne toujours à tes ennemies; rien ne les emmerdent plus. - Oscar Wilde", "Vivre est la chose la plus rare au monde. La plupart ne font qu'exister. - Oscar Wilde", "L'imperfection est la beauté, la folie est géniale et il vaut mieux être absoluement ridicule qu'être totalement chiant. - Marilyn Monroe", "Le fou pense être sage, alors que le sage sait qu'il est fou. - William Shakespeare", "Je n'ai pas échoué, j'ai simplement trouvé 10.000 façons de rater. - Thomas Edison", "La gloire est fugnace, l'obscurité est éternelle. - Napolean Bonaparte", "Tout le monde a pitié des faibles, vous devez gagner leur jalousie. - Arnold Schwarzenegger", "Les faits sont les ennemies de la vérité. - Don Quixote", "Quoique tu sois, sois un bon. - Abraham Lincoln", "Si tu ne peux pas faire de grands choses, fais des petites choses parfaites. - Napolean Hill", "La meilleure arme contre le stress est notre faculté à ne penser qu'a une seule chose à la fois. - William James", "Les petites opportunités sont souvent le début de grands projets. - Demosthenes", "There is no greater agony than bearing an untold story inside you. - Maya Angelou", "Only those who dare to fail greatly can ever achieve greatly. - Robert Kennedy", "The greatest accomplishment is not in never falling, but in rising again after you fall. - Vince Lombardi", "Life is either a great adventure or nothing. - Helen Keller", "Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind. - Theodore Roosevelt", "Great spirits have always encountered violent opposition from mediocre minds. - Albert Einstein", "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - Maurice Switzer", "For success, attitude is equally as important as ability. - anonymous", "Either you run the day, or the day runs you. - Jim Rohn", "To avoid criticism, say nothing, do nothing, be nothing. - Fred Shero", "Everything in moderation, including moderation. - Oscar Wilde", "Worry is like a rocking chair, it will give you something to do, but it won’t get you anywhere. - Vance Havner", "I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness. - Emo Philips", "The trouble with eating Italian food is that five or six days later, you’re hungry again. - George Miller", "Always borrow money from a pessimist. He won’t expect it back. - Oscar Wilde", "Courage is contagious. When a brave man takes a stand, the spines of others are stiffened. - Billy Graham", "Patience is something you admire in the driver behind you, but not in one ahead. - Bill McGlashen"];
var rand = quotes[Math.floor( Math.random() * quotes.length )];
var index;
$('blockquote').text(rand);
$('.quote').click(function(){
$('blockquote').text(quotes[Math.floor( Math.random() * quotes.length )]);
});
});
