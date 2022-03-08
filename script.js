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
  } else if (keypressed == "Enter") { 
    
    keyboard.play("return")
  } else {
    
        key++
      key = key + randomInteger(0, 3) 
    
        if (key >= 15) {
      key = 1
          keyboard.play("key"+key)
    } else {
  
    keyboard.play("key"+key)
    }
  
  }
// console.log(keypressed)
  console.log(key)
}

// utility sync
// function clicksound(keyboard) {
//   MacintoshPlusM0110A.play("key14")
// }

function loadanimation(placeholder) {
  let interval;
  let c = ""
  
  
 interval = setInterval(function () {c = c+"♪ "; keypad.setAttribute("data-text", c);}, randomInteger(5, 10));
  
  setTimeout(() => {clearInterval(interval); keypad.setAttribute("data-text", placeholder);}, 250);
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
  drive.play();
  keypad.innerText = ""
    var e = document.getElementById("keyboardselect");
    var option= e.options[e.selectedIndex];
    var longinfo = option.getAttribute("long");
  loadanimation(longinfo)
  focusKeypad();
}

document.querySelector('h2').addEventListener('click', event => {
  drive.play();
  keypad.innerText = ""
  loadanimation("♪ Sounds from real keyboards! ♪ Key clicks are sampled 14 times and played back randomly for a more authentic experience. Space and return recorded separately. 'Enter Command' font by Font End Dev. A hootalex project.")
});

document.querySelector('#keyboardselect').addEventListener('click', event => {
  document.querySelector('#keyboardselect').classList.remove("glow");
});