var updateKitty = function updateNameF(e, kitty_name) {
  e.childNodes[1].innerHTML = kitty_name;
  e.childNodes[3].id = kitty_name;
  e.childNodes[3].src = kitty_name + ".jpg";

  makeClickable(e.childNodes[3]);
};

var makeClickable = function makeClickableF(e) {

  e.addEventListener('click', function() {
    var count = e.nextElementSibling.childNodes[1];
    count.innerHTML = Number(count.innerHTML) + 1;

  }, false);
};

