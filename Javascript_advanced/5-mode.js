function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color; }
    }

    function main() {
        var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
        var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
        var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  const btnSpooky = document.createElement('button');
  const btnDarkMode = document.createElement('button');
  const btnScreamMode = document.createElement('button');

  paragraph.innerHTML = 'Welcome Holberton!';
  btnSpooky.innerHTML = 'Spooky';
  btnDarkMode.innerHTML = 'Dark Mode';
  btnScreamMode.innerHTML = 'Scream Mode';
    
  document.body.appendChild(paragraph);
  document.body.appendChild(btnSpooky);
  document.body.appendChild(btnDarkMode);
  document.body.appendChild(btnScreamMode);

}

    main();