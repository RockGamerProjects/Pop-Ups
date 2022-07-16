let hiddenDiv = document.querySelector('[place]')
let content = hiddenDiv.innerHTML

let times = 100
let i = 0

function addContent() {
  if (i < times) {
    hiddenDiv.innerHTML = hiddenDiv.innerHTML + content
    var num1 = Math.floor(Math.random() * 1920);
    var num2 = Math.floor(Math.random() * 1080);
    var popUp = window.open('https://Pop-Ups.rockgamerak.repl.co/popup.html', '', 'width=100,height=125')
    popUp.moveTo(num1, num2);
    i++;
    popUp.close()
  }
}

setInterval(addContent, 1000)
