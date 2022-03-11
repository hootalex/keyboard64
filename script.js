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

keypad.addEventListener("keydown", (evt) => {
    let keypressed = evt.key

    keyboard = window[document.getElementById("keyboardselect").value]

    if (keypressed == " ") {
        keyboard.play("space")
    } else if (keypressed == "Enter") {

        keyboard.play("return")
    } else {

        clicksound(keyboard)

    }
    console.log(keypressed)

  if (keypressed == " ") {
    keydown("{space}")
  } else if (keypressed == "Enter") {
    keydown("{enter}")
  } else if (keypressed == "Shift") {
    keydown("{shift}")
  } else if (keypressed == "Backspace") {
    keydown("{bksp}")
  } else {
    // keydown(keypressed);
    
if (document.querySelector(".hg-button-shiftactivated")) {
  keydown(keypressed.toUpperCase());
} else {
  keydown(keypressed.toLowerCase());
}
    
  }
  
  console.log(key)
  
});

function keydown(key) {
      document.querySelector('[data-skbtn="'+ key +'"]').classList.add("keybuttonpress")
    setTimeout(() => {
      document.querySelector('[data-skbtn="'+key+'"]').classList.remove("keybuttonpress")
    }, 100);

}

function clicksound(keyboard) {

    keyboard = window[document.getElementById("keyboardselect").value]

    key++
    key = key + randomInteger(0, 3)

    if (key >= 15) {
        key = 1
        keyboard.play("key" + key)
    } else {

        keyboard.play("key" + key)
    }

}

// utility for syncing buttons
// function clicksound(keyboard) {
//   Mitsumi.play("return")
// }

function loadanimation(placeholder) {
    let interval;
    let c = ""


    interval = setInterval(function() {
        c = c + "♪ ";
        keypad.setAttribute("data-text", c);
    }, randomInteger(5, 10));

    setTimeout(() => {
        clearInterval(interval);
        keypad.setAttribute("data-text", placeholder);
    }, 250);
    console.log(placeholder)

}

function focusKeypad() {

    if (window.matchMedia('screen and (max-width: 768px)').matches) {} else {

        keypad.focus();
        // keypad.select();
    }
}

function selectkeyboard() {
  document.querySelector('#keyboardselect').classList.remove("glow");
    document.querySelector('select').classList.add("selected");
      setTimeout(() => {
        document.querySelector('select').classList.remove("selected");
    }, 1000);
      keyboard = window[document.getElementById("keyboardselect").value]

    keyboard.play("space")
    keypad.innerText = ""
    board.clearInput();
    var e = document.getElementById("keyboardselect");
    var option = e.options[e.selectedIndex];
    var longinfo = option.getAttribute("long");
    loadanimation(longinfo)
    focusKeypad();
}

document.querySelector('h2').addEventListener('click', event => {
    drive.play();
    keypad.innerText = ""
    board.clearInput();
    loadanimation("♪ Sounds from real keyboards! ♪ Key clicks are sampled 14 times and played back randomly for a more authentic experience. Space and return recorded separately. 'Enter Command' font by Font End Dev. A hootalex project.")
});

// document.querySelector('#keyboardselect').addEventListener('click', event => {
//     document.querySelector('#keyboardselect').classList.remove("glow");
// });