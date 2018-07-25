;(function(){
'use strict';
const banner = document.querySelector('.banner');
const bannerClose = banner.querySelector('.banner__close');

bannerClose.addEventListener('click', function(e) {
  banner.classList.add('banner_hidden');
});
  
/*fetch('http://maketir.ru/dev/wp-json/wp/v2/posts')
.then(function(response) {
  return response.json();
})
.then(function(myJSON) {
  alert(myJSON.title.rendered);
})
.catch( alert );*/
})();