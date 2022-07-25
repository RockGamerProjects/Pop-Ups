let i
let ammount
let times

let hiddenDiv = document.querySelector('[place]')

const popUps = []

function addContent() {
  if (i < times) {
    hiddenDiv.innerHTML = hiddenDiv.innerHTML + hiddenDiv.innerHTML
    var popUp = window.open('https://Pop-Ups.rockgamerak.com/popup.html', '', 'width=100,height=125')
    var num1 = Math.floor(Math.random() * 1920)
    var num2 = Math.floor(Math.random() * 1080)
    popUp.moveTo(num1, num2)
    popUps.push(popUp)
    i++
  }
  else {
    clearInterval(add)
  }
}

function moveContent() {
  if (i < times) {
    var popUp = popUps[i]
    var num1 = Math.floor(Math.random() * 1920)
    var num2 = Math.floor(Math.random() * 1080)
    popUp.moveTo(num1, num2)
    i++
  }
  else {
    clearInterval(move)
  }
}

function closeContent() {
  if (i < times) {
    var popUp = popUps[i]
    popUp.close()
    i++
  }
  else {
    clearInterval(closeIt)
  }
}

ammount = 50
i = 0
times = ammount
var add = setInterval(addContent, 0)

i = 0
times = 500
var move = setInterval(moveContent, 1)

i = 0
times = ammount
var closeIt = setInterval(closeContent, 1000)