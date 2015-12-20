var makeSelectable = function makeSelectableF(e, kitty_clicks) {

  e.addEventListener('click', (function(kitty_name) {
    return function() {
      // change heading
      var kitty_name_h1 = document.getElementById('kitty_name');
      kitty_name_h1.innerHTML = kitty_name;

      // remove old image
      var kitty_image = document.getElementById('kitty_image');
      while (kitty_image.firstChild) {
        kitty_image.removeChild(kitty_image.firstChild);
      }

      // add new image
      var image_node = document.createElement('img');
      image_node.id = kitty_name + '_image';
      image_node.src = kitty_name + '.jpg';
      kitty_image.appendChild(image_node);

      makeCountable(kitty_image.firstChild, kitty_clicks);

      // change to relevant count
      var count = document.getElementById('count');
      count.innerHTML = kitty_clicks[kitty_name];
    }
  })(e.id));
};

var makeCountable = function makeCountableF(e, kitty_clicks) {
  e.addEventListener('click', (function(kitty_name) {
    return function() {
      var count_value = kitty_clicks[kitty_name];
      kitty_clicks[kitty_name] = Number(count_value) + 1
      console.log(kitty_clicks);

      var count = document.getElementById('count');
      count.innerHTML = kitty_clicks[kitty_name];
    }
  })(e.id.replace('_image','')));
};

