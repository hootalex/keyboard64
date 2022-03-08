let Keyboard = window.SimpleKeyboard.default;

let board = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  theme: "hg-theme-default hg-theme-ios",
  newLineOnEnter: true,
  layout: {
    default: [
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "{shift} z x c v b n m {bksp}",
      "{alt} {space} {enter}"
    ],
    shift: [
      "Q W E R T Y U I O P",
      "A S D F G H J K L",
      "{shiftactivated} Z X C V B N M {bksp}",
      "{alt} {space} {enter}"
    ],
    alt: [
      "1 2 3 4 5 6 7 8 9 0",
      `- / : ; ( ) $ & @ "`,
      "{smiley} . , ? ! ' {bksp}",
      "{default} {space} {enter}"
    ],
    smiley: [
      "[ ] { } # % ^ * + =",
      `_ \\ | ~ < > € £ ¥ •`,
      "{alt} . , ? ! ' {bksp}",
      "{default} {space} {enter}"
    ]
  },
  display: {
    "{alt}": "123",
    "{smiley}": "#+=",
    "{shift}": "⇧",
    "{shiftactivated}": "⇧",
    "{enter}": "return",
    "{bksp}": "⌫",
    "{altright}": ".?123",
    "{downkeyboard}": "🞃",
    "{space}": " ",
    "{default}": "ABC",
    "{back}": "⇦"
  }
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", event => {
  board.setInput(event.target.value);
});

console.log(board);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
    if (button == "{space}") { 
      getKeyboard();
    keyboard.play("space")
  } else if (button == "{enter}") {
    keyboard.play("return") } else {
  
  clicksound(keyboard)
  }

  /**
   * Handle toggles
   */
  if (button.includes("{") && button.includes("}")) {
    handleLayoutChange(button);
  }
}

function handleLayoutChange(button) {
  let currentLayout = board.options.layoutName;
  let layoutName;

  switch (button) {
    case "{shift}":
    case "{shiftactivated}":
    case "{default}":
      layoutName = currentLayout === "default" ? "shift" : "default";
      break;

    case "{alt}":
    case "{altright}":
      layoutName = currentLayout === "alt" ? "default" : "alt";
      break;

    case "{smiley}":
      layoutName = currentLayout === "smiley" ? "default" : "smiley";
      break;

    default:
      break;
  }

  if (layoutName) {
    board.setOptions({
      layoutName: layoutName
    });
  }
}