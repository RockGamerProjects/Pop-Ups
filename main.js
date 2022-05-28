var i = 0
let text = "Yes or No";
let confirm = window.confirm(text)
if (confirm == true) {
  while (i < 100) {
    var num1 = Math.floor(Math.random() * 1920);
    var num2 = Math.floor(Math.random() * 1080);
    var popUp = window.open('https://Pop-Ups.rockgamerak.repl.co/popup.html', '', 'width=100,height=125')
    popUp.moveTo(num1, num2);
    i++;
    popUp.close()
  }
}
window.close()