//Listening for: button click; Action: button link is disabled and button text changes
var button = document.getElementById('link');

button.addEventListener('click', function(link) {
  event.preventDefault();
});

button.addEventListener('click', function (link){
  button.innerHTML = "Sorry, Charlie. You're stuck here.";
});

//Listening for: mouseover on image; Action: background color changes
var myImage = document.getElementById('image');

myImage.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = '#FEFFC9';
});

//Listening for: mouseover on H1; Action: new paragraph is added
var newParagraph = document.getElementById('header')

newParagraph.addEventListener('mouseover', function () {
  var myElement = document.createElement('article');
  myElement.innerHTML = '<p>Wait, who said you were invited?</p>';
  document.getElementsByClassName('container')[0].appendChild(myElement);
});
