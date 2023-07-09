function generateRandomColor() {
    // Generate random values for red, green, and blue between 0 and 255
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Convert the RGB values to a hexadecimal color code
    const colorCode = ((red << 16) | (green << 8) | blue).toString(16);
    const paddedColorCode = colorCode.padStart(6, '0');
    return '#' + paddedColorCode;
  }
  
  function copy(element) {
    navigator.clipboard.writeText(`"${element}"`)
    document.getElementsByTagName("button")[0].style.display = "block";
    document.getElementsByTagName("span")[0].innerText = element;
  
    setTimeout(() => {
      document.getElementsByTagName("button")[0].style.display = "none";
    }, 3000);
  }
  
  let colors;
  
  function generateColors() {
    let box = document.getElementById('parent');
    box.innerHTML = '';
    colors = [];
  
    // Generate 5 random colors
    for (let i = 0; i < 5; i++) {
      const color = generateRandomColor();
      colors.push(color);
      box.innerHTML += `
        <div class="item" onclick='copy("${color}")')'>
          <div class="item-box">
            <div class="color-box" style="background-color: ${color}"></div>
            <h3>${color}</h3>
          </div>
        </div>
      `;
    }
  }
  

  generateColors();
  

  document.getElementById('generate').addEventListener('click', () => {
    generateColors();
  });
  

  document.addEventListener('keydown', event => {
    if (event.key === 'c') {
      copy('palette')
      navigator.clipboard.writeText(colors);
    } else if (event.key == ' '){
        generateColors()
    }
  });