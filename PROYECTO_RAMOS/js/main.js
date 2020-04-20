// Inicio Plugin Facebook 
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v6.0'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Inicio pluging slider
$(document).ready(function () {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 935
  });
});