$(document).ready(function(){
  //add the navigation after the id nav-container
  $('#nav-container').append('<ul>' +
      '<li><a id="home" href="index.html">home</a></li>' +
      '<li><a id="donate" href="#.html">donate</a></li>' +
      '<li><a id="advice" href="#.html">advice</a></li>' +
      '<li><a id="contact" href="#.html">contact</a></li>'
   '</ul>');

  //active class
  var currentPage = $('body').data('current-page');
  $('#' + currentPage).addClass('active');
});
