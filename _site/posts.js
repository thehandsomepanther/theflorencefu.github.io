var FORWARD_SLASH = "╱";
var BACK_SLASH = "╲";

var dummySlashEl = document.createElement("span");
dummySlashEl.innerHTML = FORWARD_SLASH;
document.querySelector("body").appendChild(dummySlashEl);

var rect = dummySlashEl.getBoundingClientRect();
dummySlashEl.remove();
var SLASH_WIDTH = rect.width;
var SLASH_HEIGHT = rect.height;

var postImageContainers = document.querySelectorAll(
  ".projects-post-img-container"
);

postImageContainers.forEach((postImageContainer, i) => {
  var postImage = postImageContainer.querySelector(".projects-post-img");
  postImage.addEventListener("load", function() {
    textifyImage(i);
  });
});

function textifyImage(index) {
  var MAX_WIDTH_UNITS = document.body.clientWidth / (2 * SLASH_WIDTH);

  var imageContainer = postImageContainers[index];
  var widthUnits = MAX_WIDTH_UNITS / Math.floor(Math.random() * 3 + 2);

  imageContainer.style.width = widthUnits * SLASH_WIDTH;

  var offsetLeft =
    document.body.clientWidth / 3 +
    Math.random() * (MAX_WIDTH_UNITS - widthUnits) * SLASH_WIDTH;
  offsetLeft -= offsetLeft % SLASH_WIDTH;
  imageContainer.style.left = offsetLeft + "px";

  var imageRect = imageContainer
    .querySelector(".projects-post-img")
    .getBoundingClientRect();
  var offsetTop = imageRect.top - (imageRect.top % SLASH_HEIGHT);
  imageContainer.style.top = offsetTop + "px";

  var heightUnits = Math.floor(imageRect.height / SLASH_HEIGHT);

  var p = document.createElement("p");
  var text = "";
  for (var j = 0; j < Math.floor(widthUnits) * Math.floor(heightUnits); j++) {
    text += index % 2 === 0 ? FORWARD_SLASH : BACK_SLASH;
  }

  p.innerHTML = text;
  p.style.position = "absolute";
  p.style.top = 0;
  p.style.left = 0;
  p.style.width = "100%";
  p.style.lineHeight = SLASH_HEIGHT + "px";
  p.style.margin = 0;
  p.style.letterSpacing = 0;
  p.style.fontFamily = "monospace";

  imageContainer.appendChild(p);
}
