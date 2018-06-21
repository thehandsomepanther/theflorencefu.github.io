var FORWARD_SLASH = '╱';
var BACK_SLASH = '╲';

var dummySlashEl = document.createElement('span');
dummySlashEl.innerHTML = FORWARD_SLASH;
document.querySelector('body').appendChild(dummySlashEl);

var rect = dummySlashEl.getBoundingClientRect();
console.log(rect);
dummySlashEl.remove();
var SLASH_WIDTH = rect.width;
var SLASH_HEIGHT = rect.height;

var loadedImages = 0;
var postImageContainers = document.querySelectorAll('.projects-post-img-container');
for (var i = 0; i < postImageContainers.length; i++) {
  var postImage = postImageContainers[i].querySelector('.projects-post-img');
  postImage.addEventListener('load', function() {
    loadedImages++;

    if (loadedImages === postImageContainers.length) {
      textifyImages()
    }
  });
}

function textifyImages() {
  for (var i = 0; i < postImageContainers.length; i++) {
    var imageContainer = postImageContainers[i];

    var widthUnits = Math.floor(Math.random() * 10 + 10);

    imageContainer.style.width = widthUnits * SLASH_WIDTH;
    imageContainer.style.left = document.body.clientWidth/2 + Math.floor(Math.random() * 100);

    var imageRect = imageContainer.querySelector('.projects-post-img');

    var heightUnits = Math.floor(imageRect.height/SLASH_HEIGHT);

    var p = document.createElement('p');
    var text = '';
    for (var j = 0; j < widthUnits * heightUnits; j++) {
      text += FORWARD_SLASH;
    }
    p.innerHTML = text;
    p.style.transform = 'translateY(-100%)';
    p.style.lineHeight = SLASH_HEIGHT + 'px';
    p.style.margin = 0;

    imageContainer.appendChild(p);
  }
}
