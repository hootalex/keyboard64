let key = 0
let keyboard = ""
let keypad = document.querySelector('.keypad');
const inittext = "" 

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getKeyboard() {
  keyboard = window[document.getElementById("keyboardselect").value]
}

function clicksound(keyboard) {
  // getKeyboard()
  keyboard = window[document.getElementById("keyboardselect").value]
  let keypressed = window.event.code || window.event.which;
  
  if (keypressed == "Space") {
    keyboard.play("space")
  } else {
    
        key++
      key = key + randomInteger(0, 3) 
    
        if (key >= 11) {
      key = 1
          keyboard.play("key"+key)
    } else {
  
    keyboard.play("key"+key)
    }
  
  }
console.log(keypressed)
  console.log(key)
  
}

function loadanimation(placeholder) {
  let interval;
  let c = ""
  
 interval = setInterval(function () {c = c+"▒"; keypad.placeholder = c}, randomInteger(5, 25));
  
  setTimeout(() => {clearInterval(interval); keypad.placeholder =  placeholder}, 250);
  console.log(placeholder)

}

function focusKeypad() {
  
  if (window.matchMedia('screen and (max-width: 768px)').matches) {}
 else {
  
keypad.focus();
keypad.select();
 }
}

function selectkeyboard() {
  keypad.value = ""
    var e = document.getElementById("keyboardselect");
    var option= e.options[e.selectedIndex];
    var longinfo = option.getAttribute("long");
  
  loadanimation("☞ "+longinfo)
  
  focusKeypad()
}

document.querySelector('h2').addEventListener('click', event => {
  keypad.value = ""
  loadanimation("♪ Sounds from real keyboards! Key clicks are sampled 32 times and played back randomly for a more authentic experience ⚄ Space and return recorded separately ☂ A hootalex project")
});

document.querySelector('#keyboardselect').addEventListener('click', event => {
  document.querySelector('#keyboardselect').classList.remove("glow");
});