var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $main = $('main');
var $h2 = $('h2');
var $show = $('ul li:last-child');

$header.addClass('masthead');
$h1.removeClass('big-heading');
$h1.addClass('logo');

$main.addClass('wrapper');
$('p:first-child').addClass('intro');
$h2.addClass('slug-head');
$('main ul').addClass('slug-list');
$('img').addClass('slug-img');
$('li:first-child').addClass('slug-list-first');
$('li:last-child').addClass('slug-list-last');
$('dl').addClass('classification');
$('dt').removeClass('big-label');
$show.show();
