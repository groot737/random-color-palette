function copy(element) {
    navigator.clipboard.writeText(`"${element}"`)
    document.getElementsByTagName("button")[0].style.display = "block";
    document.getElementsByTagName("span")[0].innerText = element;

    setTimeout(() => {
        document.getElementsByTagName("button")[0].style.display = "none";
    }, 3000);
}
let colors;

function fetchColor() {
    let box = document.getElementById('parent')

    var url = "http://colormind.io/api/";
    var data = {
        model: "default",
        input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
    }

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            var palette = JSON.parse(http.responseText).result;
            const hexCodes = palette.map(palette => '#' + palette.map(c => c.toString(16).padStart(2, '0')).join(''));
            box.innerHTML = ''
            colors = hexCodes;
            hexCodes.forEach(element => {
                box.innerHTML += `
                  <div class="item" onclick='copy("${element}")')'>
                    <div class="item-box">
                      <div class="color-box" style="background-color: ${element}"></div>
                      <h3>${element}</h3>
                    </div>
                  </div>
               `
            })
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
}
fetchColor()

document.getElementById('generate').addEventListener('click', () => {
    fetchColor()
})
document.addEventListener('keydown', event => {
    if (event.key === ' ') { 
        fetchColor()
    } else if (event.key === 'c'){
        navigator.clipboard.writeText(`${colors}`)
        copy('palette')
    }
 });