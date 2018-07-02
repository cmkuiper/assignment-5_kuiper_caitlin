var header = document.getElementById('h1');

header.addEventListener('click', function() {
  var newP = document.createElement('p');
  newP.innerHTML = 'This is click number ' + '' + click++;
  document.getElementsByTagName('body')[0].appendChild(newP);
});

var click = 1;
